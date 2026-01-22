export async function createEmberParsers() {
    try {
        // @ts-expect-error This plugin is not typed
        const emberPlugin = await import('prettier-plugin-ember-template-tag');
        const { parsers } = (emberPlugin.default || emberPlugin);
        return { parsers };
    }
    catch {
        return {};
    }
}
