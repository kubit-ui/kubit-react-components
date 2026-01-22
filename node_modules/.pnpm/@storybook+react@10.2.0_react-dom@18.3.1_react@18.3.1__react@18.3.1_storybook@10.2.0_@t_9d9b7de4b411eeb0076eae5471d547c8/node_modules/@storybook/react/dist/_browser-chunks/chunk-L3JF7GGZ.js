import {
  applyDecorators
} from "./chunk-DDIRQRCA.js";
import {
  __export
} from "./chunk-SL3VIQZ3.js";

// src/entry-preview.tsx
var entry_preview_exports = {};
__export(entry_preview_exports, {
  applyDecorators: () => applyDecorators,
  beforeAll: () => beforeAll,
  decorators: () => decorators,
  mount: () => mount,
  parameters: () => parameters,
  render: () => render,
  renderToCanvas: () => renderToCanvas
});
import * as React4 from "react";
import { Tag } from "storybook/internal/preview-api";
import { global as global2 } from "@storybook/global";
import { configure } from "storybook/test";

// src/act-compat.ts
import * as React from "react";
var clonedReact = { ...React };
function setReactActEnvironment(isReactActEnvironment) {
  globalThis.IS_REACT_ACT_ENVIRONMENT = isReactActEnvironment;
}
function getReactActEnvironment() {
  return globalThis.IS_REACT_ACT_ENVIRONMENT;
}
function withGlobalActEnvironment(actImplementation) {
  return (callback) => {
    let previousActEnvironment = getReactActEnvironment();
    setReactActEnvironment(!0);
    try {
      let callbackNeedsToBeAwaited = !1, actResult = actImplementation(() => {
        let result = callback();
        return result !== null && typeof result == "object" && typeof result.then == "function" && (callbackNeedsToBeAwaited = !0), result;
      });
      if (callbackNeedsToBeAwaited) {
        let thenable = actResult;
        return {
          then: (resolve, reject) => {
            thenable.then(
              (returnValue) => {
                setReactActEnvironment(previousActEnvironment), resolve(returnValue);
              },
              (error) => {
                setReactActEnvironment(previousActEnvironment), reject(error);
              }
            );
          }
        };
      } else
        return setReactActEnvironment(previousActEnvironment), actResult;
    } catch (error) {
      throw setReactActEnvironment(previousActEnvironment), error;
    }
  };
}
var getAct = async ({ disableAct = !1 } = {}) => {
  if (process.env.NODE_ENV === "production" || disableAct)
    return (cb) => cb();
  let reactAct;
  if (typeof clonedReact.act == "function")
    reactAct = clonedReact.act;
  else {
    let deprecatedTestUtils = await import("react-dom/test-utils");
    reactAct = deprecatedTestUtils?.default?.act ?? deprecatedTestUtils.act;
  }
  return withGlobalActEnvironment(reactAct);
};

// src/render.tsx
import React2 from "react";
var render = (args, context) => {
  let { id, component: Component } = context;
  if (!Component)
    throw new Error(
      `Unable to render story ${id} as the component annotation is missing from the default export`
    );
  return React2.createElement(Component, { ...args });
};

// src/renderToCanvas.tsx
import React3, { Fragment, Component as ReactComponent, StrictMode } from "react";
import { global } from "@storybook/global";
var { FRAMEWORK_OPTIONS } = global, ErrorBoundary = class extends ReactComponent {
  constructor() {
    super(...arguments);
    this.state = { hasError: !1 };
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidMount() {
    let { hasError } = this.state, { showMain } = this.props;
    hasError || showMain();
  }
  componentDidCatch(err) {
    let { showException } = this.props;
    showException(err);
  }
  render() {
    let { hasError } = this.state, { children } = this.props;
    return hasError ? null : children;
  }
}, Wrapper = FRAMEWORK_OPTIONS?.strictMode ? StrictMode : Fragment, actQueue = [], isActing = !1, processActQueue = async () => {
  if (isActing || actQueue.length === 0)
    return;
  isActing = !0;
  let actTask = actQueue.shift();
  actTask && await actTask(), isActing = !1, processActQueue();
};
async function renderToCanvas({
  storyContext,
  unboundStoryFn,
  showMain,
  showException,
  forceRemount
}, canvasElement) {
  let { renderElement, unmountElement } = await import("@storybook/react-dom-shim"), Story = unboundStoryFn, content = storyContext.parameters.__isPortableStory ? React3.createElement(Story, { ...storyContext }) : React3.createElement(ErrorBoundary, { key: storyContext.id, showMain, showException }, React3.createElement(Story, { ...storyContext })), element = Wrapper ? React3.createElement(Wrapper, null, content) : content;
  forceRemount && unmountElement(canvasElement);
  let act = await getAct({ disableAct: storyContext.viewMode === "docs" });
  return await new Promise(async (resolve, reject) => {
    actQueue.push(async () => {
      try {
        await act(async () => {
          await renderElement(element, canvasElement, storyContext?.parameters?.react?.rootOptions);
        }), resolve();
      } catch (e) {
        reject(e);
      }
    }), processActQueue();
  }), async () => {
    await act(() => {
      unmountElement(canvasElement);
    });
  };
}

// src/mount.ts
var mount = (context) => async (ui) => (ui != null && (context.originalStoryFn = () => ui), await context.renderToCanvas(), context.canvas);

// src/entry-preview.tsx
var decorators = [
  (story, context) => {
    if (!context.parameters?.react?.rsc)
      return story();
    let [major, minor] = React4.version.split(".").map((part) => parseInt(part, 10));
    if (!Number.isInteger(major) || !Number.isInteger(minor))
      throw new Error("Unable to parse React version");
    if (major < 18 || major === 18 && minor < 3)
      throw new Error("React Server Components require React >= 18.3");
    return React4.createElement(React4.Suspense, null, story());
  },
  (story, context) => {
    if (context.tags?.includes(Tag.TEST_FN) && !global2.FEATURES?.experimentalTestSyntax)
      throw new Error(
        "To use the experimental test function, you must enable the experimentalTestSyntax feature flag. See https://storybook.js.org/docs/api/main-config/main-config-features#experimentaltestsyntax"
      );
    return story();
  }
], parameters = {
  renderer: "react"
}, beforeAll = async () => {
  try {
    let act = await getAct();
    configure({
      unstable_advanceTimersWrapper: (cb) => act(cb),
      // For more context about why we need disable act warnings in waitFor:
      // https://github.com/reactwg/react-18/discussions/102
      asyncWrapper: async (cb) => {
        let previousActEnvironment = getReactActEnvironment();
        setReactActEnvironment(!1);
        try {
          let result = await cb();
          return await new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, 0), jestFakeTimersAreEnabled() && jest.advanceTimersByTime(0);
          }), result;
        } finally {
          setReactActEnvironment(previousActEnvironment);
        }
      },
      eventWrapper: (cb) => {
        let result;
        return act(() => (result = cb(), result)), result;
      }
    });
  } catch {
  }
};
function jestFakeTimersAreEnabled() {
  return typeof jest < "u" && jest !== null ? (
    // legacy timers
    setTimeout._isMockFunction === !0 || // modern timers
    Object.prototype.hasOwnProperty.call(setTimeout, "clock")
  ) : !1;
}

export {
  render,
  renderToCanvas,
  mount,
  decorators,
  parameters,
  beforeAll,
  entry_preview_exports
};
