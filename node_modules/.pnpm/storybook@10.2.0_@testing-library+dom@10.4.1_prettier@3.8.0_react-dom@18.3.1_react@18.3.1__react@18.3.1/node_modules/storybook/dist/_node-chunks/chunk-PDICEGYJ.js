import CJS_COMPAT_NODE_URL_3ym3gv1txoi from 'node:url';
import CJS_COMPAT_NODE_PATH_3ym3gv1txoi from 'node:path';
import CJS_COMPAT_NODE_MODULE_3ym3gv1txoi from "node:module";

var __filename = CJS_COMPAT_NODE_URL_3ym3gv1txoi.fileURLToPath(import.meta.url);
var __dirname = CJS_COMPAT_NODE_PATH_3ym3gv1txoi.dirname(__filename);
var require = CJS_COMPAT_NODE_MODULE_3ym3gv1txoi.createRequire(import.meta.url);

// ------------------------------------------------------------
// end of CJS compatibility banner, injected by Storybook's esbuild configuration
// ------------------------------------------------------------

// src/shared/constants/environments-support.ts
var BROWSER_TARGETS = [
  "chrome131",
  "edge134",
  "firefox136",
  "safari18.3",
  "ios18.3",
  "opera117"
], NODE_TARGET = "node20.19", SUPPORTED_FEATURES = {
  // React Native does not support class static blocks without a specific babel plugin
  "class-static-blocks": !1
};

export {
  BROWSER_TARGETS,
  NODE_TARGET,
  SUPPORTED_FEATURES
};
