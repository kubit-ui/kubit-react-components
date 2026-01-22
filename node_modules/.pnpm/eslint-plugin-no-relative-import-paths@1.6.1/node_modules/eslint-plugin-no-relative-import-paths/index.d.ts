import type { Rule } from 'eslint';

declare const plugin: {
  rules: {
    [key: string]: Rule.RuleModule;
  };
};

export = plugin;
