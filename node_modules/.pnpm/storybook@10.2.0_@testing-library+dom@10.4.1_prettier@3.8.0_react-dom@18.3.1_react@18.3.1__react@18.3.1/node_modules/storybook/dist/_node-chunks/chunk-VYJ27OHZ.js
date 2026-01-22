import CJS_COMPAT_NODE_URL_3ym3gv1txoi from 'node:url';
import CJS_COMPAT_NODE_PATH_3ym3gv1txoi from 'node:path';
import CJS_COMPAT_NODE_MODULE_3ym3gv1txoi from "node:module";

var __filename = CJS_COMPAT_NODE_URL_3ym3gv1txoi.fileURLToPath(import.meta.url);
var __dirname = CJS_COMPAT_NODE_PATH_3ym3gv1txoi.dirname(__filename);
var require = CJS_COMPAT_NODE_MODULE_3ym3gv1txoi.createRequire(import.meta.url);

// ------------------------------------------------------------
// end of CJS compatibility banner, injected by Storybook's esbuild configuration
// ------------------------------------------------------------
import {
  require_dist
} from "./chunk-4QVBTE7M.js";
import {
  __toESM
} from "./chunk-P4K3OTNT.js";

// src/csf-tools/CsfFile.ts
var import_ts_dedent = __toESM(require_dist(), 1);
import { readFile, writeFile } from "node:fs/promises";
import {
  BabelFileClass,
  babelParse,
  generate,
  recast,
  types as t2,
  traverse
} from "storybook/internal/babel";
import { isExportStory, storyNameFromExport, toId, toTestId } from "storybook/internal/csf";
import { logger } from "storybook/internal/node-logger";

// src/shared/constants/tags.ts
var Tag = {
  /** Indicates that autodocs should be generated for this component */
  AUTODOCS: "autodocs",
  /** MDX documentation attached to a component's stories file */
  ATTACHED_MDX: "attached-mdx",
  /** Standalone MDX documentation not attached to stories */
  UNATTACHED_MDX: "unattached-mdx",
  /** Story has a play function */
  PLAY_FN: "play-fn",
  /** Story has a test function */
  TEST_FN: "test-fn",
  /** Development environment tag */
  DEV: "dev",
  /** Test environment tag */
  TEST: "test",
  /** Manifest generation tag */
  MANIFEST: "manifest"
};

// src/csf-tools/findVarInitialization.ts
import { types as t } from "storybook/internal/babel";
var findVarInitialization = (identifier, program) => {
  let init = null, declarations = null;
  return program.body.find((node) => (t.isVariableDeclaration(node) ? declarations = node.declarations : t.isExportNamedDeclaration(node) && t.isVariableDeclaration(node.declaration) && (declarations = node.declaration.declarations), declarations && declarations.find((decl) => t.isVariableDeclarator(decl) && t.isIdentifier(decl.id) && decl.id.name === identifier ? (init = decl.init, !0) : !1))), init;
};

// src/csf-tools/CsfFile.ts
var PREVIEW_FILE_REGEX = /\/preview(.(js|jsx|mjs|ts|tsx))?$/, isValidPreviewPath = (filepath) => PREVIEW_FILE_REGEX.test(filepath);
function parseIncludeExclude(prop) {
  if (t2.isArrayExpression(prop))
    return prop.elements.map((e) => {
      if (t2.isStringLiteral(e))
        return e.value;
      throw new Error(`Expected string literal: ${e}`);
    });
  if (t2.isStringLiteral(prop))
    return new RegExp(prop.value);
  if (t2.isRegExpLiteral(prop))
    return new RegExp(prop.pattern, prop.flags);
  throw new Error(`Unknown include/exclude: ${prop}`);
}
function parseTags(prop) {
  if (!t2.isArrayExpression(prop))
    throw new Error("CSF: Expected tags array");
  return prop.elements.map((e) => {
    if (t2.isStringLiteral(e))
      return e.value;
    throw new Error("CSF: Expected tag to be string literal");
  });
}
function parseTestTags(optionsNode, program) {
  if (!optionsNode)
    return [];
  let node = optionsNode;
  if (t2.isIdentifier(node) && (node = findVarInitialization(node.name, program)), t2.isObjectExpression(node)) {
    let tagsProp = node.properties.find(
      (property) => t2.isObjectProperty(property) && t2.isIdentifier(property.key) && property.key.name === "tags"
    );
    if (tagsProp) {
      let tagsNode = tagsProp.value;
      return t2.isIdentifier(tagsNode) && (tagsNode = findVarInitialization(tagsNode.name, program)), parseTags(tagsNode);
    }
  }
  return [];
}
var formatLocation = (node, fileName) => {
  let loc = "";
  if (node.loc) {
    let { line, column } = node.loc?.start || {};
    loc = `(line ${line}, col ${column})`;
  }
  return `${fileName || ""} ${loc}`.trim();
}, isModuleMock = (importPath) => MODULE_MOCK_REGEX.test(importPath), isArgsStory = (init, parent, csf) => {
  let storyFn = init;
  if (t2.isCallExpression(init)) {
    let { callee, arguments: bindArguments } = init;
    if (t2.isProgram(parent) && t2.isMemberExpression(callee) && t2.isIdentifier(callee.object) && t2.isIdentifier(callee.property) && callee.property.name === "bind" && (bindArguments.length === 0 || bindArguments.length === 1 && t2.isObjectExpression(bindArguments[0]) && bindArguments[0].properties.length === 0)) {
      let boundIdentifier = callee.object.name, template = findVarInitialization(boundIdentifier, parent);
      template && (csf._templates[boundIdentifier] = template, storyFn = template);
    }
  }
  return t2.isArrowFunctionExpression(storyFn) || t2.isFunctionDeclaration(storyFn) ? storyFn.params.length > 0 : !1;
}, parseExportsOrder = (init) => {
  if (t2.isArrayExpression(init))
    return init.elements.map((item) => {
      if (t2.isStringLiteral(item))
        return item.value;
      throw new Error(`Expected string literal named export: ${item}`);
    });
  throw new Error(`Expected array of string literals: ${init}`);
}, sortExports = (exportByName, order) => order.reduce(
  (acc, name) => {
    let namedExport = exportByName[name];
    return namedExport && (acc[name] = namedExport), acc;
  },
  {}
), hasMount = (play) => {
  if (t2.isArrowFunctionExpression(play) || t2.isFunctionDeclaration(play) || t2.isObjectMethod(play)) {
    let params = play.params;
    if (params.length >= 1) {
      let [arg] = params;
      if (t2.isObjectPattern(arg))
        return !!arg.properties.find((prop) => {
          if (t2.isObjectProperty(prop) && t2.isIdentifier(prop.key))
            return prop.key.name === "mount";
        });
    }
  }
  return !1;
}, MODULE_MOCK_REGEX = /^[.\/#].*\.mock($|\.[^.]*$)/i, NoMetaError = class extends Error {
  constructor(message, ast, fileName) {
    let msg = message.trim();
    super(import_ts_dedent.dedent`
      CSF: ${msg} ${formatLocation(ast, fileName)}
      
      More info: https://storybook.js.org/docs/writing-stories?ref=error#default-export
    `), this.name = this.constructor.name;
  }
}, MultipleMetaError = class extends Error {
  constructor(message, ast, fileName) {
    let msg = `${message} ${formatLocation(ast, fileName)}`.trim();
    super(import_ts_dedent.dedent`
      CSF: ${message} ${formatLocation(ast, fileName)}
      
      More info: https://storybook.js.org/docs/writing-stories?ref=error#default-export
    `), this.name = this.constructor.name;
  }
}, MixedFactoryError = class extends Error {
  constructor(message, ast, fileName) {
    let msg = `${message} ${formatLocation(ast, fileName)}`.trim();
    super(import_ts_dedent.dedent`
      CSF: ${message} ${formatLocation(ast, fileName)}
      
      More info: https://storybook.js.org/docs/writing-stories?ref=error#default-export
    `), this.name = this.constructor.name;
  }
}, BadMetaError = class extends Error {
  constructor(message, ast, fileName) {
    let msg = "".trim();
    super(import_ts_dedent.dedent`
      CSF: ${message} ${formatLocation(ast, fileName)}
      
      More info: https://storybook.js.org/docs/writing-stories?ref=error#default-export
    `), this.name = this.constructor.name;
  }
}, CsfFile = class {
  constructor(ast, options, file) {
    this._stories = {};
    this._metaAnnotations = {};
    this._storyExports = {};
    this._storyDeclarationPath = {};
    this._storyPaths = {};
    this._storyStatements = {};
    this._storyAnnotations = {};
    this._templates = {};
    this._tests = [];
    this._ast = ast, this._file = file, this._options = options, this.imports = [];
  }
  _parseTitle(value) {
    let node = t2.isIdentifier(value) ? findVarInitialization(value.name, this._ast.program) : value;
    if (t2.isStringLiteral(node))
      return node.value;
    if (t2.isTSSatisfiesExpression(node) && t2.isStringLiteral(node.expression))
      return node.expression.value;
    throw new Error(import_ts_dedent.dedent`
      CSF: unexpected dynamic title ${formatLocation(node, this._options.fileName)}

      More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#string-literal-titles
    `);
  }
  _parseMeta(declaration, program) {
    if (this._metaNode)
      throw new MultipleMetaError("multiple meta objects", declaration, this._options.fileName);
    this._metaNode = declaration;
    let meta = {};
    declaration.properties.forEach((p) => {
      if (t2.isIdentifier(p.key)) {
        let value = t2.isObjectMethod(p) ? p : p.value;
        if (this._metaAnnotations[p.key.name] = value, p.key.name === "title")
          meta.title = this._parseTitle(p.value);
        else if (["includeStories", "excludeStories"].includes(p.key.name))
          meta[p.key.name] = parseIncludeExclude(p.value);
        else if (p.key.name === "component") {
          let n = p.value;
          if (t2.isIdentifier(n)) {
            let id = n.name, importStmt = program.body.find(
              (stmt) => t2.isImportDeclaration(stmt) && stmt.specifiers.find((spec) => spec.local.name === id)
            );
            if (importStmt) {
              let { source } = importStmt, specifier = importStmt.specifiers.find((spec) => spec.local.name === id);
              t2.isStringLiteral(source) && specifier && (this._rawComponentPath = source.value, (t2.isImportSpecifier(specifier) || t2.isImportDefaultSpecifier(specifier)) && (this._componentImportSpecifier = specifier));
            }
          }
          let { code } = recast.print(p.value, {});
          meta.component = code;
        } else if (p.key.name === "tags") {
          let node = p.value;
          t2.isIdentifier(node) && (node = findVarInitialization(node.name, this._ast.program)), meta.tags = parseTags(node);
        } else if (p.key.name === "id")
          if (t2.isStringLiteral(p.value))
            meta.id = p.value.value;
          else
            throw new Error(`Unexpected component id: ${p.value}`);
      }
    }), this._meta = meta;
  }
  getStoryExport(key) {
    let node = this._storyExports[key];
    if (node = t2.isVariableDeclarator(node) ? node.init : node, t2.isCallExpression(node)) {
      let { callee, arguments: bindArguments } = node;
      if (t2.isMemberExpression(callee) && t2.isIdentifier(callee.object) && t2.isIdentifier(callee.property) && callee.property.name === "bind" && (bindArguments.length === 0 || bindArguments.length === 1 && t2.isObjectExpression(bindArguments[0]) && bindArguments[0].properties.length === 0)) {
        let { name } = callee.object;
        node = this._templates[name];
      }
    }
    return node;
  }
  parse() {
    let self = this;
    if (traverse(this._ast, {
      ExportDefaultDeclaration: {
        enter(path2) {
          let { node, parent } = path2, isVariableReference = t2.isIdentifier(node.declaration) && t2.isProgram(parent);
          if (self._options.transformInlineMeta && !isVariableReference && t2.isExpression(node.declaration)) {
            let metaId = path2.scope.generateUidIdentifier("meta");
            self._metaVariableName = metaId.name;
            let nodes = [
              t2.variableDeclaration("const", [t2.variableDeclarator(metaId, node.declaration)]),
              t2.exportDefaultDeclaration(metaId)
            ];
            nodes.forEach((_node) => _node.loc = path2.node.loc), path2.replaceWithMultiple(nodes);
            return;
          }
          let metaNode, decl;
          if (isVariableReference) {
            let variableName = node.declaration.name;
            self._metaVariableName = variableName;
            let isMetaVariable = (declaration) => t2.isIdentifier(declaration.id) && declaration.id.name === variableName;
            self._metaStatementPath = self._file.path.get("body").find(
              (path3) => path3.isVariableDeclaration() && path3.node.declarations.some(isMetaVariable)
            ), self._metaStatement = self._metaStatementPath?.node, decl = (self?._metaStatement?.declarations || []).find(
              isMetaVariable
            )?.init;
          } else
            self._metaStatement = node, self._metaStatementPath = path2, decl = node.declaration;
          if (t2.isObjectExpression(decl) ? metaNode = decl : /* export default { ... } as Meta<...> */ /* export default { ... } satisfies Meta<...> */ (t2.isTSAsExpression(decl) || t2.isTSSatisfiesExpression(decl)) && t2.isObjectExpression(decl.expression) ? metaNode = decl.expression : (
            // export default { ... } satisfies Meta as Meta<...>
            t2.isTSAsExpression(decl) && t2.isTSSatisfiesExpression(decl.expression) && t2.isObjectExpression(decl.expression.expression) && (metaNode = decl.expression.expression)
          ), metaNode && t2.isProgram(parent) && self._parseMeta(metaNode, parent), self._metaStatement && !self._metaNode)
            throw new NoMetaError(
              "default export must be an object",
              self._metaStatement,
              self._options.fileName
            );
          self._metaPath = path2;
        }
      },
      ExportNamedDeclaration: {
        enter(path2) {
          let { node, parent } = path2, declaration = path2.get("declaration"), declarations;
          declaration.isVariableDeclaration() ? declarations = declaration.get("declarations").filter((d) => d.isVariableDeclarator()) : declaration.isFunctionDeclaration() && (declarations = [declaration]), declarations ? declarations.forEach((declPath) => {
            let decl = declPath.node, id = declPath.node.id;
            if (t2.isIdentifier(id)) {
              let { name: exportName } = id;
              if (exportName === "__namedExportsOrder" && declPath.isVariableDeclarator()) {
                self._namedExportsOrder = parseExportsOrder(declPath.node.init);
                return;
              }
              let storyNode;
              t2.isVariableDeclarator(decl) ? t2.isTSAsExpression(decl.init) && t2.isTSSatisfiesExpression(decl.init.expression) ? storyNode = decl.init.expression.expression : t2.isTSAsExpression(decl.init) || t2.isTSSatisfiesExpression(decl.init) ? storyNode = decl.init.expression : storyNode = decl.init : storyNode = decl;
              let storyIsFactory = !1;
              if (t2.isCallExpression(storyNode) && t2.isMemberExpression(storyNode.callee) && t2.isIdentifier(storyNode.callee.property) && (storyNode.callee.property.name === "story" || storyNode.callee.property.name === "extend") && (storyIsFactory = !0, storyNode = storyNode.arguments[0]), self._metaIsFactory && !storyIsFactory)
                return;
              if (!self._metaIsFactory && storyIsFactory)
                throw self._metaNode ? new MixedFactoryError(
                  "expected non-factory story",
                  storyNode,
                  self._options.fileName
                ) : new BadMetaError(
                  "meta() factory must be imported from .storybook/preview configuration",
                  storyNode,
                  self._options.fileName
                );
              self._storyExports[exportName] = decl, self._storyDeclarationPath[exportName] = declPath, self._storyPaths[exportName] = path2, self._storyStatements[exportName] = node;
              let name = storyNameFromExport(exportName);
              self._storyAnnotations[exportName] ? logger.warn(
                `Unexpected annotations for "${exportName}" before story declaration`
              ) : self._storyAnnotations[exportName] = {};
              let parameters = {};
              t2.isObjectExpression(storyNode) ? (parameters.__isArgsStory = !0, storyNode.properties.forEach((p) => {
                if (t2.isIdentifier(p.key)) {
                  let key = p.key.name;
                  if (t2.isObjectMethod(p))
                    self._storyAnnotations[exportName][key] = p;
                  else {
                    if (p.key.name === "render")
                      parameters.__isArgsStory = isArgsStory(
                        p.value,
                        parent,
                        self
                      );
                    else if (p.key.name === "name" && t2.isStringLiteral(p.value))
                      name = p.value.value;
                    else if (p.key.name === "storyName" && t2.isStringLiteral(p.value))
                      logger.warn(
                        `Unexpected usage of "storyName" in "${exportName}". Please use "name" instead.`
                      );
                    else if (p.key.name === "parameters" && t2.isObjectExpression(p.value)) {
                      let idProperty = p.value.properties.find(
                        (property) => t2.isObjectProperty(property) && t2.isIdentifier(property.key) && property.key.name === "__id"
                      );
                      idProperty && (parameters.__id = idProperty.value.value);
                    }
                    self._storyAnnotations[exportName][p.key.name] = p.value;
                  }
                }
              })) : parameters.__isArgsStory = isArgsStory(storyNode, parent, self), self._stories[exportName] = {
                id: "FIXME",
                name,
                parameters,
                __stats: {
                  factory: storyIsFactory
                }
              };
            }
          }) : node.specifiers.length > 0 && node.specifiers.forEach((specifier) => {
            if (t2.isExportSpecifier(specifier) && t2.isIdentifier(specifier.exported)) {
              let { name: exportName } = specifier.exported, { name: localName } = specifier.local, decl = t2.isProgram(parent) ? findVarInitialization(localName, parent) : specifier.local;
              if (exportName === "default") {
                let metaNode;
                t2.isObjectExpression(decl) ? metaNode = decl : /* export default { ... } as Meta<...> */ /* export default { ... } satisfies Meta<...> */ (t2.isTSAsExpression(decl) || t2.isTSSatisfiesExpression(decl)) && t2.isObjectExpression(decl.expression) ? metaNode = decl.expression : (
                  // export default { ... } satisfies Meta as Meta<...>
                  t2.isTSAsExpression(decl) && t2.isTSSatisfiesExpression(decl.expression) && t2.isObjectExpression(decl.expression.expression) && (metaNode = decl.expression.expression)
                ), metaNode && t2.isProgram(parent) && self._parseMeta(metaNode, parent);
              } else {
                let annotations = {}, storyNode = decl;
                t2.isObjectExpression(storyNode) && storyNode.properties.forEach((p) => {
                  t2.isIdentifier(p.key) && (annotations[p.key.name] = p.value);
                }), self._storyAnnotations[exportName] = annotations, self._storyStatements[exportName] = decl, self._storyPaths[exportName] = path2, self._stories[exportName] = {
                  id: "FIXME",
                  name: exportName,
                  localName,
                  parameters: {},
                  __stats: {}
                };
              }
            }
          });
        }
      },
      ExpressionStatement: {
        enter({ node, parent }) {
          let { expression } = node;
          if (t2.isProgram(parent) && t2.isAssignmentExpression(expression) && t2.isMemberExpression(expression.left) && t2.isIdentifier(expression.left.object) && t2.isIdentifier(expression.left.property)) {
            let exportName = expression.left.object.name, annotationKey = expression.left.property.name, annotationValue = expression.right;
            if (self._storyAnnotations[exportName] && (annotationKey === "story" && t2.isObjectExpression(annotationValue) ? annotationValue.properties.forEach((prop) => {
              t2.isIdentifier(prop.key) && (self._storyAnnotations[exportName][prop.key.name] = prop.value);
            }) : self._storyAnnotations[exportName][annotationKey] = annotationValue), annotationKey === "storyName" && t2.isStringLiteral(annotationValue)) {
              let storyName = annotationValue.value, story = self._stories[exportName];
              if (!story)
                return;
              story.name = storyName;
            }
          }
          if (t2.isCallExpression(expression) && t2.isMemberExpression(expression.callee) && t2.isIdentifier(expression.callee.object) && t2.isIdentifier(expression.callee.property) && expression.callee.property.name === "test" && expression.arguments.length >= 2 && t2.isStringLiteral(expression.arguments[0])) {
            let exportName = expression.callee.object.name, testName = expression.arguments[0].value, testFunction = expression.arguments.length === 2 ? expression.arguments[1] : expression.arguments[2], testArguments = expression.arguments.length === 2 ? null : expression.arguments[1], tags = parseTestTags(testArguments, self._ast.program);
            self._tests.push({
              function: testFunction,
              name: testName,
              node: expression,
              // can't set id because meta title isn't available yet
              // so it's set later on
              id: "FIXME",
              tags,
              parent: { node: self._storyStatements[exportName] }
            }), self._stories[exportName].__stats.tests = !0;
          }
        }
      },
      CallExpression: {
        enter(path2) {
          let { node } = path2, { callee } = node;
          if (t2.isIdentifier(callee) && callee.name === "storiesOf")
            throw new Error(import_ts_dedent.dedent`
              Unexpected \`storiesOf\` usage: ${formatLocation(node, self._options.fileName)}.

              SB8 does not support \`storiesOf\`.
            `);
          if (t2.isMemberExpression(callee) && t2.isIdentifier(callee.property) && callee.property.name === "meta" && node.arguments.length > 0) {
            let rootObject = callee.object;
            if (t2.isCallExpression(rootObject) && t2.isMemberExpression(rootObject.callee) && (rootObject = rootObject.callee.object), t2.isIdentifier(rootObject)) {
              let configParent = path2.scope.getBinding(rootObject.name)?.path?.parentPath?.node;
              if (t2.isImportDeclaration(configParent))
                if (isValidPreviewPath(configParent.source.value)) {
                  self._metaIsFactory = !0;
                  let metaDeclarator = path2.findParent(
                    (p) => p.isVariableDeclarator()
                  );
                  self._metaVariableName = t2.isIdentifier(metaDeclarator.node.id) ? metaDeclarator.node.id.name : callee.property.name;
                  let metaNode = node.arguments[0];
                  self._parseMeta(metaNode, self._ast.program);
                } else
                  throw new BadMetaError(
                    "meta() factory must be imported from .storybook/preview configuration",
                    configParent,
                    self._options.fileName
                  );
            }
          }
        }
      },
      ImportDeclaration: {
        enter({ node }) {
          let { source } = node;
          if (t2.isStringLiteral(source))
            self.imports.push(source.value);
          else
            throw new Error("CSF: unexpected import source");
        }
      }
    }), !self._meta)
      throw new NoMetaError("missing default export", self._ast, self._options.fileName);
    let entries = Object.entries(self._stories);
    if (self._meta.title = this._options.makeTitle(self._meta?.title), self._metaAnnotations.play && (self._meta.tags = [...self._meta.tags || [], Tag.PLAY_FN]), self._stories = entries.reduce(
      (acc, [key, story]) => {
        if (!isExportStory(key, self._meta))
          return acc;
        let id = story.parameters?.__id ?? toId(self._meta?.id || self._meta?.title, storyNameFromExport(key)), parameters = { ...story.parameters, __id: id }, { includeStories } = self._meta || {};
        key === "__page" && (entries.length === 1 || Array.isArray(includeStories) && includeStories.length === 1) && (parameters.docsOnly = !0), acc[key] = { ...story, id, parameters };
        let storyAnnotations = self._storyAnnotations[key], { tags, play } = storyAnnotations;
        if (tags) {
          let node = t2.isIdentifier(tags) ? findVarInitialization(tags.name, this._ast.program) : tags;
          acc[key].tags = parseTags(node);
        }
        play && (acc[key].tags = [...acc[key].tags || [], Tag.PLAY_FN]);
        let stats = acc[key].__stats;
        ["play", "render", "loaders", "beforeEach", "globals", "tags"].forEach((annotation) => {
          stats[annotation] = !!storyAnnotations[annotation] || !!self._metaAnnotations[annotation];
        });
        let storyExport = self.getStoryExport(key);
        stats.storyFn = !!(t2.isArrowFunctionExpression(storyExport) || t2.isFunctionDeclaration(storyExport)), stats.mount = hasMount(storyAnnotations.play ?? self._metaAnnotations.play), stats.moduleMock = !!self.imports.find((fname) => isModuleMock(fname));
        let storyNode = self._storyStatements[key], storyTests = self._tests.filter((t8) => t8.parent.node === storyNode);
        return storyTests.length > 0 && (stats.tests = !0, storyTests.forEach((test) => {
          test.id = toTestId(id, test.name);
        })), acc;
      },
      {}
    ), Object.keys(self._storyExports).forEach((key) => {
      isExportStory(key, self._meta) || (delete self._storyExports[key], delete self._storyAnnotations[key], delete self._storyStatements[key]);
    }), self._namedExportsOrder) {
      let unsortedExports = Object.keys(self._storyExports);
      self._storyExports = sortExports(self._storyExports, self._namedExportsOrder), self._stories = sortExports(self._stories, self._namedExportsOrder);
      let sortedExports = Object.keys(self._storyExports);
      if (unsortedExports.length !== sortedExports.length)
        throw new Error(
          `Missing exports after sort: ${unsortedExports.filter(
            (key) => !sortedExports.includes(key)
          )}`
        );
    }
    return self;
  }
  get meta() {
    return this._meta;
  }
  get stories() {
    return Object.values(this._stories);
  }
  getStoryTests(story) {
    let storyNode = typeof story == "string" ? this._storyStatements[story] : story;
    return storyNode ? this._tests.filter((t8) => t8.parent.node === storyNode) : [];
  }
  get indexInputs() {
    let { fileName } = this._options;
    if (!fileName)
      throw new Error(
        import_ts_dedent.dedent`Cannot automatically create index inputs with CsfFile.indexInputs because the CsfFile instance was created without a the fileName option.
        Either add the fileName option when creating the CsfFile instance, or create the index inputs manually.`
      );
    let index = [];
    return Object.entries(this._stories).map(([exportName, story]) => {
      let tags = [...this._meta?.tags ?? [], ...story.tags ?? []], storyInput = {
        rawComponentPath: this._rawComponentPath,
        exportName,
        title: this.meta?.title,
        metaId: this.meta?.id,
        tags,
        __id: story.id,
        __stats: story.__stats
      }, tests = this.getStoryTests(exportName), hasTests = tests.length > 0;
      index.push({
        ...storyInput,
        type: "story",
        subtype: "story",
        name: story.name
      }), hasTests && tests.forEach((test) => {
        index.push({
          ...storyInput,
          // TODO implementent proper title => path behavior in `transformStoryIndexToStoriesHash`
          // title: `${storyInput.title}/${story.name}`,
          type: "story",
          subtype: "test",
          name: test.name,
          parent: story.id,
          parentName: story.name,
          tags: [
            ...storyInput.tags,
            // this tag comes before test tags so users can invert if they like
            `!${Tag.AUTODOCS}`,
            ...test.tags,
            // this tag comes after test tags so users can't change it
            Tag.TEST_FN
          ],
          __id: test.id
        });
      });
    }), index;
  }
}, babelParseFile = ({
  code,
  filename = "",
  ast
}) => new BabelFileClass(
  { filename, highlightCode: !1 },
  { code, ast: ast ?? babelParse(code) }
), loadCsf = (code, options) => {
  let ast = babelParse(code), file = babelParseFile({ code, filename: options.fileName, ast });
  return new CsfFile(ast, options, file);
}, formatCsf = (csf, options = { sourceMaps: !1 }, code) => {
  let result = generate(csf._ast, options, code);
  return options.sourceMaps ? result : result.code;
}, printCsf = (csf, options = {}) => recast.print(csf._ast, options), readCsf = async (fileName, options) => {
  let code = (await readFile(fileName, "utf-8")).toString();
  return loadCsf(code, { ...options, fileName });
}, writeCsf = async (csf, fileName) => {
  if (!(fileName || csf._options.fileName))
    throw new Error("Please specify a fileName for writeCsf");
  await writeFile(fileName, printCsf(csf).code);
};

// src/csf-tools/ConfigFile.ts
var import_ts_dedent2 = __toESM(require_dist(), 1);
import { readFile as readFile2, writeFile as writeFile2 } from "node:fs/promises";
import {
  babelParse as babelParse2,
  generate as generate2,
  recast as recast2,
  types as t3,
  traverse as traverse2
} from "storybook/internal/babel";
import { logger as logger2 } from "storybook/internal/node-logger";
var getCsfParsingErrorMessage = ({
  expectedType,
  foundType,
  node
}) => import_ts_dedent2.dedent`
      CSF Parsing error: Expected '${expectedType}' but found '${foundType}' instead in '${node?.type}'.
    `, propKey = (p) => t3.isIdentifier(p.key) ? p.key.name : t3.isStringLiteral(p.key) ? p.key.value : null, _getPath = (path2, node) => {
  if (path2.length === 0)
    return node;
  if (t3.isObjectExpression(node)) {
    let [first, ...rest] = path2, field = node.properties.find((p) => propKey(p) === first);
    if (field)
      return _getPath(rest, field.value);
  }
}, _getPathProperties = (path2, node) => {
  if (path2.length === 0) {
    if (t3.isObjectExpression(node))
      return node.properties;
    throw new Error("Expected object expression");
  }
  if (t3.isObjectExpression(node)) {
    let [first, ...rest] = path2, field = node.properties.find((p) => propKey(p) === first);
    if (field)
      return rest.length === 0 ? node.properties : _getPathProperties(rest, field.value);
  }
}, _findVarDeclarator = (identifier, program) => {
  let declarator = null, declarations = null;
  return program.body.find((node) => (t3.isVariableDeclaration(node) ? declarations = node.declarations : t3.isExportNamedDeclaration(node) && t3.isVariableDeclaration(node.declaration) && (declarations = node.declaration.declarations), declarations && declarations.find((decl) => t3.isVariableDeclarator(decl) && t3.isIdentifier(decl.id) && decl.id.name === identifier ? (declarator = decl, !0) : !1))), declarator;
}, _findVarInitialization = (identifier, program) => _findVarDeclarator(identifier, program)?.init, _makeObjectExpression = (path2, value) => {
  if (path2.length === 0)
    return value;
  let [first, ...rest] = path2, innerExpression = _makeObjectExpression(rest, value);
  return t3.objectExpression([t3.objectProperty(t3.identifier(first), innerExpression)]);
}, _updateExportNode = (path2, expr, existing) => {
  let [first, ...rest] = path2, existingField = existing.properties.find(
    (p) => propKey(p) === first
  );
  existingField ? t3.isObjectExpression(existingField.value) && rest.length > 0 ? _updateExportNode(rest, expr, existingField.value) : existingField.value = _makeObjectExpression(rest, expr) : existing.properties.push(
    t3.objectProperty(t3.identifier(first), _makeObjectExpression(rest, expr))
  );
}, ConfigFile = class {
  constructor(ast, code, fileName) {
    this._exports = {};
    // FIXME: this is a hack. this is only used in the case where the user is
    // modifying a named export that's a scalar. The _exports map is not suitable
    // for that. But rather than refactor the whole thing, we just use this as a stopgap.
    this._exportDecls = {};
    this.hasDefaultExport = !1;
    /** Unwraps TS assertions/satisfies from a node, to get the underlying node. */
    this._unwrap = (node) => t3.isTSAsExpression(node) || t3.isTSSatisfiesExpression(node) ? this._unwrap(node.expression) : node;
    /**
     * Resolve a declaration node by unwrapping TS assertions/satisfies and following identifiers to
     * resolve the correct node in case it's an identifier.
     */
    this._resolveDeclaration = (node, parent = this._ast.program) => {
      let decl = this._unwrap(node);
      if (t3.isIdentifier(decl) && t3.isProgram(parent)) {
        let initialization = _findVarInitialization(decl.name, parent);
        return initialization ? this._unwrap(initialization) : decl;
      }
      return decl;
    };
    this._ast = ast, this._code = code, this.fileName = fileName;
  }
  _parseExportsObject(exportsObject) {
    this._exportsObject = exportsObject, exportsObject.properties.forEach((p) => {
      let exportName = propKey(p);
      if (exportName) {
        let exportVal = this._resolveDeclaration(p.value);
        this._exports[exportName] = exportVal;
      }
    });
  }
  parse() {
    let self = this;
    return traverse2(this._ast, {
      ExportDefaultDeclaration: {
        enter({ node, parent }) {
          self.hasDefaultExport = !0;
          let decl = self._resolveDeclaration(node.declaration, parent);
          t3.isCallExpression(decl) && t3.isObjectExpression(decl.arguments[0]) && (decl = decl.arguments[0]), t3.isObjectExpression(decl) ? self._parseExportsObject(decl) : logger2.warn(
            getCsfParsingErrorMessage({
              expectedType: "ObjectExpression",
              foundType: decl?.type,
              node: decl || node.declaration
            })
          );
        }
      },
      ExportNamedDeclaration: {
        enter({ node, parent }) {
          if (t3.isVariableDeclaration(node.declaration))
            node.declaration.declarations.forEach((decl) => {
              if (t3.isVariableDeclarator(decl) && t3.isIdentifier(decl.id)) {
                let { name: exportName } = decl.id, exportVal = self._resolveDeclaration(decl.init, parent);
                self._exports[exportName] = exportVal, self._exportDecls[exportName] = decl;
              }
            });
          else if (t3.isFunctionDeclaration(node.declaration)) {
            let decl = node.declaration;
            if (t3.isIdentifier(decl.id)) {
              let { name: exportName } = decl.id;
              self._exportDecls[exportName] = decl;
            }
          } else node.specifiers ? node.specifiers.forEach((spec) => {
            if (t3.isExportSpecifier(spec) && t3.isIdentifier(spec.local) && t3.isIdentifier(spec.exported)) {
              let { name: localName } = spec.local, { name: exportName } = spec.exported, decl = _findVarDeclarator(localName, parent);
              decl && (self._exports[exportName] = self._resolveDeclaration(decl.init, parent), self._exportDecls[exportName] = decl);
            }
          }) : logger2.warn(
            getCsfParsingErrorMessage({
              expectedType: "VariableDeclaration",
              foundType: node.declaration?.type,
              node: node.declaration
            })
          );
        }
      },
      ExpressionStatement: {
        enter({ node, parent }) {
          if (t3.isAssignmentExpression(node.expression) && node.expression.operator === "=") {
            let { left, right } = node.expression;
            if (t3.isMemberExpression(left) && t3.isIdentifier(left.object) && left.object.name === "module" && t3.isIdentifier(left.property) && left.property.name === "exports") {
              let exportObject = right;
              exportObject = self._resolveDeclaration(exportObject, parent), t3.isObjectExpression(exportObject) ? (self._exportsObject = exportObject, exportObject.properties.forEach((p) => {
                let exportName = propKey(p);
                if (exportName) {
                  let exportVal = self._resolveDeclaration(p.value, parent);
                  self._exports[exportName] = exportVal;
                }
              })) : logger2.warn(
                getCsfParsingErrorMessage({
                  expectedType: "ObjectExpression",
                  foundType: exportObject?.type,
                  node: exportObject
                })
              );
            }
          }
        }
      },
      CallExpression: {
        enter: ({ node }) => {
          t3.isIdentifier(node.callee) && node.callee.name === "definePreview" && node.arguments.length === 1 && t3.isObjectExpression(node.arguments[0]) && self._parseExportsObject(node.arguments[0]);
        }
      }
    }), self;
  }
  getFieldNode(path2) {
    let [root, ...rest] = path2, exported = this._exports[root];
    if (exported)
      return _getPath(rest, exported);
  }
  getFieldProperties(path2) {
    let [root, ...rest] = path2, exported = this._exports[root];
    if (exported)
      return _getPathProperties(rest, exported);
  }
  getFieldValue(path2) {
    let node = this.getFieldNode(path2);
    if (node) {
      let { code } = generate2(node, {});
      return (0, eval)(`(() => (${code}))()`);
    }
  }
  getSafeFieldValue(path2) {
    try {
      return this.getFieldValue(path2);
    } catch {
    }
  }
  setFieldNode(path2, expr) {
    let [first, ...rest] = path2, exportNode = this._exports[first];
    if (this._exportsObject) {
      let existingProp = this._exportsObject.properties.find((p) => propKey(p) === first);
      if (existingProp && t3.isIdentifier(existingProp.value)) {
        let varDecl2 = _findVarDeclarator(existingProp.value.name, this._ast.program);
        if (varDecl2 && t3.isObjectExpression(varDecl2.init)) {
          _updateExportNode(rest, expr, varDecl2.init);
          return;
        }
      }
      _updateExportNode(path2, expr, this._exportsObject), this._exports[path2[0]] = expr;
      return;
    }
    if (exportNode && t3.isObjectExpression(exportNode) && rest.length > 0) {
      _updateExportNode(rest, expr, exportNode);
      return;
    }
    let varDecl = _findVarDeclarator(first, this._ast.program);
    if (varDecl && t3.isObjectExpression(varDecl.init)) {
      _updateExportNode(rest, expr, varDecl.init);
      return;
    }
    if (exportNode && rest.length === 0 && this._exportDecls[path2[0]]) {
      let decl = this._exportDecls[path2[0]];
      t3.isVariableDeclarator(decl) && (decl.init = _makeObjectExpression([], expr));
    } else {
      if (this.hasDefaultExport)
        throw new Error(
          `Could not set the "${path2.join(
            "."
          )}" field as the default export is not an object in this file.`
        );
      {
        let exportObj = _makeObjectExpression(rest, expr), newExport = t3.exportNamedDeclaration(
          t3.variableDeclaration("const", [t3.variableDeclarator(t3.identifier(first), exportObj)])
        );
        this._exports[first] = exportObj, this._ast.program.body.push(newExport);
      }
    }
  }
  /**
   * @example
   *
   * ```ts
   * // 1. { framework: 'framework-name' }
   * // 2. { framework: { name: 'framework-name', options: {} }
   * getNameFromPath(['framework']); // => 'framework-name'
   * ```
   *
   * @returns The name of a node in a given path, supporting the following formats:
   */
  getNameFromPath(path2) {
    let node = this.getFieldNode(path2);
    if (node)
      return this._getPresetValue(node, "name");
  }
  /**
   * Returns an array of names of a node in a given path, supporting the following formats:
   *
   * @example
   *
   * ```ts
   * const config = {
   *   addons: ['first-addon', { name: 'second-addon', options: {} }],
   * };
   * // => ['first-addon', 'second-addon']
   * getNamesFromPath(['addons']);
   * ```
   */
  getNamesFromPath(path2) {
    let node = this.getFieldNode(path2);
    if (!node)
      return;
    let pathNames = [];
    return t3.isArrayExpression(node) && node.elements.forEach((element) => {
      pathNames.push(this._getPresetValue(element, "name"));
    }), pathNames;
  }
  _getPnpWrappedValue(node) {
    if (t3.isCallExpression(node)) {
      let arg = node.arguments[0];
      if (t3.isStringLiteral(arg))
        return arg.value;
    }
  }
  /**
   * Given a node and a fallback property, returns a **non-evaluated** string value of the node.
   *
   * 1. `{ node: 'value' }`
   * 2. `{ node: { fallbackProperty: 'value' } }`
   */
  _getPresetValue(node, fallbackProperty) {
    let value;
    if (t3.isStringLiteral(node) ? value = node.value : t3.isObjectExpression(node) ? node.properties.forEach((prop) => {
      t3.isObjectProperty(prop) && t3.isIdentifier(prop.key) && prop.key.name === fallbackProperty && (t3.isStringLiteral(prop.value) ? value = prop.value.value : value = this._getPnpWrappedValue(prop.value)), t3.isObjectProperty(prop) && t3.isStringLiteral(prop.key) && prop.key.value === "name" && t3.isStringLiteral(prop.value) && (value = prop.value.value);
    }) : t3.isCallExpression(node) && (value = this._getPnpWrappedValue(node)), !value)
      throw new Error(
        `The given node must be a string literal or an object expression with a "${fallbackProperty}" property that is a string literal.`
      );
    return value;
  }
  removeField(path2) {
    let removeProperty = (properties2, prop) => {
      let index = properties2.findIndex(
        (p) => t3.isIdentifier(p.key) && p.key.name === prop || t3.isStringLiteral(p.key) && p.key.value === prop
      );
      index >= 0 && properties2.splice(index, 1);
    };
    if (path2.length === 1) {
      let removedRootProperty = !1;
      if (this._ast.program.body.forEach((node) => {
        if (t3.isExportNamedDeclaration(node) && t3.isVariableDeclaration(node.declaration)) {
          let decl = node.declaration.declarations[0];
          t3.isIdentifier(decl.id) && decl.id.name === path2[0] && (this._ast.program.body.splice(this._ast.program.body.indexOf(node), 1), removedRootProperty = !0);
        }
        if (t3.isExportDefaultDeclaration(node)) {
          let resolved = this._resolveDeclaration(node.declaration);
          if (t3.isObjectExpression(resolved)) {
            let properties2 = resolved.properties;
            removeProperty(properties2, path2[0]), removedRootProperty = !0;
          }
        }
        if (t3.isExpressionStatement(node) && t3.isAssignmentExpression(node.expression) && t3.isMemberExpression(node.expression.left) && t3.isIdentifier(node.expression.left.object) && node.expression.left.object.name === "module" && t3.isIdentifier(node.expression.left.property) && node.expression.left.property.name === "exports" && t3.isObjectExpression(node.expression.right)) {
          let properties2 = node.expression.right.properties;
          removeProperty(properties2, path2[0]), removedRootProperty = !0;
        }
      }), removedRootProperty)
        return;
    }
    let properties = this.getFieldProperties(path2);
    if (properties) {
      let lastPath = path2.at(-1);
      removeProperty(properties, lastPath);
    }
  }
  appendValueToArray(path2, value) {
    let node = this.valueToNode(value);
    node && this.appendNodeToArray(path2, node);
  }
  appendNodeToArray(path2, node) {
    let current = this.getFieldNode(path2);
    if (!current)
      this.setFieldNode(path2, t3.arrayExpression([node]));
    else if (t3.isArrayExpression(current))
      current.elements.push(node);
    else
      throw new Error(`Expected array at '${path2.join(".")}', got '${current.type}'`);
  }
  /**
   * Specialized helper to remove addons or other array entries that can either be strings or
   * objects with a name property.
   */
  removeEntryFromArray(path2, value) {
    let current = this.getFieldNode(path2);
    if (current)
      if (t3.isArrayExpression(current)) {
        let index = current.elements.findIndex((element) => t3.isStringLiteral(element) ? element.value === value : t3.isObjectExpression(element) ? this._getPresetValue(element, "name") === value : this._getPnpWrappedValue(element) === value);
        if (index >= 0)
          current.elements.splice(index, 1);
        else
          throw new Error(`Could not find '${value}' in array at '${path2.join(".")}'`);
      } else
        throw new Error(`Expected array at '${path2.join(".")}', got '${current.type}'`);
  }
  _inferQuotes() {
    if (!this._quotes) {
      let occurrences = (this._ast.tokens || []).slice(0, 500).reduce(
        (acc, token) => (token.type.label === "string" && (acc[this._code[token.start]] += 1), acc),
        { "'": 0, '"': 0 }
      );
      this._quotes = occurrences["'"] > occurrences['"'] ? "single" : "double";
    }
    return this._quotes;
  }
  valueToNode(value) {
    let quotes = this._inferQuotes(), valueNode;
    if (quotes === "single") {
      let { code } = generate2(t3.valueToNode(value), { jsescOption: { quotes } }), program = babelParse2(`const __x = ${code}`);
      traverse2(program, {
        VariableDeclaration: {
          enter({ node }) {
            node.declarations.length === 1 && t3.isVariableDeclarator(node.declarations[0]) && t3.isIdentifier(node.declarations[0].id) && node.declarations[0].id.name === "__x" && (valueNode = node.declarations[0].init);
          }
        }
      });
    } else
      valueNode = t3.valueToNode(value);
    return valueNode;
  }
  setFieldValue(path2, value) {
    let valueNode = this.valueToNode(value);
    if (!valueNode)
      throw new Error(`Unexpected value ${JSON.stringify(value)}`);
    this.setFieldNode(path2, valueNode);
  }
  getBodyDeclarations() {
    return this._ast.program.body;
  }
  setBodyDeclaration(declaration) {
    this._ast.program.body.push(declaration);
  }
  /**
   * Import specifiers for a specific require import
   *
   * @example
   *
   * ```ts
   * // const { foo } = require('bar');
   * setRequireImport(['foo'], 'bar');
   *
   * // const foo = require('bar');
   * setRequireImport('foo', 'bar');
   * ```
   *
   * @param importSpecifiers - The import specifiers to set. If a string is passed in, a default
   *   import will be set. Otherwise, an array of named imports will be set
   * @param fromImport - The module to import from
   */
  setRequireImport(importSpecifier, fromImport) {
    let requireDeclaration = this._ast.program.body.find((node) => {
      let hasDeclaration = t3.isVariableDeclaration(node) && node.declarations.length === 1 && t3.isVariableDeclarator(node.declarations[0]) && t3.isCallExpression(node.declarations[0].init) && t3.isIdentifier(node.declarations[0].init.callee) && node.declarations[0].init.callee.name === "require" && t3.isStringLiteral(node.declarations[0].init.arguments[0]) && (node.declarations[0].init.arguments[0].value === fromImport || node.declarations[0].init.arguments[0].value === fromImport.split("node:")[1]);
      return hasDeclaration && (fromImport = node.declarations[0].init.arguments[0].value), hasDeclaration;
    }), hasRequireSpecifier = (name) => t3.isObjectPattern(requireDeclaration?.declarations[0].id) && requireDeclaration?.declarations[0].id.properties.find(
      (specifier) => t3.isObjectProperty(specifier) && t3.isIdentifier(specifier.key) && specifier.key.name === name
    ), hasDefaultRequireSpecifier = (declaration, name) => declaration.declarations.length === 1 && t3.isVariableDeclarator(declaration.declarations[0]) && t3.isIdentifier(declaration.declarations[0].id) && declaration.declarations[0].id.name === name;
    if (typeof importSpecifier == "string") {
      let addDefaultRequireSpecifier = () => {
        this._ast.program.body.unshift(
          t3.variableDeclaration("const", [
            t3.variableDeclarator(
              t3.identifier(importSpecifier),
              t3.callExpression(t3.identifier("require"), [t3.stringLiteral(fromImport)])
            )
          ])
        );
      };
      requireDeclaration && hasDefaultRequireSpecifier(requireDeclaration, importSpecifier) || addDefaultRequireSpecifier();
    } else requireDeclaration ? importSpecifier.forEach((specifier) => {
      hasRequireSpecifier(specifier) || requireDeclaration.declarations[0].id.properties.push(
        t3.objectProperty(t3.identifier(specifier), t3.identifier(specifier), void 0, !0)
      );
    }) : this._ast.program.body.unshift(
      t3.variableDeclaration("const", [
        t3.variableDeclarator(
          t3.objectPattern(
            importSpecifier.map(
              (specifier) => t3.objectProperty(t3.identifier(specifier), t3.identifier(specifier), void 0, !0)
            )
          ),
          t3.callExpression(t3.identifier("require"), [t3.stringLiteral(fromImport)])
        )
      ])
    );
  }
  /**
   * Set import specifiers for a given import statement.
   *
   * Does not support setting type imports (yet)
   *
   * @example
   *
   * ```ts
   * // import { foo } from 'bar';
   * setImport(['foo'], 'bar');
   *
   * // import foo from 'bar';
   * setImport('foo', 'bar');
   *
   * // import * as foo from 'bar';
   * setImport({ namespace: 'foo' }, 'bar');
   *
   * // import 'bar';
   * setImport(null, 'bar');
   * ```
   *
   * @param importSpecifiers - The import specifiers to set. If a string is passed in, a default
   *   import will be set. Otherwise, an array of named imports will be set
   * @param fromImport - The module to import from
   */
  setImport(importSpecifier, fromImport) {
    let importDeclaration = this._ast.program.body.find((node) => {
      let hasDeclaration = t3.isImportDeclaration(node) && (node.source.value === fromImport || node.source.value === fromImport.split("node:")[1]);
      return hasDeclaration && (fromImport = node.source.value), hasDeclaration;
    }), getNewImportSpecifier = (specifier) => t3.importSpecifier(t3.identifier(specifier), t3.identifier(specifier)), hasImportSpecifier = (declaration, name) => declaration.specifiers.find(
      (specifier) => t3.isImportSpecifier(specifier) && t3.isIdentifier(specifier.imported) && specifier.imported.name === name
    ), hasNamespaceImportSpecifier = (declaration, name) => declaration.specifiers.find(
      (specifier) => t3.isImportNamespaceSpecifier(specifier) && t3.isIdentifier(specifier.local) && specifier.local.name === name
    );
    importSpecifier === null ? importDeclaration || this._ast.program.body.unshift(t3.importDeclaration([], t3.stringLiteral(fromImport))) : typeof importSpecifier == "string" ? importDeclaration ? ((declaration, name) => declaration.specifiers.find(
      (specifier) => t3.isImportDefaultSpecifier(specifier) && t3.isIdentifier(specifier.local) && specifier.local.name === name
    ))(importDeclaration, importSpecifier) || importDeclaration.specifiers.push(
      t3.importDefaultSpecifier(t3.identifier(importSpecifier))
    ) : this._ast.program.body.unshift(
      t3.importDeclaration(
        [t3.importDefaultSpecifier(t3.identifier(importSpecifier))],
        t3.stringLiteral(fromImport)
      )
    ) : Array.isArray(importSpecifier) ? importDeclaration ? importSpecifier.forEach((specifier) => {
      hasImportSpecifier(importDeclaration, specifier) || importDeclaration.specifiers.push(getNewImportSpecifier(specifier));
    }) : this._ast.program.body.unshift(
      t3.importDeclaration(
        importSpecifier.map(getNewImportSpecifier),
        t3.stringLiteral(fromImport)
      )
    ) : importSpecifier.namespace && (importDeclaration ? hasNamespaceImportSpecifier(importDeclaration, importSpecifier.namespace) || importDeclaration.specifiers.push(
      t3.importNamespaceSpecifier(t3.identifier(importSpecifier.namespace))
    ) : this._ast.program.body.unshift(
      t3.importDeclaration(
        [t3.importNamespaceSpecifier(t3.identifier(importSpecifier.namespace))],
        t3.stringLiteral(fromImport)
      )
    ));
  }
  _removeRequireImport(importSpecifier, fromImport) {
    let requireDeclarationIndex = this._ast.program.body.findIndex((node) => t3.isVariableDeclaration(node) && node.declarations.length === 1 && t3.isVariableDeclarator(node.declarations[0]) && t3.isCallExpression(node.declarations[0].init) && t3.isIdentifier(node.declarations[0].init.callee) && node.declarations[0].init.callee.name === "require" && t3.isStringLiteral(node.declarations[0].init.arguments[0]) && (node.declarations[0].init.arguments[0].value === fromImport || node.declarations[0].init.arguments[0].value === fromImport.split("node:")[1]));
    if (requireDeclarationIndex === -1)
      return;
    let declarator = this._ast.program.body[requireDeclarationIndex].declarations[0];
    if (importSpecifier !== null) {
      if (typeof importSpecifier == "string") {
        t3.isIdentifier(declarator.id) && declarator.id.name === importSpecifier && this._ast.program.body.splice(requireDeclarationIndex, 1);
        return;
      }
      if (!(typeof importSpecifier == "object" && "namespace" in importSpecifier) && Array.isArray(importSpecifier) && t3.isObjectPattern(declarator.id)) {
        let objectPattern = declarator.id;
        importSpecifier.forEach((specifier) => {
          let index = objectPattern.properties.findIndex(
            (prop) => t3.isObjectProperty(prop) && t3.isIdentifier(prop.key) && prop.key.name === specifier
          );
          index !== -1 && objectPattern.properties.splice(index, 1);
        }), objectPattern.properties.length === 0 && this._ast.program.body.splice(requireDeclarationIndex, 1);
      }
    }
  }
  _removeImport(importSpecifier, fromImport) {
    let importDeclarationIndex = this._ast.program.body.findIndex(
      (node) => t3.isImportDeclaration(node) && (node.source.value === fromImport || node.source.value === fromImport.split("node:")[1])
    );
    if (importDeclarationIndex === -1)
      return;
    let importDeclaration = this._ast.program.body[importDeclarationIndex];
    if (importSpecifier === null) {
      importDeclaration.specifiers.length === 0 && this._ast.program.body.splice(importDeclarationIndex, 1);
      return;
    }
    if (typeof importSpecifier == "object" && "namespace" in importSpecifier) {
      let index = importDeclaration.specifiers.findIndex(
        (specifier) => t3.isImportNamespaceSpecifier(specifier) && t3.isIdentifier(specifier.local) && specifier.local.name === importSpecifier.namespace
      );
      index !== -1 && importDeclaration.specifiers.splice(index, 1);
    }
    if (typeof importSpecifier == "string") {
      let index = importDeclaration.specifiers.findIndex(
        (specifier) => t3.isImportDefaultSpecifier(specifier) && t3.isIdentifier(specifier.local) && specifier.local.name === importSpecifier
      );
      index !== -1 && importDeclaration.specifiers.splice(index, 1);
    }
    Array.isArray(importSpecifier) && importSpecifier.forEach((specifier) => {
      let index = importDeclaration.specifiers.findIndex(
        (current) => t3.isImportSpecifier(current) && t3.isIdentifier(current.imported) && current.imported.name === specifier
      );
      index !== -1 && importDeclaration.specifiers.splice(index, 1);
    }), importDeclaration.specifiers.length === 0 && this._ast.program.body.splice(importDeclarationIndex, 1);
  }
  /**
   * Remove import specifiers for a given import statement.
   *
   * Does not support removing type imports (yet)
   *
   * @example
   *
   * ```ts
   * // import { foo } from 'bar';
   * setImport(['foo'], 'bar');
   *
   * // import foo from 'bar';
   * setImport('foo', 'bar');
   *
   * // import * as foo from 'bar';
   * setImport({ namespace: 'foo' }, 'bar');
   *
   * // import 'bar';
   * setImport(null, 'bar');
   * ```
   *
   * @param importSpecifiers - The import specifiers to remove. If a string is passed in, will only
   *   remove the default import. Otherwise, named imports matching the array will be removed.
   * @param fromImport - The module to import from
   */
  removeImport(importSpecifier, fromImport) {
    this._removeRequireImport(importSpecifier, fromImport), this._removeImport(importSpecifier, fromImport);
  }
}, loadConfig = (code, fileName) => {
  let ast = babelParse2(code);
  return new ConfigFile(ast, code, fileName);
}, formatConfig = (config) => printConfig(config).code, printConfig = (config, options = {}) => recast2.print(config._ast, options), readConfig = async (fileName) => {
  let code = (await readFile2(fileName, "utf-8")).toString();
  return loadConfig(code, fileName).parse();
}, writeConfig = async (config, fileName) => {
  let fname = fileName || config.fileName;
  if (!fname)
    throw new Error("Please specify a fileName for writeConfig");
  await writeFile2(fname, formatConfig(config));
}, isCsfFactoryPreview = (previewConfig) => !!previewConfig._ast.program.body.find((node) => t3.isImportDeclaration(node) && node.source.value.includes("storybook") && node.specifiers.some((specifier) => t3.isImportSpecifier(specifier) && t3.isIdentifier(specifier.imported) && specifier.imported.name === "definePreview"));

// src/csf-tools/getStorySortParameter.ts
var import_ts_dedent3 = __toESM(require_dist(), 1);
import { babelParse as babelParse3, generate as generate3, types as t4, traverse as traverse3 } from "storybook/internal/babel";
import { logger as logger3 } from "storybook/internal/node-logger";
var getValue = (obj, key) => {
  let value;
  return obj.properties.forEach((p) => {
    t4.isIdentifier(p.key) && p.key.name === key && (value = p.value);
  }), value;
}, parseValue = (value) => {
  let expr = stripTSModifiers(value);
  if (t4.isArrayExpression(expr))
    return expr.elements.map((o) => parseValue(o));
  if (t4.isObjectExpression(expr))
    return expr.properties.reduce((acc, p) => (t4.isIdentifier(p.key) && (acc[p.key.name] = parseValue(p.value)), acc), {});
  if (t4.isLiteral(expr))
    return expr.value;
  if (t4.isIdentifier(expr))
    return unsupported(expr.name, !0);
  throw new Error(`Unknown node type ${expr.type}`);
}, unsupported = (unexpectedVar, isError) => {
  let message = import_ts_dedent3.dedent`
    Unexpected '${unexpectedVar}'. Parameter 'options.storySort' should be defined inline e.g.:

    export default {
      parameters: {
        options: {
          storySort: <array | object | function>
        },
      },
    };
  `;
  if (isError)
    throw new Error(message);
  logger3.log(message);
}, stripTSModifiers = (expr) => t4.isTSAsExpression(expr) || t4.isTSSatisfiesExpression(expr) ? expr.expression : expr, parseParameters = (params) => {
  let paramsObject = stripTSModifiers(params);
  if (t4.isObjectExpression(paramsObject)) {
    let options = getValue(paramsObject, "options");
    if (options) {
      if (t4.isObjectExpression(options))
        return getValue(options, "storySort");
      unsupported("options", !0);
    }
  }
}, parseDefault = (defaultExpr, program) => {
  let defaultObj = stripTSModifiers(defaultExpr);
  if (t4.isObjectExpression(defaultObj)) {
    let params = getValue(defaultObj, "parameters");
    if (t4.isIdentifier(params) && (params = findVarInitialization(params.name, program)), params)
      return parseParameters(params);
  } else
    unsupported("default", !0);
}, getStorySortParameter = (previewCode) => {
  if (!previewCode.includes("storySort"))
    return;
  let storySort, ast = babelParse3(previewCode);
  if (traverse3(ast, {
    ExportNamedDeclaration: {
      enter({ node }) {
        t4.isVariableDeclaration(node.declaration) ? node.declaration.declarations.forEach((decl) => {
          if (t4.isVariableDeclarator(decl) && t4.isIdentifier(decl.id)) {
            let { name: exportName } = decl.id;
            if (exportName === "parameters" && decl.init) {
              let paramsObject = stripTSModifiers(decl.init);
              storySort = parseParameters(paramsObject);
            }
          }
        }) : node.specifiers.forEach((spec) => {
          t4.isIdentifier(spec.exported) && spec.exported.name === "parameters" && unsupported("parameters", !1);
        });
      }
    },
    ExportDefaultDeclaration: {
      enter({ node }) {
        let defaultObj = node.declaration;
        t4.isIdentifier(defaultObj) && (defaultObj = findVarInitialization(defaultObj.name, ast.program)), defaultObj = stripTSModifiers(defaultObj), t4.isCallExpression(defaultObj) && t4.isObjectExpression(defaultObj.arguments?.[0]) ? storySort = parseDefault(defaultObj.arguments[0], ast.program) : t4.isObjectExpression(defaultObj) ? storySort = parseDefault(defaultObj, ast.program) : unsupported("default", !1);
      }
    }
  }), !!storySort) {
    if (t4.isArrowFunctionExpression(storySort)) {
      let { code: sortCode } = generate3(storySort, {});
      return (0, eval)(sortCode);
    }
    if (t4.isFunctionExpression(storySort)) {
      let { code: sortCode } = generate3(storySort, {}), functionName = storySort.id?.name, wrapper = `(a, b) => {
      ${sortCode};
      return ${functionName}(a, b)
    }`;
      return (0, eval)(wrapper);
    }
    return t4.isLiteral(storySort) || t4.isArrayExpression(storySort) || t4.isObjectExpression(storySort) ? parseValue(storySort) : unsupported("storySort", !0);
  }
};

// src/csf-tools/enrichCsf.ts
import { generate as generate4, types as t5 } from "storybook/internal/babel";
var enrichCsfStory = (csf, csfSource, key, options) => {
  let storyExport = csfSource.getStoryExport(key), isCsfFactory = t5.isCallExpression(storyExport) && t5.isMemberExpression(storyExport.callee) && t5.isIdentifier(storyExport.callee.object) && storyExport.callee.object.name === "meta", source = !options?.disableSource && extractSource(storyExport), description = !options?.disableDescription && extractDescription(csfSource._storyStatements[key]), parameters = [], baseStoryObject = isCsfFactory ? t5.memberExpression(t5.identifier(key), t5.identifier("input")) : t5.identifier(key), originalParameters = t5.memberExpression(baseStoryObject, t5.identifier("parameters"));
  parameters.push(t5.spreadElement(originalParameters));
  let optionalDocs = t5.optionalMemberExpression(
    originalParameters,
    t5.identifier("docs"),
    !1,
    !0
  ), extraDocsParameters = [];
  if (source) {
    let optionalSource = t5.optionalMemberExpression(
      optionalDocs,
      t5.identifier("source"),
      !1,
      !0
    );
    extraDocsParameters.push(
      t5.objectProperty(
        t5.identifier("source"),
        t5.objectExpression([
          t5.objectProperty(t5.identifier("originalSource"), t5.stringLiteral(source)),
          t5.spreadElement(optionalSource)
        ])
      )
    );
  }
  if (description) {
    let optionalDescription = t5.optionalMemberExpression(
      optionalDocs,
      t5.identifier("description"),
      !1,
      !0
    );
    extraDocsParameters.push(
      t5.objectProperty(
        t5.identifier("description"),
        t5.objectExpression([
          t5.objectProperty(t5.identifier("story"), t5.stringLiteral(description)),
          t5.spreadElement(optionalDescription)
        ])
      )
    );
  }
  if (extraDocsParameters.length > 0) {
    parameters.push(
      t5.objectProperty(
        t5.identifier("docs"),
        t5.objectExpression([t5.spreadElement(optionalDocs), ...extraDocsParameters])
      )
    );
    let addParameter = t5.expressionStatement(
      t5.assignmentExpression("=", originalParameters, t5.objectExpression(parameters))
    );
    csf._ast.program.body.push(addParameter);
  }
}, addComponentDescription = (node, path2, value) => {
  if (!path2.length) {
    node.properties.find(
      (p) => t5.isObjectProperty(p) && t5.isIdentifier(p.key) && p.key.name === "component"
    ) || node.properties.unshift(value);
    return;
  }
  let [first, ...rest] = path2, existing = node.properties.find(
    (p) => t5.isObjectProperty(p) && t5.isIdentifier(p.key) && p.key.name === first && t5.isObjectExpression(p.value)
  ), subNode;
  existing ? subNode = existing.value : (subNode = t5.objectExpression([]), node.properties.push(t5.objectProperty(t5.identifier(first), subNode))), addComponentDescription(subNode, rest, value);
}, enrichCsfMeta = (csf, csfSource, options) => {
  let description = !options?.disableDescription && extractDescription(csfSource._metaStatement);
  if (description) {
    let metaNode = csf._metaNode;
    metaNode && t5.isObjectExpression(metaNode) && addComponentDescription(
      metaNode,
      ["parameters", "docs", "description"],
      t5.objectProperty(t5.identifier("component"), t5.stringLiteral(description))
    );
  }
}, enrichCsf = async (csf, csfSource, options) => {
  enrichCsfMeta(csf, csfSource, options), await options?.enrichCsf?.(csf, csfSource), Object.keys(csf._storyExports).forEach((key) => {
    enrichCsfStory(csf, csfSource, key, options);
  });
}, extractSource = (node) => {
  let src = t5.isVariableDeclarator(node) ? node.init : node, { code } = generate4(src, {});
  return code;
}, extractDescription = (node) => node?.leadingComments ? node.leadingComments.map((comment) => comment.type === "CommentLine" || !comment.value.startsWith("*") ? null : comment.value.split(`
`).map((line) => line.replace(/^(\s+)?(\*+)?(\s)?/, "")).join(`
`).trim()).filter(Boolean).join(`
`) : "";

// src/csf-tools/index.ts
import { babelParse as babelParse5 } from "storybook/internal/babel";

// src/csf-tools/vitest-plugin/transformer.ts
var import_ts_dedent4 = __toESM(require_dist(), 1);
import { types as t6 } from "storybook/internal/babel";
import { getStoryTitle } from "storybook/internal/common";
import { combineTags } from "storybook/internal/csf";
import { logger as logger4 } from "storybook/internal/node-logger";
var isValidTest = (storyTags, tagsFilter) => !(tagsFilter.include.length && !tagsFilter.include.some((tag) => storyTags?.includes(tag)) || tagsFilter.exclude.some((tag) => storyTags?.includes(tag))), DOUBLE_SPACES = "  ", getLiteralWithZeroWidthSpace = (testTitle) => t6.stringLiteral(`${testTitle}${DOUBLE_SPACES}`);
function createTestGuardDeclaration(scope, expectId, convertToFilePathId) {
  let isRunningFromThisFileId = scope.generateUidIdentifier("isRunningFromThisFile"), testPathProperty = t6.memberExpression(
    t6.callExpression(t6.memberExpression(expectId, t6.identifier("getState")), []),
    t6.identifier("testPath")
  ), filePathProperty = t6.memberExpression(
    t6.memberExpression(t6.identifier("globalThis"), t6.identifier("__vitest_worker__")),
    t6.identifier("filepath")
  ), nullishCoalescingExpression = t6.logicalExpression(
    "??",
    // TODO: switch order of testPathProperty and filePathProperty when the bug is fixed
    // https://github.com/vitest-dev/vitest/issues/6367 (or probably just use testPathProperty)
    filePathProperty,
    testPathProperty
  ), includesCall = t6.callExpression(
    t6.memberExpression(
      t6.callExpression(convertToFilePathId, [
        t6.memberExpression(
          t6.memberExpression(t6.identifier("import"), t6.identifier("meta")),
          t6.identifier("url")
        )
      ]),
      t6.identifier("includes")
    ),
    [nullishCoalescingExpression]
  );
  return {
    declaration: t6.variableDeclaration("const", [
      t6.variableDeclarator(isRunningFromThisFileId, includesCall)
    ]),
    identifier: isRunningFromThisFileId
  };
}
async function vitestTransform({
  code,
  fileName,
  configDir,
  stories,
  tagsFilter,
  previewLevelTags = []
}) {
  let parsed = loadCsf(code, {
    fileName,
    transformInlineMeta: !0,
    makeTitle: (title) => {
      let result = getStoryTitle({
        storyFilePath: fileName,
        configDir,
        stories,
        userTitle: title
      }) || "unknown";
      return result === "unknown" && logger4.warn(
        import_ts_dedent4.dedent`
            [Storybook]: Could not calculate story title for "${fileName}".
            Please make sure that this file matches the globs included in the "stories" field in your Storybook configuration at "${configDir}".
          `
      ), result;
    }
  }).parse(), ast = parsed._ast, metaExportName = parsed._metaVariableName, metaNode = parsed._metaNode, metaTitleProperty = metaNode.properties.find(
    (prop) => t6.isObjectProperty(prop) && t6.isIdentifier(prop.key) && prop.key.name === "title"
  ), metaTitle = t6.stringLiteral(parsed._meta?.title || "unknown");
  if (metaTitleProperty ? t6.isObjectProperty(metaTitleProperty) && (metaTitleProperty.value = metaTitle) : metaNode.properties.push(t6.objectProperty(t6.identifier("title"), metaTitle)), !metaNode || !parsed._meta)
    throw new Error(
      `The Storybook vitest plugin could not detect the meta (default export) object in the story file. 

Please make sure you have a default export with the meta object. If you are using a different export format that is not supported, please file an issue with details about your use case.`
    );
  let validStories = {};
  Object.keys(parsed._stories).forEach((key) => {
    let finalTags = combineTags(
      "test",
      "dev",
      ...previewLevelTags,
      ...parsed.meta?.tags || [],
      ...parsed._stories[key].tags || []
    );
    isValidTest(finalTags, tagsFilter) && (validStories[key] = parsed._storyStatements[key]);
  });
  let vitestTestId = parsed._file.path.scope.generateUidIdentifier("test"), vitestDescribeId = parsed._file.path.scope.generateUidIdentifier("describe");
  if (Object.keys(validStories).length === 0) {
    let describeSkipBlock = t6.expressionStatement(
      t6.callExpression(t6.memberExpression(vitestDescribeId, t6.identifier("skip")), [
        t6.stringLiteral("No valid tests found")
      ])
    );
    ast.program.body.push(describeSkipBlock);
    let imports2 = [
      t6.importDeclaration(
        [
          t6.importSpecifier(vitestTestId, t6.identifier("test")),
          t6.importSpecifier(vitestDescribeId, t6.identifier("describe"))
        ],
        t6.stringLiteral("vitest")
      )
    ];
    return ast.program.body.unshift(...imports2), formatCsf(parsed, { sourceMaps: !0, sourceFileName: fileName }, code);
  }
  let vitestExpectId = parsed._file.path.scope.generateUidIdentifier("expect"), testStoryId = parsed._file.path.scope.generateUidIdentifier("testStory"), skipTagsId = t6.identifier(JSON.stringify(tagsFilter.skip)), componentPathLiteral = parsed._rawComponentPath ? t6.stringLiteral(parsed._rawComponentPath) : null, componentNameLiteral = null;
  parsed._componentImportSpecifier && (t6.isImportSpecifier(parsed._componentImportSpecifier) || t6.isImportDefaultSpecifier(parsed._componentImportSpecifier)) && (componentNameLiteral = t6.stringLiteral(parsed._componentImportSpecifier.local.name));
  let { declaration: isRunningFromThisFileDeclaration, identifier: isRunningFromThisFileId } = createTestGuardDeclaration(
    parsed._file.path.scope,
    vitestExpectId,
    t6.identifier("convertToFilePath")
  );
  ast.program.body.push(isRunningFromThisFileDeclaration);
  let getTestStatementForStory = ({
    localName,
    exportName,
    testTitle,
    node,
    overrideSourcemap = !0,
    storyId
  }) => {
    let objectProperties = [
      t6.objectProperty(t6.identifier("exportName"), t6.stringLiteral(exportName)),
      t6.objectProperty(t6.identifier("story"), t6.identifier(localName)),
      t6.objectProperty(t6.identifier("meta"), t6.identifier(metaExportName)),
      t6.objectProperty(t6.identifier("skipTags"), skipTagsId),
      t6.objectProperty(t6.identifier("storyId"), t6.stringLiteral(storyId))
    ];
    componentPathLiteral && objectProperties.push(t6.objectProperty(t6.identifier("componentPath"), componentPathLiteral)), componentNameLiteral && objectProperties.push(t6.objectProperty(t6.identifier("componentName"), componentNameLiteral));
    let testStoryCall = t6.expressionStatement(
      t6.callExpression(vitestTestId, [
        t6.stringLiteral(testTitle),
        t6.callExpression(testStoryId, [t6.objectExpression(objectProperties)])
      ])
    );
    return overrideSourcemap && (testStoryCall.loc = node.loc), testStoryCall;
  }, getDescribeStatementForStory = (options) => {
    let { localName, describeTitle, exportName, tests, node, parentStoryId } = options, describeBlock = t6.callExpression(vitestDescribeId, [
      getLiteralWithZeroWidthSpace(describeTitle),
      t6.arrowFunctionExpression(
        [],
        t6.blockStatement([
          getTestStatementForStory({
            ...options,
            testTitle: "base story",
            overrideSourcemap: !1,
            storyId: parentStoryId
          }),
          ...tests.map(({ name: testName, node: testNode, id: storyId }) => {
            let objectProperties = [
              t6.objectProperty(t6.identifier("exportName"), t6.stringLiteral(exportName)),
              t6.objectProperty(t6.identifier("story"), t6.identifier(localName)),
              t6.objectProperty(t6.identifier("meta"), t6.identifier(metaExportName)),
              t6.objectProperty(t6.identifier("skipTags"), t6.arrayExpression([])),
              t6.objectProperty(t6.identifier("storyId"), t6.stringLiteral(storyId))
            ];
            componentPathLiteral && objectProperties.push(
              t6.objectProperty(t6.identifier("componentPath"), componentPathLiteral)
            ), componentNameLiteral && objectProperties.push(
              t6.objectProperty(t6.identifier("componentName"), componentNameLiteral)
            ), testName && objectProperties.push(
              t6.objectProperty(t6.identifier("testName"), t6.stringLiteral(testName))
            );
            let testStatement = t6.expressionStatement(
              t6.callExpression(vitestTestId, [
                t6.stringLiteral(testName),
                t6.callExpression(testStoryId, [t6.objectExpression(objectProperties)])
              ])
            );
            return testStatement.loc = testNode.loc, testStatement;
          })
        ])
      )
    ]);
    return describeBlock.loc = node.loc, t6.expressionStatement(describeBlock);
  }, storyTestStatements = Object.entries(validStories).map(([exportName, node]) => {
    if (node === null) {
      logger4.warn(
        import_ts_dedent4.dedent`
            [Storybook]: Could not transform "${exportName}" story into test at "${fileName}".
            Please make sure to define stories in the same file and not re-export stories coming from other files".
          `
      );
      return;
    }
    let localName = parsed._stories[exportName].localName ?? exportName, testTitle = parsed._stories[exportName].name ?? exportName, storyId = parsed._stories[exportName].id, tests = parsed.getStoryTests(exportName);
    return tests?.length > 0 ? getDescribeStatementForStory({
      localName,
      describeTitle: testTitle,
      exportName,
      tests,
      node,
      parentStoryId: storyId
    }) : getTestStatementForStory({
      testTitle,
      localName,
      exportName,
      node,
      storyId
    });
  }).filter((st) => !!st), testBlock = t6.ifStatement(isRunningFromThisFileId, t6.blockStatement(storyTestStatements));
  ast.program.body.push(testBlock);
  let hasTests = Object.keys(validStories).some(
    (exportName) => parsed.getStoryTests(exportName).length > 0
  ), imports = [
    t6.importDeclaration(
      [
        t6.importSpecifier(vitestTestId, t6.identifier("test")),
        t6.importSpecifier(vitestExpectId, t6.identifier("expect")),
        ...hasTests ? [t6.importSpecifier(vitestDescribeId, t6.identifier("describe"))] : []
      ],
      t6.stringLiteral("vitest")
    ),
    t6.importDeclaration(
      [
        t6.importSpecifier(testStoryId, t6.identifier("testStory")),
        t6.importSpecifier(t6.identifier("convertToFilePath"), t6.identifier("convertToFilePath"))
      ],
      t6.stringLiteral("@storybook/addon-vitest/internal/test-utils")
    )
  ];
  return ast.program.body.unshift(...imports), formatCsf(parsed, { sourceMaps: !0, sourceFileName: fileName }, code);
}

// src/csf-tools/vitest-plugin/component-transformer.ts
import path from "node:path";
import {
  BabelFileClass as BabelFileClass2,
  babelParse as babelParse4,
  generate as generate5,
  types as t7,
  traverse as traverse4
} from "storybook/internal/babel";

// src/core-server/utils/get-dummy-args-from-argtypes.ts
var STORYBOOK_FN_PLACEHOLDER = "[[STORYBOOK_FN_PLACEHOLDER]]";
function generateDummyArgsFromArgTypes(argTypes, options = {}) {
  let required = {}, optional = {};
  for (let [propName, argType] of Object.entries(argTypes)) {
    let isRequired = argType.type && typeof argType.type == "object" && argType.type.required, dummyValue;
    if (typeof argType.type == "string") {
      let sbType = { name: argType.type };
      dummyValue = generateDummyValueFromSBType(sbType, propName, options);
    } else argType.type && typeof argType.type == "object" ? dummyValue = generateDummyValueFromSBType(argType.type, propName, options) : dummyValue = void 0;
    isRequired ? required[propName] = dummyValue : optional[propName] = dummyValue;
  }
  return { required, optional };
}
function tokenize(name) {
  return name ? name.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_\-]+/g, " ").split(" ").map((t8) => t8.toLowerCase()).filter(Boolean) : [];
}
function hasAny(tokens, set) {
  return tokens.some((t8) => set.has(t8));
}
var URL_TOKENS = /* @__PURE__ */ new Set(["url", "href", "link"]), IMAGE_TOKENS = /* @__PURE__ */ new Set(["image", "img", "photo", "avatar", "logo"]), EMAIL_TOKENS = /* @__PURE__ */ new Set(["email", "e-mail", "mail"]), PHONE_TOKENS = /* @__PURE__ */ new Set(["phone", "tel", "telephone", "mobile", "cell"]), COLOR_TOKENS = /* @__PURE__ */ new Set(["color", "background", "bg"]), DATE_TOKENS = /* @__PURE__ */ new Set(["date", "at", "time", "timestamp"]), NEGATIVE_IMAGE_TOKENS = /* @__PURE__ */ new Set([
  "size",
  "width",
  "height",
  "ratio",
  "count",
  "status",
  "loading",
  "config",
  "options",
  "variant"
]);
function getMostLikelyTypeFromTokens(tokens) {
  let score = {};
  for (let token of tokens)
    IMAGE_TOKENS.has(token) && (score.image = (score.image ?? 0) + 3), URL_TOKENS.has(token) && (score.url = (score.url ?? 0) + 2), EMAIL_TOKENS.has(token) && (score.email = (score.email ?? 0) + 3), PHONE_TOKENS.has(token) && (score.phone = (score.phone ?? 0) + 3);
  hasAny(tokens, NEGATIVE_IMAGE_TOKENS) && (score.image = (score.image ?? 0) - 4);
  let best = null, bestScore = 0;
  for (let [kind, value] of Object.entries(score))
    value > bestScore && (bestScore = value, best = kind);
  return best;
}
function normalizeStringLiteral(value) {
  return typeof value != "string" ? value : value.startsWith('"') && value.endsWith('"') || value.startsWith("'") && value.endsWith("'") ? value.slice(1, -1) : value;
}
function generateDummyValueFromSBType(sbType, propName, options) {
  switch (sbType.name) {
    case "boolean":
      return !0;
    case "number":
      return 0;
    case "string": {
      let name = propName ?? "", tokens = tokenize(name);
      if (hasAny(tokens, COLOR_TOKENS))
        return "#ff4785";
      if (hasAny(tokens, DATE_TOKENS))
        return (/* @__PURE__ */ new Date()).toLocaleDateString();
      let mostLikelyType = getMostLikelyTypeFromTokens(tokens);
      if (options?.skipUrlGeneration && (mostLikelyType === "image" || mostLikelyType === "url"))
        return name;
      switch (mostLikelyType) {
        case "image":
          return "https://placehold.co/600x400?text=Storybook";
        case "url":
          return "https://example.com";
        case "email":
          return "storybook@example.com";
        case "phone":
          return "1234567890";
        default:
          return name ?? "Hello world";
      }
    }
    case "date":
      return /* @__PURE__ */ new Date();
    case "node":
      return propName ?? "Hello world";
    case "function":
      return STORYBOOK_FN_PLACEHOLDER;
    case "literal":
      return normalizeStringLiteral(sbType.value);
    case "object": {
      let result = {};
      for (let [key, valueType] of Object.entries(sbType.value))
        result[key] = generateDummyValueFromSBType(valueType, key, options);
      return result;
    }
    case "union": {
      if (!sbType.value?.length)
        return "";
      let literalType = sbType.value.find((t8) => t8.name === "literal");
      return literalType?.name === "literal" ? normalizeStringLiteral(literalType.value) : generateDummyValueFromSBType(sbType.value[0], propName, options);
    }
    case "array": {
      let v = sbType.value;
      return v?.length < 1 || v[0]?.name === "other" ? [] : [generateDummyValueFromSBType(v[0], propName, options)];
    }
    case "tuple":
      return sbType.value.map((el) => generateDummyValueFromSBType(el, void 0, options));
    case "enum":
      return sbType.value[0] ?? propName;
    case "intersection": {
      let objectTypes = sbType.value.filter((t8) => t8.name === "object");
      if (objectTypes.length > 0) {
        let result = {};
        return objectTypes.forEach((objType) => {
          objType.name === "object" && Object.entries(objType.value).forEach(([key, type]) => {
            result[key] = generateDummyValueFromSBType(type, key, options);
          });
        }), result;
      }
      return {};
    }
    case "other": {
      let value = sbType.value;
      return value?.startsWith("React") || value?.includes("Event") || value?.includes("Element") ? STORYBOOK_FN_PLACEHOLDER : value === "null" ? null : value === "void" || value === "undefined" ? void 0 : null;
    }
  }
}

// src/csf-tools/vitest-plugin/component-transformer.ts
var VITEST_IMPORT_SOURCE = "vitest", TEST_UTILS_IMPORT_SOURCE = "@storybook/addon-vitest/internal/test-utils", STORYBOOK_TEST_IMPORT_SOURCE = "storybook/test", sanitizeIdentifier = (value) => value.replace(/[^a-zA-Z0-9_$]+/g, "") || "Component", createComponentNameFromFileName = (fileName) => {
  if (!fileName)
    return "Component";
  let basename = path.basename(fileName, path.extname(fileName));
  return sanitizeIdentifier(basename);
}, containsJsxNode = (valuePath) => {
  if (!valuePath?.node)
    return !1;
  let found = !1;
  return valuePath.traverse({
    JSXElement(path2) {
      found = !0, path2.stop();
    },
    JSXFragment(path2) {
      found = !0, path2.stop();
    }
  }), found;
}, unwrapExpression = (node) => node ? t7.isTSAsExpression(node) || t7.isTSSatisfiesExpression(node) ? unwrapExpression(node.expression) : node : null, dedupeImports = (program, source, specifiers) => {
  let existing = program.body.find(
    (node) => t7.isImportDeclaration(node) && node.source.value === source
  );
  if (existing) {
    specifiers.forEach((specifier) => {
      existing.specifiers.every(
        (existingSpecifier) => !t7.isImportSpecifier(existingSpecifier) || existingSpecifier.local.name !== specifier.local.name
      ) && existing.specifiers.push(specifier);
    });
    return;
  }
  program.body.unshift(t7.importDeclaration(specifiers, t7.stringLiteral(source)));
}, collectComponentExports = (program, fileName) => {
  let components = [], addComponent = (exportedName, localIdentifier, valuePath) => {
    !valuePath || !valuePath.node || !unwrapExpression(valuePath.node) || containsJsxNode(valuePath) && components.push({ exportedName, localIdentifier });
  };
  return traverse4(program, {
    ExportNamedDeclaration(path2) {
      let { node } = path2;
      if (node.source)
        return;
      let declarationPath = path2.get("declaration");
      if (declarationPath.isVariableDeclaration())
        declarationPath.get("declarations").forEach((declPath) => {
          if (!declPath.isVariableDeclarator())
            return;
          let id = declPath.node.id;
          if (!t7.isIdentifier(id))
            return;
          let initPath = declPath.get("init");
          addComponent(id.name, id, initPath);
        });
      else if (declarationPath.isFunctionDeclaration() && declarationPath.node.id) {
        let declarationId = declarationPath.node.id;
        t7.isIdentifier(declarationId) && addComponent(declarationId.name, declarationId, declarationPath);
      } else if (declarationPath.isClassDeclaration() && declarationPath.node.id) {
        let declarationId = declarationPath.node.id;
        t7.isIdentifier(declarationId) && addComponent(declarationId.name, declarationId, declarationPath);
      }
      path2.get("specifiers").forEach((specifierPath) => {
        if (!specifierPath.isExportSpecifier())
          return;
        let { local, exported } = specifierPath.node;
        if (!t7.isIdentifier(local) || !t7.isIdentifier(exported))
          return;
        let binding = specifierPath.scope.getBinding(local.name);
        if (!binding)
          return;
        let bindingPath = binding.path, localIdentifier = binding.identifier;
        if (t7.isIdentifier(localIdentifier)) {
          if (bindingPath.isVariableDeclarator())
            addComponent(exported.name, localIdentifier, bindingPath.get("init"));
          else if (bindingPath.isFunctionDeclaration() || bindingPath.isClassDeclaration()) {
            let bindingNodeId = bindingPath.node.id;
            t7.isIdentifier(bindingNodeId) && addComponent(exported.name, localIdentifier, bindingPath);
          }
        }
      });
    },
    ExportDefaultDeclaration(path2) {
      let { node } = path2, declaration = node.declaration;
      if (t7.isFunctionExpression(declaration) || t7.isArrowFunctionExpression(declaration) || t7.isClassExpression(declaration)) {
        let identifierName = createComponentNameFromFileName(fileName), identifier = path2.scope.generateUidIdentifier(identifierName), variableDeclaration = t7.variableDeclaration("const", [
          t7.variableDeclarator(identifier, declaration)
        ]);
        variableDeclaration.loc = node.loc, path2.insertBefore(variableDeclaration), node.declaration = identifier;
        let insertedVarPath = path2.getPrevSibling(), initPath = null;
        if (insertedVarPath?.isVariableDeclaration()) {
          let declarationPath = insertedVarPath.get("declarations")[0];
          declarationPath?.isVariableDeclarator() && (initPath = declarationPath.get("init"));
        }
        addComponent(identifierName, identifier, initPath);
        return;
      }
      if (t7.isCallExpression(declaration)) {
        let identifierName = createComponentNameFromFileName(fileName), identifier = path2.scope.generateUidIdentifier(identifierName), variableDeclaration = t7.variableDeclaration("const", [
          t7.variableDeclarator(identifier, declaration)
        ]);
        variableDeclaration.loc = node.loc, path2.insertBefore(variableDeclaration), node.declaration = identifier, components.push({ exportedName: identifierName, localIdentifier: identifier });
        return;
      }
      if (t7.isIdentifier(declaration)) {
        let binding = path2.scope.getBinding(declaration.name);
        if (!binding)
          return;
        let bindingIdentifier = binding.identifier;
        if (!t7.isIdentifier(bindingIdentifier))
          return;
        if (binding.path.isVariableDeclarator())
          addComponent(
            createComponentNameFromFileName(fileName),
            bindingIdentifier,
            binding.path.get("init")
          );
        else if (binding.path.isFunctionDeclaration() || binding.path.isClassDeclaration()) {
          let bindingNodeId = binding.path.node.id;
          t7.isIdentifier(bindingNodeId) && addComponent(bindingNodeId.name, bindingIdentifier, binding.path);
        }
        return;
      }
      if (t7.isFunctionDeclaration(declaration) && declaration.id) {
        addComponent(
          declaration.id.name,
          declaration.id,
          path2.get("declaration")
        );
        return;
      }
      t7.isClassDeclaration(declaration) && declaration.id && addComponent(
        declaration.id.name,
        declaration.id,
        path2.get("declaration")
      );
    }
  }), components;
}, componentTransform = async ({
  code,
  fileName,
  getComponentArgTypes
}) => {
  let ast = babelParse4(code), file = new BabelFileClass2({ filename: fileName, highlightCode: !1 }, { code, ast }), components = collectComponentExports(ast.program, fileName);
  if (!components.length)
    return { code, map: null };
  let vitestTestId = file.path.scope.generateUidIdentifier("test"), vitestExpectId = file.path.scope.generateUidIdentifier("expect"), testStoryId = file.path.scope.generateUidIdentifier("testStory"), convertToFilePathId = t7.identifier("convertToFilePath"), fnId = file.path.scope.generateUidIdentifier("fn");
  dedupeImports(ast.program, VITEST_IMPORT_SOURCE, [
    t7.importSpecifier(vitestTestId, t7.identifier("test")),
    t7.importSpecifier(vitestExpectId, t7.identifier("expect"))
  ]), dedupeImports(ast.program, TEST_UTILS_IMPORT_SOURCE, [
    t7.importSpecifier(testStoryId, t7.identifier("testStory")),
    t7.importSpecifier(convertToFilePathId, t7.identifier("convertToFilePath"))
  ]);
  let testStatements = [], hasFunctionPlaceholder = (value) => JSON.stringify(value).includes(STORYBOOK_FN_PLACEHOLDER), valueToNodeRecursive = (value, replaceFnCalls) => {
    if (!replaceFnCalls)
      return t7.valueToNode(value);
    if (value === STORYBOOK_FN_PLACEHOLDER)
      return t7.callExpression(fnId, []);
    if (typeof value == "object" && value !== null) {
      if (Array.isArray(value))
        return t7.arrayExpression(value.map((val) => valueToNodeRecursive(val, replaceFnCalls)));
      let properties = Object.entries(value).map(([key, val]) => {
        let keyNode = t7.isValidIdentifier(key) ? t7.identifier(key) : t7.stringLiteral(key);
        return t7.objectProperty(keyNode, valueToNodeRecursive(val, replaceFnCalls));
      });
      return t7.objectExpression(properties);
    }
    return t7.valueToNode(value);
  }, buildArgsExpression = (args, useFnImport = !1) => {
    if (!args || Object.keys(args).length === 0)
      return t7.objectExpression([]);
    let properties = Object.entries(args).map(([key, value]) => {
      let keyNode = t7.isValidIdentifier(key) ? t7.identifier(key) : t7.stringLiteral(key);
      return t7.objectProperty(keyNode, valueToNodeRecursive(value, useFnImport));
    });
    return t7.objectExpression(properties);
  }, hasAnyFunctionPlaceholders = !1;
  for (let component of components) {
    let argTypes = getComponentArgTypes ? await getComponentArgTypes({ componentName: component.exportedName, fileName }) : void 0, generatedArgs = argTypes ? generateDummyArgsFromArgTypes(argTypes, { skipUrlGeneration: !0 }).required : void 0;
    !hasAnyFunctionPlaceholders && generatedArgs && hasFunctionPlaceholder(generatedArgs) && (hasAnyFunctionPlaceholders = !0);
    let meta = t7.objectExpression([
      t7.objectProperty(
        t7.identifier("title"),
        t7.stringLiteral(`generated/tests/${component.exportedName}`)
      ),
      t7.objectProperty(t7.identifier("component"), component.localIdentifier)
    ]), testStoryArgs = t7.objectExpression([
      t7.objectProperty(t7.identifier("exportName"), t7.stringLiteral(component.exportedName)),
      // This is where the story annotation for a particular component is defined, inline
      t7.objectProperty(
        t7.identifier("story"),
        t7.objectExpression([
          t7.objectProperty(
            t7.identifier("args"),
            buildArgsExpression(generatedArgs, hasAnyFunctionPlaceholders)
          )
        ])
      ),
      t7.objectProperty(t7.identifier("meta"), meta),
      t7.objectProperty(t7.identifier("skipTags"), t7.arrayExpression([])),
      t7.objectProperty(
        t7.identifier("storyId"),
        t7.stringLiteral(`generated-${component.exportedName}`)
      ),
      t7.objectProperty(t7.identifier("componentPath"), t7.stringLiteral(fileName)),
      t7.objectProperty(
        t7.identifier("componentName"),
        t7.stringLiteral(component.localIdentifier.name)
      )
    ]), testCall = t7.expressionStatement(
      t7.callExpression(vitestTestId, [
        t7.stringLiteral(component.exportedName),
        t7.callExpression(testStoryId, [testStoryArgs])
      ])
    );
    testStatements.push(testCall);
  }
  hasAnyFunctionPlaceholders && dedupeImports(ast.program, STORYBOOK_TEST_IMPORT_SOURCE, [
    t7.importSpecifier(fnId, t7.identifier("fn"))
  ]);
  let { declaration: guardDeclaration, identifier: guardIdentifier } = createTestGuardDeclaration(
    file.path.scope,
    vitestExpectId,
    convertToFilePathId
  );
  return ast.program.body.push(guardDeclaration), ast.program.body.push(t7.ifStatement(guardIdentifier, t7.blockStatement(testStatements))), generate5(ast, { sourceMaps: !0, sourceFileName: fileName }, code);
};

export {
  Tag,
  isValidPreviewPath,
  isModuleMock,
  NoMetaError,
  MultipleMetaError,
  MixedFactoryError,
  BadMetaError,
  CsfFile,
  babelParseFile,
  loadCsf,
  formatCsf,
  printCsf,
  readCsf,
  writeCsf,
  ConfigFile,
  loadConfig,
  formatConfig,
  printConfig,
  readConfig,
  writeConfig,
  isCsfFactoryPreview,
  getStorySortParameter,
  enrichCsfStory,
  enrichCsfMeta,
  enrichCsf,
  extractSource,
  extractDescription,
  vitestTransform,
  STORYBOOK_FN_PLACEHOLDER,
  generateDummyArgsFromArgTypes,
  componentTransform,
  babelParse5 as babelParse
};
