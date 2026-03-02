#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Create readline interface for interactive prompts
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ================================================================
// CLI ARGUMENT PARSING
// ================================================================

/**
 * Parse command line arguments manually (no external dependencies)
 * Supports both long (--name) and short (-n) flags
 */
const parseArguments = (args) => {
  const parsed = {
    name: null,
    states: false,
    controlled: false,
    responsive: false,
    help: false,
    version: false,
    mode: 'interactive', // 'interactive' or 'automatic'
    unknownArgs: [],
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const nextArg = args[i + 1];

    switch (arg) {
      case '--name':
      case '-n':
        if (nextArg && !nextArg.startsWith('-')) {
          parsed.name = nextArg;
          parsed.mode = 'automatic';
          i++; // Skip next argument as it's the value
        } else {
          parsed.unknownArgs.push(`${arg} requires a value`);
        }
        break;
      case '--states':
      case '-s':
        parsed.states = true;
        break;
      case '--controlled':
      case '-c':
        parsed.controlled = true;
        break;
      case '--responsive':
      case '-r':
        parsed.responsive = true;
        break;
      case '--help':
      case '-h':
        parsed.help = true;
        break;
      case '--version':
      case '-v':
        parsed.version = true;
        break;
      default:
        // Handle combined short flags like -scr
        if (arg.startsWith('-') && !arg.startsWith('--') && arg.length > 2) {
          for (let j = 1; j < arg.length; j++) {
            switch (arg[j]) {
              case 's':
                parsed.states = true;
                break;
              case 'c':
                parsed.controlled = true;
                break;
              case 'r':
                parsed.responsive = true;
                break;
              case 'h':
                parsed.help = true;
                break;
              case 'v':
                parsed.version = true;
                break;
              case 'n':
                // For combined flags, -n needs to be the last one if it requires a value
                if (
                  j === arg.length - 1 &&
                  nextArg &&
                  !nextArg.startsWith('-')
                ) {
                  parsed.name = nextArg;
                  parsed.mode = 'automatic';
                  i++; // Skip next argument as it's the value
                } else {
                  parsed.unknownArgs.push(
                    `-n flag in combined flags must be last and followed by a value`,
                  );
                }
                break;
              default:
                parsed.unknownArgs.push(`Unknown flag: -${arg[j]}`);
                break;
            }
          }
        } else if (arg.startsWith('-')) {
          parsed.unknownArgs.push(`Unknown argument: ${arg}`);
        } else {
          parsed.unknownArgs.push(`Unexpected argument: ${arg}`);
        }
        break;
    }
  }

  return parsed;
};

/**
 * Display comprehensive help information
 */
const showHelp = () => {
  console.log(`
🎨 WEB UI Components - New Component Generator

USAGE:
  node new-component-web-ui.js [OPTIONS]

MODES:
  Interactive Mode (default):
    node new-component-web-ui.js

  Automatic Mode:
    node new-component-web-ui.js --name <ComponentName> [FLAGS]

OPTIONS:
  -n, --name <name>        Component name (PascalCase) - enables automatic mode
  -s, --states             Include component states (DEFAULT, HOVER, etc.)
  -c, --controlled         Generate both Controlled and Uncontrolled versions
  -r, --responsive         Include responsive logic and breakpoint handling
  -h, --help              Show this help information
  -v, --version           Show version information

FLAGS:
  • Boolean flags don't require values - their presence means true
  • Flags can be combined: -scr (same as --states --controlled --responsive)
  • Without --name, the script runs in interactive mode

EXAMPLES:
  # Interactive mode (asks questions step by step)
  node new-component-web-ui.js

  # Basic automatic mode (all options default to false)
  node new-component-web-ui.js --name ToggleV2

  # Automatic mode with specific features
  node new-component-web-ui.js --name ToggleV2 --states --controlled

  # Using short flags
  node new-component-web-ui.js -n ToggleV2 -s -c -r

  # Combined short flags
  node new-component-web-ui.js -n ToggleV2 -scr

COMPONENT FEATURES:
  • States: DEFAULT, HOVER, PRESSED, FOCUSED, etc.
  • Controlled: Manage component state externally
  • Uncontrolled: Internal state management with default values
  • Responsive: Different behavior for mobile, tablet, desktop

VENUS ARCHITECTURE:
  • Hybrid styling: CSS for structure + Design System for theming
  • Accessibility-first development with comprehensive testing
  • TypeScript with strict typing and comprehensive interfaces
  • Storybook documentation with automated argTypes

For more information, visit: https://github.com/santander-group-ods/SOFTWEB-web-ui-components
`);
};

/**
 * Display version information
 */
const showVersion = () => {
  console.log('🎨 WEB UI Components Generator v2.0.0');
  console.log('Venus Architecture - Modern React Component Library');
};

/**
 * Validate component name
 */
const validateComponentName = (name) => {
  if (!name) {
    return { valid: false, error: 'Component name is required' };
  }

  // Check for valid characters (letters, numbers, but must start with letter)
  if (!/^[A-Za-z][A-Za-z0-9]*$/.test(name)) {
    return {
      valid: false,
      error:
        'Component name must start with a letter and contain only letters and numbers',
    };
  }

  // Check if it starts with uppercase (PascalCase)
  if (!/^[A-Z]/.test(name)) {
    return {
      valid: false,
      error:
        'Component name must be in PascalCase (start with uppercase letter)',
    };
  }

  return { valid: true };
};

/**
 * Display usage information for invalid arguments
 */
const showUsageError = (error) => {
  console.log(`❌ ${error}\n`);
  console.log('💡 Usage examples:');
  console.log('   Interactive: node new-component-web-ui.js');
  console.log(
    '   Automatic:   node new-component-web-ui.js --name ComponentName',
  );
  console.log('   Help:        node new-component-web-ui.js --help');
  console.log('');
};

// ================================================================
// Utility functions
const toSnakeCase = (str) => {
  return str
    .replace(/([A-Z])/g, '_$1')
    .toLowerCase()
    .replace(/^_/, '');
};

const toComponentName = (str) => {
  // Convert component name to the format used in useClassname component parameter
  // For multi-word components, use snake_case (e.g., aaNew -> aa_new)
  // For V2 components, keep the V2 suffix in snake_case format (e.g., toggleV2 -> toggle_v2)
  return toSnakeCase(str);
};

const toPascalCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const toCamelCase = (str) => {
  return str.charAt(0).toLowerCase() + str.slice(1);
};

const toKebabCase = (str) => {
  return str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
};

const toUpperSnakeCase = (str) => {
  return str
    .replace(/([A-Z])/g, '_$1')
    .toUpperCase()
    .replace(/^_/, '');
};

// Helper functions for V2 components
const isV2Component = (componentName) => {
  return componentName.toLowerCase().endsWith('v2');
};

const getInternalComponentName = (componentName) => {
  // For V2 components, remove V2 suffix for internal file names
  if (isV2Component(componentName)) {
    return componentName.slice(0, -2); // Remove 'V2' suffix
  }
  return componentName;
};

const getInternalPascalName = (pascalName) => {
  // For V2 components, remove V2 suffix for internal usage
  if (pascalName.endsWith('V2')) {
    return pascalName.slice(0, -2); // Remove 'V2' suffix
  }
  return pascalName;
};

// Template generators
const generateStandAloneTemplate = (
  componentName,
  pascalName,
  needsResponsive,
) => {
  const internalComponentName = getInternalComponentName(componentName);
  const internalPascalName = getInternalPascalName(pascalName);

  const responsiveImport = needsResponsive
    ? `
import { useActiveBreakpoints } from '@/lib/hooks/useMediaDevice/useActiveBreakpoints';`
    : '';

  const responsiveLogic = needsResponsive
    ? `

  // ==========================================================================
  // RESPONSIVE LOGIC - Get current device breakpoints
  // ==========================================================================

  // Get active breakpoints for responsive behavior
  const { isMobile, isTablet, isDesktop, isMobileOrTablet } = useActiveBreakpoints();`
    : '';

  return `import './${internalComponentName}.css';

import { type ForwardedRef, forwardRef } from 'react';${responsiveImport}

import { classNames } from '@/lib/utils/classNames/classNames';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { ${internalPascalName}StandAloneProps } from './types/${internalComponentName}';

/**
 * ${internalPascalName} standalone component for rendering the styled element.
 *
 * This component is responsible for rendering the actual element with
 * the correct classes and layout. It is used internally by higher-level
 * components and is not intended to be used directly in most cases.
 *
 * @example
 * \`\`\`tsx
 * <${internalPascalName}StandAlone cssVariantClasses={{}} cssSizeClasses={{}}>
 *   Content
 * </${internalPascalName}StandAlone>
 * \`\`\`
 *
 * @returns The rendered element.
 */
export const ${internalPascalName}StandAlone = forwardRef(
  (
    {
      cssVariantClasses,
      cssSizeClasses,
      children,
      ...props
    }: ${internalPascalName}StandAloneProps,
    ref: ForwardedRef<HTMLDivElement> | undefined | null,
  ): JSX.Element => {${responsiveLogic}

    const customProps = pickCustomAttributes(props);

    return (
      <div
        {...customProps}
        ref={ref}
        className={classNames(
          'kbt-${toKebabCase(internalComponentName)}',
          cssVariantClasses?.${toComponentName(componentName)},
          cssSizeClasses?.${toComponentName(componentName)},
        )}
        data-testid="${toKebabCase(internalComponentName)}"
      >
        {children}
        {/* Add component content here */}${
          needsResponsive
            ? `

        {/* Example: Conditional rendering based on breakpoints */}
        {isMobileOrTablet && (
          <div className="kbt-${toKebabCase(internalComponentName)}__mobile-content">
            Mobile/Tablet content
          </div>
        )}

        {isDesktop && (
          <div className="kbt-${toKebabCase(internalComponentName)}__desktop-content">
            Desktop content
          </div>
        )}`
            : ''
        }
      </div>
    );
  },
);
`;
};

const generateControlledTemplate = (componentName, pascalName, hasStates) => {
  const internalComponentName = getInternalComponentName(componentName);
  const internalPascalName = getInternalPascalName(pascalName);

  return `import { type ForwardedRef, forwardRef } from 'react';

import { useClassname } from '@/lib/hooks/useClassName/useClassName';

import { ${internalPascalName}StandAlone } from './${internalComponentName}StandAlone';
import type { ${internalPascalName}ControlledProps } from './types/${internalComponentName}';
import type {
  ${internalPascalName}SizeCssClasses,
  ${internalPascalName}VariantCssClasses,
} from './types/${internalComponentName}Theme';

/**
 * ${internalPascalName} controlled component
 *
 * @param props - \`${internalPascalName}ControlledProps\` include:
 *
 * - Add controlled component prop descriptions here
 */
export const ${internalPascalName}Controlled = forwardRef(
  (
    {
      additionalSizeClasses,
      additionalVariantClasses,
      size,
      variant,
      ...props
    }: ${internalPascalName}ControlledProps,
    ref: ForwardedRef<HTMLDivElement> | undefined | null,
  ): JSX.Element => {
    const cssVariantClasses = useClassname<${internalPascalName}VariantCssClasses>({
      additionalClasses: additionalVariantClasses,
      component: '${toComponentName(componentName)}',
      variant,
    });
    const cssSizeClasses = useClassname<${internalPascalName}SizeCssClasses>({
      additionalClasses: additionalSizeClasses,
      component: '${toComponentName(componentName)}',
      variant: size,
    });

    return (
      <${internalPascalName}StandAlone
        {...props}
        ref={ref}
        cssSizeClasses={cssSizeClasses}
        cssVariantClasses={cssVariantClasses}
      />
    );
  },
);
`;
};

const generateUncontrolledTemplate = (componentName, pascalName) => {
  const internalComponentName = getInternalComponentName(componentName);
  const internalPascalName = getInternalPascalName(pascalName);

  return `import { type ForwardedRef, forwardRef } from 'react';

import { ${internalPascalName}Controlled } from './${internalComponentName}Controlled';
import type { ${internalPascalName}UncontrolledProps } from './types/${internalComponentName}';

/**
 * ${internalPascalName} uncontrolled component
 *
 * @param props - \`${internalPascalName}UncontrolledProps\` include:
 *
 * - Add uncontrolled component prop descriptions here
 */
export const ${internalPascalName}Uncontrolled = forwardRef(
  (
    {
      variant,
      size,
      // Add default values for uncontrolled props
      ...props
    }: ${internalPascalName}UncontrolledProps,
    ref: ForwardedRef<HTMLDivElement> | undefined | null,
  ): JSX.Element => {
    // TODO: Add uncontrolled state management
    // const [internalState, setInternalState] = useState(defaultValue);

    return (
      <${internalPascalName}Controlled
        {...props}
        ref={ref}
        variant={variant}
        size={size}
      />
    );
  },
);
`;
};

const generateMainComponentTemplate = (
  componentName,
  pascalName,
  hasStates,
) => {
  const internalComponentName = getInternalComponentName(componentName);
  const internalPascalName = getInternalPascalName(pascalName);

  return `import { type ForwardedRef, forwardRef } from 'react';

import { useClassname } from '@/lib/hooks/useClassName/useClassName';

import { ${internalPascalName}StandAlone } from './${internalComponentName}StandAlone';
import type { ${internalPascalName}Props } from './types/${internalComponentName}';
import type {
  ${internalPascalName}SizeCssClasses,
  ${internalPascalName}VariantCssClasses,
} from './types/${internalComponentName}Theme';

/**
 * ${internalPascalName} component
 *
 * @param props - \`${internalPascalName}Props\` include:
 *
 * - Add prop descriptions here
 */
export const ${internalPascalName} = forwardRef(
  <Variant extends string | undefined, Size extends string | undefined>(
    {
      additionalSizeClasses,
      additionalVariantClasses,
      size,
      variant,
      ...props
    }: ${internalPascalName}Props<Variant, Size>,
    ref: ForwardedRef<HTMLDivElement> | undefined | null,
  ): JSX.Element => {
    const cssVariantClasses = useClassname<${internalPascalName}VariantCssClasses>({
      additionalClasses: additionalVariantClasses,
      component: '${toComponentName(componentName)}',
      variant,
    });
    const cssSizeClasses = useClassname<${internalPascalName}SizeCssClasses>({
      additionalClasses: additionalSizeClasses,
      component: '${toComponentName(componentName)}',
      variant: size,
    });

    return (
      <${internalPascalName}StandAlone
        {...props}
        ref={ref}
        cssSizeClasses={cssSizeClasses}
        cssVariantClasses={cssVariantClasses}
      />
    );
  },
);
`;
};

const generateIndexTemplate = (
  componentName,
  pascalName,
  needsBothVersions,
) => {
  const internalComponentName = getInternalComponentName(componentName);
  const internalPascalName = getInternalPascalName(pascalName);

  // Check if this is a V2 component
  const isV2 = isV2Component(pascalName);

  if (needsBothVersions) {
    if (isV2) {
      // For V2 components with both versions, export with V2 suffix
      return `export { ${internalPascalName}Controlled as ${pascalName}Controlled } from './${internalComponentName}Controlled';
export { ${internalPascalName}Uncontrolled as ${pascalName}Uncontrolled } from './${internalComponentName}Uncontrolled';
export { ${internalPascalName}StandAlone as ${pascalName}StandAlone } from './${internalComponentName}StandAlone';

// Export types
export * from './types';
`;
    } else {
      return `export { ${internalPascalName}Controlled } from './${internalComponentName}Controlled';
export { ${internalPascalName}Uncontrolled } from './${internalComponentName}Uncontrolled';
export { ${internalPascalName}StandAlone } from './${internalComponentName}StandAlone';

// Export types
export type * from './types/${internalComponentName}';
`;
    }
  }

  if (isV2) {
    // For single V2 components, export main component with V2 suffix
    return `export { ${internalPascalName} as ${pascalName} } from './${internalComponentName}';

// Export types
export * from './types';
`;
  } else {
    return `export { ${internalPascalName} } from './${internalComponentName}';

// Export types
export type * from './types/${internalComponentName}';
`;
  }
};

const generateMainTypeTemplate = (
  componentName,
  pascalName,
  needsBothVersions,
  hasStates,
) => {
  const internalComponentName = getInternalComponentName(componentName);
  const internalPascalName = getInternalPascalName(pascalName);

  // Use folder name for import paths but internal names for types
  const folderName = componentName; // Keep V2 in folder name if present

  const interfaces = needsBothVersions
    ? `

export interface ${internalPascalName}ControlledProps extends ${internalPascalName}StandAloneProps {
  // Add controlled component specific props here
  variant?: string;
  size?: string;
  additionalVariantClasses?: ${internalPascalName}VariantCssClasses;
  additionalSizeClasses?: ${internalPascalName}SizeCssClasses;
}

export interface ${internalPascalName}UncontrolledProps extends ${internalPascalName}ControlledProps {
  // Add uncontrolled component specific props here
  // defaultValue?: any;
}`
    : `export interface ${internalPascalName}Props<
  Variant = undefined extends string | unknown
    ? string | undefined
    : string | unknown,
  Size = undefined extends string | unknown
    ? string | undefined
    : string | unknown,
> extends ${internalPascalName}StandAloneProps {
  // Add additional props for the main component here
  variant?: Variant;
  size?: Size;
  additionalVariantClasses?: ${internalPascalName}VariantCssClasses;
  additionalSizeClasses?: ${internalPascalName}SizeCssClasses;
}`;

  return `import type { PropsWithChildren } from 'react';

import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

import type {
  ${internalPascalName}SizeCssClasses,
  ${internalPascalName}VariantCssClasses,
} from './${internalComponentName}Theme';

/**
 * Interface for the standalone ${internalPascalName} component.
 */
export interface ${internalPascalName}StandAloneProps
  extends PropsWithChildren<{}>,
    DataAttributes {
  cssVariantClasses?: ${internalPascalName}VariantCssClasses;
  cssSizeClasses?: ${internalPascalName}SizeCssClasses;
  // Add StandAlone component props here
}
${interfaces}
`;
};

const generateStateTemplate = (componentName, pascalName) => {
  const internalPascalName = getInternalPascalName(pascalName);

  return `export enum ${internalPascalName}StateType {
  DEFAULT = 'DEFAULT',
}
`;
};

const generateThemeTypeTemplate = (componentName, pascalName, hasStates) => {
  const internalComponentName = getInternalComponentName(componentName);
  const internalPascalName = getInternalPascalName(pascalName);

  return `// External types
import type { CssGeneratorType } from '@kubit/kubit-css-style-generator';

import type { CssGenerator } from '@/lib/types/cssGenerator/cssGenerator';

/**
 * @description
 * ${internalPascalName} size props type
 */
export interface ${internalPascalName}SizeStyleProps {
  ${toComponentName(componentName)}: CssGeneratorType;
}

export interface ${internalPascalName}VariantStyleProps {
  ${toComponentName(componentName)}: CssGeneratorType;
}

export type ${internalPascalName}VariantStyles<Variant extends string> = {
  [key in Variant]?: ${internalPascalName}VariantStyleProps;
};

/**
 * @description
 * ${internalPascalName} size type
 */
export type ${internalPascalName}SizeStyles<Size extends string> = {
  [key in Size]?: ${internalPascalName}SizeStyleProps;
};

/**
 * @description
 * ${internalPascalName} styles type
 */
export type ${internalPascalName}Styles<
  Variant extends string,
  Size extends string,
> = ${internalPascalName}VariantStyles<Variant> & ${internalPascalName}SizeStyles<Size>;

// Create the classNames interfaces
export type ${internalPascalName}VariantCssClasses = CssGenerator<
  ${internalPascalName}VariantStyleProps,
  '${toComponentName(componentName)}'
>;
export type ${internalPascalName}SizeCssClasses = CssGenerator<${internalPascalName}SizeStyleProps, '${toComponentName(componentName)}'>;
`;
};

const generateTypesIndexTemplate = (componentName, hasStates) => {
  const internalComponentName = getInternalComponentName(componentName);
  const pascalName = toPascalCase(componentName);
  const internalPascalName = getInternalPascalName(pascalName);
  const isV2 = isV2Component(pascalName);

  if (isV2) {
    // For V2 components, export types with V2 suffix using aliases
    return `// Export types with V2 suffix to avoid conflicts with V1
export type {
  ${internalPascalName}StandAloneProps as ${pascalName}StandAloneProps,
  ${internalPascalName}ControlledProps as ${pascalName}ControlledProps,
  ${internalPascalName}UncontrolledProps as ${pascalName}UncontrolledProps,
} from './${internalComponentName}';

export type {
  ${internalPascalName}VariantCssClasses as ${pascalName}VariantCssClasses,
  ${internalPascalName}SizeCssClasses as ${pascalName}SizeCssClasses,
  ${internalPascalName}VariantStyleProps as ${pascalName}VariantStyleProps,
  ${internalPascalName}SizeStyleProps as ${pascalName}SizeStyleProps,
  ${internalPascalName}VariantStyles as ${pascalName}VariantStyles,
  ${internalPascalName}SizeStyles as ${pascalName}SizeStyles,
} from './${internalComponentName}Theme';
`;
  } else {
    // For V1 components, use direct exports
    return `export * from './${internalComponentName}';
export * from './${internalComponentName}Theme';
`;
  }
};

const generateTestTemplate = (componentName, pascalName, needsBothVersions) => {
  const internalComponentName = getInternalComponentName(componentName);
  const internalPascalName = getInternalPascalName(pascalName);

  if (needsBothVersions) {
    return `import { screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { ${internalPascalName}Controlled } from '../${internalComponentName}Controlled';
import { ${internalPascalName}Uncontrolled } from '../${internalComponentName}Uncontrolled';
import type { ${internalPascalName}ControlledProps, ${internalPascalName}UncontrolledProps } from '../types/${internalComponentName}';

describe('${pascalName}', () => {
  describe('Controlled', () => {
    const controlledProps: ${internalPascalName}ControlledProps = {
      variant: 'REGULAR',
      // Add controlled-specific props for testing
    };

    it('should render controlled version correctly', () => {
      const { container } = render(<${internalPascalName}Controlled {...controlledProps} />);

      const component = container.firstChild;
      expect(component).toBeInTheDocument();
    });

    it('should have no accessibility violations in controlled mode', async () => {
      const { container } = render(<${internalPascalName}Controlled {...controlledProps} />);

      const results = await axe(container);
      expect(results.violations).toHaveLength(0);
    });
  });

  describe('Uncontrolled', () => {
    const uncontrolledProps: ${internalPascalName}UncontrolledProps = {
      // Add uncontrolled-specific props for testing
      // defaultValue: 'some default value',
    };

    it('should render uncontrolled version correctly', () => {
      const { container } = render(<${internalPascalName}Uncontrolled {...uncontrolledProps} />);

      const component = container.firstChild;
      expect(component).toBeInTheDocument();
    });

    it('should have no accessibility violations in uncontrolled mode', async () => {
      const { container } = render(<${internalPascalName}Uncontrolled {...uncontrolledProps} />);

      const results = await axe(container);
      expect(results.violations).toHaveLength(0);
    });
  });
});
`;
  }

  return `import { screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { ${internalPascalName} } from '../${internalComponentName}';
import type { ${internalPascalName}Props } from '../types/${internalComponentName}';

describe('${pascalName}', () => {
  const defaultProps: ${internalPascalName}Props = {
    // Add default props for testing
  };

  it('should render component correctly', () => {
    const { container } = render(<${internalPascalName} {...defaultProps} />);

    const component = container.firstChild;
    expect(component).toBeInTheDocument();
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(<${internalPascalName} {...defaultProps} />);

    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
`;
};

const generateStoriesTemplate = (componentName, pascalName) => {
  const internalComponentName = getInternalComponentName(componentName);
  const internalPascalName = getInternalPascalName(pascalName);

  return `import type { Meta, StoryObj } from '@storybook/react-vite';

import { ${internalPascalName} as ${internalPascalName}Story } from '../${internalComponentName}';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: ${internalPascalName}Story,
  parameters: {
    figmaUrl: '<URL FOR THE COMPONENT DESIGN>',
    githubUrl: '<URL FOR THE COMPONENT SOURCE>',
    layout: 'centered',
  },
  tags: ['actions'],
  title: 'Components/<COMPONENT_GROUP>/${pascalName}',
} satisfies Meta<typeof ${internalPascalName}Story>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '${pascalName} Content',
    variant: 'REGULAR',
    size: 'MEDIUM',
  },
};
`;
};

const generateControlledStoriesTemplate = (componentName, pascalName) => {
  const internalComponentName = getInternalComponentName(componentName);
  const internalPascalName = getInternalPascalName(pascalName);

  return `import type { Meta, StoryObj } from '@storybook/react-vite';

import { ${internalPascalName}Controlled as ${internalPascalName}ControlledStory } from '../${internalComponentName}Controlled';
import { argtypes } from './argtypesControlled';

const meta = {
  argTypes: argtypes(),
  component: ${internalPascalName}ControlledStory,
  parameters: {
    figmaUrl: '<URL FOR THE COMPONENT DESIGN>',
    githubUrl: '<URL FOR THE COMPONENT SOURCE>',
    layout: 'centered',
  },
  tags: ['actions'],
  title: 'Components/<COMPONENT_GROUP>/${pascalName}/Controlled',
} satisfies Meta<typeof ${internalPascalName}ControlledStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'REGULAR',
    size: 'MEDIUM',
    children: '${pascalName} Controlled',
  },
};
`;
};

const generateUncontrolledStoriesTemplate = (componentName, pascalName) => {
  const internalComponentName = getInternalComponentName(componentName);
  const internalPascalName = getInternalPascalName(pascalName);

  return `import type { Meta, StoryObj } from '@storybook/react-vite';

import { ${internalPascalName}Uncontrolled as ${internalPascalName}UncontrolledStory } from '../${internalComponentName}Uncontrolled';
import { argtypes } from './argtypesUncontrolled';

const meta = {
  argTypes: argtypes(),
  component: ${internalPascalName}UncontrolledStory,
  parameters: {
    figmaUrl: '<URL FOR THE COMPONENT DESIGN>',
    githubUrl: '<URL FOR THE COMPONENT SOURCE>',
    layout: 'centered',
  },
  tags: ['actions'],
  title: 'Components/<COMPONENT_GROUP>/${pascalName}/Uncontrolled',
} satisfies Meta<typeof ${internalPascalName}UncontrolledStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'REGULAR',
    size: 'MEDIUM',
    children: '${pascalName} Uncontrolled',
    // defaultValue: 'Initial value',
  },
};
`;
};

const generateArgtypesTemplate = (componentName, pascalName) => {
  const internalComponentName = getInternalComponentName(componentName);
  const internalPascalName = getInternalPascalName(pascalName);

  return `import type { ArgTypes } from 'storybook/internal/types';

import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getSelectorArgTypes } from '@/lib/storybook/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      // Add properties to disable in Storybook controls
      'cssVariantClasses',
      'cssSizeClasses',
    ]),
    children: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'children',
      name: '${internalComponentName}',
    }),
    size: getSelectorArgTypes({
      name: '${internalComponentName}',
      options: { LARGE: 'LARGE', MEDIUM: 'MEDIUM', SMALL: 'SMALL' }, // Update with actual size options
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'size',
    }),
    variant: getVariantArgTypes({
      name: '${internalComponentName}',
      keyVariant: 'variant',
      variants: { REGULAR: 'REGULAR' }, // Update with actual variant options
      category: CATEGORY_CONTROL.MODIFIERS,
    }),
    // Add more component-specific argTypes here
  };
};
`;
};

const generateArgtypesControlledTemplate = (componentName, pascalName) => {
  const internalComponentName = getInternalComponentName(componentName);
  const internalPascalName = getInternalPascalName(pascalName);

  return `import type { ArgTypes } from 'storybook/internal/types';

import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getSelectorArgTypes } from '@/lib/storybook/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      // Add properties to disable in Storybook controls
      'cssVariantClasses',
      'cssSizeClasses',
    ]),
    children: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'children',
      name: '${internalComponentName}',
    }),
    size: getSelectorArgTypes({
      name: '${internalComponentName}',
      options: { LARGE: 'LARGE', MEDIUM: 'MEDIUM', SMALL: 'SMALL' }, // Update with actual size options
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'size',
    }),
    variant: getVariantArgTypes({
      name: '${internalComponentName}',
      keyVariant: 'variant',
      variants: { REGULAR: 'REGULAR' }, // Update with actual variant options
      category: CATEGORY_CONTROL.MODIFIERS,
    }),
    // Add more controlled-specific argTypes here
  };
};
`;
};

const generateArgtypesUncontrolledTemplate = (componentName, pascalName) => {
  const internalComponentName = getInternalComponentName(componentName);
  const internalPascalName = getInternalPascalName(pascalName);

  return `import type { ArgTypes } from 'storybook/internal/types';

import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getSelectorArgTypes } from '@/lib/storybook/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      // Add properties to disable in Storybook controls
      'cssVariantClasses',
      'cssSizeClasses',
    ]),
    children: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'children',
      name: '${internalComponentName}',
    }),
    size: getSelectorArgTypes({
      name: '${internalComponentName}',
      options: { LARGE: 'LARGE', MEDIUM: 'MEDIUM', SMALL: 'SMALL' }, // Update with actual size options
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'size',
    }),
    variant: getVariantArgTypes({
      name: '${internalComponentName}',
      keyVariant: 'variant',
      variants: { REGULAR: 'REGULAR' }, // Update with actual variant options
      category: CATEGORY_CONTROL.MODIFIERS,
    }),
    // Add more uncontrolled-specific argTypes here
  };
};
`;
};

const generateCssTemplate = (componentName, pascalName, hasStates) => {
  const internalComponentName = getInternalComponentName(componentName);
  const kebabCaseName = toKebabCase(internalComponentName);

  return `/*
 * ${pascalName} Component CSS - Venus Architecture
 *
 * This file contains STRUCTURAL BASE STYLES for the ${pascalName} component.
 * These styles are theme-independent and handle layout, positioning, and behaviors
 * that don't change based on design system tokens.
 *
 * VENUS HYBRID STYLING APPROACH:
 * - CSS Files (.css): Structural layout, positioning, behavioral styles
 * - Design System (styles.ts): Theme-based styles (colors, spacings, typography)
 *
 * DESIGN SYSTEM INTEGRATION:
 * - Theme styles: /lib/designSystem/kubit/components/${componentName}/styles.ts
 * - Variants: /lib/designSystem/kubit/components/${componentName}/variants.ts
 *
 * RESPONSIVE STRATEGY:
 * - CSS: Static structural responsive behavior (if needed)
 * - Design System: $mediaQueries for theme-based responsive styles
 * - Component Logic: useActiveBreakpoints hook for behavior-based responsive logic
 */

.kbt-${kebabCaseName} {
  /* === STRUCTURAL BASE STYLES === */
  /* Layout and positioning (theme-independent) */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: relative;

  /* Add additional structural properties here */
  /* Examples: gap, min-height, overflow, etc. */
}

/* === INTERACTION STATES === */
/* These handle behavior, not appearance (colors come from design system) */

/* Disabled state - structural behavior */
.kbt-${kebabCaseName}:disabled {
  cursor: not-allowed;
  pointer-events: none;
  /* Opacity and colors are handled by design system */
}

/* Focus state - accessibility requirement */
.kbt-${kebabCaseName}:focus-visible {
  outline: 2px solid var(--focus-color, #005fcc);
  outline-offset: 2px;
  /* Focus colors should come from design system when available */
}

/* === CSS CUSTOM PROPERTIES === */
/* For dynamic control of structural properties */
.kbt-${kebabCaseName} {
  --${kebabCaseName}-display: flex;
  --${kebabCaseName}-visibility: visible;
  /* Add more CSS variables as needed for dynamic behavior */
}

/* === UTILITY CLASSES === */
/* For conditional structural behavior */

.kbt-${kebabCaseName}--hidden {
  display: none;
}

.kbt-${kebabCaseName}--expanded {
  /* Add expanded state structural changes */
}

/* === IMPORTANT NOTES === */
/*
 * DO NOT ADD HERE:
 * - Colors (use design system COLORS tokens)
 * - Spacings/margins/padding (use design system SPACINGS tokens)
 * - Typography (use design system typography tokens)
 * - Border colors (use design system BORDERS tokens)
 * - Theme-based responsive styles (use $mediaQueries in styles.ts)
 *
 * ADD HERE:
 * - Layout properties (display, position, flexbox, grid)
 * - Structural behavior (cursor, z-index, overflow)
 * - Animations and transitions (that don't involve colors)
 * - Complex selectors and pseudo-elements
 * - CSS variables for dynamic properties
 */
`;
};

// Design System template generators
const generateDesignSystemIndexTemplate = (componentName, pascalName) => {
  return `export { get${pascalName}Styles } from './styles';
export * from './variants';
`;
};

const generateDesignSystemStylesTemplate = (componentName, pascalName) => {
  const internalComponentName = getInternalComponentName(componentName);
  const internalPascalName = getInternalPascalName(pascalName);

  return `import { BORDERS, RADIUS } from '../../foundations/borders';
import { COLORS } from '../../foundations/colors';
import { SPACINGS } from '../../foundations/spacings';
import { ${pascalName}SizeType, ${pascalName}VariantType } from './variants';

/**
 * ${internalPascalName} Design System Styles - Venus Architecture
 *
 * This file contains THEME-BASED STYLES for the ${pascalName} component.
 * These styles use design system tokens and handle theming, variants, and responsive behavior.
 *
 * INTEGRATION WITH CSS:
 * - CSS file (${internalComponentName}.css): Handles structural layout and positioning
 * - This file: Handles colors, spacings, typography, and theme-based responsive behavior
 *
 * RESPONSIVE STRATEGY:
 * - Use $mediaQueries for theme-based responsive styles
 * - Use component-level useActiveBreakpoints for logic-based responsive behavior
 */

// Common styles shared across all variants and sizes
const ${internalComponentName}CommonProps = {
  // Base container styling using design tokens
  border_radius: RADIUS.radius_50,
  display: 'flex',
  align_items: 'center',
  justify_content: 'center',

  // TODO: Replace with actual component-specific styles
  // Examples:
  // border: \`\${BORDERS.border_100} solid transparent\`,
  // transition: 'all 0.2s ease-in-out',
};

export const ${toUpperSnakeCase(pascalName)} = {
  // =================================================================
  // RESPONSIVE BEHAVIOR - Theme-based responsive styles
  // =================================================================
  // Use this for styles that change based on design tokens at different breakpoints
  $mediaQueries: {
    desktop: {
      ['default']: {
        ${internalComponentName}: {
          // TODO: Add desktop-specific theme styles
          padding: SPACINGS.spacing_300,
          gap: SPACINGS.spacing_200,
          // Add more desktop-specific styling here
        },
      },
    },
    mobile: {
      ['default']: {
        ${internalComponentName}: {
          // TODO: Add mobile-specific theme styles
          padding: SPACINGS.spacing_150,
          gap: SPACINGS.spacing_100,
          // Add more mobile-specific styling here
        },
      },
    },
    tablet: {
      ['default']: {
        ${internalComponentName}: {
          // TODO: Add tablet-specific theme styles
          padding: SPACINGS.spacing_200,
          gap: SPACINGS.spacing_150,
          // Add more tablet-specific styling here
        },
      },
    },
  },

  // =================================================================
  // SIZE VARIANTS - Applied via size prop
  // =================================================================
  // TODO: Replace placeholder sizes with actual component sizes
  [${pascalName}SizeType.LARGE]: {
    ...${internalComponentName}CommonProps,
    padding: SPACINGS.spacing_300,
    // Add more large size styling
  },
  [${pascalName}SizeType.MEDIUM]: {
    ...${internalComponentName}CommonProps,
    padding: SPACINGS.spacing_200,
    // Add more medium size styling
  },
  [${pascalName}SizeType.SMALL]: {
    ...${internalComponentName}CommonProps,
    padding: SPACINGS.spacing_150,
    // Add more small size styling
  },

  // =================================================================
  // STYLE VARIANTS - Applied via variant prop
  // =================================================================
  // TODO: Replace placeholder variant with actual component variants
  [${pascalName}VariantType.REGULAR]: {
    ...${internalComponentName}CommonProps,
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    border: \`\${BORDERS.border_100} solid \${COLORS.NEUTRAL.color_neutral_border_200}\`,
    color: COLORS.NEUTRAL.color_neutral_font_50,

    // TODO: Add hover, focus, and other interaction states
    // '&:hover': {
    //   background_color: COLORS.NEUTRAL.color_neutral_bg_200,
    // },
    // '&:focus': {
    //   border_color: COLORS.BRAND.color_brand_bg_100,
    // },
  },

  // TODO: Add more variants as needed (PRIMARY, SECONDARY, DANGER, etc.)
  // [${pascalName}VariantType.PRIMARY]: {
  //   ...${internalComponentName}CommonProps,
  //   background_color: COLORS.BRAND.color_brand_bg_100,
  //   color: COLORS.NEUTRAL.color_neutral_font_500,
  //   border: 'none',
  // },
};

// =================================================================
// NOTES FOR IMPLEMENTATION:
// =================================================================
// 1. Replace all TODO comments with actual component styling
// 2. Use design system tokens (COLORS, SPACINGS, BORDERS, etc.) instead of hardcoded values
// 3. Add appropriate variants for your component (PRIMARY, SECONDARY, etc.)
// 4. Add appropriate sizes if needed (XS, S, M, L, XL, etc.)
// 5. Include interaction states (hover, focus, active, disabled)
// 6. Use $mediaQueries for responsive behavior based on design tokens
// 7. Ensure consistency with existing Venus components
`;
};

const generateDesignSystemVariantsTemplate = (componentName, pascalName) => {
  return `export const ${pascalName}VariantType = {
  REGULAR: 'REGULAR',
  // Add more variants as needed
} as const;

export const ${pascalName}SizeType = {
  LARGE: 'LARGE',
  MEDIUM: 'MEDIUM',
  SMALL: 'SMALL',
} as const;
`;
};

const generateDesignSystemVariantStylesTemplate = (
  componentName,
  pascalName,
  hasStates,
) => {
  const internalComponentName = getInternalComponentName(componentName);
  const internalPascalName = getInternalPascalName(pascalName);
  const folderName = componentName; // Keep V2 in folder name if present

  const statesImport = hasStates
    ? `
import { ${internalPascalName}StateType } from '@/components/${folderName}/types/state';`
    : '';

  const statesStructure = hasStates
    ? `
  return {
    [${pascalName}VariantType.REGULAR]: {
      [${internalPascalName}StateType.DEFAULT]: get${internalPascalName}CommonStyles({
        // Add DEFAULT state specific styles here
      }),
      // Add more states here like:
      // [${internalPascalName}StateType.HOVER]: get${internalPascalName}CommonStyles({
      //   // Add HOVER state specific styles here
      // }),
    },
  };`
    : `
  return {
    [${pascalName}VariantType.REGULAR]: get${internalPascalName}CommonStyles({
      // Add REGULAR variant specific styles here
    }),
  };`;

  return `import { ${internalPascalName}StylesType } from '@/components/${folderName}/types/${internalComponentName}Theme';${statesImport}

import { get${internalPascalName}CommonStyles } from '../commonStyles';
import { ${pascalName}VariantType } from '../variants';

export const get${internalPascalName}RegularStyles = (): ${internalPascalName}StylesType<${pascalName}VariantType> => {${statesStructure}
};
`;
};

// File creation functions
const createDirectory = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✅ Created directory: ${dirPath}`);
  }
};

const createFile = (filePath, content) => {
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Created file: ${filePath}`);
};

// File update functions
const updateComponentsIndex = (componentName) => {
  const indexFilePath = path.join(
    __dirname,
    '..',
    'src',
    'components',
    'index.ts',
  );

  try {
    let content = fs.readFileSync(indexFilePath, 'utf8');
    const exportLine = `export * from './${componentName}';`;

    if (!content.includes(exportLine)) {
      content += `\n${exportLine}`;
      fs.writeFileSync(indexFilePath, content, 'utf8');
      console.log(`✅ Updated: src/components/index.ts`);
    }
  } catch (error) {
    console.log(`⚠️  Could not update components/index.ts: ${error.message}`);
  }
};

const updateKubitComponentsStyles = (componentName, pascalName, folderName) => {
  const stylesFilePath = path.join(
    __dirname,
    '..',
    'src',
    'lib',
    'designSystem',
    'kubit',
    'components',
    'styles.ts',
  );

  try {
    let content = fs.readFileSync(stylesFilePath, 'utf8');
    const exportLine = `export * from './${folderName}/styles';`;

    if (!content.includes(exportLine)) {
      content += `${exportLine}\n`;
      fs.writeFileSync(stylesFilePath, content, 'utf8');
      console.log(`✅ Updated: lib/designSystem/kubit/components/styles.ts`);
    }
  } catch (error) {
    console.log(`⚠️  Could not update styles.ts: ${error.message}`);
  }
};

const updateKubitComponentsVariants = (
  componentName,
  pascalName,
  folderName,
) => {
  const variantsFilePath = path.join(
    __dirname,
    '..',
    'src',
    'lib',
    'designSystem',
    'kubit',
    'components',
    'variants.ts',
  );

  try {
    let content = fs.readFileSync(variantsFilePath, 'utf8');
    const exportLine = `export * from './${folderName}/variants';`;

    if (!content.includes(exportLine)) {
      content += `${exportLine}\n`;
      fs.writeFileSync(variantsFilePath, content, 'utf8');
      console.log(`✅ Updated: lib/designSystem/kubit/components/variants.ts`);
    }
  } catch (error) {
    console.log(`⚠️  Could not update variants.ts: ${error.message}`);
  }
};

const updateKubitTheme = (componentName, pascalName, folderName) => {
  const themeFilePath = path.join(
    __dirname,
    '..',
    'src',
    'lib',
    'designSystem',
    'kubit',
    'components',
    'theme.ts',
  );

  try {
    let content = fs.readFileSync(themeFilePath, 'utf8');
    const upperSnakeName = toUpperSnakeCase(pascalName);
    const importLine = `import { ${upperSnakeName} } from './${folderName}/styles';`;

    // Add import at the beginning (in alphabetical order)
    if (!content.includes(importLine)) {
      const lines = content.split('\n');
      const importIndex = lines.findIndex(
        (line) => line.startsWith('import') && line > importLine,
      );
      if (importIndex > 0) {
        lines.splice(importIndex, 0, importLine);
      } else {
        // Add at the end of imports
        const lastImportIndex = lines.findLastIndex((line) =>
          line.startsWith('import'),
        );
        lines.splice(lastImportIndex + 1, 0, importLine);
      }

      // Add to KUBIT_STYLES export
      const exportStartIndex = lines.findIndex((line) =>
        line.includes('export const KUBIT_STYLES = {'),
      );
      if (exportStartIndex > 0) {
        const exportEndIndex = lines.findIndex(
          (line, index) => index > exportStartIndex && line.includes('};'),
        );

        // Find correct alphabetical position
        let insertIndex = exportStartIndex + 1;
        for (let i = exportStartIndex + 1; i < exportEndIndex; i++) {
          const line = lines[i].trim();
          if (line && !line.startsWith('//') && line < `  ${upperSnakeName},`) {
            insertIndex = i + 1;
          } else {
            break;
          }
        }

        lines.splice(insertIndex, 0, `  ${upperSnakeName},`);
      }

      content = lines.join('\n');
      fs.writeFileSync(themeFilePath, content, 'utf8');
      console.log(`✅ Updated: lib/designSystem/kubit/components/theme.ts`);
    }
  } catch (error) {
    console.log(`⚠️  Could not update theme.ts: ${error.message}`);
  }
};

// Main component generation function
const generateComponent = async (componentName, options) => {
  const { hasStates, needsBothVersions, needsResponsive } = options;
  const pascalName = toPascalCase(componentName);

  // For V2 components, use the folder name WITH V2 but internal names WITHOUT V2
  const folderName = componentName; // Keep V2 in folder name if present
  const internalComponentName = getInternalComponentName(componentName);
  const internalPascalName = getInternalPascalName(pascalName);

  console.log(`\n🚀 Generating component: ${pascalName}\n`);

  // Create main component directory (with V2 in name if applicable)
  const componentDir = path.join(
    __dirname,
    '..',
    'src',
    'components',
    folderName,
  );
  createDirectory(componentDir);

  // Create subdirectories
  const typesDir = path.join(componentDir, 'types');
  const storiesDir = path.join(componentDir, 'stories');
  const testsDir = path.join(componentDir, '__tests__');

  createDirectory(typesDir);
  createDirectory(storiesDir);
  createDirectory(testsDir);

  // Generate main component files (use internal names for file content)
  const standAloneContent = generateStandAloneTemplate(
    componentName,
    pascalName,
    needsResponsive,
  );
  const cssContent = generateCssTemplate(
    internalComponentName,
    internalPascalName,
    hasStates,
  );
  const indexContent = generateIndexTemplate(
    componentName,
    pascalName,
    needsBothVersions,
  ); // Use componentName to detect V2 properly

  createFile(
    path.join(componentDir, `${internalComponentName}StandAlone.tsx`),
    standAloneContent,
  );
  createFile(
    path.join(componentDir, `${internalComponentName}.css`),
    cssContent,
  );
  createFile(path.join(componentDir, 'index.ts'), indexContent);

  // Generate component files based on control type (use original componentName for styles)
  if (needsBothVersions) {
    const controlledContent = generateControlledTemplate(
      componentName,
      pascalName,
      hasStates,
    );
    const uncontrolledContent = generateUncontrolledTemplate(
      componentName,
      pascalName,
    );

    createFile(
      path.join(componentDir, `${internalComponentName}Controlled.tsx`),
      controlledContent,
    );
    createFile(
      path.join(componentDir, `${internalComponentName}Uncontrolled.tsx`),
      uncontrolledContent,
    );
  } else {
    const mainComponentContent = generateMainComponentTemplate(
      componentName,
      pascalName,
      hasStates,
    );
    createFile(
      path.join(componentDir, `${internalComponentName}.tsx`),
      mainComponentContent,
    );
  }

  // Generate types (use internal names for files, but export types need original names for V2 compatibility)
  const typesIndexContent = generateTypesIndexTemplate(
    componentName,
    hasStates,
  ); // Use componentName to keep V2
  const mainTypeContent = generateMainTypeTemplate(
    componentName,
    pascalName,
    needsBothVersions,
    hasStates,
  ); // Use componentName to keep V2
  const themeTypeContent = generateThemeTypeTemplate(
    componentName,
    pascalName,
    hasStates,
  ); // Use componentName to keep V2

  createFile(path.join(typesDir, 'index.ts'), typesIndexContent);
  createFile(
    path.join(typesDir, `${internalComponentName}.ts`),
    mainTypeContent,
  );
  createFile(
    path.join(typesDir, `${internalComponentName}Theme.ts`),
    themeTypeContent,
  );

  // Generate state file if needed (use internal name for file, but state names should reflect original)
  if (hasStates) {
    const stateContent = generateStateTemplate(
      internalComponentName,
      pascalName,
    );
    createFile(path.join(typesDir, 'state.ts'), stateContent);
  }

  // Generate test (use internal name for file names, but test names should reflect original)
  const testContent = generateTestTemplate(
    internalComponentName,
    pascalName,
    needsBothVersions,
  );
  createFile(
    path.join(testsDir, `${internalComponentName}.test.tsx`),
    testContent,
  );

  // Generate stories (use internal names for file names, but component names should be original)
  if (needsBothVersions) {
    const controlledStoriesContent = generateControlledStoriesTemplate(
      internalComponentName,
      pascalName,
    );
    const uncontrolledStoriesContent = generateUncontrolledStoriesTemplate(
      internalComponentName,
      pascalName,
    );
    const controlledArgtypesContent = generateArgtypesControlledTemplate(
      internalComponentName,
      pascalName,
    );
    const uncontrolledArgtypesContent = generateArgtypesUncontrolledTemplate(
      internalComponentName,
      pascalName,
    );

    createFile(
      path.join(storiesDir, `${internalComponentName}Controlled.stories.tsx`),
      controlledStoriesContent,
    );
    createFile(
      path.join(storiesDir, `${internalComponentName}Uncontrolled.stories.tsx`),
      uncontrolledStoriesContent,
    );
    createFile(
      path.join(storiesDir, 'argtypesControlled.ts'),
      controlledArgtypesContent,
    );
    createFile(
      path.join(storiesDir, 'argtypesUncontrolled.ts'),
      uncontrolledArgtypesContent,
    );
  } else {
    const storiesContent = generateStoriesTemplate(
      internalComponentName,
      pascalName,
    );
    const argtypesContent = generateArgtypesTemplate(
      internalComponentName,
      pascalName,
    );

    createFile(
      path.join(storiesDir, `${internalComponentName}.stories.tsx`),
      storiesContent,
    );
    createFile(path.join(storiesDir, 'argtypes.ts'), argtypesContent);
  }

  // Generate Kubit Design System files
  console.log('\n📐 Generating Kubit Design System files...\n');

  const kubitDesignSystemDir = path.join(
    __dirname,
    '..',
    'src',
    'lib',
    'designSystem',
    'kubit',
    'components',
    folderName,
  );

  createDirectory(kubitDesignSystemDir);

  const kubitDesignSystemStylesContent = generateDesignSystemStylesTemplate(
    componentName,
    pascalName,
  );
  const kubitDesignSystemVariantsContent = generateDesignSystemVariantsTemplate(
    componentName,
    pascalName,
  );

  createFile(
    path.join(kubitDesignSystemDir, 'styles.ts'),
    kubitDesignSystemStylesContent,
  );
  createFile(
    path.join(kubitDesignSystemDir, 'variants.ts'),
    kubitDesignSystemVariantsContent,
  );

  // Update index files and constants
  console.log(`\n🔄 Updating existing system files...`);

  updateComponentsIndex(folderName);
  updateKubitComponentsStyles(folderName, pascalName, folderName);
  updateKubitComponentsVariants(folderName, pascalName, folderName);
  updateKubitTheme(folderName, pascalName, folderName);

  console.log(`\n✨ Component ${pascalName} generated successfully!`);
  console.log(`📁 Location: src/components/${folderName}/`);

  console.log(`\n� Files generated:`);
  console.log(`   • ${internalComponentName}StandAlone.tsx`);
  if (needsBothVersions) {
    console.log(`   • ${internalComponentName}Controlled.tsx`);
    console.log(`   • ${internalComponentName}Uncontrolled.tsx`);
  } else {
    console.log(`   • ${internalComponentName}.tsx`);
  }
  console.log(`   • ${internalComponentName}.css`);
  console.log(`   • index.ts`);
  console.log(`   • types/index.ts`);
  console.log(`   • types/${internalComponentName}.ts`);
  console.log(`   • types/${internalComponentName}Theme.ts`);
  if (hasStates) {
    console.log(`   • types/state.ts`);
  }
  console.log(`   • stories/${internalComponentName}.stories.tsx`);
  if (needsBothVersions) {
    console.log(`   • stories/${internalComponentName}Controlled.stories.tsx`);
    console.log(
      `   • stories/${internalComponentName}Uncontrolled.stories.tsx`,
    );
    console.log(`   • stories/argtypesControlled.ts`);
    console.log(`   • stories/argtypesUncontrolled.ts`);
  }
  console.log(`   • stories/argtypes.ts`);
  console.log(`   • __tests__/${internalComponentName}.test.tsx`);
  console.log(`\n📁 Design System files (Venus Hybrid Architecture):`);
  console.log(`   • lib/designSystem/kubit/components/${folderName}/styles.ts`);
  console.log(
    `     └─ Theme-based styles: colors, spacings, typography, responsive variants`,
  );
  console.log(
    `   • lib/designSystem/kubit/components/${folderName}/variants.ts`,
  );
  console.log(
    `     └─ Component variant constants (PRIMARY, SECONDARY, sizes, etc.)`,
  );

  console.log(`\n📝 Next steps:`);
  console.log(`\n🎯 Component Development:`);
  console.log(
    `1. Implement the component logic in ${internalComponentName}StandAlone.tsx`,
  );
  console.log(`   • Add proper component content and behavior`);
  console.log(`   • Use semantic HTML elements`);
  console.log(`   • Implement accessibility attributes (ARIA, roles, etc.)`);
  console.log(`2. Add structural CSS in ${internalComponentName}.css`);
  console.log(`   • Layout, positioning, and behavior-based styles`);
  console.log(`   • Focus states, disabled states, transitions`);
  console.log(`   • CSS variables for dynamic properties`);
  console.log(
    `3. Update TypeScript types in types/${internalComponentName}.ts as needed`,
  );
  if (hasStates) {
    console.log(`4. Define component states in types/state.ts`);
    console.log(`   • Add HOVER, PRESSED, FOCUSED, etc. as needed`);
    console.log(`5. Add state logic in component files`);
    console.log(`   • Use useManageState hook for complex state management`);
  }

  console.log(`\n🎨 Design System Integration:`);
  console.log(
    `${hasStates ? '6' : '4'}. Configure design system styles in lib/designSystem/kubit/components/${folderName}/styles.ts`,
  );
  console.log(
    `   • Update variant styles with actual design tokens (COLORS, SPACINGS, etc.)`,
  );
  console.log(`   • Add responsive behavior via $mediaQueries`);
  console.log(`   • Remove placeholder styles and add real component variants`);
  console.log(
    `${hasStates ? '7' : '5'}. Update variants in lib/designSystem/kubit/components/${folderName}/variants.ts`,
  );
  console.log(
    `   • Replace placeholder variants with actual component variants`,
  );
  console.log(`   • Follow naming convention: PRIMARY, SECONDARY, etc.`);

  if (needsResponsive) {
    console.log(`${hasStates ? '8' : '6'}. Add responsive logic:`);
    console.log(
      `   • CSS: Use $mediaQueries in styles.ts for theme-based responsive styles`,
    );
    console.log(
      `   • Logic: Use useActiveBreakpoints hook for behavior-based responsive logic`,
    );
  }

  console.log(`\n📖 Documentation & Testing:`);
  console.log(
    `${hasStates ? (needsResponsive ? '9' : '8') : needsResponsive ? '7' : '6'}. Update Storybook stories in stories/${internalComponentName}.stories.tsx`,
  );
  console.log(`   • Replace placeholder content with real examples`);
  console.log(`   • Add multiple story variants showing different use cases`);
  console.log(`   • Update argtypes.ts with actual props and variants`);
  console.log(
    `${hasStates ? (needsResponsive ? '10' : '9') : needsResponsive ? '8' : '7'}. Write comprehensive tests in __tests__/${internalComponentName}.test.tsx`,
  );
  console.log(`   • Test all component variants and sizes`);
  console.log(`   • Test user interactions (click, keyboard navigation, etc.)`);
  console.log(`   • Test accessibility with axe`);
  console.log(`   • Test responsive behavior if applicable`);

  console.log(`\n💡 Venus Architecture Notes:`);
  console.log(
    `   • This component uses Venus hybrid styling: CSS for structure + Design System for theming`,
  );
  console.log(
    `   • CSS files handle layout, positioning, and theme-independent behaviors`,
  );
  console.log(
    `   • Design System handles colors, spacings, typography, and responsive variants`,
  );
  console.log(
    `   • Use hooks from /lib/hooks/ (useClassname, useManageState, etc.)`,
  );
  console.log(
    `   • Follow Venus naming conventions: kbt- prefix, snake_case for component names`,
  );
  console.log(
    `   • Import design tokens from foundations (COLORS, SPACINGS, BORDERS, etc.)`,
  );
};

// Interactive prompts
const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
};

const askForStates = async () => {
  const hasStates = await askQuestion(
    '🎯 Will this component have states (DEFAULT, HOVER, PRESSED, etc.)? (y/n): ',
  );
  return hasStates.toLowerCase() === 'y' || hasStates.toLowerCase() === 'yes';
};

const askForControlType = async () => {
  const needsBothVersions = await askQuestion(
    '🎛️  Does this component need both Controlled and Uncontrolled versions? (y/n): ',
  );
  return (
    needsBothVersions.toLowerCase() === 'y' ||
    needsBothVersions.toLowerCase() === 'yes'
  );
};

const askForResponsive = async () => {
  const needsResponsive = await askQuestion(
    '📱 Will this component need responsive logic (different behavior on mobile, tablet, desktop)? (y/n): ',
  );
  return (
    needsResponsive.toLowerCase() === 'y' ||
    needsResponsive.toLowerCase() === 'yes'
  );
};

const main = async () => {
  // Parse command line arguments
  const args = parseArguments(process.argv.slice(2));

  // Handle unknown arguments
  if (args.unknownArgs.length > 0) {
    console.log('❌ Error: Invalid arguments detected:');
    args.unknownArgs.forEach((error) => console.log(`   • ${error}`));
    console.log('');
    showHelp();
    process.exit(1);
  }

  // Handle help and version flags
  if (args.help) {
    showHelp();
    process.exit(0);
  }

  if (args.version) {
    showVersion();
    process.exit(0);
  }

  // Determine mode and run accordingly
  if (args.mode === 'automatic') {
    await runAutomaticMode(args);
  } else {
    await runInteractiveMode();
  }
};

/**
 * Run the script in automatic mode using CLI arguments
 */
const runAutomaticMode = async (args) => {
  console.log('🎨 WEB UI Components - New Component Generator');
  console.log('=====================================================');
  console.log('🤖 Running in automatic mode\n');

  try {
    // Validate component name
    const validation = validateComponentName(args.name);
    if (!validation.valid) {
      showUsageError(validation.error);
      process.exit(1);
    }

    // Convert to camelCase for file names
    const componentName = toCamelCase(args.name);

    // Use CLI arguments for options
    const hasStates = args.states;
    const needsBothVersions = args.controlled;
    const needsResponsive = args.responsive;

    // Show configuration summary
    console.log('� Component Configuration:');
    console.log(`   Component name: ${toPascalCase(componentName)}`);
    console.log(`   Variants: REGULAR (default - can be extended later)`);
    console.log(
      `   States: ${hasStates ? 'DEFAULT (can be extended later)' : 'None'}`,
    );
    console.log(
      `   Control versions: ${needsBothVersions ? 'Both Controlled and Uncontrolled' : 'Single component'}`,
    );
    console.log(`   Responsive: ${needsResponsive ? 'Yes' : 'No'}`);

    // Generate component directly
    await generateComponent(componentName, {
      hasStates,
      needsBothVersions,
      needsResponsive,
    });
  } catch (error) {
    console.error('❌ Error generating component:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
};

/**
 * Run the script in interactive mode (original behavior)
 */
const runInteractiveMode = async () => {
  console.log('🎨 WEB UI Components - New Component Generator');
  console.log('=====================================================');
  console.log('💬 Running in interactive mode\n');

  try {
    // Ask for component name
    let componentName = await askQuestion(
      '📝 Enter the component name (PascalCase): ',
    );

    // Validate component name
    const validation = validateComponentName(componentName);
    if (!validation.valid) {
      console.log(`❌ ${validation.error}`);
      process.exit(1);
    }

    // Convert to camelCase for file names
    componentName = toCamelCase(componentName);

    // Ask for states
    const hasStates = await askForStates();

    // Ask for control type
    const needsBothVersions = await askForControlType();

    // Ask for responsive support
    const needsResponsive = await askForResponsive();

    console.log('\n📋 Summary:');
    console.log(`   Component name: ${toPascalCase(componentName)}`);
    console.log(`   Variants: REGULAR (default - can be extended later)`);
    console.log(
      `   States: ${hasStates ? 'DEFAULT (can be extended later)' : 'None'}`,
    );
    console.log(
      `   Control versions: ${needsBothVersions ? 'Both Controlled and Uncontrolled' : 'Single component'}`,
    );
    console.log(`   Responsive: ${needsResponsive ? 'Yes' : 'No'}`);

    const confirm = await askQuestion('\n✅ Generate component? (y/n): ');

    if (confirm.toLowerCase() === 'y' || confirm.toLowerCase() === 'yes') {
      await generateComponent(componentName, {
        hasStates,
        needsBothVersions,
        needsResponsive,
      });
    } else {
      console.log('❌ Component generation cancelled');
    }
  } catch (error) {
    console.error('❌ Error generating component:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
};

// Run the script
if (require.main === module) {
  main();
}

module.exports = {
  generateComponent,
  toPascalCase,
  toCamelCase,
  toKebabCase,
  toSnakeCase,
  toUpperSnakeCase,
  toComponentName,
};
