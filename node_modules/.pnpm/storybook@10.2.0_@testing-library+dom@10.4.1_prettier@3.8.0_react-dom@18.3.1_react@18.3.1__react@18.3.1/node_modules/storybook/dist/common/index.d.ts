import * as storybook_internal_types from 'storybook/internal/types';
import { CLIOptions, LoadOptions, BuilderOptions, StorybookConfigRaw, PresetConfig, CoreCommon_ResolvedAddonPreset, CoreCommon_ResolvedAddonVirtual, LoadedPreset, Presets, CoreCommon_AddonInfo, SupportedFramework, SupportedRenderer, SupportedBuilder, Options as Options$2, CoreWebpackCompiler, CoreCommon_StorybookInfo, Ref, StorybookConfig, StoriesEntry, NormalizedStoriesSpecifier, PackageJson } from 'storybook/internal/types';
export { PackageJson } from 'storybook/internal/types';
import { WriteStream } from 'node:fs';
import { ChildProcess } from 'node:child_process';
import { SignalConstants } from 'node:os';
import { Duplex, Readable, Writable } from 'node:stream';
import { TransformStream, ReadableStream, WritableStream } from 'node:stream/web';
import { ConfigFile } from 'storybook/internal/csf-tools';
import { types } from 'storybook/internal/babel';

declare const _default: {
    '@storybook/addon-a11y': string;
    '@storybook/addon-docs': string;
    '@storybook/addon-links': string;
    '@storybook/addon-onboarding': string;
    'storybook-addon-pseudo-states': string;
    '@storybook/addon-themes': string;
    '@storybook/addon-vitest': string;
    '@storybook/builder-vite': string;
    '@storybook/builder-webpack5': string;
    storybook: string;
    '@storybook/angular': string;
    '@storybook/ember': string;
    '@storybook/html-vite': string;
    '@storybook/nextjs': string;
    '@storybook/nextjs-vite': string;
    '@storybook/preact-vite': string;
    '@storybook/react-native-web-vite': string;
    '@storybook/react-vite': string;
    '@storybook/react-webpack5': string;
    '@storybook/server-webpack5': string;
    '@storybook/svelte-vite': string;
    '@storybook/sveltekit': string;
    '@storybook/vue3-vite': string;
    '@storybook/web-components-vite': string;
    sb: string;
    '@storybook/cli': string;
    '@storybook/codemod': string;
    '@storybook/core-webpack': string;
    'create-storybook': string;
    '@storybook/csf-plugin': string;
    'eslint-plugin-storybook': string;
    '@storybook/react-dom-shim': string;
    '@storybook/preset-create-react-app': string;
    '@storybook/preset-react-webpack': string;
    '@storybook/preset-server-webpack': string;
    '@storybook/html': string;
    '@storybook/preact': string;
    '@storybook/react': string;
    '@storybook/server': string;
    '@storybook/svelte': string;
    '@storybook/vue3': string;
    '@storybook/web-components': string;
};

type InterPresetOptions = Omit<CLIOptions & LoadOptions & BuilderOptions & {
    isCritical?: boolean;
    build?: StorybookConfigRaw['build'];
}, 'frameworkPresets'>;
declare function filterPresetsConfig(presetsConfig: PresetConfig[]): PresetConfig[];
/**
 * Parse an addon into either a managerEntries or a preset. Throw on invalid input.
 *
 * Valid inputs:
 *
 * - `'@storybook/addon-docs/preset' => { type: 'presets', item }`
 * - `'@storybook/addon-docs' => { type: 'presets', item: '@storybook/addon-docs/preset' }`
 * - `{ name: '@storybook/addon-docs(/preset)?', options: { } } => { type: 'presets', item: { name:
 *   '@storybook/addon-docs/preset', options } }`
 */
declare const resolveAddonName: (configDir: string, name: string, options: any) => CoreCommon_ResolvedAddonPreset | CoreCommon_ResolvedAddonVirtual | undefined;
declare function loadPreset(input: PresetConfig, level: number, storybookOptions: InterPresetOptions): Promise<LoadedPreset[]>;
declare function getPresets(presets: PresetConfig[], storybookOptions: InterPresetOptions): Promise<Presets>;
declare function loadAllPresets(options: CLIOptions & LoadOptions & BuilderOptions & {
    corePresets: PresetConfig[];
    overridePresets: PresetConfig[];
    /** Whether preset failures should be critical or not */
    isCritical?: boolean;
    build?: StorybookConfigRaw['build'];
}): Promise<Presets>;

interface FileSystemCacheOptions {
    ns?: string;
    prefix?: string;
    hash_alg?: string;
    basePath?: string;
    ttl?: number;
}
interface CacheItem {
    key: string;
    content?: any;
    value?: any;
}
interface CacheSetOptions {
    ttl?: number;
    encoding?: BufferEncoding;
}
declare class FileSystemCache {
    private prefix;
    private hash_alg;
    private cache_dir;
    private ttl;
    constructor(options?: FileSystemCacheOptions);
    private generateHash;
    private isExpired;
    private parseCacheData;
    private parseSetData;
    get<T = any>(name: string, fallback?: T): Promise<T>;
    getSync<T>(name: string, fallback?: T): T;
    set<T>(name: string, data: T, orgOpts?: CacheSetOptions | number): Promise<void>;
    setSync<T>(name: string, data: T, orgOpts?: CacheSetOptions | number): void;
    setMany(items: CacheItem[], options?: CacheSetOptions): Promise<void>;
    setManySync(items: CacheItem[], options?: CacheSetOptions): void;
    remove(name: string): Promise<void>;
    removeSync(name: string): void;
    clear(): Promise<void>;
    clearSync(): void;
    getAll(): Promise<CacheItem[]>;
    load(): Promise<{
        files: CacheItem[];
    }>;
}
declare function createFileSystemCache(options: FileSystemCacheOptions): FileSystemCache;

declare const cache: FileSystemCache;

declare global {
	interface SymbolConstructor {
		readonly observable: symbol;
	}
}

// Helper type. Not useful on its own.
type Without<FirstType, SecondType> = {[KeyType in Exclude<keyof FirstType, keyof SecondType>]?: never};

/**
Create a type that has mutually exclusive keys.

This type was inspired by [this comment](https://github.com/Microsoft/TypeScript/issues/14094#issuecomment-373782604).

This type works with a helper type, called `Without`. `Without<FirstType, SecondType>` produces a type that has only keys from `FirstType` which are not present on `SecondType` and sets the value type for these keys to `never`. This helper type is then used in `MergeExclusive` to remove keys from either `FirstType` or `SecondType`.

@example
```
import type {MergeExclusive} from 'type-fest';

interface ExclusiveVariation1 {
	exclusive1: boolean;
}

interface ExclusiveVariation2 {
	exclusive2: string;
}

type ExclusiveOptions = MergeExclusive<ExclusiveVariation1, ExclusiveVariation2>;

let exclusiveOptions: ExclusiveOptions;

exclusiveOptions = {exclusive1: true};
//=> Works
exclusiveOptions = {exclusive2: 'hi'};
//=> Works
exclusiveOptions = {exclusive1: true, exclusive2: 'hi'};
//=> Error
```

@category Object
*/
type MergeExclusive<FirstType, SecondType> =
	(FirstType | SecondType) extends object ?
		(Without<FirstType, SecondType> & SecondType) | (Without<SecondType, FirstType> & FirstType) :
		FirstType | SecondType;

declare function temporaryDirectory({ prefix }?: {
    prefix?: string | undefined;
}): Promise<string>;
type FileOptions = MergeExclusive<{
    /**
     * File extension.
     *
     * Mutually exclusive with the `name` option.
     *
     * _You usually won't need this option. Specify it only when actually needed._
     */
    readonly extension?: string;
}, {
    /**
     * Filename.
     *
     * Mutually exclusive with the `extension` option.
     *
     * _You usually won't need this option. Specify it only when actually needed._
     */
    readonly name?: string;
}>;
declare function temporaryFile({ name, extension }?: FileOptions): Promise<string>;
declare function parseList(str: string): string[];
declare function getEnvConfig(program: Record<string, any>, configEnv: Record<string, any>): void;
/**
 * Given a file name, creates an object with utilities to manage a log file. It creates a temporary
 * log file which you can manage with the returned functions. You can then decide whether to move
 * the log file to the users project, or remove it.
 *
 * @example
 *
 * ```ts
 * const { logStream, moveLogFile, removeLogFile, clearLogFile, readLogFile } =
 *   await createLogStream('my-log-file.log');
 *
 * // SCENARIO 1:
 * // you can write custom messages to generate a log file
 * logStream.write('my log message');
 * await moveLogFile();
 *
 * // SCENARIO 2:
 * // or you can pass it to stdio and capture the output of that command
 * try {
 *   await executeCommand({
 *     command: 'pnpm',
 *     args: ['info', packageName, ...args],
 *     // do not output to the user, and send stdio and stderr to log file
 *     stdio: ['ignore', logStream, logStream],
 *   });
 * } catch (err) {
 *   // do something with the log file content
 *   const output = await readLogFile();
 *   // move the log file to the users project
 *   await moveLogFile();
 * }
 * // success, no need to keep the log file
 * await removeLogFile();
 * ```
 */
declare const createLogStream: (logFileName?: string) => Promise<{
    moveLogFile: () => Promise<void>;
    removeLogFile: () => Promise<void>;
    clearLogFile: () => Promise<void>;
    readLogFile: () => Promise<string>;
    logStream: WriteStream;
}>;
declare const isCorePackage: (pkg: string) => boolean;
declare const isSatelliteAddon: (pkg: string) => boolean;

interface Options$1 {
    before: CoreCommon_AddonInfo;
    after: CoreCommon_AddonInfo;
    configFile: string;
    getConfig: (path: string) => any;
}
declare const checkAddonOrder: ({ before, after, configFile, getConfig }: Options$1) => Promise<void>;

declare function loadEnvs(options?: {
    production?: boolean;
}): Promise<{
    stringified: Record<string, string>;
    raw: Record<string, string>;
}>;
declare const stringifyEnvs: (raw: Record<string, string>) => Record<string, string>;
declare const stringifyProcessEnvs: (raw: Record<string, string>) => Record<string, string>;
declare const optionalEnvToBoolean: (input: string | undefined) => boolean | undefined;
/**
 * Consistently determine if we are in a CI environment
 *
 * Doing Boolean(process.env.CI) or !process.env.CI is not enough, because users might set CI=false
 * or CI=0, which would be truthy, and thus return true in those cases.
 */
declare function isCI(): boolean | undefined;

declare const commonGlobOptions: (glob: string) => {
    ignore?: undefined;
} | {
    ignore: string[];
};

declare const frameworkToRenderer: Record<SupportedFramework | SupportedRenderer, SupportedRenderer>;
declare const frameworkToBuilder: Record<SupportedFramework, SupportedBuilder>;

/**
 * Builder options can be specified in `core.builder.options` or `framework.options.builder`.
 * Preference is given here to `framework.options.builder` if both are specified.
 */
declare function getBuilderOptions<T extends Record<string, any>>(options: Options$2): Promise<T | Record<string, never>>;

/** Framework can be a string or an object. This utility always returns the string name. */
declare function getFrameworkName(options: Options$2): Promise<string>;
/**
 * Extracts the proper framework name from the given framework field. The framework field can be the
 * framework package name or a path to the framework package.
 *
 * @example
 *
 * ```ts
 * extractFrameworkPackageName('/path/to/@storybook/angular'); // => '@storybook/angular'
 * extractFrameworkPackageName('@third-party/framework'); // => '@third-party/framework'
 * ```
 */
declare const extractFrameworkPackageName: (framework: string) => string;

/**
 * Render is set as a string on core. It must be set by the framework It falls back to the framework
 * name if not set
 */
declare function getRendererName(options: Options$2): Promise<string>;
/**
 * Extracts the proper renderer name from the given framework name.
 *
 * @example
 *
 * ```ts
 * extractRenderer('@storybook/react'); // => 'react'
 * extractRenderer('@storybook/angular'); // => 'angular'
 * extractRenderer('@third-party/framework'); // => null
 * ```
 *
 * @param frameworkName The name of the framework.
 * @returns The name of the renderer.
 */
declare function extractRenderer(frameworkName: string): Promise<storybook_internal_types.SupportedRenderer | null>;

declare function getStorybookConfiguration(storybookScript: string, shortName: string, longName: string): string | null;

declare const rendererPackages: Record<string, SupportedRenderer>;
declare const frameworkPackages: Record<string, SupportedFramework>;
declare const builderPackages: Record<string, SupportedBuilder>;
declare const compilerPackages: Record<string, CoreWebpackCompiler>;
declare const findConfigFile: (prefix: string, configDir: string) => string | null;
declare const getConfigInfo: (configDir?: string) => {
    configDir: string;
    mainConfigPath: string | null;
    previewConfigPath: string | null;
    managerConfigPath: string | null;
};
declare const getStorybookInfo: (configDir?: string, cwd?: string) => Promise<CoreCommon_StorybookInfo>;

declare const getAutoRefs: (options: Options$2) => Promise<Record<string, Ref>>;
declare function getRefs(options: Options$2): Promise<Record<string, Ref>>;

declare function globToRegexp(glob: string): RegExp;

declare class HandledError extends Error {
    handled: boolean;
    constructor(error: unknown);
}

/**
 * Return a string corresponding to template filled with bindings using following pattern: For each
 * (key, value) of `bindings` replace, in template, `{{key}}` by escaped version of `value`
 *
 * @param template {String} Template with `{{binding}}`
 * @param bindings {Object} key-value object use to fill the template, `{{key}}` will be replaced by
 *   `escaped(value)`
 * @returns {String} Filled template
 */
declare const interpolate: (template: string, bindings: Record<string, string>) => string;

interface PackageMeta {
    name: string;
    version: string;
    [key: string]: any;
}

interface ToString {
    toString(): string;
}

type StringOrToString = string | ToString;

/**
 * Callback invoked when resolving asynchronously
 *
 * @param error
 * @param resolved Absolute path to resolved identifier
 */
type resolveCallback = (err: Error | null, resolved?: string, pkg?: PackageMeta) => void;

/**
 * Callback invoked when checking if a file or directory exists
 *
 * @param error
 * @param exists If the given file or directory exists
 */
type existsCallback = (err: Error | null, isFile?: boolean) => void;

/**
 * Callback invoked when reading a file
 *
 * @param error
 * @param isFile If the given file exists
 */
type readFileCallback = (err: Error | null, file?: StringOrToString) => void;

/**
 * Callback invoked when resolving a potential symlink
 *
 * @param error
 * @param resolved Absolute path to the resolved file
 */
type realpathCallback = (err: Error | null, resolved?: string) => void;

/**
 * Callback invoked when reading and parsing a package.json file
 *
 * @param error
 * @param resolved Absolute path to the resolved file
 */
type readPackageCallback = (err: Error | null, package?: Record<string, unknown>) => void;

/**
 * Synchronously resolve the module path string id, returning the result and throwing an error when id can't be resolved.
 *
 * @param id Identifier to resolve
 * @param options Options to use for resolving, optional.
 */
declare function resolveSync(id: string, opts?: resolve.SyncOpts): string;

/**
 * Return whether a package is in core
 */
declare function resolveIsCore(id: string): boolean | undefined;

// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
type JSONValue = string | number | boolean | JSONObject | JSONArray;
interface JSONObject {
    [x: string]: JSONValue;
}
interface JSONArray extends Array<JSONValue> {}

/**
 * Asynchronously resolve the module path string id into cb(err, res [, pkg]), where pkg (if defined) is the data from package.json
 *
 * @param id Identifier to resolve
 * @param callback
 */
declare function resolve(id: string, cb: resolveCallback): void;

/**
 * Asynchronously resolve the module path string id into cb(err, res [, pkg]), where pkg (if defined) is the data from package.json
 *
 * @param id Identifier to resolve
 * @param options Options to use for resolving, optional.
 * @param callback
 */
declare function resolve(id: string, opts: resolve.AsyncOpts, cb: resolveCallback): void;

declare namespace resolve {
    export type PackageJSON = JSONObject;

    interface Opts {
        /** directory to begin resolving from (defaults to __dirname) */
        basedir?: string | undefined;
        /** package.json data applicable to the module being loaded */
        package?: any;
        /** set to false to exclude node core modules (e.g. fs) from the search */
        includeCoreModules?: boolean | undefined;
        /** array of file extensions to search in order (defaults to ['.js']) */
        extensions?: string | readonly string[] | undefined;
        /** transform the parsed package.json contents before looking at the "main" field */
        packageFilter?: ((pkg: PackageJSON, pkgFile: string, dir: string) => PackageJSON) | undefined;
        /** transform a path within a package */
        pathFilter?: ((pkg: PackageJSON, path: string, relativePath: string) => string) | undefined;
        /** require.paths array to use if nothing is found on the normal node_modules recursive walk (probably don't use this) */
        paths?: string | readonly string[] | undefined;
        /** return the list of candidate paths where the packages sources may be found (probably don't use this) */
        packageIterator?:
            | ((request: string, start: string, getPackageCandidates: () => string[], opts: Opts) => string[])
            | undefined;
        /** directory (or directories) in which to recursively look for modules. (default to 'node_modules') */
        moduleDirectory?: string | readonly string[] | undefined;
        /**
         * if true, doesn't resolve `basedir` to real path before resolving.
         * This is the way Node resolves dependencies when executed with the --preserve-symlinks flag.
         *
         * Note: this property is currently true by default but it will be changed to false in the next major version because Node's resolution
         * algorithm does not preserve symlinks by default.
         */
        preserveSymlinks?: boolean | undefined;
    }

    interface BaseAsyncOpts extends Opts {
        /** function to asynchronously test whether a file exists */
        isFile?: ((file: string, cb: existsCallback) => void) | undefined;
        /** function to asynchronously test whether a directory exists */
        isDirectory?: ((directory: string, cb: existsCallback) => void) | undefined;
        /** function to asynchronously resolve a potential symlink to its real path */
        realpath?: ((file: string, cb: realpathCallback) => void) | undefined;
    }

    export type AsyncOpts =
        & BaseAsyncOpts
        & ({
            /** how to read files asynchronously (defaults to fs.readFile) */
            readFile?: ((file: string, cb: readFileCallback) => void) | undefined;
            /** function to asynchronously read and parse a package.json file */
            readPackage?: never | undefined;
        } | {
            /** how to read files asynchronously (defaults to fs.readFile) */
            readFile?: never | undefined;
            /** function to asynchronously read and parse a package.json file */
            readPackage?:
                | ((
                    readFile: (file: string, cb: readFileCallback) => void,
                    pkgfile: string,
                    cb: readPackageCallback,
                ) => void)
                | undefined;
        });

    interface BaseSyncOpts extends Opts {
        /** function to synchronously test whether a file exists */
        isFile?: ((file: string) => boolean) | undefined;
        /** function to synchronously test whether a directory exists */
        isDirectory?: ((directory: string) => boolean) | undefined;
        /** function to synchronously resolve a potential symlink to its real path */
        realpathSync?: ((file: string) => string) | undefined;
    }

    export type SyncOpts =
        & BaseSyncOpts
        & ({
            /** how to read files synchronously (defaults to fs.readFileSync) */
            readFileSync?: ((file: string) => StringOrToString) | undefined;
            /** function to synchronously read and parse a package.json file */
            readPackageSync?: never | undefined;
        } | {
            /** how to read files synchronously (defaults to fs.readFileSync) */
            readFileSync?: never | undefined;
            /** function to synchronously read and parse a package.json file */
            readPackageSync?:
                | ((
                    readFileSync: (file: string) => StringOrToString,
                    pkgfile: string,
                ) => Record<string, unknown> | undefined)
                | undefined;
        });

    export var sync: typeof resolveSync;
    export var isCore: typeof resolveIsCore;
}

declare const supportedExtensions: readonly [".js", ".ts", ".jsx", ".tsx", ".mjs", ".mts", ".mtsx", ".cjs", ".cts", ".ctsx"];
declare function getInterpretedFile(pathToFile: string): string | undefined;
declare function resolveImport(id: string, options: resolve.SyncOpts): string;

declare function serverRequire(filePath: string | string[]): Promise<any> | null;

declare function loadMainConfig({ configDir, cwd, skipCache, }: {
    configDir: string;
    cwd?: string;
    skipCache?: boolean;
}): Promise<StorybookConfig>;

declare function loadManagerOrAddonsFile({ configDir }: {
    configDir: string;
}): string | undefined;

declare function loadPreviewOrConfigFile({ configDir }: {
    configDir: string;
}): string | undefined;

declare function logConfig(caption: unknown, config: unknown): void;

declare const DEFAULT_FILES_PATTERN = "**/*.@(mdx|stories.@(js|jsx|mjs|ts|tsx))";
declare const getDirectoryFromWorkingDir: ({ configDir, workingDir, directory, }: NormalizeOptions & {
    directory: string;
}) => string;
declare const normalizeStoriesEntry: (entry: StoriesEntry, { configDir, workingDir, defaultFilesPattern }: NormalizeOptions) => NormalizedStoriesSpecifier;
interface NormalizeOptions {
    configDir: string;
    workingDir: string;
    defaultFilesPattern?: string;
}
declare const normalizeStories: (entries: StoriesEntry[], options: NormalizeOptions) => NormalizedStoriesSpecifier[];

declare const getProjectRoot: () => string;
declare const invalidateProjectRootCache: () => void;
/** Finds files in the directory tree up to the project root */
declare const findFilesUp: (matchers: string[], baseDir?: string) => string[];
declare const nodePathsToArray: (nodePath: string) => string[];
/** Ensures that a path starts with `./` or `../`, or is entirely `.` or `..` */
declare function normalizeStoryPath(filename: string): string;

declare function readTemplate(filename: string): Promise<string>;

type Not<Value extends boolean> = Value extends true ? false : true;

type And<First extends boolean, Second extends boolean> = First extends true ? Second : false;

type Or<First extends boolean, Second extends boolean> = First extends true ? true : Second;

type Unless<Condition extends boolean, ThenValue, ElseValue = never> = Condition extends true ? ElseValue : ThenValue;

type AndUnless<Condition extends boolean, ThenValue, ElseValue = unknown> = Condition extends true ? ElseValue : ThenValue;

// Whether any of T's union element is the same as one of U's union element.
// `&` does not work here.
type Intersects<T, U> = true extends (T extends U ? true : false) ? true : false;

// `options.std*: Generator`
// @todo Use `string`, `Uint8Array` or `unknown` for both the argument and the return type, based on whether `encoding: 'buffer'` and `objectMode: true` are used.
// See https://github.com/sindresorhus/execa/issues/694
type GeneratorTransform<IsSync extends boolean> = (chunk: unknown) =>
| Unless<IsSync, AsyncGenerator<unknown, void, void>>
| Generator<unknown, void, void>;
type GeneratorFinal<IsSync extends boolean> = () =>
| Unless<IsSync, AsyncGenerator<unknown, void, void>>
| Generator<unknown, void, void>;

type TransformCommon = {
	/**
	If `true`, allow `transformOptions.transform` and `transformOptions.final` to return any type, not just `string` or `Uint8Array`.
	*/
	readonly objectMode?: boolean;
};

/**
A transform or an array of transforms can be passed to the `stdin`, `stdout`, `stderr` or `stdio` option.

A transform is either a generator function or a plain object with the following members.
*/
type GeneratorTransformFull<IsSync extends boolean> = {
	/**
	Map or filter the input or output of the subprocess.
	*/
	readonly transform: GeneratorTransform<IsSync>;

	/**
	Create additional lines after the last one.
	*/
	readonly final?: GeneratorFinal<IsSync>;

	/**
	If `true`, iterate over arbitrary chunks of `Uint8Array`s instead of line `string`s.
	*/
	readonly binary?: boolean;

	/**
	If `true`, keep newlines in each `line` argument. Also, this allows multiple `yield`s to produces a single line.
	*/
	readonly preserveNewlines?: boolean;
} & TransformCommon;

// `options.std*: Duplex`
type DuplexTransform = {
	readonly transform: Duplex;
} & TransformCommon;

// `options.std*: TransformStream`
type WebTransform = {
	readonly transform: TransformStream;
} & TransformCommon;

type IsStandardStream<FdNumber extends string> = FdNumber extends keyof StandardStreams ? true : false;

type StandardStreams = readonly ['stdin', 'stdout', 'stderr'];

// When `options.stdin|stdout|stderr|stdio` is set to one of those values, no stream is created
type NoStreamStdioOption<FdNumber extends string> =
	| 'ignore'
	| 'inherit'
	| 'ipc'
	| number
	| Readable
	| Writable
	| Unless<IsStandardStream<FdNumber>, undefined>
	| readonly [NoStreamStdioOption<FdNumber>];

// `options.stdio` when it is not an array
type SimpleStdioOption<
	IsSync extends boolean,
	IsExtra extends boolean,
	IsArray extends boolean,
> =
	| undefined
	| 'pipe'
	| Unless<And<And<Not<IsSync>, IsArray>, IsExtra>, 'inherit'>
	| Unless<IsArray, 'ignore'>
	| Unless<IsSync, 'overlapped'>;

// Values available in both `options.stdin|stdio` and `options.stdout|stderr|stdio`
type CommonStdioOption<
	IsSync extends boolean,
	IsExtra extends boolean,
	IsArray extends boolean,
> =
	| SimpleStdioOption<IsSync, IsExtra, IsArray>
	| URL
	| {readonly file: string; readonly append?: boolean}
	| GeneratorTransform<IsSync>
	| GeneratorTransformFull<IsSync>
	| Unless<And<Not<IsSync>, IsArray>, 3 | 4 | 5 | 6 | 7 | 8 | 9>
	| Unless<Or<IsSync, IsArray>, 'ipc'>
	| Unless<IsSync, DuplexTransform | WebTransform | TransformStream>;

// Synchronous iterables excluding strings, Uint8Arrays and Arrays
type IterableObject<IsArray extends boolean> = Iterable<unknown>
& object
& {readonly BYTES_PER_ELEMENT?: never}
& AndUnless<IsArray, {readonly lastIndexOf?: never}>;

// `process.stdin|stdout|stderr` are `Duplex` with a `fd` property.
// This ensures they can only be passed to `stdin`/`stdout`/`stderr`, based on their direction.
type ProcessStdinFd = {readonly fd?: 0};
type ProcessStdoutStderrFd = {readonly fd?: 1 | 2};

// Values available only in `options.stdin|stdio`
type InputStdioOption<
	IsSync extends boolean = boolean,
	IsExtra extends boolean = boolean,
	IsArray extends boolean = boolean,
> =
	| 0
	| Unless<And<IsSync, IsExtra>, Uint8Array | IterableObject<IsArray>>
	| Unless<And<IsSync, IsArray>, Readable & ProcessStdinFd>
	| Unless<IsSync, (AsyncIterable<unknown> & ProcessStdinFd) | ReadableStream>;

// Values available only in `options.stdout|stderr|stdio`
type OutputStdioOption<
	IsSync extends boolean,
	IsArray extends boolean,
> =
	| 1
	| 2
	| Unless<And<IsSync, IsArray>, Writable & ProcessStdoutStderrFd>
	| Unless<IsSync, WritableStream>;

// `options.stdin` array items
type StdinSingleOption<
	IsSync extends boolean,
	IsExtra extends boolean,
	IsArray extends boolean,
> =
	| CommonStdioOption<IsSync, IsExtra, IsArray>
	| InputStdioOption<IsSync, IsExtra, IsArray>;

// `options.stdin`
type StdinOptionCommon<
	IsSync extends boolean = boolean,
	IsExtra extends boolean = boolean,
> =
	| StdinSingleOption<IsSync, IsExtra, false>
	| ReadonlyArray<StdinSingleOption<IsSync, IsExtra, true>>;

// `options.stdout|stderr` array items
type StdoutStderrSingleOption<
	IsSync extends boolean,
	IsExtra extends boolean,
	IsArray extends boolean,
> =
  | CommonStdioOption<IsSync, IsExtra, IsArray>
  | OutputStdioOption<IsSync, IsArray>;

// `options.stdout|stderr`
type StdoutStderrOptionCommon<
	IsSync extends boolean = boolean,
	IsExtra extends boolean = boolean,
> =
	| StdoutStderrSingleOption<IsSync, IsExtra, false>
	| ReadonlyArray<StdoutStderrSingleOption<IsSync, IsExtra, true>>;

// `options.stdio[3+]`
type StdioExtraOptionCommon<IsSync extends boolean> =
	| StdinOptionCommon<IsSync, true>
	| StdoutStderrOptionCommon<IsSync, true>;

// `options.stdin|stdout|stderr|stdio` array items
type StdioSingleOption<
	IsSync extends boolean = boolean,
	IsExtra extends boolean = boolean,
	IsArray extends boolean = boolean,
> =
	| StdinSingleOption<IsSync, IsExtra, IsArray>
	| StdoutStderrSingleOption<IsSync, IsExtra, IsArray>;

// Get `options.stdin|stdout|stderr|stdio` items if it is an array, else keep as is
type StdioSingleOptionItems<StdioOptionType> = StdioOptionType extends readonly StdioSingleOption[]
	? StdioOptionType[number]
	: StdioOptionType;

// `options.stdin|stdout|stderr|stdio`
type StdioOptionCommon<IsSync extends boolean = boolean> =
	| StdinOptionCommon<IsSync>
	| StdoutStderrOptionCommon<IsSync>;

// `options.stdio` when it is an array
type StdioOptionsArray<IsSync extends boolean = boolean> = readonly [
	StdinOptionCommon<IsSync, false>,
	StdoutStderrOptionCommon<IsSync, false>,
	StdoutStderrOptionCommon<IsSync, false>,
	...ReadonlyArray<StdioExtraOptionCommon<IsSync>>,
];

// `options.stdio`
type StdioOptionsProperty<IsSync extends boolean = boolean> =
	| SimpleStdioOption<IsSync, false, false>
	| StdioOptionsArray<IsSync>;

// Message when the `serialization` option is `'advanced'`
type AdvancedMessage =
	| string
	| number
	| boolean
	| null
	| object;

// Message when the `serialization` option is `'json'`
type JsonMessage =
	| string
	| number
	| boolean
	| null
	| readonly JsonMessage[]
	| {readonly [key: string | number]: JsonMessage};

/**
Type of messages exchanged between a process and its subprocess using `sendMessage()`, `getOneMessage()` and `getEachMessage()`.

This requires the `ipc` option to be `true`. The type of `message` depends on the `serialization` option.
*/
type Message<
	Serialization extends Options['serialization'] = Options['serialization'],
> = Serialization extends 'json' ? JsonMessage : AdvancedMessage;

/**
Options to `sendMessage()` and `subprocess.sendMessage()`
*/
type SendMessageOptions = {
	/**
	Throw when the other process is not receiving or listening to messages.

	@default false
	*/
	readonly strict?: boolean;
};

/**
Options to `getOneMessage()` and `subprocess.getOneMessage()`
*/
type GetOneMessageOptions<
	Serialization extends Options['serialization'],
> = {
	/**
	Ignore any `message` that returns `false`.
	*/
	readonly filter?: (message: Message<Serialization>) => boolean;

	/**
	Keep the subprocess alive while `getOneMessage()` is waiting.

	@default true
	*/
	readonly reference?: boolean;
};

/**
Options to `getEachMessage()` and `subprocess.getEachMessage()`
*/
type GetEachMessageOptions = {
	/**
	Keep the subprocess alive while `getEachMessage()` is waiting.

	@default true
	*/
	readonly reference?: boolean;
};

// IPC methods in the subprocess
type IpcMethods<
	IpcEnabled extends boolean,
	Serialization extends Options['serialization'],
> = IpcEnabled extends true
	? {
		/**
		Send a `message` to the subprocess.

		This requires the `ipc` option to be `true`. The type of `message` depends on the `serialization` option.
		*/
		sendMessage(message: Message<Serialization>, sendMessageOptions?: SendMessageOptions): Promise<void>;

		/**
		Receive a single `message` from the subprocess.

		This requires the `ipc` option to be `true`. The type of `message` depends on the `serialization` option.
		*/
		getOneMessage(getOneMessageOptions?: GetOneMessageOptions<Serialization>): Promise<Message<Serialization>>;

		/**
		Iterate over each `message` from the subprocess.

		This requires the `ipc` option to be `true`. The type of `message` depends on the `serialization` option.
		*/
		getEachMessage(getEachMessageOptions?: GetEachMessageOptions): AsyncIterableIterator<Message<Serialization>>;
	}
	// Those methods only work if the `ipc` option is `true`.
	// At runtime, they are actually defined, in order to provide with a nice error message.
	// At type check time, they are typed as `undefined` to prevent calling them.
	: {
		sendMessage: undefined;
		getOneMessage: undefined;
		getEachMessage: undefined;
	};

// Whether IPC is enabled, based on the `ipc`, `ipcInput` and `gracefulCancel` options
type HasIpc<OptionsType extends Options> = HasIpcOption<
OptionsType['ipc'],
'ipcInput' extends keyof OptionsType ? OptionsType['ipcInput'] : undefined,
'gracefulCancel' extends keyof OptionsType ? OptionsType['gracefulCancel'] : undefined
>;

type HasIpcOption<
	IpcOption extends Options['ipc'],
	IpcInputOption extends Options['ipcInput'],
	GracefulCancelOption extends Options['gracefulCancel'],
> = IpcOption extends true
	? true
	: IpcOption extends false
		? false
		: IpcInputOption extends undefined
			? GracefulCancelOption extends true
				? true
				: false
			: true;

type FileDescriptorOption = `fd${number}`;

// `from` option of `subprocess.readable|duplex|iterable|pipe()`
// Also used by fd-specific options
type FromOption = 'stdout' | 'stderr' | 'all' | FileDescriptorOption;

// `to` option of `subprocess.writable|duplex|pipe()`
type ToOption = 'stdin' | FileDescriptorOption;

// Options which can be fd-specific like `{verbose: {stdout: 'none', stderr: 'full'}}`
type FdGenericOption<OptionType> = OptionType | GenericOptionObject<OptionType>;

type GenericOptionObject<OptionType> = {
	readonly [FdName in GenericFromOption]?: OptionType
};

type GenericFromOption = FromOption | 'ipc';

// Retrieve fd-specific option's value
type FdSpecificOption<
	GenericOption extends FdGenericOption<unknown>,
	FdNumber extends string,
> = GenericOption extends GenericOptionObject<unknown>
	? FdSpecificObjectOption<GenericOption, FdNumber>
	: GenericOption;

type FdSpecificObjectOption<
	GenericOption extends GenericOptionObject<unknown>,
	FdNumber extends string,
> = keyof GenericOption extends GenericFromOption
	? FdNumberToFromOption<FdNumber, keyof GenericOption> extends never
		? undefined
		: GenericOption[FdNumberToFromOption<FdNumber, keyof GenericOption>]
	: GenericOption;

type FdNumberToFromOption<
	FdNumber extends string,
	GenericOptionKeys extends GenericFromOption,
> = FdNumber extends '1'
	? 'stdout' extends GenericOptionKeys
		? 'stdout'
		: 'fd1' extends GenericOptionKeys
			? 'fd1'
			: 'all' extends GenericOptionKeys
				? 'all'
				: never
	: FdNumber extends '2'
		? 'stderr' extends GenericOptionKeys
			? 'stderr'
			: 'fd2' extends GenericOptionKeys
				? 'fd2'
				: 'all' extends GenericOptionKeys
					? 'all'
					: never
		: `fd${FdNumber}` extends GenericOptionKeys
			? `fd${FdNumber}`
			: 'ipc' extends GenericOptionKeys
				? 'ipc'
				: never;

// `result.*` defined only on failure, i.e. on `error.*`
type ErrorProperties =
  | 'name'
  | 'message'
  | 'stack'
  | 'cause'
  | 'shortMessage'
  | 'originalMessage'
  | 'code';

// `options.stdio`, normalized as an array
type StdioOptionNormalizedArray<OptionsType extends CommonOptions> = StdioOptionNormalized<OptionsType['stdio']>;

type StdioOptionNormalized<StdioOption extends CommonOptions['stdio']> = StdioOption extends StdioOptionsArray
	? StdioOption
	: StdioOption extends StdinOptionCommon
		? StdioOption extends StdoutStderrOptionCommon
			? readonly [StdioOption, StdioOption, StdioOption]
			: DefaultStdioOption
		: DefaultStdioOption;

// `options.stdio` default value
type DefaultStdioOption = readonly ['pipe', 'pipe', 'pipe'];

// `options.stdin|stdout|stderr|stdio` for a given file descriptor
type FdStdioOption<
	FdNumber extends string,
	OptionsType extends CommonOptions,
> = FdStdioOptionProperty<FdNumber, OptionsType>;

type FdStdioOptionProperty<
	FdNumber extends string,
	OptionsType extends CommonOptions,
> = string extends FdNumber ? StdioOptionCommon
	: FdNumber extends keyof StandardStreams
		? StandardStreams[FdNumber] extends keyof OptionsType
			? OptionsType[StandardStreams[FdNumber]] extends undefined
				? FdStdioArrayOption<FdNumber, OptionsType>
				: OptionsType[StandardStreams[FdNumber]]
			: FdStdioArrayOption<FdNumber, OptionsType>
		: FdStdioArrayOption<FdNumber, OptionsType>;

// `options.stdio[FdNumber]`, excluding `options.stdin|stdout|stderr`
type FdStdioArrayOption<
	FdNumber extends string,
	OptionsType extends CommonOptions,
> = FdStdioArrayOptionProperty<FdNumber, StdioOptionNormalizedArray<OptionsType>>;

type FdStdioArrayOptionProperty<
	FdNumber extends string,
	StdioOptionsType,
> = string extends FdNumber
	? StdioOptionCommon | undefined
	: StdioOptionsType extends StdioOptionsArray
		? FdNumber extends keyof StdioOptionsType
			? StdioOptionsType[FdNumber]
			: StdioOptionNormalizedArray<CommonOptions> extends StdioOptionsType
				? StdioOptionsType[number]
				: undefined
		: undefined;

// Whether a file descriptor is in object mode
// I.e. whether `result.stdout|stderr|stdio|all` is an array of `unknown` due to `objectMode: true`
type IsObjectFd<
	FdNumber extends string,
	OptionsType extends CommonOptions,
> = IsObjectStdioOption<FdStdioOption<FdNumber, OptionsType>>;

type IsObjectStdioOption<StdioOptionType> = IsObjectStdioSingleOption<StdioSingleOptionItems<StdioOptionType>>;

type IsObjectStdioSingleOption<StdioSingleOptionType> = StdioSingleOptionType extends TransformCommon
	? BooleanObjectMode<StdioSingleOptionType['objectMode']>
	: StdioSingleOptionType extends DuplexTransform
		? StdioSingleOptionType['transform']['readableObjectMode']
		: false;

type BooleanObjectMode<ObjectModeOption extends boolean | undefined> = ObjectModeOption extends true ? true : false;

// Whether `result.stdio[FdNumber]` is an input stream
type IsInputFd<
	FdNumber extends string,
	OptionsType extends CommonOptions,
> = FdNumber extends '0'
	? true
	: Intersects<StdioSingleOptionItems<FdStdioArrayOption<FdNumber, OptionsType>>, InputStdioOption>;

// Whether `result.stdin|stdout|stderr|all|stdio[*]` is `undefined`
type IgnoresResultOutput<
	FdNumber extends string,
	OptionsType extends CommonOptions,
> = FdSpecificOption<OptionsType['buffer'], FdNumber> extends false
	? true
	: IsInputFd<FdNumber, OptionsType> extends true
		? true
		: IgnoresSubprocessOutput<FdNumber, OptionsType>;

// Whether `subprocess.stdout|stderr|all` is `undefined|null`
type IgnoresSubprocessOutput<
	FdNumber extends string,
	OptionsType extends CommonOptions,
> = IgnoresOutput<FdNumber, FdStdioOption<FdNumber, OptionsType>>;

type IgnoresOutput<
	FdNumber extends string,
	StdioOptionType,
> = StdioOptionType extends NoStreamStdioOption<FdNumber> ? true : false;

type DefaultEncodingOption = 'utf8';
type TextEncodingOption =
  | DefaultEncodingOption
  | 'utf16le';

type BufferEncodingOption = 'buffer';
type BinaryEncodingOption =
  | BufferEncodingOption
  | 'hex'
  | 'base64'
  | 'base64url'
  | 'latin1'
  | 'ascii';

// `options.encoding`
type EncodingOption =
	| TextEncodingOption
	| BinaryEncodingOption
	| undefined;

// `result.stdout|stderr|stdio`
type ResultStdioNotAll<
	FdNumber extends string,
	OptionsType extends CommonOptions,
> = ResultStdio<FdNumber, FdNumber, FdNumber, OptionsType>;

// `result.stdout|stderr|stdio|all`
type ResultStdio<
	MainFdNumber extends string,
	ObjectFdNumber extends string,
	LinesFdNumber extends string,
	OptionsType extends CommonOptions,
> = ResultStdioProperty<
ObjectFdNumber,
LinesFdNumber,
IgnoresResultOutput<MainFdNumber, OptionsType>,
OptionsType
>;

type ResultStdioProperty<
	ObjectFdNumber extends string,
	LinesFdNumber extends string,
	StreamOutputIgnored,
	OptionsType extends CommonOptions,
> = StreamOutputIgnored extends true
	? undefined
	: ResultStdioItem<
	IsObjectFd<ObjectFdNumber, OptionsType>,
	FdSpecificOption<OptionsType['lines'], LinesFdNumber>,
	OptionsType['encoding']
	>;

type ResultStdioItem<
	IsObjectResult,
	LinesOption extends boolean | undefined,
	Encoding extends CommonOptions['encoding'],
> = IsObjectResult extends true ? unknown[]
	: Encoding extends BufferEncodingOption
		? Uint8Array
		: LinesOption extends true
			? Encoding extends BinaryEncodingOption
				? string
				: string[]
			: string;

// `result.all`
type ResultAll<OptionsType extends CommonOptions> =
	ResultAllProperty<OptionsType['all'], OptionsType>;

type ResultAllProperty<
	AllOption extends CommonOptions['all'],
	OptionsType extends CommonOptions,
> = AllOption extends true
	? ResultStdio<
	AllMainFd<OptionsType>,
	AllObjectFd<OptionsType>,
	AllLinesFd<OptionsType>,
	OptionsType
	>
	: undefined;

type AllMainFd<OptionsType extends CommonOptions> =
	IgnoresResultOutput<'1', OptionsType> extends true ? '2' : '1';

type AllObjectFd<OptionsType extends CommonOptions> =
	IsObjectFd<'1', OptionsType> extends true ? '1' : '2';

type AllLinesFd<OptionsType extends CommonOptions> =
	FdSpecificOption<OptionsType['lines'], '1'> extends true ? '1' : '2';

// `result.stdio`
type ResultStdioArray<OptionsType extends CommonOptions> =
	MapResultStdio<StdioOptionNormalizedArray<OptionsType>, OptionsType>;

type MapResultStdio<
	StdioOptionsArrayType,
	OptionsType extends CommonOptions,
> = {
	-readonly [FdNumber in keyof StdioOptionsArrayType]: ResultStdioNotAll<
	FdNumber extends string ? FdNumber : string,
	OptionsType
	>
};

// `result.ipcOutput`
// This is empty unless the `ipc` option is `true`.
// Also, this is empty if the `buffer` option is `false`.
type ResultIpcOutput<
	IsSync,
	OptionsType extends CommonOptions,
> = IsSync extends true
	? []
	: ResultIpcAsync<
	FdSpecificOption<OptionsType['buffer'], 'ipc'>,
	HasIpc<StricterOptions<OptionsType, Options>>,
	OptionsType['serialization']
	>;

type ResultIpcAsync<
	BufferOption extends boolean | undefined,
	IpcEnabled extends boolean,
	SerializationOption extends CommonOptions['serialization'],
> = BufferOption extends false
	? []
	: IpcEnabled extends true
		? Array<Message<SerializationOption>>
		: [];

declare abstract class CommonResult<
	IsSync extends boolean,
	OptionsType extends CommonOptions,
> {
	/**
	The output of the subprocess on [`stdout`](https://en.wikipedia.org/wiki/Standard_streams#Standard_output_(stdout)).

	This is `undefined` if the `stdout` option is set to only `'inherit'`, `'ignore'`, `Writable` or `integer`, or if the `buffer` option is `false`.

	This is an array if the `lines` option is `true`, or if the `stdout` option is a transform in object mode.
	*/
	stdout: ResultStdioNotAll<'1', OptionsType>;

	/**
	The output of the subprocess on [`stderr`](https://en.wikipedia.org/wiki/Standard_streams#Standard_error_(stderr)).

	This is `undefined` if the `stderr` option is set to only `'inherit'`, `'ignore'`, `Writable` or `integer`, or if the `buffer` option is `false`.

	This is an array if the `lines` option is `true`, or if the `stderr` option is a transform in object mode.
	*/
	stderr: ResultStdioNotAll<'2', OptionsType>;

	/**
	The output of the subprocess with `result.stdout` and `result.stderr` interleaved.

	This requires the `all` option to be `true`.

	This is `undefined` if both `stdout` and `stderr` options are set to only `'inherit'`, `'ignore'`, `Writable` or `integer`, or if the `buffer` option is `false`.

	This is an array if the `lines` option is `true`, or if either the `stdout` or `stderr` option is a transform in object mode.
	*/
	all: ResultAll<OptionsType>;

	/**
	The output of the subprocess on `stdin`, `stdout`, `stderr` and other file descriptors.

	Items are `undefined` when their corresponding `stdio` option is set to only `'inherit'`, `'ignore'`, `Writable` or `integer`, or if the `buffer` option is `false`.

	Items are arrays when their corresponding `stdio` option is a transform in object mode.
	*/
	stdio: ResultStdioArray<OptionsType>;

	/**
	All the messages sent by the subprocess to the current process.

	This is empty unless the `ipc` option is `true`. Also, this is empty if the `buffer` option is `false`.
	*/
	ipcOutput: ResultIpcOutput<IsSync, OptionsType>;

	/**
	Results of the other subprocesses that were piped into this subprocess.

	This array is initially empty and is populated each time the `subprocess.pipe()` method resolves.
	*/
	pipedFrom: Unless<IsSync, Result[], []>;

	/**
	The file and arguments that were run.
	*/
	command: string;

	/**
	Same as `command` but escaped.
	*/
	escapedCommand: string;

	/**
	The current directory in which the command was run.
	*/
	cwd: string;

	/**
	Duration of the subprocess, in milliseconds.
	*/
	durationMs: number;

	/**
	Whether the subprocess failed to run.

	When this is `true`, the result is an `ExecaError` instance with additional error-related properties.
	*/
	failed: boolean;

	/**
	Whether the subprocess timed out due to the `timeout` option.
	*/
	timedOut: boolean;

	/**
	Whether the subprocess was canceled using the `cancelSignal` option.
	*/
	isCanceled: boolean;

	/**
	Whether the subprocess was canceled using both the `cancelSignal` and the `gracefulCancel` options.
	*/
	isGracefullyCanceled: boolean;

	/**
	Whether the subprocess failed because its output was larger than the `maxBuffer` option.
	*/
	isMaxBuffer: boolean;

	/**
	Whether the subprocess was terminated by a signal (like `SIGTERM`) sent by either:
	- The current process.
	- Another process. This case is [not supported on Windows](https://nodejs.org/api/process.html#signal-events).
	*/
	isTerminated: boolean;

	/**
	Whether the subprocess was terminated by the `SIGKILL` signal sent by the `forceKillAfterDelay` option.
	*/
	isForcefullyTerminated: boolean;

	/**
	The numeric [exit code](https://en.wikipedia.org/wiki/Exit_status) of the subprocess that was run.

	This is `undefined` when the subprocess could not be spawned or was terminated by a signal.
	*/
	exitCode?: number;

	/**
	The name of the signal (like `SIGTERM`) that terminated the subprocess, sent by either:
	- The current process.
	- Another process. This case is [not supported on Windows](https://nodejs.org/api/process.html#signal-events).

	If a signal terminated the subprocess, this property is defined and included in the error message. Otherwise it is `undefined`.
	*/
	signal?: keyof SignalConstants;

	/**
	A human-friendly description of the signal that was used to terminate the subprocess.

	If a signal terminated the subprocess, this property is defined and included in the error message. Otherwise it is `undefined`. It is also `undefined` when the signal is very uncommon which should seldomly happen.
	*/
	signalDescription?: string;

	/**
	Error message when the subprocess failed to run.
	*/
	message?: string;

	/**
	This is the same as `error.message` except it does not include the subprocess output.
	*/
	shortMessage?: string;

	/**
	Original error message. This is the same as `error.message` excluding the subprocess output and some additional information added by Execa.

	This exists only in specific instances, such as during a timeout.
	*/
	originalMessage?: string;

	/**
	Underlying error, if there is one. For example, this is set by `subprocess.kill(error)`.

	This is usually an `Error` instance.
	*/
	cause?: unknown;

	/**
	Node.js-specific [error code](https://nodejs.org/api/errors.html#errorcode), when available.
	*/
	code?: string;

	// We cannot `extend Error` because `message` must be optional. So we copy its types here.
	readonly name?: Error['name'];
	stack?: Error['stack'];
}

type SuccessResult<
	IsSync extends boolean = boolean,
	OptionsType extends CommonOptions = CommonOptions,
> = InstanceType<typeof CommonResult<IsSync, OptionsType>> & OmitErrorIfReject<OptionsType['reject']>;

type OmitErrorIfReject<RejectOption extends CommonOptions['reject']> = {
	[ErrorProperty in ErrorProperties]: RejectOption extends false ? unknown : never
};

/**
Result of a subprocess successful execution.

When the subprocess fails, it is rejected with an `ExecaError` instead.
*/
type Result<OptionsType extends Options = Options> = SuccessResult<false, OptionsType>;

/**
Result of a subprocess successful execution.

When the subprocess fails, it is rejected with an `ExecaError` instead.
*/
type SyncResult<OptionsType extends SyncOptions = SyncOptions> = SuccessResult<true, OptionsType>;

type VerboseOption = FdGenericOption<
| 'none'
| 'short'
| 'full'
| VerboseFunction
>;

type VerboseFunction = (verboseLine: string, verboseObject: MinimalVerboseObject) => string | void;

type GenericVerboseObject = {
	/**
	Event type. This can be:
	- `'command'`: subprocess start
	- `'output'`: `stdout`/`stderr` output
	- `'ipc'`: IPC output
	- `'error'`: subprocess failure
	- `'duration'`: subprocess success or failure
	*/
	type: 'command' | 'output' | 'ipc' | 'error' | 'duration';

	/**
	Depending on `verboseObject.type`, this is:
	- `'command'`: the `result.escapedCommand`
	- `'output'`: one line from `result.stdout` or `result.stderr`
	- `'ipc'`: one IPC message from `result.ipcOutput`
	- `'error'`: the `error.shortMessage`
	- `'duration'`: the `result.durationMs`
	*/
	message: string;

	/**
	The file and arguments that were run. This is the same as `result.escapedCommand`.
	*/
	escapedCommand: string;

	/**
	Serial number identifying the subprocess within the current process. It is incremented from `'0'`.

	This is helpful when multiple subprocesses are running at the same time.

	This is similar to a [PID](https://en.wikipedia.org/wiki/Process_identifier) except it has no maximum limit, which means it never repeats. Also, it is usually shorter.
	*/
	commandId: string;

	/**
	Event date/time.
	*/
	timestamp: Date;

	/**
	Whether another subprocess is piped into this subprocess. This is `false` when `result.pipedFrom` is empty.
	*/
	piped: boolean;
};

type MinimalVerboseObject = GenericVerboseObject & {
	// We cannot use the `CommonOptions` type because it would make this type recursive
	options: object;
	result?: never;
};

type CommonOptions<IsSync extends boolean = boolean> = {
	/**
	Prefer locally installed binaries when looking for a binary to execute.

	@default `true` with `$`, `false` otherwise
	*/
	readonly preferLocal?: boolean;

	/**
	Preferred path to find locally installed binaries, when using the `preferLocal` option.

	@default `cwd` option
	*/
	readonly localDir?: string | URL;

	/**
	If `true`, runs with Node.js. The first argument must be a Node.js file.

	The subprocess inherits the current Node.js [CLI flags](https://nodejs.org/api/cli.html#options) and version. This can be overridden using the `nodeOptions` and `nodePath` options.

	@default `true` with `execaNode()`, `false` otherwise
	*/
	readonly node?: boolean;

	/**
	List of [CLI flags](https://nodejs.org/api/cli.html#cli_options) passed to the Node.js executable.

	Requires the `node` option to be `true`.

	@default [`process.execArgv`](https://nodejs.org/api/process.html#process_process_execargv) (current Node.js CLI flags)
	*/
	readonly nodeOptions?: readonly string[];

	/**
	Path to the Node.js executable.

	Requires the `node` option to be `true`.

	@default [`process.execPath`](https://nodejs.org/api/process.html#process_process_execpath) (current Node.js executable)
	*/
	readonly nodePath?: string | URL;

	/**
	If `true`, runs the command inside of a [shell](https://en.wikipedia.org/wiki/Shell_(computing)).

	Uses [`/bin/sh`](https://en.wikipedia.org/wiki/Unix_shell) on UNIX and [`cmd.exe`](https://en.wikipedia.org/wiki/Cmd.exe) on Windows. A different shell can be specified as a string. The shell should understand the `-c` switch on UNIX or `/d /s /c` on Windows.

	We recommend against using this option.

	@default false
	*/
	readonly shell?: boolean | string | URL;

	/**
	Current [working directory](https://en.wikipedia.org/wiki/Working_directory) of the subprocess.

	This is also used to resolve the `nodePath` option when it is a relative path.

	@default process.cwd()
	*/
	readonly cwd?: string | URL;

	/**
	[Environment variables](https://en.wikipedia.org/wiki/Environment_variable).

	Unless the `extendEnv` option is `false`, the subprocess also uses the current process' environment variables ([`process.env`](https://nodejs.org/api/process.html#processenv)).

	@default [process.env](https://nodejs.org/api/process.html#processenv)
	*/
	readonly env?: Readonly<Partial<Record<string, string>>>;

	/**
	If `true`, the subprocess uses both the `env` option and the current process' environment variables ([`process.env`](https://nodejs.org/api/process.html#processenv)).
	If `false`, only the `env` option is used, not `process.env`.

	@default true
	*/
	readonly extendEnv?: boolean;

	/**
	Write some input to the subprocess' [`stdin`](https://en.wikipedia.org/wiki/Standard_streams#Standard_input_(stdin)).

	See also the `inputFile` and `stdin` options.
	*/
	readonly input?: string | Uint8Array | Readable;

	/**
	Use a file as input to the subprocess' [`stdin`](https://en.wikipedia.org/wiki/Standard_streams#Standard_input_(stdin)).

	See also the `input` and `stdin` options.
	*/
	readonly inputFile?: string | URL;

	/**
	How to setup the subprocess' [standard input](https://en.wikipedia.org/wiki/Standard_streams#Standard_input_(stdin)). This can be `'pipe'`, `'overlapped'`, `'ignore`, `'inherit'`, a file descriptor integer, a Node.js `Readable` stream, a web `ReadableStream`, a `{ file: 'path' }` object, a file URL, an `Iterable`, an `AsyncIterable`, an `Uint8Array`, a generator function, a `Duplex` or a web `TransformStream`.

	This can be an array of values such as `['inherit', 'pipe']` or `[fileUrl, 'pipe']`.

	@default `'inherit'` with `$`, `'pipe'` otherwise
	*/
	readonly stdin?: StdinOptionCommon<IsSync>;

	/**
	How to setup the subprocess' [standard output](https://en.wikipedia.org/wiki/Standard_streams#Standard_input_(stdin)). This can be `'pipe'`, `'overlapped'`, `'ignore`, `'inherit'`, a file descriptor integer, a Node.js `Writable` stream, a web `WritableStream`, a `{ file: 'path' }` object, a file URL, a generator function, a `Duplex` or a web `TransformStream`.

	This can be an array of values such as `['inherit', 'pipe']` or `[fileUrl, 'pipe']`.

	@default 'pipe'
	*/
	readonly stdout?: StdoutStderrOptionCommon<IsSync>;

	/**
	How to setup the subprocess' [standard error](https://en.wikipedia.org/wiki/Standard_streams#Standard_input_(stdin)). This can be `'pipe'`, `'overlapped'`, `'ignore`, `'inherit'`, a file descriptor integer, a Node.js `Writable` stream, a web `WritableStream`, a `{ file: 'path' }` object, a file URL, a generator function, a `Duplex` or a web `TransformStream`.

	This can be an array of values such as `['inherit', 'pipe']` or `[fileUrl, 'pipe']`.

	@default 'pipe'
	*/
	readonly stderr?: StdoutStderrOptionCommon<IsSync>;

	/**
	Like the `stdin`, `stdout` and `stderr` options but for all [file descriptors](https://en.wikipedia.org/wiki/File_descriptor) at once. For example, `{stdio: ['ignore', 'pipe', 'pipe']}` is the same as `{stdin: 'ignore', stdout: 'pipe', stderr: 'pipe'}`.

	A single string can be used as a shortcut.

	The array can have more than 3 items, to create additional file descriptors beyond `stdin`/`stdout`/`stderr`.

	@default 'pipe'
	*/
	readonly stdio?: StdioOptionsProperty<IsSync>;

	/**
	Add a `subprocess.all` stream and a `result.all` property. They contain the combined/interleaved output of the subprocess' `stdout` and `stderr`.

	@default false
	*/
	readonly all?: boolean;

	/**
	If the subprocess outputs text, specifies its character encoding, either [`'utf8'`](https://en.wikipedia.org/wiki/UTF-8) or [`'utf16le'`](https://en.wikipedia.org/wiki/UTF-16).

	If it outputs binary data instead, this should be either:
	- `'buffer'`: returns the binary output as an `Uint8Array`.
	- [`'hex'`](https://en.wikipedia.org/wiki/Hexadecimal), [`'base64'`](https://en.wikipedia.org/wiki/Base64), [`'base64url'`](https://en.wikipedia.org/wiki/Base64#URL_applications), [`'latin1'`](https://nodejs.org/api/buffer.html#buffers-and-character-encodings) or [`'ascii'`](https://nodejs.org/api/buffer.html#buffers-and-character-encodings): encodes the binary output as a string.

	The output is available with `result.stdout`, `result.stderr` and `result.stdio`.

	@default 'utf8'
	*/
	readonly encoding?: EncodingOption;

	/**
	Set `result.stdout`, `result.stderr`, `result.all` and `result.stdio` as arrays of strings, splitting the subprocess' output into lines.

	This cannot be used if the `encoding` option is binary.

	By default, this applies to both `stdout` and `stderr`, but different values can also be passed.

	@default false
	*/
	readonly lines?: FdGenericOption<boolean>;

	/**
	Strip the final [newline character](https://en.wikipedia.org/wiki/Newline) from the output.

	If the `lines` option is true, this applies to each output line instead.

	By default, this applies to both `stdout` and `stderr`, but different values can also be passed.

	@default true
	*/
	readonly stripFinalNewline?: FdGenericOption<boolean>;

	/**
	Largest amount of data allowed on `stdout`, `stderr` and `stdio`.

	By default, this applies to both `stdout` and `stderr`, but different values can also be passed.

	When reached, `error.isMaxBuffer` becomes `true`.

	@default 100_000_000
	*/
	readonly maxBuffer?: FdGenericOption<number>;

	/**
	When `buffer` is `false`, the `result.stdout`, `result.stderr`, `result.all` and `result.stdio` properties are not set.

	By default, this applies to both `stdout` and `stderr`, but different values can also be passed.

	@default true
	*/
	readonly buffer?: FdGenericOption<boolean>;

	/**
	Enables exchanging messages with the subprocess using `subprocess.sendMessage(message)`, `subprocess.getOneMessage()` and `subprocess.getEachMessage()`.

	The subprocess must be a Node.js file.

	@default `true` if the `node`, `ipcInput` or `gracefulCancel` option is set, `false` otherwise
	*/
	readonly ipc?: Unless<IsSync, boolean>;

	/**
	Specify the kind of serialization used for sending messages between subprocesses when using the `ipc` option.

	@default 'advanced'
	*/
	readonly serialization?: Unless<IsSync, 'json' | 'advanced'>;

	/**
	Sends an IPC message when the subprocess starts.

	The subprocess must be a Node.js file. The value's type depends on the `serialization` option.
	*/
	readonly ipcInput?: Unless<IsSync, Message>;

	/**
	If `verbose` is `'short'`, prints the command on [`stderr`](https://en.wikipedia.org/wiki/Standard_streams#Standard_error_(stderr)): its file, arguments, duration and (if it failed) error message.

	If `verbose` is `'full'` or a function, the command's [`stdout`](https://en.wikipedia.org/wiki/Standard_streams#Standard_output_(stdout)), `stderr` and IPC messages are also printed.

	A function can be passed to customize logging.

	By default, this applies to both `stdout` and `stderr`, but different values can also be passed.

	@default 'none'
	*/
	readonly verbose?: VerboseOption;

	/**
	Setting this to `false` resolves the result's promise with the error instead of rejecting it.

	@default true
	*/
	readonly reject?: boolean;

	/**
	If `timeout` is greater than `0`, the subprocess will be terminated if it runs for longer than that amount of milliseconds.

	On timeout, `error.timedOut` becomes `true`.

	@default 0
	*/
	readonly timeout?: number;

	/**
	When the `cancelSignal` is [aborted](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort), terminate the subprocess using a `SIGTERM` signal.

	When aborted, `error.isCanceled` becomes `true`.

	@example
	```
	import {execaNode} from 'execa';

	const controller = new AbortController();
	const cancelSignal = controller.signal;

	setTimeout(() => {
		controller.abort();
	}, 5000);

	try {
		await execaNode({cancelSignal})`build.js`;
	} catch (error) {
		if (error.isCanceled) {
			console.error('Canceled by cancelSignal.');
		}

		throw error;
	}
	```
	*/
	readonly cancelSignal?: Unless<IsSync, AbortSignal>;

	/**
	When the `cancelSignal` option is [aborted](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort), do not send any `SIGTERM`. Instead, abort the [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) returned by `getCancelSignal()`. The subprocess should use it to terminate gracefully.

	The subprocess must be a Node.js file.

	When aborted, `error.isGracefullyCanceled` becomes `true`.

	@default false
	*/
	readonly gracefulCancel?: Unless<IsSync, boolean>;

	/**
	If the subprocess is terminated but does not exit, forcefully exit it by sending [`SIGKILL`](https://en.wikipedia.org/wiki/Signal_(IPC)#SIGKILL).

	When this happens, `error.isForcefullyTerminated` becomes `true`.

	@default 5000
	*/
	readonly forceKillAfterDelay?: Unless<IsSync, number | boolean>;

	/**
	Default [signal](https://en.wikipedia.org/wiki/Signal_(IPC)) used to terminate the subprocess.

	This can be either a name (like `'SIGTERM'`) or a number (like `9`).

	@default 'SIGTERM'
	*/
	readonly killSignal?: keyof SignalConstants | number;

	/**
	Run the subprocess independently from the current process.

	@default false
	*/
	readonly detached?: Unless<IsSync, boolean>;

	/**
	Kill the subprocess when the current process exits.

	@default true
	*/
	readonly cleanup?: Unless<IsSync, boolean>;

	/**
	Sets the [user identifier](https://en.wikipedia.org/wiki/User_identifier) of the subprocess.

	@default current user identifier
	*/
	readonly uid?: number;

	/**
	Sets the [group identifier](https://en.wikipedia.org/wiki/Group_identifier) of the subprocess.

	@default current group identifier
	*/
	readonly gid?: number;

	/**
	Value of [`argv[0]`](https://nodejs.org/api/process.html#processargv0) sent to the subprocess.

	@default file being executed
	*/
	readonly argv0?: string;

	/**
	On Windows, do not create a new console window.

	@default true
	*/
	readonly windowsHide?: boolean;

	/**
	If `false`, escapes the command arguments on Windows.

	@default `true` if the `shell` option is `true`, `false` otherwise
	*/
	readonly windowsVerbatimArguments?: boolean;
};

/**
Subprocess options.

Some options are related to the subprocess output: `verbose`, `lines`, `stripFinalNewline`, `buffer`, `maxBuffer`. By default, those options apply to all file descriptors (`stdout`, `stderr`, etc.). A plain object can be passed instead to apply them to only `stdout`, `stderr`, `all` (both stdout and stderr), `ipc`, `fd3`, etc.

@example

```
// Same value for stdout and stderr
await execa({verbose: 'full'})`npm run build`;

// Different values for stdout and stderr
await execa({verbose: {stdout: 'none', stderr: 'full'}})`npm run build`;
```
*/
type Options = CommonOptions<false>;

/**
Subprocess options, with synchronous methods.

Some options are related to the subprocess output: `verbose`, `lines`, `stripFinalNewline`, `buffer`, `maxBuffer`. By default, those options apply to all file descriptors (`stdout`, `stderr`, etc.). A plain object can be passed instead to apply them to only `stdout`, `stderr`, `all` (both stdout and stderr), `ipc`, `fd3`, etc.

@example

```
// Same value for stdout and stderr
execaSync({verbose: 'full'})`npm run build`;

// Different values for stdout and stderr
execaSync({verbose: {stdout: 'none', stderr: 'full'}})`npm run build`;
```
*/
type SyncOptions = CommonOptions<true>;

type StricterOptions<
	WideOptions extends CommonOptions,
	StrictOptions extends CommonOptions,
> = WideOptions extends StrictOptions ? WideOptions : StrictOptions;

type TemplateExpressionItem =
	| string
	| number
	| Result
	| SyncResult;

/**
Value allowed inside `${...}` when using the template string syntax.
*/
type TemplateExpression = TemplateExpressionItem | readonly TemplateExpressionItem[];

// `subprocess.pipe()` options
type PipeOptions = {
	/**
	Which stream to pipe from the source subprocess. A [file descriptor](https://en.wikipedia.org/wiki/File_descriptor) like `"fd3"` can also be passed.

	`"all"` pipes both `stdout` and `stderr`. This requires the `all` option to be `true`.
	*/
	readonly from?: FromOption;

	/**
	Which stream to pipe to the destination subprocess. A [file descriptor](https://en.wikipedia.org/wiki/File_descriptor) like `"fd3"` can also be passed.
	*/
	readonly to?: ToOption;

	/**
	Unpipe the subprocess when the signal aborts.
	*/
	readonly unpipeSignal?: AbortSignal;
};

// `subprocess.pipe()`
type PipableSubprocess = {
	/**
	[Pipe](https://nodejs.org/api/stream.html#readablepipedestination-options) the subprocess' `stdout` to a second Execa subprocess' `stdin`. This resolves with that second subprocess' result. If either subprocess is rejected, this is rejected with that subprocess' error instead.

	This follows the same syntax as `execa(file, arguments?, options?)` except both regular options and pipe-specific options can be specified.
	*/
	pipe<OptionsType extends Options & PipeOptions = {}>(
		file: string | URL,
		arguments?: readonly string[],
		options?: OptionsType,
	): Promise<Result<OptionsType>> & PipableSubprocess;
	pipe<OptionsType extends Options & PipeOptions = {}>(
		file: string | URL,
		options?: OptionsType,
	): Promise<Result<OptionsType>> & PipableSubprocess;

	/**
	Like `subprocess.pipe(file, arguments?, options?)` but using a `command` template string instead. This follows the same syntax as `$`.
	*/
	pipe(templates: TemplateStringsArray, ...expressions: readonly TemplateExpression[]):
	Promise<Result<{}>> & PipableSubprocess;
	pipe<OptionsType extends Options & PipeOptions = {}>(options: OptionsType):
	(templates: TemplateStringsArray, ...expressions: readonly TemplateExpression[])
	=> Promise<Result<OptionsType>> & PipableSubprocess;

	/**
	Like `subprocess.pipe(file, arguments?, options?)` but using the return value of another `execa()` call instead.
	*/
	pipe<Destination extends ResultPromise>(destination: Destination, options?: PipeOptions):
	Promise<Awaited<Destination>> & PipableSubprocess;
};

// `subprocess.readable|duplex|iterable()` options
type ReadableOptions = {
	/**
	Which stream to read from the subprocess. A [file descriptor](https://en.wikipedia.org/wiki/File_descriptor) like `"fd3"` can also be passed.

	`"all"` reads both `stdout` and `stderr`. This requires the `all` option to be `true`.

	@default 'stdout'
	*/
	readonly from?: FromOption;

	/**
	If `false`, iterates over lines. Each line is a string.

	If `true`, iterates over arbitrary chunks of data. Each line is an [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) (with `subprocess.iterable()`) or a [`Buffer`](https://nodejs.org/api/buffer.html#class-buffer) (with `subprocess.readable()`/`subprocess.duplex()`).

	This is always `true` when the `encoding` option is binary.

	@default `false` with `subprocess.iterable()`, `true` otherwise
	*/
	readonly binary?: boolean;

	/**
	If both this option and the `binary` option is `false`, [newlines](https://en.wikipedia.org/wiki/Newline) are stripped from each line.

	@default `false` with `subprocess.iterable()`, `true` otherwise
	*/
	readonly preserveNewlines?: boolean;
};

// `subprocess.writable|duplex()` options
type WritableOptions = {
	/**
	Which stream to write to the subprocess. A [file descriptor](https://en.wikipedia.org/wiki/File_descriptor) like `"fd3"` can also be passed.

	@default 'stdin'
	*/
	readonly to?: ToOption;
};

// `subprocess.duplex()` options
type DuplexOptions = ReadableOptions & WritableOptions;

// `subprocess.iterable()` return value
type SubprocessAsyncIterable<
	BinaryOption extends boolean | undefined,
	EncodingOption extends Options['encoding'],
> = AsyncIterableIterator<
EncodingOption extends BinaryEncodingOption
	? Uint8Array
	: BinaryOption extends true
		? Uint8Array
		: string
>;

// `subprocess.stdin|stdout|stderr|stdio`
type SubprocessStdioStream<
	FdNumber extends string,
	OptionsType extends Options,
> = SubprocessStream<FdNumber, IgnoresSubprocessOutput<FdNumber, OptionsType>, OptionsType>;

type SubprocessStream<
	FdNumber extends string,
	StreamResultIgnored,
	OptionsType extends Options,
> = StreamResultIgnored extends true
	? null
	: InputOutputStream<IsInputFd<FdNumber, OptionsType>>;

type InputOutputStream<IsInput extends boolean> = IsInput extends true
	? Writable
	: Readable;

// `subprocess.stdio`
type SubprocessStdioArray<OptionsType extends Options> = MapStdioStreams<StdioOptionNormalizedArray<OptionsType>, OptionsType>;

// We cannot use mapped types because it must be compatible with Node.js `ChildProcess["stdio"]` which uses a tuple with exactly 5 items
type MapStdioStreams<
	StdioOptionsArrayType,
	OptionsType extends Options,
> = [
	SubprocessStdioStream<'0', OptionsType>,
	SubprocessStdioStream<'1', OptionsType>,
	SubprocessStdioStream<'2', OptionsType>,
	'3' extends keyof StdioOptionsArrayType ? SubprocessStdioStream<'3', OptionsType> : never,
	'4' extends keyof StdioOptionsArrayType ? SubprocessStdioStream<'4', OptionsType> : never,
];

// `subprocess.all`
type SubprocessAll<OptionsType extends Options> = AllStream<AllIgnored<OptionsType['all'], OptionsType>>;

type AllStream<IsIgnored> = IsIgnored extends true ? undefined : Readable;

type AllIgnored<
	AllOption,
	OptionsType extends Options,
> = AllOption extends true
	? IgnoresSubprocessOutput<'1', OptionsType> extends true
		? IgnoresSubprocessOutput<'2', OptionsType>
		: false
	: true;

type ExecaCustomSubprocess<OptionsType extends Options> = {
	/**
	Process identifier ([PID](https://en.wikipedia.org/wiki/Process_identifier)).

	This is `undefined` if the subprocess failed to spawn.
	*/
	pid?: number;

	/**
	The subprocess [`stdin`](https://en.wikipedia.org/wiki/Standard_streams#Standard_input_(stdin)) as a stream.

	This is `null` if the `stdin` option is set to `'inherit'`, `'ignore'`, `Readable` or `integer`.
	*/
	stdin: SubprocessStdioStream<'0', OptionsType>;

	/**
	The subprocess [`stdout`](https://en.wikipedia.org/wiki/Standard_streams#Standard_output_(stdout)) as a stream.

	This is `null` if the `stdout` option is set to `'inherit'`, `'ignore'`, `Writable` or `integer`, or if the `buffer` option is `false`.
	*/
	stdout: SubprocessStdioStream<'1', OptionsType>;

	/**
	The subprocess [`stderr`](https://en.wikipedia.org/wiki/Standard_streams#Standard_error_(stderr)) as a stream.

	This is `null` if the `stderr` option is set to `'inherit'`, `'ignore'`, `Writable` or `integer`, or if the `buffer` option is `false`.
	*/
	stderr: SubprocessStdioStream<'2', OptionsType>;

	/**
	Stream combining/interleaving `subprocess.stdout` and `subprocess.stderr`.

	This requires the `all` option to be `true`.

	This is `undefined` if `stdout` and `stderr` options are set to `'inherit'`, `'ignore'`, `Writable` or `integer`, or if the `buffer` option is `false`.
	*/
	all: SubprocessAll<OptionsType>;

	/**
	The subprocess `stdin`, `stdout`, `stderr` and other files descriptors as an array of streams.

	Each array item is `null` if the corresponding `stdin`, `stdout`, `stderr` or `stdio` option is set to `'inherit'`, `'ignore'`, `Stream` or `integer`, or if the `buffer` option is `false`.
	*/
	stdio: SubprocessStdioArray<OptionsType>;

	/**
	Sends a [signal](https://nodejs.org/api/os.html#signal-constants) to the subprocess. The default signal is the `killSignal` option. `killSignal` defaults to `SIGTERM`, which terminates the subprocess.

	This returns `false` when the signal could not be sent, for example when the subprocess has already exited.

	When an error is passed as argument, it is set to the subprocess' `error.cause`. The subprocess is then terminated with the default signal. This does not emit the [`error` event](https://nodejs.org/api/child_process.html#event-error).

	[More info.](https://nodejs.org/api/child_process.html#subprocesskillsignal)
	*/
	kill(signal?: keyof SignalConstants | number, error?: Error): boolean;
	kill(error?: Error): boolean;

	/**
	Subprocesses are [async iterables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator). They iterate over each output line.
	*/
	[Symbol.asyncIterator](): SubprocessAsyncIterable<undefined, OptionsType['encoding']>;

	/**
	Same as `subprocess[Symbol.asyncIterator]` except options can be provided.
	*/
	iterable<IterableOptions extends ReadableOptions = {}>(readableOptions?: IterableOptions): SubprocessAsyncIterable<IterableOptions['binary'], OptionsType['encoding']>;

	/**
	Converts the subprocess to a readable stream.
	*/
	readable(readableOptions?: ReadableOptions): Readable;

	/**
	Converts the subprocess to a writable stream.
	*/
	writable(writableOptions?: WritableOptions): Writable;

	/**
	Converts the subprocess to a duplex stream.
	*/
	duplex(duplexOptions?: DuplexOptions): Duplex;
}
& IpcMethods<HasIpc<OptionsType>, OptionsType['serialization']>
& PipableSubprocess;

/**
[`child_process` instance](https://nodejs.org/api/child_process.html#child_process_class_childprocess) with additional methods and properties.
*/
type Subprocess<OptionsType extends Options = Options> =
	& Omit<ChildProcess, keyof ExecaCustomSubprocess<OptionsType>>
	& ExecaCustomSubprocess<OptionsType>;

/**
The return value of all asynchronous methods is both:
- the subprocess.
- a `Promise` either resolving with its successful `result`, or rejecting with its `error`.
*/
type ResultPromise<OptionsType extends Options = Options> =
	& Subprocess<OptionsType>
	& Promise<Result<OptionsType>>;

type ExecuteCommandOptions = Omit<Options, 'cancelSignal'> & {
    command: string;
    args?: string[];
    cwd?: string;
    ignoreError?: boolean;
    env?: Record<string, string>;
    signal?: AbortSignal;
};
declare function executeCommand(options: ExecuteCommandOptions): ResultPromise;
declare function executeCommandSync(options: ExecuteCommandOptions): string;
declare function executeNodeCommand({ scriptPath, args, options, }: {
    scriptPath: string;
    args?: string[];
    options?: Options;
}): ResultPromise;

type PackageJsonWithDepsAndDevDeps = PackageJson & Required<Pick<PackageJson, 'dependencies' | 'devDependencies'>>;
type PackageJsonWithMaybeDeps = Partial<Pick<PackageJson, 'dependencies' | 'devDependencies' | 'peerDependencies' | 'files'>>;

type PackageMetadata = {
    version: string;
    location?: string;
    reasons?: string[];
};
type InstallationMetadata = {
    dependencies: Record<string, PackageMetadata[]>;
    duplicatedDependencies: Record<string, string[]>;
    infoCommand: string;
    dedupeCommand: string;
};

declare enum PackageManagerName {
    NPM = "npm",
    YARN1 = "yarn1",
    YARN2 = "yarn2",
    PNPM = "pnpm",
    BUN = "bun"
}
declare const indentSymbol: unique symbol;
type PackageJsonWithIndent = PackageJsonWithDepsAndDevDeps & {
    [indentSymbol]?: any;
};
/**
 * Extract package name and version from input
 *
 * @param pkg A string like `@storybook/cli`, `react` or `react@^16`
 * @returns A tuple of 2 elements: [packageName, packageVersion]
 */
declare function getPackageDetails(pkg: string): [string, string?];
interface JsPackageManagerOptions {
    cwd?: string;
    configDir?: string;
    storiesPaths?: string[];
}
type PackageJsonInfo = {
    packageJsonPath: string;
    operationDir: string;
    packageJson: PackageJsonWithDepsAndDevDeps;
};
declare abstract class JsPackageManager {
    #private;
    abstract readonly type: PackageManagerName;
    /** The path to the primary package.json file (contains the `storybook` dependency). */
    readonly primaryPackageJson: PackageJsonInfo;
    /** The paths to all package.json files in the project root. */
    packageJsonPaths: string[];
    /**
     * The path to the Storybook instance directory. This is used to find the primary package.json
     * file in a repository.
     */
    readonly instanceDir: string;
    /** The current working directory. */
    protected readonly cwd: string;
    /** Cache for latest version results to avoid repeated network calls. */
    static readonly latestVersionCache: Map<string, string | null>;
    /** Cache for installed version results to avoid repeated file system calls. */
    static readonly installedVersionCache: Map<string, string | null>;
    /** Cache for package.json files to avoid repeated file system calls. */
    static readonly packageJsonCache: Map<string, PackageJsonWithIndent>;
    constructor(options?: JsPackageManagerOptions);
    /** Runs arbitrary package scripts (as a string for display). */
    abstract getRunCommand(command: string): string;
    /** Returns the command to run the binary of a local package */
    abstract getPackageCommand(args: string[]): string;
    /** Get the package.json file for a given module. */
    abstract getModulePackageJSON(packageName: string, cwd?: string): Promise<PackageJson | null>;
    isStorybookInMonorepo(): boolean;
    installDependencies(options?: {
        force?: boolean;
    }): Promise<void>;
    dedupeDependencies(options?: {
        force?: boolean;
    }): Promise<void>;
    /** Read the `package.json` file available in the provided directory */
    static getPackageJson(packageJsonPath: string): PackageJsonWithIndent;
    writePackageJson(packageJson: PackageJson, directory?: string): void;
    getAllDependencies(): Record<string, string>;
    isDependencyInstalled(dependency: string): boolean;
    /**
     * Add dependencies to a project using `yarn add` or `npm install`.
     *
     * @example
     *
     * ```ts
     * addDependencies(options, [
     *   `@storybook/react@${storybookVersion}`,
     *   `@storybook/addon-links@${linksVersion}`,
     * ]);
     * ```
     *
     * @param {Object} options Contains `skipInstall`, `packageJson` and `installAsDevDependencies`
     *   which we use to determine how we install packages.
     * @param {Array} dependencies Contains a list of packages to add.
     */
    addDependencies(options: {
        skipInstall: true;
        type: 'dependencies' | 'devDependencies' | 'peerDependencies';
        writeOutputToFile?: boolean;
        packageJsonInfo?: PackageJsonInfo;
    } | {
        skipInstall?: false;
        type: 'dependencies' | 'devDependencies';
        writeOutputToFile?: boolean;
        packageJsonInfo?: PackageJsonInfo;
    }, dependencies: string[]): Promise<void | ResultPromise>;
    /**
     * Removing dependencies from the package.json file, which is found first starting from the
     * instance root. The method does not run a package manager install like `npm install`.
     *
     * @example
     *
     * ```ts
     * removeDependencies([`@storybook/react`]);
     * ```
     *
     * @param dependencies Contains a list of packages to remove.
     */
    removeDependencies(dependencies: string[]): Promise<void>;
    /**
     * Return an array of strings matching following format: `<package_name>@<package_latest_version>`
     *
     * For packages in the storybook monorepo, when the latest version is equal to the version of the
     * current CLI the version is not added to the string.
     *
     * When a package is in the monorepo, and the version is not equal to the CLI version, the version
     * is taken from the versions.ts file and added to the string.
     *
     * @param packages
     */
    getVersionedPackages(packages: string[]): Promise<string[]>;
    /**
     * Return an array of string standing for the latest version of the input packages. To be able to
     * identify which version goes with which package the order of the input array is keep.
     *
     * @param packageNames
     */
    getVersions(...packageNames: string[]): Promise<string[]>;
    /**
     * Return the latest version of the input package available on npmjs registry. If constraint are
     * provided it return the latest version matching the constraints.
     *
     * For `@storybook/*` packages the latest version is retrieved from `cli/src/versions.json` file
     * directly
     *
     * @param packageName The name of the package
     * @param constraint A valid semver constraint, example: '1.x || >=2.5.0 || 5.0.0 - 7.2.3'
     */
    getVersion(packageName: string, constraint?: string): Promise<string>;
    /**
     * Get the latest version of the package available on npmjs.com. If constraint is set then it
     * returns a version satisfying it, otherwise the latest version available is returned.
     *
     * @param packageName Name of the package
     * @param constraint Version range to use to constraint the returned version
     */
    latestVersion(packageName: string, constraint?: string): Promise<string | null>;
    /**
     * Clear the latest version cache. Useful for testing or when you want to refresh version
     * information.
     *
     * @param packageName Optional package name to clear only specific entries. If not provided,
     *   clears all cache.
     */
    static clearLatestVersionCache(packageName?: string): void;
    /**
     * Clear the installed version cache for a specific package or all packages.
     *
     * @param packageName Optional package name to clear from cache. If not provided, clears all.
     */
    clearInstalledVersionCache(packageName?: string): void;
    /**
     * Clear both the latest version cache and installed version cache. This should be called after
     * any operation that modifies dependencies.
     */
    clearAllVersionCaches(): void;
    addStorybookCommandInScripts(options?: {
        port: number;
        preCommand?: string;
    }): void;
    addScripts(scripts: Record<string, string>): void;
    addPackageResolutions(versions: Record<string, string>): void;
    protected abstract runInstall(options?: {
        force?: boolean;
    }): ResultPromise;
    protected abstract runAddDeps(dependencies: string[], installAsDevDependencies: boolean, writeOutputToFile?: boolean): ResultPromise;
    protected abstract getResolutions(packageJson: PackageJson, versions: Record<string, string>): Record<string, any>;
    /**
     * Get the latest or all versions of the input package available on npmjs.com
     *
     * @param packageName Name of the package
     * @param fetchAllVersions Should return
     */
    protected abstract runGetVersions<T extends boolean>(packageName: string, fetchAllVersions: T): Promise<T extends true ? string[] : string>;
    abstract getRegistryURL(): Promise<string | undefined>;
    abstract runInternalCommand(command: string, args: string[], cwd?: string, stdio?: 'inherit' | 'pipe' | 'ignore'): ResultPromise;
    abstract runPackageCommand(options: Omit<ExecuteCommandOptions, 'command'> & {
        args: string[];
    }): ResultPromise;
    abstract findInstallations(pattern?: string[]): Promise<InstallationMetadata | undefined>;
    abstract findInstallations(pattern?: string[], options?: {
        depth: number;
    }): Promise<InstallationMetadata | undefined>;
    abstract parseErrorFromLogs(logs?: string): string;
    /** Returns the installed (within node_modules or pnp zip) version of a specified package */
    getInstalledVersion(packageName: string): Promise<string | null>;
    isPackageInstalled(packageName: string): Promise<boolean>;
    /**
     * Searches for a dependency/devDependency in all package.json files and returns the version of
     * the dependency.
     */
    getDependencyVersion(dependency: string): string | null;
    static hasStorybookDependency(packageJsonPath: string): boolean;
    static hasAnyStorybookDependency(packageJsonPath: string): boolean;
    /** List all package.json files starting from the given directory and stopping at the project root. */
    static listAllPackageJsonPaths(instanceDir: string, storiesPaths?: string[]): string[];
    static getPackageJsonInfo(packageJsonPath: string): PackageJsonInfo;
}

declare class JsPackageManagerFactory {
    /** Cache for package manager instances */
    private static cache;
    /** Generate a cache key based on the parameters */
    private static getCacheKey;
    /** Clear the package manager cache */
    static clearCache(): void;
    /**
     * Determine which package manager type to use based on lockfiles, commands, and environment
     *
     * @param cwd - Current working directory
     * @returns Package manager type as string: 'npm', 'pnpm', 'bun', 'yarn1', or 'yarn2'
     * @throws Error if no usable package manager is found
     */
    static getPackageManagerType(cwd?: string): PackageManagerName;
    static getPackageManager({ force, configDir, storiesPaths, ignoreCache, }?: {
        force?: PackageManagerName;
        configDir?: string;
        storiesPaths?: string[];
        ignoreCache?: boolean;
    }, cwd?: string): JsPackageManager;
    /** Look up map of package manager proxies by name */
    private static PROXY_MAP;
    /**
     * Infer the package manager based on the command the user is running. Each package manager sets
     * the `npm_config_user_agent` environment variable with its name and version e.g. "npm/7.24.0"
     * Which is really useful when invoking commands via npx/pnpx/yarn create/etc.
     */
    private static inferPackageManagerFromUserAgent;
}

type RemoveAddonOptions = {
    packageManager: JsPackageManager;
    configDir?: string;
    skipInstall?: boolean;
};
/**
 * Remove the given addon package and remove it from main.js
 *
 * @example
 *
 * ```sh
 * sb remove @storybook/addon-links
 * ```
 */
declare function removeAddon(addon: string, options: RemoveAddonOptions): Promise<void>;

/**
 * Get the path of the file or directory with input name inside the Storybook cache directory:
 *
 * - `node_modules/.cache/storybook/{directoryName}` in a Node.js project or npm package
 * - `.cache/storybook/{directoryName}` otherwise
 *
 * @param fileOrDirectoryName {string} Name of the file or directory
 * @returns {string} Absolute path to the file or directory
 */
declare function resolvePathInStorybookCache(fileOrDirectoryName: string, sub?: string): string;

declare function isPreservingSymlinks(): boolean | undefined;

declare function getPreviewBodyTemplate(configDirPath: string, interpolations?: Record<string, string>): string;
declare function getPreviewHeadTemplate(configDirPath: string, interpolations?: Record<string, string>): string;

declare function validateFrameworkName(frameworkName: string | undefined): asserts frameworkName is string;

declare function validateConfigurationFiles(configDir: string, cwd?: string): Promise<void>;

/** Mimicking the satisfies operator until we can upgrade to TS4.9 */
declare function satisfies<A>(): <T extends A>(x: T) => T;

interface Prettier {
    resolveConfig: (filePath: string, options?: {
        editorconfig?: boolean;
    }) => Promise<any>;
    format: (content: string, options?: any) => Promise<string> | string;
    check: (content: string, options?: any) => Promise<boolean>;
    clearConfigCache: () => Promise<void>;
    formatWithCursor: (content: string, options?: any) => Promise<{
        formatted: string;
        cursorOffset: number;
    }>;
    getFileInfo: (filePath: string, options?: any) => Promise<{
        ignored: boolean;
        inferredParser: string | null;
    }>;
    getSupportInfo: () => Promise<{
        languages: any[];
        options: any[];
    }>;
    resolveConfigFile: (filePath?: string) => Promise<string | null>;
    version: string;
    AstPath: any;
    doc: any;
    util: any;
}
declare function getPrettier(): Promise<Prettier>;
/**
 * Format the content of a file using prettier. If prettier is not available in the user's project,
 * it will fallback to use editorconfig settings if available and formats the file by a
 * prettier-fallback.
 */
declare function formatFileContent(filePath: string, content: string): Promise<string>;

interface StoryIdData {
    storyFilePath: string;
    exportedStoryName: string;
}
type GetStoryIdOptions = StoryIdData & {
    configDir: string;
    stories: StoriesEntry[];
    workingDir?: string;
    userTitle?: string;
    storyFilePath: string;
};
declare function getStoryId(data: StoryIdData, options: Options$2): Promise<{
    storyId: string;
    kind: string;
}>;
declare function getStoryTitle({ storyFilePath, configDir, stories, workingDir, userTitle, }: Omit<GetStoryIdOptions, 'exportedStoryName'>): string | undefined;

/** Replaces the path separator with forward slashes */
declare const posix: (localPath: string, seperator?: string) => string;

declare function syncStorybookAddons(mainConfig: StorybookConfig, previewConfigPath: string, configDir: string): Promise<void>;
declare function syncPreviewAddonsWithMainConfig(mainConfig: StorybookConfig, previewConfig: ConfigFile, configDir: string): Promise<ConfigFile>;

interface SetupAddonInConfigOptions {
    addonName: string;
    mainConfigCSFFile: ConfigFile;
    previewConfigPath: string | undefined;
    configDir: string;
}
/**
 * Setup an addon in the Storybook configuration by adding it to the addons array in main config and
 * syncing it with preview config.
 *
 * @param options Configuration options for setting up the addon
 */
declare function setupAddonInConfig({ addonName, previewConfigPath, configDir, mainConfigCSFFile, }: SetupAddonInConfigOptions): Promise<void>;

/**
 * Checks if the following node declarations exists in the main config file.
 *
 * @example
 *
 * ```ts
 * const <name> = () => {};
 * function <name>() {}
 * ```
 */
declare function doesVariableOrFunctionDeclarationExist(node: types.Node, name: string): boolean;
/**
 * Returns the name of the getAbsolutePath wrapper function if it exists in the main config file.
 *
 * @returns Name of the getAbsolutePath wrapper function (e.g. `getAbsolutePath`).
 */
declare function getAbsolutePathWrapperName(config: ConfigFile): string | null;
/** Check if the node needs to be wrapped with getAbsolutePath wrapper. */
declare function isGetAbsolutePathWrapperNecessary(node: types.Node, cb?: (node: types.StringLiteral | types.ObjectProperty | types.ArrayExpression) => void): boolean;
/**
 * Get all fields that need to be wrapped with getAbsolutePath wrapper.
 *
 * @returns Array of fields that need to be wrapped with getAbsolutePath wrapper.
 */
declare function getFieldsForGetAbsolutePathWrapper(config: ConfigFile): types.Node[];
/**
 * Returns AST for the following function
 *
 * @example
 *
 * ```ts
 * function getAbsolutePath(value) {
 *   return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
 * }
 * ```
 */
declare function getAbsolutePathWrapperAsCallExpression(isConfigTypescript: boolean): types.FunctionDeclaration;
declare function wrapValueWithGetAbsolutePathWrapper(config: ConfigFile, node: types.Node): void;

/**
 * Helper function to scan for files matching a glob pattern and transform them
 *
 * @param options Configuration options
 * @param transform Function to transform the found files
 * @returns Array of errors encountered during transformation
 */
declare function scanAndTransformFiles<T extends Record<string, unknown>>({ promptMessage, defaultGlob, dryRun, force, transformFn, transformOptions, }: {
    promptMessage?: string;
    defaultGlob?: string;
    dryRun: boolean;
    force?: boolean;
    transformFn: (files: string[], options: T, dryRun: boolean) => Promise<Array<{
        file: string;
        error: Error;
    }>>;
    transformOptions: T;
}): Promise<Array<{
    file: string;
    error: Error;
}>>;

declare const transformImportFiles: (files: string[], renamedImports: Record<string, string>, dryRun?: boolean) => Promise<{
    file: string;
    error: Error;
}[]>;

/**
 * This is just an alias for import.meta.resolve. It makes it possible to mock it in Vitest with
 * module-mocking, as Vitest currently does not support import.meta.resolve in tests.
 *
 * @see https://github.com/vitest-dev/vitest/issues/6953
 */
declare const importMetaResolve: (...args: Parameters<ImportMeta["resolve"]>) => string;
/** Resolves the directory of a given package, by resolving its package.json file. */
declare const resolvePackageDir: (pkg: Parameters<ImportMeta["resolve"]>[0], parent?: Parameters<ImportMeta["resolve"]>[0]) => string;
/**
 * Dynamically imports a module with TypeScript support, falling back to require if necessary.
 *
 * @example Import a TypeScript preset
 *
 * ```ts
 * const preset = await importModule('./my-preset.ts');
 * // Returns the default export or the entire module
 * ```
 *
 * @example Import a JavaScript addon
 *
 * ```ts
 * const addon = await importModule('@storybook/addon-essentials');
 * // Returns the default export or the entire module
 * ```
 */
declare function importModule(path: string, { skipCache }?: {
    skipCache?: boolean;
}): Promise<any>;
/**
 * Safely resolves a module specifier to its absolute file path.
 *
 * Attempts to resolve the given module specifier by trying different file extensions until a valid
 * file is found. Returns undefined if the module cannot be resolved.
 *
 * Optionally pass in a list of file extensions to try, defaulting to `.mjs`, `.js`, and `.cjs`.
 *
 * @example
 *
 * ```typescript
 * // Resolve a relative module
 * const path = safeResolveModule({
 *   specifier: './utils',
 *   parent: import.meta.url,
 * });
 *
 * // Resolve with custom extensions
 * const path = safeResolveModule({
 *   specifier: './config',
 *   extensions: ['.json', '.js'],
 * });
 * ```
 */
declare const safeResolveModule: ({ specifier, parent, extensions, }: {
    specifier: string;
    parent?: string;
    extensions?: string[];
}) => string | undefined;

declare const getAddonNames: (mainConfig: StorybookConfig) => string[];

declare const groupBy: <K extends PropertyKey, T>(items: T[], keySelector: (item: T, index: number) => K) => Record<K, T[]>;
declare function invariant(condition: unknown, message?: string | (() => string)): asserts condition;

export { DEFAULT_FILES_PATTERN, type ExecuteCommandOptions, type FileOptions, FileSystemCache, HandledError, type InstallationMetadata, type InterPresetOptions, JsPackageManager, JsPackageManagerFactory, type PackageJsonInfo, type PackageJsonWithDepsAndDevDeps, type PackageJsonWithMaybeDeps, PackageManagerName, type PackageMetadata, type RemoveAddonOptions, type SetupAddonInConfigOptions, builderPackages, cache, checkAddonOrder, commonGlobOptions, compilerPackages, createFileSystemCache, createLogStream, doesVariableOrFunctionDeclarationExist, executeCommand, executeCommandSync, executeNodeCommand, extractFrameworkPackageName, extractRenderer, filterPresetsConfig, findConfigFile, findFilesUp, formatFileContent, frameworkPackages, frameworkToBuilder, frameworkToRenderer, getAbsolutePathWrapperAsCallExpression, getAbsolutePathWrapperName, getAddonNames, getAutoRefs, getBuilderOptions, getConfigInfo, getDirectoryFromWorkingDir, getEnvConfig, getFieldsForGetAbsolutePathWrapper, getFrameworkName, getInterpretedFile, getPackageDetails, getPresets, getPrettier, getPreviewBodyTemplate, getPreviewHeadTemplate, getProjectRoot, getRefs, getRendererName, getStoryId, getStoryTitle, getStorybookConfiguration, getStorybookInfo, globToRegexp, groupBy, importMetaResolve, importModule, interpolate, invalidateProjectRootCache, invariant, isCI, isCorePackage, isGetAbsolutePathWrapperNecessary, isPreservingSymlinks, isSatelliteAddon, loadAllPresets, loadEnvs, loadMainConfig, loadManagerOrAddonsFile, loadPreset, loadPreviewOrConfigFile, logConfig, nodePathsToArray, normalizeStories, normalizeStoriesEntry, normalizeStoryPath, optionalEnvToBoolean, parseList, posix, readTemplate, removeAddon, rendererPackages, resolveAddonName, resolveImport, resolvePackageDir, resolvePathInStorybookCache, safeResolveModule, satisfies, scanAndTransformFiles, serverRequire, setupAddonInConfig, stringifyEnvs, stringifyProcessEnvs, supportedExtensions, syncPreviewAddonsWithMainConfig, syncStorybookAddons, temporaryDirectory, temporaryFile, transformImportFiles, validateConfigurationFiles, validateFrameworkName, _default as versions, wrapValueWithGetAbsolutePathWrapper };
