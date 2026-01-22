import {
  __definePreview
} from "./_browser-chunks/chunk-HWOFIGZP.js";
import {
  entry_preview_exports,
  renderToCanvas
} from "./_browser-chunks/chunk-L3JF7GGZ.js";
import {
  entry_preview_argtypes_exports
} from "./_browser-chunks/chunk-DX2KEMQY.js";
import "./_browser-chunks/chunk-CMP5DLKH.js";
import "./_browser-chunks/chunk-DDIRQRCA.js";
import "./_browser-chunks/chunk-E4YOXNOQ.js";
import "./_browser-chunks/chunk-SL3VIQZ3.js";

// src/globals.ts
import { global } from "@storybook/global";
var { window: globalWindow } = global;
globalWindow && (globalWindow.STORYBOOK_ENV = "react");

// src/portable-stories.tsx
import * as React from "react";
import {
  composeConfigs,
  composeStories as originalComposeStories,
  composeStory as originalComposeStory,
  setProjectAnnotations as originalSetProjectAnnotations,
  setDefaultProjectAnnotations
} from "storybook/preview-api";
function setProjectAnnotations(projectAnnotations) {
  return setDefaultProjectAnnotations(INTERNAL_DEFAULT_PROJECT_ANNOTATIONS), originalSetProjectAnnotations(
    projectAnnotations
  );
}
var INTERNAL_DEFAULT_PROJECT_ANNOTATIONS = composeConfigs([
  entry_preview_exports,
  entry_preview_argtypes_exports,
  {
    /** @deprecated */
    renderToCanvas: async (renderContext, canvasElement) => {
      if (renderContext.storyContext.testingLibraryRender == null)
        return renderToCanvas(renderContext, canvasElement);
      let {
        storyContext: { context, unboundStoryFn: Story, testingLibraryRender: render }
      } = renderContext, { unmount } = render(React.createElement(Story, { ...context }), { container: context.canvasElement });
      return unmount;
    }
  }
]);
function composeStory(story, componentAnnotations, projectAnnotations, exportsName) {
  return originalComposeStory(
    story,
    componentAnnotations,
    projectAnnotations,
    globalThis.globalProjectAnnotations ?? INTERNAL_DEFAULT_PROJECT_ANNOTATIONS,
    exportsName
  );
}
function composeStories(csfExports, projectAnnotations) {
  return originalComposeStories(csfExports, projectAnnotations, composeStory);
}
export {
  INTERNAL_DEFAULT_PROJECT_ANNOTATIONS,
  __definePreview,
  composeStories,
  composeStory,
  setProjectAnnotations
};
