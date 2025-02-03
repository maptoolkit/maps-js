import { addProtocol as maplibreAddProtocol } from "maplibre-gl";
import { config } from "./config";

maplibreAddProtocol("maptoolkit", (params, abortController) => {
  return new Promise((resolve) => {
    const maptoolkitUrl = new URL(params.url);
    const [service, account, name] = maptoolkitUrl.pathname.slice(2).split("/");
    let requestUrl: URL | null = null;
    if (service === "style") {
      requestUrl = new URL(`/${account}/${name}.json`, config.stylesHost);
    } else if (service === "sprite") {
      const ratio = config.pixelRatio > 1 ? `@${config.pixelRatio}x` : "";
      const format = params.type === "json" ? "json" : "png";
      requestUrl = new URL(`/${account}${ratio}.${format}`, config.iconsHost);
    } else if (service === "dataconnector") {
      requestUrl = new URL(`/${account}/${name}.json`, config.dataconnectorHost);
      maptoolkitUrl.searchParams.forEach((value, key) => {
        requestUrl?.searchParams.set(key, value);
      });
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
