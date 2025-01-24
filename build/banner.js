import fs from "fs";

export default fs.readFileSync("build/vendor/maplibre-gl.js", "utf-8") +
  fs.readFileSync("build/vendor/raphael.js", "utf-8");
