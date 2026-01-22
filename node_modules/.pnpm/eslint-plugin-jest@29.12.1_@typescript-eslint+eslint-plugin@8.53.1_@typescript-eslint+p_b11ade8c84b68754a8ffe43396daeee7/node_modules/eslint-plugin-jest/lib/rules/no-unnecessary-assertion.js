"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = require("@typescript-eslint/utils");
var _utils2 = require("./utils");
const canBe = (firstArgumentType, flag) => {
  if (firstArgumentType.isUnion()) {
    return firstArgumentType.types.some(typ => typ.flags & flag);
  }
  return firstArgumentType.flags & flag;
};
var _default = exports.default = (0, _utils2.createRule)({
  name: __filename,
  meta: {
    docs: {
      description: 'Disallow unnecessary assertions based on types',
      requiresTypeChecking: true
    },
    messages: {
      unnecessaryAssertion: 'Unnecessary assertion, subject cannot be {{ thing }}',
      noStrictNullCheck: 'This rule requires the `strictNullChecks` compiler option to be turned on to function correctly.'
    },
    type: 'suggestion',
    schema: []
  },
  defaultOptions: [],
  create(context) {
    const services = _utils.ESLintUtils.getParserServices(context);
    const compilerOptions = services.program.getCompilerOptions();
    const isStrictNullChecks = compilerOptions.strictNullChecks || compilerOptions.strict && compilerOptions.strictNullChecks !== false;
    if (!isStrictNullChecks) {
      context.report({
        loc: {
          start: {
            column: 0,
            line: 0
          },
          end: {
            column: 0,
            line: 0
          }
        },
        messageId: 'noStrictNullCheck'
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const {
      TypeFlags
    } = require('typescript');
    return {
      CallExpression(node) {
        const jestFnCall = (0, _utils2.parseJestFnCall)(node, context);
        if (jestFnCall?.type !== 'expect' || jestFnCall.head.node.parent.type !== _utils.AST_NODE_TYPES.CallExpression) {
          return;
        }
        const matcherName = (0, _utils2.getAccessorValue)(jestFnCall.matcher);
        if (!['toBeNull', 'toBeDefined', 'toBeUndefined', 'toBeNaN'].includes(matcherName)) {
          return;
        }

        // todo: we should support resolving promise types
        if (jestFnCall.modifiers.some(nod => (0, _utils2.getAccessorValue)(nod) !== 'not')) {
          return;
        }
        const [argument] = jestFnCall.head.node.parent.arguments;
        let desiredType = TypeFlags.Any | TypeFlags.Unknown;

        // add in the appropriate type flag based on the matcher being used
        desiredType |= matcherName === 'toBeNaN' ? TypeFlags.NumberLike : matcherName === 'toBeNull' ? TypeFlags.Null : TypeFlags.Undefined;
        if (canBe(services.getTypeAtLocation(argument), desiredType)) {
          return;
        }
        context.report({
          messageId: 'unnecessaryAssertion',
          data: {
            thing: matcherName === 'toBeNaN' ? 'a number' : matcherName === 'toBeNull' ? 'null' : 'undefined'
          },
          node
        });
      }
    };
  }
});