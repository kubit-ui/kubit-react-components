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
      description: 'Disallow using equality matchers on error types',
      requiresTypeChecking: true
    },
    messages: {
      equalError: 'Avoid using equality matchers to check errors'
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
        if (jestFnCall?.type !== 'expect' || jestFnCall.head.node.parent.type !== _utils.AST_NODE_TYPES.CallExpression || !['toEqual', 'toStrictEqual'].includes((0, _utils2.getAccessorValue)(jestFnCall.matcher))) {
          return;
        }
        const [argument] = jestFnCall.head.node.parent.arguments;
        if ((0, _utils2.isBuiltinSymbolLike)(services.program, services.getTypeAtLocation(argument), 'Error')) {
          context.report({
            messageId: 'equalError',
            node
          });
        }
      }
    };
  }
});