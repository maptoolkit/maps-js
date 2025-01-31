import { addProtocol as maplibreAddProtocol } from "maplibre-gl";
import { get32ByteChecksum } from "./utils";
import { config } from "./config";

type DataConnectorRequestParams = {
  query?: string;
  ids?: string;
};

maplibreAddProtocol("maptoolkit", (params, abortController) => {
  return new Promise((resolve) => {
    const maptoolkitUrl = new URL(params.url);
    const [service, account, name] = maptoolkitUrl.pathname.slice(2).split("/");
    let requestUrl;
    if (service === "style") {
      requestUrl = new URL(`/${account}/${name}.json`, config.stylesHost);
    } else if (service === "sprite") {
      const ratio = config.pixelRatio > 1 ? `@${config.pixelRatio}x` : "";
      const format = params.type === "json" ? "json" : "png";
      requestUrl = new URL(`/${account}${ratio}.${format}`, config.iconsHost);
    } else if (service === "dataconnector") {
      const ids = maptoolkitUrl.searchParams.get("ids");
      const query = maptoolkitUrl.searchParams.get("query");
      const url = new URL(config.dataconnectorHost);
      url.searchParams.set("api_key", config.apiKey);
      if (ids) {
        get32ByteChecksum(ids).then((cacheId) => {
          url.pathname = `/${account}/${name}/querycache`;
          fetch(url.toString(), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: cacheId, ids: JSON.stringify(ids.split(",")) }),
          })
            .then((response) => {
              if (response.status !== 200) {
                abortController.abort();
              } else {
                url.pathname = `/${account}/${name}.json`;
                url.searchParams.set("query", cacheId);
                fetch(url)
                  .then((r) => r.json())
                  .then((data) => resolve({ data }));
              }
            })
            .catch(() => abortController.abort());
        });
      } else if (query) {
        url.pathname = `/${account}/${name}/querycache`;
        fetch(url.toString(), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query }),
        })
          .then((response) => {
            if (response.status !== 200) {
              abortController.abort();
            } else {
              url.pathname = `/${account}/${name}.json`;
              url.searchParams.set("query", query);
              fetch(url.toString())
                .then((r) => r.json())
                .then((data) => resolve({ data }));
            }
          })
          .catch(() => abortController.abort());
      } else {
        url.pathname = `/${account}/${name}.json`;
        fetch(url.toString())
          .then((r) => r.json())
          .then((data) => resolve({ data }));
      }
    }
    if (requestUrl) {
      requestUrl.searchParams.set("api_key", config.apiKey);
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
