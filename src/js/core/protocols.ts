import { addProtocol as maplibreAddProtocol } from "maplibre-gl";
import { config } from "./config";

maplibreAddProtocol("maptoolkit", (params, abortController) => {
  return new Promise((resolve) => {
    const path = params.url.slice(13).split("?")[0].split("/");
    const searchParams = new URLSearchParams(params.url.split("#")[0].split("?")[1]);

    let requestUrl: URL | null = null;
    const [service, account, name] = path;

    if (service === "connector") {
      requestUrl = new URL(path.slice(1).join("/"), config.dataconnectorCdnHost);
    } else if (service === "styles") {
      requestUrl = new URL(`/${account}/${name}.json`, config.stylesHost);
    } else if (service === "icons") {
      const ratio = config.pixelRatio > 1 ? `@${Math.min(Math.ceil(config.pixelRatio), 4)}x` : "";
      const format = params.type === "json" ? "json" : "png";
      requestUrl = new URL(`/${account.replace(/(@\dx)?\.(json|png)$/, "")}${ratio}.${format}`, config.iconsHost);
    } else if (service === "fonts") {
      requestUrl = new URL(`/fonts/${path.slice(2).join("/")}`, config.staticHost);
    } else if (service === "vtc" || service === "rtc") {
      if (params.type === "json") {
        requestUrl = new URL(`/${path.slice(1).join("/")}.json`, config[`${service}CdnHost`]);
      } else {
        requestUrl = new URL(`/${path.slice(1).join("/")}`, config[`${service}CdnHost`]);
      }
    } else if (service === "data") {
      requestUrl = new URL(`/${account}/${name}.json`, config.dataHost);
    }

    if (requestUrl) {
      searchParams.forEach((value, key) => {
        requestUrl?.searchParams.set(key, value);
      });
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
