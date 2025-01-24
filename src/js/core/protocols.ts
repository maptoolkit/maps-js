import { addProtocol as maplibreAddProtocol } from "maplibre-gl";
import { get32ByteChecksum } from "./utils";
import { config } from "./config";

type DataConnectorRequestParams = {
  query?: string;
  ids?: string;
};

maplibreAddProtocol("maptoolkit", (params, abortController) => {
  const staticHost = "https://static.maptoolkit.net";
  const dataconnectorHost = "https://dataconnector.maptoolkit.net";
  return new Promise((resolve) => {
    const url = new URL(params.url);
    const [service, user, name] = url.pathname.slice(2).split("/");
    let requestUrl;
    if (service === "style") {
      requestUrl = `${staticHost}/styles/${user}/${name}.json`;
    } else if (service === "sprite") {
      requestUrl = `${staticHost}/sprites/${user}`;
    } else if (service === "dataconnector") {
      const ids = url.searchParams.get("ids");
      const query = url.searchParams.get("query");
      if (ids) {
        get32ByteChecksum(ids).then((cacheId) => {
          fetch(`${dataconnectorHost}/${user}/${name}/querycache?api_key=${config.apiKey}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: cacheId, ids: JSON.stringify(ids.split(",")) }),
          })
            .then((response) => {
              if (response.status !== 200) {
                abortController.abort();
              } else {
                fetch(`${dataconnectorHost}/${user}/${name}.json?api_key=${config.apiKey}&query=${cacheId}`)
                  .then((r) => r.json())
                  .then((data) => resolve({ data }));
              }
            })
            .catch(() => abortController.abort());
        });
      } else if (query) {
        fetch(`${dataconnectorHost}/${user}/${name}/querycache?api_key=${config.apiKey}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query }),
        })
          .then((response) => {
            if (response.status !== 200) {
              abortController.abort();
            } else {
              fetch(`${dataconnectorHost}/${user}/${name}.json?api_key=${config.apiKey}&query=${query}`)
                .then((r) => r.json())
                .then((data) => resolve({ data }));
            }
          })
          .catch(() => abortController.abort());
      } else {
        fetch(`${dataconnectorHost}/${user}/${name}.json?api_key=${config.apiKey}`)
          .then((r) => r.json())
          .then((data) => resolve({ data }));
      }
    }
    if (requestUrl) {
      fetch(requestUrl)
        .then((response) => (params.type === "json" ? response.json() : response.arrayBuffer()))
        .then((data) => {
          if (data) {
            resolve({ data });
          } else {
            abortController.abort();
          }
        })
        .catch(() => {
          abortController.abort();
        });
    }
  });
});
