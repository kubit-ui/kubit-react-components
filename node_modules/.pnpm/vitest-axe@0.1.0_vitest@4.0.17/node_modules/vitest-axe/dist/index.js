import {
  isHTMLElement,
  isHTMLString
} from "./chunk-X4FZIUYL.js";

// src/axe.ts
import { merge } from "lodash-es";
import { createRequire } from "module";
var require2 = createRequire(import.meta.url);
var axeCore = require2("axe-core");
var { configure, run } = axeCore;
function mount(html) {
  if (isHTMLElement(html)) {
    if (document.body.contains(html)) {
      return [html, () => void 0];
    }
    html = html.outerHTML;
  }
  if (isHTMLString(html)) {
    let restore2 = function() {
      document.body.innerHTML = originalHTML;
    };
    var restore = restore2;
    let originalHTML = document.body.innerHTML;
    document.body.innerHTML = html;
    return [document.body, restore2];
  }
  if (typeof html === "string") {
    throw new Error(`html parameter ("${html}") has no elements`);
  }
  throw new Error(`html parameter should be an HTML string or an HTML element`);
}
function configureAxe(options = {}) {
  let { globalOptions = {}, ...runnerOptions } = options;
  configure(globalOptions);
  return function axe2(html, additionalOptions = {}) {
    let [element, restore] = mount(html);
    let options2 = merge({}, runnerOptions, additionalOptions);
    return new Promise((resolve) => {
      run(element, options2, (err, results) => {
        restore();
        if (err)
          throw err;
        resolve(results);
      });
    });
  };
}
var axe = configureAxe();
export {
  axe,
  configureAxe
};
