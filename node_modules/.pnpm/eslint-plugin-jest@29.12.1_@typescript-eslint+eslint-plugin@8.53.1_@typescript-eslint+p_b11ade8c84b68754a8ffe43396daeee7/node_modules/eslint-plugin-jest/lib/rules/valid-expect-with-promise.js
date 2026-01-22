"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = require("@typescript-eslint/utils");
var _utils2 = require("./utils");
var _default = exports.default = (0, _utils2.createRule)({
  name: __filename,
  meta: {
    docs: {
      description: 'Require that `resolve` and `reject` modifiers are present (and only) for promise-like types',
      requiresTypeChecking: true
    },
    messages: {
      poorlyExpectedPromise: 'Subject is a promise so resolve or reject should be used',
      unneededRejectResolve: 'Subject is not a promise so {{ modifier }} is not needed'
    },
    type: 'suggestion',
    schema: []
  },
  defaultOptions: [],
  create(context) {
    const services = _utils.ESLintUtils.getParserServices(context);
    return {
      CallExpression(node) {
        const jestFnCall = (0, _utils2.parseJestFnCall)(node, context);
        if (jestFnCall?.type !== 'expect' || jestFnCall.head.node.parent.type !== _utils.AST_NODE_TYPES.CallExpression) {
          return;
        }
        const [argument] = jestFnCall.head.node.parent.arguments;
        const isPromiseLike = (0, _utils2.isBuiltinSymbolLike)(services.program, services.getTypeAtLocation(argument), 'Promise');
        const promiseModifier = jestFnCall.modifiers.find(nod => (0, _utils2.getAccessorValue)(nod) !== 'not');
        if (isPromiseLike && !promiseModifier) {
          context.report({
            messageId: 'poorlyExpectedPromise',
            node
          });
          return;
        }
        if (!isPromiseLike && promiseModifier) {
          context.report({
            messageId: 'unneededRejectResolve',
            data: {
              modifier: (0, _utils2.getAccessorValue)(promiseModifier)
            },
            node: promiseModifier
          });
        }
      }
    };
  }
});