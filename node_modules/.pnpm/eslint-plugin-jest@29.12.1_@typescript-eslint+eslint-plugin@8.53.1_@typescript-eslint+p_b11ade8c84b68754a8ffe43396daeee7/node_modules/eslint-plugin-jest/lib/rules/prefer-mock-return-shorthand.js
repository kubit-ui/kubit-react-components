"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = require("@typescript-eslint/utils");
var _utils2 = require("./utils");
const withOnce = (name, addOnce) => {
  return `${name}${addOnce ? 'Once' : ''}`;
};
const findSingleReturnArgumentNode = fnNode => {
  if (fnNode.body.type !== _utils.AST_NODE_TYPES.BlockStatement) {
    return fnNode.body;
  }
  if (fnNode.body.body[0]?.type === _utils.AST_NODE_TYPES.ReturnStatement) {
    return fnNode.body.body[0].argument;
  }
  return null;
};
var _default = exports.default = (0, _utils2.createRule)({
  name: __filename,
  meta: {
    docs: {
      description: 'Prefer mock return shorthands'
    },
    messages: {
      useMockShorthand: 'Prefer {{ replacement }}'
    },
    schema: [],
    type: 'suggestion',
    fixable: 'code'
  },
  defaultOptions: [],
  create(context) {
    const isMutable = identifier => {
      const scope = context.sourceCode.getScope(identifier);
      return scope.through.some(v => v.resolved?.defs.some(n => n.type === 'Variable' && n.parent.kind !== 'const'));
    };
    const usesMutableIdentifier = node => {
      switch (node.type) {
        case _utils.AST_NODE_TYPES.Identifier:
          return isMutable(node);
        case _utils.AST_NODE_TYPES.ObjectExpression:
          return node.properties.some(prop => usesMutableIdentifier(prop));
        case _utils.AST_NODE_TYPES.Property:
          if (node.computed && usesMutableIdentifier(node.key)) {
            return true;
          }
          return usesMutableIdentifier(node.value);
        case _utils.AST_NODE_TYPES.ArrayExpression:
          return node.elements.some(el => el && usesMutableIdentifier(el));
        case _utils.AST_NODE_TYPES.ChainExpression:
          return usesMutableIdentifier(node.expression);
        case _utils.AST_NODE_TYPES.SpreadElement:
        case _utils.AST_NODE_TYPES.UnaryExpression:
          return usesMutableIdentifier(node.argument);
        case _utils.AST_NODE_TYPES.LogicalExpression:
        case _utils.AST_NODE_TYPES.BinaryExpression:
          return usesMutableIdentifier(node.left) || usesMutableIdentifier(node.right);
        case _utils.AST_NODE_TYPES.MemberExpression:
          if (node.computed && usesMutableIdentifier(node.property)) {
            return true;
          }
          return node.object.type === _utils.AST_NODE_TYPES.CallExpression && usesMutableIdentifier(node.object);
        case _utils.AST_NODE_TYPES.ConditionalExpression:
          return usesMutableIdentifier(node.test) || usesMutableIdentifier(node.alternate) || usesMutableIdentifier(node.consequent);
        case _utils.AST_NODE_TYPES.NewExpression:
        case _utils.AST_NODE_TYPES.CallExpression:
          return usesMutableIdentifier(node.callee) || node.arguments.some(arg => usesMutableIdentifier(arg));
      }

      // currently we assume a mutable identifier is not being used
      // unless we can find one specifically, which is technically
      // not safe but so far it has not seemed to cause issues.
      //
      // if it proves to be too troublesome, we should consider
      // inverting this so we only report when we're completely
      // sure it is safe
      return false;
    };
    return {
      CallExpression(node) {
        if (node.callee.type !== _utils.AST_NODE_TYPES.MemberExpression || !(0, _utils2.isSupportedAccessor)(node.callee.property) || node.arguments.length === 0) {
          return;
        }
        const {
          property
        } = node.callee;
        const mockFnName = (0, _utils2.getAccessorValue)(property);
        const isOnce = mockFnName.endsWith('Once');
        if (mockFnName !== withOnce('mockImplementation', isOnce)) {
          return;
        }
        const [arg] = node.arguments;
        if (!(0, _utils2.isFunction)(arg) || arg.params.length !== 0 || arg.async) {
          return;
        }
        const replacement = withOnce('mockReturnValue', isOnce);
        const returnNode = findSingleReturnArgumentNode(arg);
        if (!returnNode || returnNode.type === _utils.AST_NODE_TYPES.UpdateExpression) {
          return;
        }

        // check if we're using a non-constant variable
        if (usesMutableIdentifier(returnNode)) {
          return;
        }
        context.report({
          node: property,
          messageId: 'useMockShorthand',
          data: {
            replacement
          },
          fix(fixer) {
            return [fixer.replaceText(property, replacement), fixer.replaceText(arg, context.sourceCode.getText(returnNode))];
          }
        });
      }
    };
  }
});