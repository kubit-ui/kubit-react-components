import CJS_COMPAT_NODE_URL_3ym3gv1txoi from 'node:url';
import CJS_COMPAT_NODE_PATH_3ym3gv1txoi from 'node:path';
import CJS_COMPAT_NODE_MODULE_3ym3gv1txoi from "node:module";

var __filename = CJS_COMPAT_NODE_URL_3ym3gv1txoi.fileURLToPath(import.meta.url);
var __dirname = CJS_COMPAT_NODE_PATH_3ym3gv1txoi.dirname(__filename);
var require = CJS_COMPAT_NODE_MODULE_3ym3gv1txoi.createRequire(import.meta.url);

// ------------------------------------------------------------
// end of CJS compatibility banner, injected by Storybook's esbuild configuration
// ------------------------------------------------------------
import {
  any
} from "./chunk-WJUD5QGU.js";

// src/cli/detect.ts
async function detectPnp() {
  return !!any([".pnp.js", ".pnp.cjs"]);
}

export {
  detectPnp
};
