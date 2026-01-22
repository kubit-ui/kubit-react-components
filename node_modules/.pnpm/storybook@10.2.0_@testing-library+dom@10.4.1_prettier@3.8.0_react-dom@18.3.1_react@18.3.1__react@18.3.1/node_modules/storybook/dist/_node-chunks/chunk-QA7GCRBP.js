import CJS_COMPAT_NODE_URL_3ym3gv1txoi from 'node:url';
import CJS_COMPAT_NODE_PATH_3ym3gv1txoi from 'node:path';
import CJS_COMPAT_NODE_MODULE_3ym3gv1txoi from "node:module";

var __filename = CJS_COMPAT_NODE_URL_3ym3gv1txoi.fileURLToPath(import.meta.url);
var __dirname = CJS_COMPAT_NODE_PATH_3ym3gv1txoi.dirname(__filename);
var require = CJS_COMPAT_NODE_MODULE_3ym3gv1txoi.createRequire(import.meta.url);

// ------------------------------------------------------------
// end of CJS compatibility banner, injected by Storybook's esbuild configuration
// ------------------------------------------------------------

// src/shared/utils/ecosystem-identifier.ts
var TEST_PACKAGES = [
  "*playwright*",
  "@playwright/*",
  "*vitest*",
  "@vitest/*",
  "jest",
  "cypress",
  "nightwatch",
  "webdriver",
  "@web/test-runner",
  "puppeteer",
  "karma",
  "jasmine",
  "chai",
  "@testing-library/*",
  "@ngneat/spectator",
  "wdio*",
  "msw",
  "miragejs",
  "sinon",
  "chromatic"
], STYLING_PACKAGES = [
  "postcss",
  "tailwindcss",
  "autoprefixer",
  "sass",
  "emotion",
  "@emotion/*",
  "less",
  "styled-components",
  "bootstrap",
  "goober",
  "stylus",
  "jss",
  "linaria",
  "bulma",
  "aphrodite",
  "semantic-ui",
  "foundation-sites",
  "fela"
], STATE_MANAGEMENT_PACKAGES = [
  "*redux*",
  "@reduxjs/*",
  "zustand",
  "jotai",
  "recoil",
  "mobx*",
  "valtio",
  "xstate",
  "@xstate/*",
  "effector",
  "effector-react",
  "easy-peasy"
], DATA_FETCHING_PACKAGES = [
  "axios",
  "@tanstack/react-query",
  "superagent",
  "swr",
  "isomorphic-fetch",
  "*graphql*",
  "ky",
  "@apollo/*",
  "relay-runtime",
  "react-query",
  "urql",
  "react-relay"
], UI_LIBRARY_PACKAGES = [
  "@mui/*",
  "@headlessui/*",
  "antd",
  "radix-ui",
  "@radix-ui/*",
  "react-bootstrap",
  "@mantine/*",
  "@chakra-ui/*",
  "shadcn",
  "@blueprintjs/*",
  "semantic-ui-react",
  "primereact",
  "@fluentui/*",
  "rsuite",
  "react-aria*",
  "@react-aria/*",
  "@heroui/*",
  "@carbon/*",
  "theme-ui",
  "rebass"
], I18N_PACKAGES = ["*i18n*", "*intl", "@lingui/*"], ROUTER_PACKAGES = [
  "react-router",
  "react-router-dom",
  "react-easy-router",
  "@remix-run/router",
  "expo-router",
  "@tanstack/*-router",
  "wouter",
  "@reach/router"
];
function globToRegex(pattern) {
  let regexPattern = pattern.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
  return new RegExp(`^${regexPattern}$`);
}
function matchesPackagePattern(dependencyName, patterns) {
  return patterns.some((pattern) => globToRegex(pattern).test(dependencyName));
}
function isStateManagementPackage(dependencyName) {
  return matchesPackagePattern(dependencyName, STATE_MANAGEMENT_PACKAGES);
}
function isStylingPackage(dependencyName) {
  return matchesPackagePattern(dependencyName, STYLING_PACKAGES);
}
function isRouterPackage(dependencyName) {
  return matchesPackagePattern(dependencyName, ROUTER_PACKAGES);
}
function isI18nPackage(dependencyName) {
  return matchesPackagePattern(dependencyName, I18N_PACKAGES);
}

export {
  TEST_PACKAGES,
  STYLING_PACKAGES,
  STATE_MANAGEMENT_PACKAGES,
  DATA_FETCHING_PACKAGES,
  UI_LIBRARY_PACKAGES,
  I18N_PACKAGES,
  ROUTER_PACKAGES,
  matchesPackagePattern,
  isStateManagementPackage,
  isStylingPackage,
  isRouterPackage,
  isI18nPackage
};
