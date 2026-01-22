const path = require('path');
const {
  cssProps,
  cssPseudoClasses,
  cssPseudoElements,
  cssAdvancedSelectors,
} = require('../../../../constants/index.js');
const { writeDoc } = require('../../../writeDoc/writeDoc.utils.js');

/**
 * Generates TypeScript type definitions for CSS properties, pseudo-classes, pseudo-elements,
 * attributes, and media queries, and writes them to a file.
 *
 * @param {Object} mediaQueries - An object containing media query definitions.
 * @param {string} dir - The directory path where the generated TypeScript file will be saved.
 * @returns {Promise<void>} A promise that resolves when the file has been written.
 */
const declareCssType = async (mediaQueries, dir) => {
  const generateTypeDefinition = (name, content) =>
    `type ${name} = {\n${content}\n};\n`;

  const generateInterfaceContent = (obj, additionalContent = '') =>
    Object.keys(obj)
      .map((key) => `${key}?: ${additionalContent}`)
      .join('\n');

  const libExtendsInterface = generateTypeDefinition(
    'LibExtendsType',
    '$extends?: string;'
  );
  const libRecycleInterface = generateTypeDefinition(
    'LibRecycleType',
    '$recycle?: string;'
  );
  const foreignInterface = generateTypeDefinition(
    'ForeignType',
    '$foreign?: { [key: string]: { [key: string]: CssPropsType & CssPseudoJoinedType & CssAddicionalTypes } };'
  );

  const cssPropsInterface = generateTypeDefinition(
    'CssPropsType',
    `LibExtendsType & LibRecycleType & ForeignType & {\n${generateInterfaceContent(
      cssProps,
      'string;'
    )}\n}`
  );

  const cssAdvancedSelectorsInterface = generateTypeDefinition(
    'CssAdvancedSelectorsType',
    generateInterfaceContent(
      cssAdvancedSelectors,
      'CssPropsType & { $target: string }'
    )
  );

  const cssPseudoJoined = generateTypeDefinition(
    'CssPseudoJoinedType',
    '$pseudoClasses?: CssPseudoClassesType;\n$pseudoElements?: CssPseudoElementsType;'
  );

  const cssAddicionalTypes = generateTypeDefinition(
    'CssAddicionalTypes',
    '$advancedSelectors?: CssAdvancedSelectorsType[];\n$mediaQueries?: MediaQueriesType;\n'
  );

  const cssPseudoClassesInterface = generateTypeDefinition(
    'CssPseudoClassesType',
    generateInterfaceContent(
      cssPseudoClasses,
      'CssPropsType & { $target?: string } & CssAddicionalTypes & { $attributes?: CssAttributesType } | CssPseudoElementsType & CssAddicionalTypes & { $attributes?: CssAttributesType } | CssPseudoClassesType & CssAddicionalTypes & { $attributes?: CssAttributesType };'
    )
  );

  const cssPseudoElementsInterface = generateTypeDefinition(
    'CssPseudoElementsType',
    generateInterfaceContent(
      cssPseudoElements,
      'CssPropsType & CssAddicionalTypes & { $attributes?: CssAttributesType } | CssPseudoElementsType & CssAddicionalTypes & { $attributes?: CssAttributesType } | CssPseudoClassesType & CssAddicionalTypes & { $attributes?: CssAttributesType };'
    )
  );

  const attributesInterface = generateTypeDefinition(
    'CssAttributesType',
    '[key: string]: CssPropsType & CssAddicionalTypes & CssPseudoJoinedType | {\n[key: string]: CssPropsType & CssAddicionalTypes & CssPseudoJoinedType \n};'
  );

  let mediaQueriesInterface = '';
  if (mediaQueries?.screen && Object.keys(mediaQueries.screen).length) {
    const mediaScreenInterface = generateTypeDefinition(
      'MediaScreenType',
      generateInterfaceContent(mediaQueries.screen, 'CssPropsType;')
    );
    mediaQueriesInterface = `${mediaScreenInterface}type MediaQueriesType = {\n screen?: MediaScreenType;\n};\n`;
  }

  const cssGeneratorInterface = `export type CssGeneratorType = CssPropsType & {\n$pseudoClasses?: CssPseudoClassesType;\n$pseudoElements?: CssPseudoElementsType;\n$mediaQueries?: MediaQueriesType;\n$attributes?: CssAttributesType;\n$advancedSelectors?: CssAdvancedSelectorsType[];\n};\n`;

  const finalTypeDoc = [
    libExtendsInterface,
    libRecycleInterface,
    foreignInterface,
    cssPropsInterface,
    cssAdvancedSelectorsInterface,
    cssPseudoJoined,
    cssAddicionalTypes,
    cssPseudoClassesInterface,
    cssPseudoElementsInterface,
    mediaQueriesInterface,
    attributesInterface,
    cssGeneratorInterface,
  ].join('');

  await writeDoc(
    path.resolve(dir, 'generatorType.ts'),
    finalTypeDoc,
    'generatorType.ts'
  );
};

module.exports = { declareCssType };
