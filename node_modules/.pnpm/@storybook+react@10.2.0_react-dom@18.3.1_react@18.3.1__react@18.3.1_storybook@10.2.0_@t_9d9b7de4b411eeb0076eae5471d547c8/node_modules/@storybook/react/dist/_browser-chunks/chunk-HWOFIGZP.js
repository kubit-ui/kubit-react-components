import {
  entry_preview_exports
} from "./chunk-L3JF7GGZ.js";
import {
  entry_preview_argtypes_exports
} from "./chunk-DX2KEMQY.js";
import {
  entry_preview_docs_exports
} from "./chunk-CMP5DLKH.js";

// src/preview.tsx
import { definePreview as definePreviewBase } from "storybook/internal/csf";
function __definePreview(input) {
  let preview = definePreviewBase({
    ...input,
    addons: [
      entry_preview_exports,
      entry_preview_argtypes_exports,
      entry_preview_docs_exports,
      ...input.addons ?? []
    ]
  }), defineMeta = preview.meta.bind(preview);
  return preview.meta = (_input) => {
    let meta = defineMeta(_input), defineStory = meta.story.bind(meta);
    return meta.story = (__input) => {
      let story = defineStory(__input);
      return story.Component = story.__compose(), story;
    }, meta;
  }, preview;
}

export {
  __definePreview
};
