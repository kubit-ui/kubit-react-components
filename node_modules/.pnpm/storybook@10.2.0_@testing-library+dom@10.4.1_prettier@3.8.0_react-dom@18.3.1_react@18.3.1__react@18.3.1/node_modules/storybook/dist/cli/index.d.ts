import * as semver from 'semver';
import { JsPackageManager as JsPackageManager$1, PackageJson } from 'storybook/internal/common';
import { SupportedFramework as SupportedFramework$1, SupportedRenderer, SupportedLanguage, Feature, PackageJson as PackageJson$1, NormalizedProjectAnnotations, ProjectAnnotations, ComposedStoryFn } from 'storybook/internal/types';
import { ChildProcess } from 'node:child_process';
import { SignalConstants } from 'node:os';
import { Duplex, Readable, Writable } from 'node:stream';
import { TransformStream, ReadableStream, WritableStream } from 'node:stream/web';

declare function detectPnp(): Promise<boolean>;

declare function readFileAsJson(jsonPath: string, allowComments?: boolean): any;
declare const writeFileAsJson: (jsonPath: string, content: unknown) => boolean;
/**
 * Detect if any babel dependencies need to be added to the project This is currently used by
 * react-native generator
 *
 * @example
 *
 * ```ts
 * const babelDependencies = await getBabelDependencies(
 *   packageManager,
 *   npmOptions,
 *   packageJson
 * ); // you can then spread the result when using installDependencies
 * installDependencies(npmOptions, [
 *   `@storybook/react@${storybookVersion}`,
 *   ...babelDependencies,
 * ]);
 * ```
 *
 * @param packageJson The current package.json so we can inspect its contents
 * @returns Contains the packages and versions that need to be installed
 */
declare function getBabelDependencies(packageManager: JsPackageManager$1): Promise<string[]>;
declare function addToDevDependenciesIfNotPresent(packageJson: PackageJson, name: string, packageVersion: string): void;
declare function copyTemplate(templateRoot: string, destination?: string): void;
type CopyTemplateFilesOptions = {
    packageManager: JsPackageManager$1;
    templateLocation: SupportedFramework$1 | SupportedRenderer;
    language: SupportedLanguage;
    commonAssetsDir?: string;
    destination?: string;
    features: Set<Feature>;
};
/**
 * Return the installed version of a package, or the coerced version specifier from package.json if
 * it's a dependency but not installed (e.g. in a fresh project)
 */
declare function getVersionSafe(packageManager: JsPackageManager$1, packageName: string): Promise<string | undefined>;
declare const cliStoriesTargetPath: () => Promise<"./src/stories" | "./stories">;
declare function copyTemplateFiles({ packageManager, templateLocation, language, destination, commonAssetsDir, features, }: CopyTemplateFilesOptions): Promise<void>;
declare function adjustTemplate(templatePath: string, templateData: Record<string, any>): Promise<void>;
declare function coerceSemver(version: string): semver.SemVer;
declare function hasStorybookDependencies(packageManager: JsPackageManager$1): boolean;

declare const ANGULAR_JSON_PATH = "angular.json";
declare class AngularJSON {
    json: {
        projects: Record<string, {
            root: string;
            projectType: string;
            architect: Record<string, any>;
        }>;
    };
    constructor();
    get projects(): Record<string, {
        root: string;
        projectType: string;
        architect: Record<string, any>;
    }>;
    get projectsWithoutStorybook(): string[];
    get hasStorybookBuilder(): boolean;
    get rootProject(): {
        root: string;
        projectType: string;
        architect: Record<string, any>;
    } | null;
    getProjectSettingsByName(projectName: string): {
        root: string;
        projectType: string;
        architect: Record<string, any>;
    };
    getProjectName(): Promise<string>;
    addStorybookEntries({ angularProjectName, storybookFolder, useCompodoc, root, }: {
        angularProjectName: string;
        storybookFolder: string;
        useCompodoc: boolean;
        root: string;
    }): void;
    write(): void;
}

declare function getRendererDir(packageManager: JsPackageManager$1, renderer: SupportedFramework$1 | SupportedRenderer): Promise<string | null>;

declare enum ProjectType {
    ANGULAR = "angular",
    EMBER = "ember",
    HTML = "html",
    NEXTJS = "nextjs",
    NUXT = "nuxt",
    NX = "nx",
    PREACT = "preact",
    QWIK = "qwik",
    REACT = "react",
    REACT_NATIVE = "react_native",
    REACT_NATIVE_AND_RNW = "react_native_and_rnw",
    REACT_NATIVE_WEB = "react_native_web",
    REACT_SCRIPTS = "react_scripts",
    SERVER = "server",
    SOLID = "solid",
    SVELTE = "svelte",
    SVELTEKIT = "sveltekit",
    UNDETECTED = "undetected",
    UNSUPPORTED = "unsupported",
    VUE3 = "vue3",
    WEB_COMPONENTS = "web_components"
}

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
	pipedFrom: Unless<IsSync, Result$1[], []>;

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

type SuccessResult$1<
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
type Result$1<OptionsType extends Options = Options> = SuccessResult$1<false, OptionsType>;

/**
Result of a subprocess successful execution.

When the subprocess fails, it is rejected with an `ExecaError` instead.
*/
type SyncResult<OptionsType extends SyncOptions = SyncOptions> = SuccessResult$1<true, OptionsType>;

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
	| Result$1
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
	): Promise<Result$1<OptionsType>> & PipableSubprocess;
	pipe<OptionsType extends Options & PipeOptions = {}>(
		file: string | URL,
		options?: OptionsType,
	): Promise<Result$1<OptionsType>> & PipableSubprocess;

	/**
	Like `subprocess.pipe(file, arguments?, options?)` but using a `command` template string instead. This follows the same syntax as `$`.
	*/
	pipe(templates: TemplateStringsArray, ...expressions: readonly TemplateExpression[]):
	Promise<Result$1<{}>> & PipableSubprocess;
	pipe<OptionsType extends Options & PipeOptions = {}>(options: OptionsType):
	(templates: TemplateStringsArray, ...expressions: readonly TemplateExpression[])
	=> Promise<Result$1<OptionsType>> & PipableSubprocess;

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
	& Promise<Result$1<OptionsType>>;

type ExecuteCommandOptions = Omit<Options, 'cancelSignal'> & {
    command: string;
    args?: string[];
    cwd?: string;
    ignoreError?: boolean;
    env?: Record<string, string>;
    signal?: AbortSignal;
};

type PackageJsonWithDepsAndDevDeps = PackageJson$1 & Required<Pick<PackageJson$1, 'dependencies' | 'devDependencies'>>;

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
    abstract getModulePackageJSON(packageName: string, cwd?: string): Promise<PackageJson$1 | null>;
    isStorybookInMonorepo(): boolean;
    installDependencies(options?: {
        force?: boolean;
    }): Promise<void>;
    dedupeDependencies(options?: {
        force?: boolean;
    }): Promise<void>;
    /** Read the `package.json` file available in the provided directory */
    static getPackageJson(packageJsonPath: string): PackageJsonWithIndent;
    writePackageJson(packageJson: PackageJson$1, directory?: string): void;
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
    protected abstract getResolutions(packageJson: PackageJson$1, versions: Record<string, string>): Record<string, any>;
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

type NpmOptions = Parameters<JsPackageManager['addDependencies']>[0];

declare const SUPPORTED_ESLINT_EXTENSIONS: string[];
declare const findEslintFile: (instanceDir: string) => string | undefined;
declare const configureFlatConfig: (code: string) => Promise<string>;
declare function extractEslintInfo(packageManager: JsPackageManager$1): Promise<{
    hasEslint: boolean;
    isStorybookPluginInstalled: boolean;
    eslintConfigFile: string | undefined;
    unsupportedExtension?: string;
    isFlatConfig: boolean;
}>;
declare const normalizeExtends: (existingExtends: any) => string[];
declare function configureEslintPlugin({ eslintConfigFile, packageManager, isFlatConfig, }: {
    eslintConfigFile: string | undefined;
    packageManager: JsPackageManager$1;
    isFlatConfig: boolean;
}): Promise<void>;
declare const suggestESLintPlugin: () => Promise<boolean>;

type Primitive = string | number | symbol | bigint | boolean | null | undefined;

declare namespace util {
    type AssertEqual<T, U> = (<V>() => V extends T ? 1 : 2) extends <V>() => V extends U ? 1 : 2 ? true : false;
    export type isAny<T> = 0 extends 1 & T ? true : false;
    export const assertEqual: <A, B>(_: AssertEqual<A, B>) => void;
    export function assertIs<T>(_arg: T): void;
    export function assertNever(_x: never): never;
    export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
    export type OmitKeys<T, K extends string> = Pick<T, Exclude<keyof T, K>>;
    export type MakePartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
    export type Exactly<T, X> = T & Record<Exclude<keyof X, keyof T>, never>;
    export type InexactPartial<T> = {
        [k in keyof T]?: T[k] | undefined;
    };
    export const arrayToEnum: <T extends string, U extends [T, ...T[]]>(items: U) => { [k in U[number]]: k; };
    export const getValidEnumValues: (obj: any) => any[];
    export const objectValues: (obj: any) => any[];
    export const objectKeys: ObjectConstructor["keys"];
    export const find: <T>(arr: T[], checker: (arg: T) => any) => T | undefined;
    export type identity<T> = objectUtil.identity<T>;
    export type flatten<T> = objectUtil.flatten<T>;
    export type noUndefined<T> = T extends undefined ? never : T;
    export const isInteger: NumberConstructor["isInteger"];
    export function joinValues<T extends any[]>(array: T, separator?: string): string;
    export const jsonStringifyReplacer: (_: string, value: any) => any;
    export {  };
}
declare namespace objectUtil {
    export type MergeShapes<U, V> = keyof U & keyof V extends never ? U & V : {
        [k in Exclude<keyof U, keyof V>]: U[k];
    } & V;
    type optionalKeys<T extends object> = {
        [k in keyof T]: undefined extends T[k] ? k : never;
    }[keyof T];
    type requiredKeys<T extends object> = {
        [k in keyof T]: undefined extends T[k] ? never : k;
    }[keyof T];
    export type addQuestionMarks<T extends object, _O = any> = {
        [K in requiredKeys<T>]: T[K];
    } & {
        [K in optionalKeys<T>]?: T[K];
    } & {
        [k in keyof T]?: unknown;
    };
    export type identity<T> = T;
    export type flatten<T> = identity<{
        [k in keyof T]: T[k];
    }>;
    export type noNeverKeys<T> = {
        [k in keyof T]: [T[k]] extends [never] ? never : k;
    }[keyof T];
    export type noNever<T> = identity<{
        [k in noNeverKeys<T>]: k extends keyof T ? T[k] : never;
    }>;
    export const mergeShapes: <U, T>(first: U, second: T) => T & U;
    export type extendShape<A extends object, B extends object> = keyof A & keyof B extends never ? A & B : {
        [K in keyof A as K extends keyof B ? never : K]: A[K];
    } & {
        [K in keyof B]: B[K];
    };
    export {  };
}
declare const ZodParsedType: {
    string: "string";
    nan: "nan";
    number: "number";
    integer: "integer";
    float: "float";
    boolean: "boolean";
    date: "date";
    bigint: "bigint";
    symbol: "symbol";
    function: "function";
    undefined: "undefined";
    null: "null";
    array: "array";
    object: "object";
    unknown: "unknown";
    promise: "promise";
    void: "void";
    never: "never";
    map: "map";
    set: "set";
};
type ZodParsedType = keyof typeof ZodParsedType;

type allKeys<T> = T extends any ? keyof T : never;
type typeToFlattenedError<T, U = string> = {
    formErrors: U[];
    fieldErrors: {
        [P in allKeys<T>]?: U[];
    };
};
declare const ZodIssueCode: {
    invalid_type: "invalid_type";
    invalid_literal: "invalid_literal";
    custom: "custom";
    invalid_union: "invalid_union";
    invalid_union_discriminator: "invalid_union_discriminator";
    invalid_enum_value: "invalid_enum_value";
    unrecognized_keys: "unrecognized_keys";
    invalid_arguments: "invalid_arguments";
    invalid_return_type: "invalid_return_type";
    invalid_date: "invalid_date";
    invalid_string: "invalid_string";
    too_small: "too_small";
    too_big: "too_big";
    invalid_intersection_types: "invalid_intersection_types";
    not_multiple_of: "not_multiple_of";
    not_finite: "not_finite";
};
type ZodIssueCode = keyof typeof ZodIssueCode;
type ZodIssueBase = {
    path: (string | number)[];
    message?: string | undefined;
};
interface ZodInvalidTypeIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.invalid_type;
    expected: ZodParsedType;
    received: ZodParsedType;
}
interface ZodInvalidLiteralIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.invalid_literal;
    expected: unknown;
    received: unknown;
}
interface ZodUnrecognizedKeysIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.unrecognized_keys;
    keys: string[];
}
interface ZodInvalidUnionIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.invalid_union;
    unionErrors: ZodError[];
}
interface ZodInvalidUnionDiscriminatorIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.invalid_union_discriminator;
    options: Primitive[];
}
interface ZodInvalidEnumValueIssue extends ZodIssueBase {
    received: string | number;
    code: typeof ZodIssueCode.invalid_enum_value;
    options: (string | number)[];
}
interface ZodInvalidArgumentsIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.invalid_arguments;
    argumentsError: ZodError;
}
interface ZodInvalidReturnTypeIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.invalid_return_type;
    returnTypeError: ZodError;
}
interface ZodInvalidDateIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.invalid_date;
}
type StringValidation = "email" | "url" | "emoji" | "uuid" | "nanoid" | "regex" | "cuid" | "cuid2" | "ulid" | "datetime" | "date" | "time" | "duration" | "ip" | "cidr" | "base64" | "jwt" | "base64url" | {
    includes: string;
    position?: number | undefined;
} | {
    startsWith: string;
} | {
    endsWith: string;
};
interface ZodInvalidStringIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.invalid_string;
    validation: StringValidation;
}
interface ZodTooSmallIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.too_small;
    minimum: number | bigint;
    inclusive: boolean;
    exact?: boolean;
    type: "array" | "string" | "number" | "set" | "date" | "bigint";
}
interface ZodTooBigIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.too_big;
    maximum: number | bigint;
    inclusive: boolean;
    exact?: boolean;
    type: "array" | "string" | "number" | "set" | "date" | "bigint";
}
interface ZodInvalidIntersectionTypesIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.invalid_intersection_types;
}
interface ZodNotMultipleOfIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.not_multiple_of;
    multipleOf: number | bigint;
}
interface ZodNotFiniteIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.not_finite;
}
interface ZodCustomIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.custom;
    params?: {
        [k: string]: any;
    };
}
type ZodIssueOptionalMessage = ZodInvalidTypeIssue | ZodInvalidLiteralIssue | ZodUnrecognizedKeysIssue | ZodInvalidUnionIssue | ZodInvalidUnionDiscriminatorIssue | ZodInvalidEnumValueIssue | ZodInvalidArgumentsIssue | ZodInvalidReturnTypeIssue | ZodInvalidDateIssue | ZodInvalidStringIssue | ZodTooSmallIssue | ZodTooBigIssue | ZodInvalidIntersectionTypesIssue | ZodNotMultipleOfIssue | ZodNotFiniteIssue | ZodCustomIssue;
type ZodIssue = ZodIssueOptionalMessage & {
    fatal?: boolean | undefined;
    message: string;
};
type recursiveZodFormattedError<T> = T extends [any, ...any[]] ? {
    [K in keyof T]?: ZodFormattedError<T[K]>;
} : T extends any[] ? {
    [k: number]: ZodFormattedError<T[number]>;
} : T extends object ? {
    [K in keyof T]?: ZodFormattedError<T[K]>;
} : unknown;
type ZodFormattedError<T, U = string> = {
    _errors: U[];
} & recursiveZodFormattedError<NonNullable<T>>;
declare class ZodError<T = any> extends Error {
    issues: ZodIssue[];
    get errors(): ZodIssue[];
    constructor(issues: ZodIssue[]);
    format(): ZodFormattedError<T>;
    format<U>(mapper: (issue: ZodIssue) => U): ZodFormattedError<T, U>;
    static create: (issues: ZodIssue[]) => ZodError<any>;
    static assert(value: unknown): asserts value is ZodError;
    toString(): string;
    get message(): string;
    get isEmpty(): boolean;
    addIssue: (sub: ZodIssue) => void;
    addIssues: (subs?: ZodIssue[]) => void;
    flatten(): typeToFlattenedError<T>;
    flatten<U>(mapper?: (issue: ZodIssue) => U): typeToFlattenedError<T, U>;
    get formErrors(): typeToFlattenedError<T, string>;
}
type stripPath<T extends object> = T extends any ? util.OmitKeys<T, "path"> : never;
type IssueData = stripPath<ZodIssueOptionalMessage> & {
    path?: (string | number)[];
    fatal?: boolean | undefined;
};
type ErrorMapCtx = {
    defaultError: string;
    data: any;
};
type ZodErrorMap = (issue: ZodIssueOptionalMessage, _ctx: ErrorMapCtx) => {
    message: string;
};

type ParseParams = {
    path: (string | number)[];
    errorMap: ZodErrorMap;
    async: boolean;
};
type ParsePathComponent = string | number;
type ParsePath = ParsePathComponent[];
interface ParseContext {
    readonly common: {
        readonly issues: ZodIssue[];
        readonly contextualErrorMap?: ZodErrorMap | undefined;
        readonly async: boolean;
    };
    readonly path: ParsePath;
    readonly schemaErrorMap?: ZodErrorMap | undefined;
    readonly parent: ParseContext | null;
    readonly data: any;
    readonly parsedType: ZodParsedType;
}
type ParseInput = {
    data: any;
    path: (string | number)[];
    parent: ParseContext;
};
declare class ParseStatus {
    value: "aborted" | "dirty" | "valid";
    dirty(): void;
    abort(): void;
    static mergeArray(status: ParseStatus, results: SyncParseReturnType<any>[]): SyncParseReturnType;
    static mergeObjectAsync(status: ParseStatus, pairs: {
        key: ParseReturnType<any>;
        value: ParseReturnType<any>;
    }[]): Promise<SyncParseReturnType<any>>;
    static mergeObjectSync(status: ParseStatus, pairs: {
        key: SyncParseReturnType<any>;
        value: SyncParseReturnType<any>;
        alwaysSet?: boolean;
    }[]): SyncParseReturnType;
}
type INVALID = {
    status: "aborted";
};
declare const INVALID: INVALID;
type DIRTY<T> = {
    status: "dirty";
    value: T;
};
declare const DIRTY: <T>(value: T) => DIRTY<T>;
type OK<T> = {
    status: "valid";
    value: T;
};
declare const OK: <T>(value: T) => OK<T>;
type SyncParseReturnType<T = any> = OK<T> | DIRTY<T> | INVALID;
type AsyncParseReturnType<T> = Promise<SyncParseReturnType<T>>;
type ParseReturnType<T> = SyncParseReturnType<T> | AsyncParseReturnType<T>;

declare namespace enumUtil {
    type UnionToIntersectionFn<T> = (T extends unknown ? (k: () => T) => void : never) extends (k: infer Intersection) => void ? Intersection : never;
    type GetUnionLast<T> = UnionToIntersectionFn<T> extends () => infer Last ? Last : never;
    type UnionToTuple<T, Tuple extends unknown[] = []> = [T] extends [never] ? Tuple : UnionToTuple<Exclude<T, GetUnionLast<T>>, [GetUnionLast<T>, ...Tuple]>;
    type CastToStringTuple<T> = T extends [string, ...string[]] ? T : never;
    export type UnionToTupleString<T> = CastToStringTuple<UnionToTuple<T>>;
    export {  };
}

declare namespace errorUtil {
    type ErrMessage = string | {
        message?: string | undefined;
    };
    const errToObj: (message?: ErrMessage) => {
        message?: string | undefined;
    };
    const toString: (message?: ErrMessage) => string | undefined;
}

declare namespace partialUtil {
    type DeepPartial<T extends ZodTypeAny> = T extends ZodObject<ZodRawShape> ? ZodObject<{
        [k in keyof T["shape"]]: ZodOptional<DeepPartial<T["shape"][k]>>;
    }, T["_def"]["unknownKeys"], T["_def"]["catchall"]> : T extends ZodArray<infer Type, infer Card> ? ZodArray<DeepPartial<Type>, Card> : T extends ZodOptional<infer Type> ? ZodOptional<DeepPartial<Type>> : T extends ZodNullable<infer Type> ? ZodNullable<DeepPartial<Type>> : T extends ZodTuple<infer Items> ? {
        [k in keyof Items]: Items[k] extends ZodTypeAny ? DeepPartial<Items[k]> : never;
    } extends infer PI ? PI extends ZodTupleItems ? ZodTuple<PI> : never : never : T;
}

/**
 * The Standard Schema interface.
 */
type StandardSchemaV1<Input = unknown, Output = Input> = {
    /**
     * The Standard Schema properties.
     */
    readonly "~standard": StandardSchemaV1.Props<Input, Output>;
};
declare namespace StandardSchemaV1 {
    /**
     * The Standard Schema properties interface.
     */
    export interface Props<Input = unknown, Output = Input> {
        /**
         * The version number of the standard.
         */
        readonly version: 1;
        /**
         * The vendor name of the schema library.
         */
        readonly vendor: string;
        /**
         * Validates unknown input values.
         */
        readonly validate: (value: unknown) => Result<Output> | Promise<Result<Output>>;
        /**
         * Inferred types associated with the schema.
         */
        readonly types?: Types<Input, Output> | undefined;
    }
    /**
     * The result interface of the validate function.
     */
    export type Result<Output> = SuccessResult<Output> | FailureResult;
    /**
     * The result interface if validation succeeds.
     */
    export interface SuccessResult<Output> {
        /**
         * The typed output value.
         */
        readonly value: Output;
        /**
         * The non-existent issues.
         */
        readonly issues?: undefined;
    }
    /**
     * The result interface if validation fails.
     */
    export interface FailureResult {
        /**
         * The issues of failed validation.
         */
        readonly issues: ReadonlyArray<Issue>;
    }
    /**
     * The issue interface of the failure output.
     */
    export interface Issue {
        /**
         * The error message of the issue.
         */
        readonly message: string;
        /**
         * The path of the issue, if any.
         */
        readonly path?: ReadonlyArray<PropertyKey | PathSegment> | undefined;
    }
    /**
     * The path segment interface of the issue.
     */
    export interface PathSegment {
        /**
         * The key representing a path segment.
         */
        readonly key: PropertyKey;
    }
    /**
     * The Standard Schema types interface.
     */
    export interface Types<Input = unknown, Output = Input> {
        /**
         * The input type of the schema.
         */
        readonly input: Input;
        /**
         * The output type of the schema.
         */
        readonly output: Output;
    }
    /**
     * Infers the input type of a Standard Schema.
     */
    export type InferInput<Schema extends StandardSchemaV1> = NonNullable<Schema["~standard"]["types"]>["input"];
    /**
     * Infers the output type of a Standard Schema.
     */
    export type InferOutput<Schema extends StandardSchemaV1> = NonNullable<Schema["~standard"]["types"]>["output"];
    export {  };
}

interface RefinementCtx {
    addIssue: (arg: IssueData) => void;
    path: (string | number)[];
}
type ZodRawShape = {
    [k: string]: ZodTypeAny;
};
type ZodTypeAny = ZodType<any, any, any>;
type TypeOf<T extends ZodType<any, any, any>> = T["_output"];
type input<T extends ZodType<any, any, any>> = T["_input"];
type output<T extends ZodType<any, any, any>> = T["_output"];

type CustomErrorParams = Partial<util.Omit<ZodCustomIssue, "code">>;
interface ZodTypeDef {
    errorMap?: ZodErrorMap | undefined;
    description?: string | undefined;
}
type RawCreateParams = {
    errorMap?: ZodErrorMap | undefined;
    invalid_type_error?: string | undefined;
    required_error?: string | undefined;
    message?: string | undefined;
    description?: string | undefined;
} | undefined;
type SafeParseSuccess<Output> = {
    success: true;
    data: Output;
    error?: never;
};
type SafeParseError<Input> = {
    success: false;
    error: ZodError<Input>;
    data?: never;
};
type SafeParseReturnType<Input, Output> = SafeParseSuccess<Output> | SafeParseError<Input>;
declare abstract class ZodType<Output = any, Def extends ZodTypeDef = ZodTypeDef, Input = Output> {
    readonly _type: Output;
    readonly _output: Output;
    readonly _input: Input;
    readonly _def: Def;
    get description(): string | undefined;
    "~standard": StandardSchemaV1.Props<Input, Output>;
    abstract _parse(input: ParseInput): ParseReturnType<Output>;
    _getType(input: ParseInput): string;
    _getOrReturnCtx(input: ParseInput, ctx?: ParseContext | undefined): ParseContext;
    _processInputParams(input: ParseInput): {
        status: ParseStatus;
        ctx: ParseContext;
    };
    _parseSync(input: ParseInput): SyncParseReturnType<Output>;
    _parseAsync(input: ParseInput): AsyncParseReturnType<Output>;
    parse(data: unknown, params?: util.InexactPartial<ParseParams>): Output;
    safeParse(data: unknown, params?: util.InexactPartial<ParseParams>): SafeParseReturnType<Input, Output>;
    "~validate"(data: unknown): StandardSchemaV1.Result<Output> | Promise<StandardSchemaV1.Result<Output>>;
    parseAsync(data: unknown, params?: util.InexactPartial<ParseParams>): Promise<Output>;
    safeParseAsync(data: unknown, params?: util.InexactPartial<ParseParams>): Promise<SafeParseReturnType<Input, Output>>;
    /** Alias of safeParseAsync */
    spa: (data: unknown, params?: util.InexactPartial<ParseParams>) => Promise<SafeParseReturnType<Input, Output>>;
    refine<RefinedOutput extends Output>(check: (arg: Output) => arg is RefinedOutput, message?: string | CustomErrorParams | ((arg: Output) => CustomErrorParams)): ZodEffects<this, RefinedOutput, Input>;
    refine(check: (arg: Output) => unknown | Promise<unknown>, message?: string | CustomErrorParams | ((arg: Output) => CustomErrorParams)): ZodEffects<this, Output, Input>;
    refinement<RefinedOutput extends Output>(check: (arg: Output) => arg is RefinedOutput, refinementData: IssueData | ((arg: Output, ctx: RefinementCtx) => IssueData)): ZodEffects<this, RefinedOutput, Input>;
    refinement(check: (arg: Output) => boolean, refinementData: IssueData | ((arg: Output, ctx: RefinementCtx) => IssueData)): ZodEffects<this, Output, Input>;
    _refinement(refinement: RefinementEffect<Output>["refinement"]): ZodEffects<this, Output, Input>;
    superRefine<RefinedOutput extends Output>(refinement: (arg: Output, ctx: RefinementCtx) => arg is RefinedOutput): ZodEffects<this, RefinedOutput, Input>;
    superRefine(refinement: (arg: Output, ctx: RefinementCtx) => void): ZodEffects<this, Output, Input>;
    superRefine(refinement: (arg: Output, ctx: RefinementCtx) => Promise<void>): ZodEffects<this, Output, Input>;
    constructor(def: Def);
    optional(): ZodOptional<this>;
    nullable(): ZodNullable<this>;
    nullish(): ZodOptional<ZodNullable<this>>;
    array(): ZodArray<this>;
    promise(): ZodPromise<this>;
    or<T extends ZodTypeAny>(option: T): ZodUnion<[this, T]>;
    and<T extends ZodTypeAny>(incoming: T): ZodIntersection<this, T>;
    transform<NewOut>(transform: (arg: Output, ctx: RefinementCtx) => NewOut | Promise<NewOut>): ZodEffects<this, NewOut>;
    default(def: util.noUndefined<Input>): ZodDefault<this>;
    default(def: () => util.noUndefined<Input>): ZodDefault<this>;
    brand<B extends string | number | symbol>(brand?: B): ZodBranded<this, B>;
    catch(def: Output): ZodCatch<this>;
    catch(def: (ctx: {
        error: ZodError;
        input: Input;
    }) => Output): ZodCatch<this>;
    describe(description: string): this;
    pipe<T extends ZodTypeAny>(target: T): ZodPipeline<this, T>;
    readonly(): ZodReadonly<this>;
    isOptional(): boolean;
    isNullable(): boolean;
}
type ZodNumberCheck = {
    kind: "min";
    value: number;
    inclusive: boolean;
    message?: string | undefined;
} | {
    kind: "max";
    value: number;
    inclusive: boolean;
    message?: string | undefined;
} | {
    kind: "int";
    message?: string | undefined;
} | {
    kind: "multipleOf";
    value: number;
    message?: string | undefined;
} | {
    kind: "finite";
    message?: string | undefined;
};
interface ZodNumberDef extends ZodTypeDef {
    checks: ZodNumberCheck[];
    typeName: ZodFirstPartyTypeKind.ZodNumber;
    coerce: boolean;
}
declare class ZodNumber extends ZodType<number, ZodNumberDef, number> {
    _parse(input: ParseInput): ParseReturnType<number>;
    static create: (params?: RawCreateParams & {
        coerce?: boolean;
    }) => ZodNumber;
    gte(value: number, message?: errorUtil.ErrMessage): ZodNumber;
    min: (value: number, message?: errorUtil.ErrMessage) => ZodNumber;
    gt(value: number, message?: errorUtil.ErrMessage): ZodNumber;
    lte(value: number, message?: errorUtil.ErrMessage): ZodNumber;
    max: (value: number, message?: errorUtil.ErrMessage) => ZodNumber;
    lt(value: number, message?: errorUtil.ErrMessage): ZodNumber;
    protected setLimit(kind: "min" | "max", value: number, inclusive: boolean, message?: string): ZodNumber;
    _addCheck(check: ZodNumberCheck): ZodNumber;
    int(message?: errorUtil.ErrMessage): ZodNumber;
    positive(message?: errorUtil.ErrMessage): ZodNumber;
    negative(message?: errorUtil.ErrMessage): ZodNumber;
    nonpositive(message?: errorUtil.ErrMessage): ZodNumber;
    nonnegative(message?: errorUtil.ErrMessage): ZodNumber;
    multipleOf(value: number, message?: errorUtil.ErrMessage): ZodNumber;
    step: (value: number, message?: errorUtil.ErrMessage) => ZodNumber;
    finite(message?: errorUtil.ErrMessage): ZodNumber;
    safe(message?: errorUtil.ErrMessage): ZodNumber;
    get minValue(): number | null;
    get maxValue(): number | null;
    get isInt(): boolean;
    get isFinite(): boolean;
}
interface ZodBooleanDef extends ZodTypeDef {
    typeName: ZodFirstPartyTypeKind.ZodBoolean;
    coerce: boolean;
}
declare class ZodBoolean extends ZodType<boolean, ZodBooleanDef, boolean> {
    _parse(input: ParseInput): ParseReturnType<boolean>;
    static create: (params?: RawCreateParams & {
        coerce?: boolean;
    }) => ZodBoolean;
}
interface ZodArrayDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
    type: T;
    typeName: ZodFirstPartyTypeKind.ZodArray;
    exactLength: {
        value: number;
        message?: string | undefined;
    } | null;
    minLength: {
        value: number;
        message?: string | undefined;
    } | null;
    maxLength: {
        value: number;
        message?: string | undefined;
    } | null;
}
type ArrayCardinality = "many" | "atleastone";
type arrayOutputType<T extends ZodTypeAny, Cardinality extends ArrayCardinality = "many"> = Cardinality extends "atleastone" ? [T["_output"], ...T["_output"][]] : T["_output"][];
declare class ZodArray<T extends ZodTypeAny, Cardinality extends ArrayCardinality = "many"> extends ZodType<arrayOutputType<T, Cardinality>, ZodArrayDef<T>, Cardinality extends "atleastone" ? [T["_input"], ...T["_input"][]] : T["_input"][]> {
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    get element(): T;
    min(minLength: number, message?: errorUtil.ErrMessage): this;
    max(maxLength: number, message?: errorUtil.ErrMessage): this;
    length(len: number, message?: errorUtil.ErrMessage): this;
    nonempty(message?: errorUtil.ErrMessage): ZodArray<T, "atleastone">;
    static create: <El extends ZodTypeAny>(schema: El, params?: RawCreateParams) => ZodArray<El>;
}
type UnknownKeysParam = "passthrough" | "strict" | "strip";
interface ZodObjectDef<T extends ZodRawShape = ZodRawShape, UnknownKeys extends UnknownKeysParam = UnknownKeysParam, Catchall extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
    typeName: ZodFirstPartyTypeKind.ZodObject;
    shape: () => T;
    catchall: Catchall;
    unknownKeys: UnknownKeys;
}
type objectOutputType<Shape extends ZodRawShape, Catchall extends ZodTypeAny, UnknownKeys extends UnknownKeysParam = UnknownKeysParam> = objectUtil.flatten<objectUtil.addQuestionMarks<baseObjectOutputType<Shape>>> & CatchallOutput<Catchall> & PassthroughType<UnknownKeys>;
type baseObjectOutputType<Shape extends ZodRawShape> = {
    [k in keyof Shape]: Shape[k]["_output"];
};
type objectInputType<Shape extends ZodRawShape, Catchall extends ZodTypeAny, UnknownKeys extends UnknownKeysParam = UnknownKeysParam> = objectUtil.flatten<baseObjectInputType<Shape>> & CatchallInput<Catchall> & PassthroughType<UnknownKeys>;
type baseObjectInputType<Shape extends ZodRawShape> = objectUtil.addQuestionMarks<{
    [k in keyof Shape]: Shape[k]["_input"];
}>;
type CatchallOutput<T extends ZodType> = ZodType extends T ? unknown : {
    [k: string]: T["_output"];
};
type CatchallInput<T extends ZodType> = ZodType extends T ? unknown : {
    [k: string]: T["_input"];
};
type PassthroughType<T extends UnknownKeysParam> = T extends "passthrough" ? {
    [k: string]: unknown;
} : unknown;
type deoptional<T extends ZodTypeAny> = T extends ZodOptional<infer U> ? deoptional<U> : T extends ZodNullable<infer U> ? ZodNullable<deoptional<U>> : T;
declare class ZodObject<T extends ZodRawShape, UnknownKeys extends UnknownKeysParam = UnknownKeysParam, Catchall extends ZodTypeAny = ZodTypeAny, Output = objectOutputType<T, Catchall, UnknownKeys>, Input = objectInputType<T, Catchall, UnknownKeys>> extends ZodType<Output, ZodObjectDef<T, UnknownKeys, Catchall>, Input> {
    private _cached;
    _getCached(): {
        shape: T;
        keys: string[];
    };
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    get shape(): T;
    strict(message?: errorUtil.ErrMessage): ZodObject<T, "strict", Catchall>;
    strip(): ZodObject<T, "strip", Catchall>;
    passthrough(): ZodObject<T, "passthrough", Catchall>;
    /**
     * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
     * If you want to pass through unknown properties, use `.passthrough()` instead.
     */
    nonstrict: () => ZodObject<T, "passthrough", Catchall>;
    extend<Augmentation extends ZodRawShape>(augmentation: Augmentation): ZodObject<objectUtil.extendShape<T, Augmentation>, UnknownKeys, Catchall>;
    /**
     * @deprecated Use `.extend` instead
     *  */
    augment: <Augmentation extends ZodRawShape>(augmentation: Augmentation) => ZodObject<objectUtil.extendShape<T, Augmentation>, UnknownKeys, Catchall>;
    /**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */
    merge<Incoming extends AnyZodObject, Augmentation extends Incoming["shape"]>(merging: Incoming): ZodObject<objectUtil.extendShape<T, Augmentation>, Incoming["_def"]["unknownKeys"], Incoming["_def"]["catchall"]>;
    setKey<Key extends string, Schema extends ZodTypeAny>(key: Key, schema: Schema): ZodObject<T & {
        [k in Key]: Schema;
    }, UnknownKeys, Catchall>;
    catchall<Index extends ZodTypeAny>(index: Index): ZodObject<T, UnknownKeys, Index>;
    pick<Mask extends util.Exactly<{
        [k in keyof T]?: true;
    }, Mask>>(mask: Mask): ZodObject<Pick<T, Extract<keyof T, keyof Mask>>, UnknownKeys, Catchall>;
    omit<Mask extends util.Exactly<{
        [k in keyof T]?: true;
    }, Mask>>(mask: Mask): ZodObject<Omit<T, keyof Mask>, UnknownKeys, Catchall>;
    /**
     * @deprecated
     */
    deepPartial(): partialUtil.DeepPartial<this>;
    partial(): ZodObject<{
        [k in keyof T]: ZodOptional<T[k]>;
    }, UnknownKeys, Catchall>;
    partial<Mask extends util.Exactly<{
        [k in keyof T]?: true;
    }, Mask>>(mask: Mask): ZodObject<objectUtil.noNever<{
        [k in keyof T]: k extends keyof Mask ? ZodOptional<T[k]> : T[k];
    }>, UnknownKeys, Catchall>;
    required(): ZodObject<{
        [k in keyof T]: deoptional<T[k]>;
    }, UnknownKeys, Catchall>;
    required<Mask extends util.Exactly<{
        [k in keyof T]?: true;
    }, Mask>>(mask: Mask): ZodObject<objectUtil.noNever<{
        [k in keyof T]: k extends keyof Mask ? deoptional<T[k]> : T[k];
    }>, UnknownKeys, Catchall>;
    keyof(): ZodEnum<enumUtil.UnionToTupleString<keyof T>>;
    static create: <Shape extends ZodRawShape>(shape: Shape, params?: RawCreateParams) => ZodObject<Shape, "strip", ZodTypeAny, objectOutputType<Shape, ZodTypeAny, "strip">, objectInputType<Shape, ZodTypeAny, "strip">>;
    static strictCreate: <Shape extends ZodRawShape>(shape: Shape, params?: RawCreateParams) => ZodObject<Shape, "strict">;
    static lazycreate: <Shape extends ZodRawShape>(shape: () => Shape, params?: RawCreateParams) => ZodObject<Shape, "strip">;
}
type AnyZodObject = ZodObject<any, any, any>;
type ZodUnionOptions = Readonly<[ZodTypeAny, ...ZodTypeAny[]]>;
interface ZodUnionDef<T extends ZodUnionOptions = Readonly<[ZodTypeAny, ZodTypeAny, ...ZodTypeAny[]]>> extends ZodTypeDef {
    options: T;
    typeName: ZodFirstPartyTypeKind.ZodUnion;
}
declare class ZodUnion<T extends ZodUnionOptions> extends ZodType<T[number]["_output"], ZodUnionDef<T>, T[number]["_input"]> {
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    get options(): T;
    static create: <Options extends Readonly<[ZodTypeAny, ZodTypeAny, ...ZodTypeAny[]]>>(types: Options, params?: RawCreateParams) => ZodUnion<Options>;
}
interface ZodIntersectionDef<T extends ZodTypeAny = ZodTypeAny, U extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
    left: T;
    right: U;
    typeName: ZodFirstPartyTypeKind.ZodIntersection;
}
declare class ZodIntersection<T extends ZodTypeAny, U extends ZodTypeAny> extends ZodType<T["_output"] & U["_output"], ZodIntersectionDef<T, U>, T["_input"] & U["_input"]> {
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    static create: <TSchema extends ZodTypeAny, USchema extends ZodTypeAny>(left: TSchema, right: USchema, params?: RawCreateParams) => ZodIntersection<TSchema, USchema>;
}
type ZodTupleItems = [ZodTypeAny, ...ZodTypeAny[]];
type AssertArray<T> = T extends any[] ? T : never;
type OutputTypeOfTuple<T extends ZodTupleItems | []> = AssertArray<{
    [k in keyof T]: T[k] extends ZodType<any, any, any> ? T[k]["_output"] : never;
}>;
type OutputTypeOfTupleWithRest<T extends ZodTupleItems | [], Rest extends ZodTypeAny | null = null> = Rest extends ZodTypeAny ? [...OutputTypeOfTuple<T>, ...Rest["_output"][]] : OutputTypeOfTuple<T>;
type InputTypeOfTuple<T extends ZodTupleItems | []> = AssertArray<{
    [k in keyof T]: T[k] extends ZodType<any, any, any> ? T[k]["_input"] : never;
}>;
type InputTypeOfTupleWithRest<T extends ZodTupleItems | [], Rest extends ZodTypeAny | null = null> = Rest extends ZodTypeAny ? [...InputTypeOfTuple<T>, ...Rest["_input"][]] : InputTypeOfTuple<T>;
interface ZodTupleDef<T extends ZodTupleItems | [] = ZodTupleItems, Rest extends ZodTypeAny | null = null> extends ZodTypeDef {
    items: T;
    rest: Rest;
    typeName: ZodFirstPartyTypeKind.ZodTuple;
}
declare class ZodTuple<T extends ZodTupleItems | [] = ZodTupleItems, Rest extends ZodTypeAny | null = null> extends ZodType<OutputTypeOfTupleWithRest<T, Rest>, ZodTupleDef<T, Rest>, InputTypeOfTupleWithRest<T, Rest>> {
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    get items(): T;
    rest<RestSchema extends ZodTypeAny>(rest: RestSchema): ZodTuple<T, RestSchema>;
    static create: <Items extends [ZodTypeAny, ...ZodTypeAny[]] | []>(schemas: Items, params?: RawCreateParams) => ZodTuple<Items, null>;
}
type EnumValues<T extends string = string> = readonly [T, ...T[]];
type Values<T extends EnumValues> = {
    [k in T[number]]: k;
};
interface ZodEnumDef<T extends EnumValues = EnumValues> extends ZodTypeDef {
    values: T;
    typeName: ZodFirstPartyTypeKind.ZodEnum;
}
type Writeable<T> = {
    -readonly [P in keyof T]: T[P];
};
type FilterEnum<Values, ToExclude> = Values extends [] ? [] : Values extends [infer Head, ...infer Rest] ? Head extends ToExclude ? FilterEnum<Rest, ToExclude> : [Head, ...FilterEnum<Rest, ToExclude>] : never;
type typecast<A, T> = A extends T ? A : never;
declare function createZodEnum<U extends string, T extends Readonly<[U, ...U[]]>>(values: T, params?: RawCreateParams): ZodEnum<Writeable<T>>;
declare function createZodEnum<U extends string, T extends [U, ...U[]]>(values: T, params?: RawCreateParams): ZodEnum<T>;
declare class ZodEnum<T extends [string, ...string[]]> extends ZodType<T[number], ZodEnumDef<T>, T[number]> {
    _cache: Set<T[number]> | undefined;
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    get options(): T;
    get enum(): Values<T>;
    get Values(): Values<T>;
    get Enum(): Values<T>;
    extract<ToExtract extends readonly [T[number], ...T[number][]]>(values: ToExtract, newDef?: RawCreateParams): ZodEnum<Writeable<ToExtract>>;
    exclude<ToExclude extends readonly [T[number], ...T[number][]]>(values: ToExclude, newDef?: RawCreateParams): ZodEnum<typecast<Writeable<FilterEnum<T, ToExclude[number]>>, [string, ...string[]]>>;
    static create: typeof createZodEnum;
}
interface ZodPromiseDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
    type: T;
    typeName: ZodFirstPartyTypeKind.ZodPromise;
}
declare class ZodPromise<T extends ZodTypeAny> extends ZodType<Promise<T["_output"]>, ZodPromiseDef<T>, Promise<T["_input"]>> {
    unwrap(): T;
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    static create: <Inner extends ZodTypeAny>(schema: Inner, params?: RawCreateParams) => ZodPromise<Inner>;
}
type RefinementEffect<T> = {
    type: "refinement";
    refinement: (arg: T, ctx: RefinementCtx) => any;
};
type TransformEffect<T> = {
    type: "transform";
    transform: (arg: T, ctx: RefinementCtx) => any;
};
type PreprocessEffect<T> = {
    type: "preprocess";
    transform: (arg: T, ctx: RefinementCtx) => any;
};
type Effect<T> = RefinementEffect<T> | TransformEffect<T> | PreprocessEffect<T>;
interface ZodEffectsDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
    schema: T;
    typeName: ZodFirstPartyTypeKind.ZodEffects;
    effect: Effect<any>;
}
declare class ZodEffects<T extends ZodTypeAny, Output = output<T>, Input = input<T>> extends ZodType<Output, ZodEffectsDef<T>, Input> {
    innerType(): T;
    sourceType(): T;
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    static create: <I extends ZodTypeAny>(schema: I, effect: Effect<I["_output"]>, params?: RawCreateParams) => ZodEffects<I, I["_output"]>;
    static createWithPreprocess: <I extends ZodTypeAny>(preprocess: (arg: unknown, ctx: RefinementCtx) => unknown, schema: I, params?: RawCreateParams) => ZodEffects<I, I["_output"], unknown>;
}

interface ZodOptionalDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
    innerType: T;
    typeName: ZodFirstPartyTypeKind.ZodOptional;
}
declare class ZodOptional<T extends ZodTypeAny> extends ZodType<T["_output"] | undefined, ZodOptionalDef<T>, T["_input"] | undefined> {
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    unwrap(): T;
    static create: <Inner extends ZodTypeAny>(type: Inner, params?: RawCreateParams) => ZodOptional<Inner>;
}
interface ZodNullableDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
    innerType: T;
    typeName: ZodFirstPartyTypeKind.ZodNullable;
}
declare class ZodNullable<T extends ZodTypeAny> extends ZodType<T["_output"] | null, ZodNullableDef<T>, T["_input"] | null> {
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    unwrap(): T;
    static create: <Inner extends ZodTypeAny>(type: Inner, params?: RawCreateParams) => ZodNullable<Inner>;
}
interface ZodDefaultDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
    innerType: T;
    defaultValue: () => util.noUndefined<T["_input"]>;
    typeName: ZodFirstPartyTypeKind.ZodDefault;
}
declare class ZodDefault<T extends ZodTypeAny> extends ZodType<util.noUndefined<T["_output"]>, ZodDefaultDef<T>, T["_input"] | undefined> {
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    removeDefault(): T;
    static create: <Inner extends ZodTypeAny>(type: Inner, params: RawCreateParams & {
        default: Inner["_input"] | (() => util.noUndefined<Inner["_input"]>);
    }) => ZodDefault<Inner>;
}
interface ZodCatchDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
    innerType: T;
    catchValue: (ctx: {
        error: ZodError;
        input: unknown;
    }) => T["_input"];
    typeName: ZodFirstPartyTypeKind.ZodCatch;
}
declare class ZodCatch<T extends ZodTypeAny> extends ZodType<T["_output"], ZodCatchDef<T>, unknown> {
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    removeCatch(): T;
    static create: <Inner extends ZodTypeAny>(type: Inner, params: RawCreateParams & {
        catch: Inner["_output"] | (() => Inner["_output"]);
    }) => ZodCatch<Inner>;
}
interface ZodBrandedDef<T extends ZodTypeAny> extends ZodTypeDef {
    type: T;
    typeName: ZodFirstPartyTypeKind.ZodBranded;
}
declare const BRAND: unique symbol;
type BRAND<T extends string | number | symbol> = {
    [BRAND]: {
        [k in T]: true;
    };
};
declare class ZodBranded<T extends ZodTypeAny, B extends string | number | symbol> extends ZodType<T["_output"] & BRAND<B>, ZodBrandedDef<T>, T["_input"]> {
    _parse(input: ParseInput): ParseReturnType<any>;
    unwrap(): T;
}
interface ZodPipelineDef<A extends ZodTypeAny, B extends ZodTypeAny> extends ZodTypeDef {
    in: A;
    out: B;
    typeName: ZodFirstPartyTypeKind.ZodPipeline;
}
declare class ZodPipeline<A extends ZodTypeAny, B extends ZodTypeAny> extends ZodType<B["_output"], ZodPipelineDef<A, B>, A["_input"]> {
    _parse(input: ParseInput): ParseReturnType<any>;
    static create<ASchema extends ZodTypeAny, BSchema extends ZodTypeAny>(a: ASchema, b: BSchema): ZodPipeline<ASchema, BSchema>;
}
type BuiltIn = (((...args: any[]) => any) | (new (...args: any[]) => any)) | {
    readonly [Symbol.toStringTag]: string;
} | Date | Error | Generator | Promise<unknown> | RegExp;
type MakeReadonly<T> = T extends Map<infer K, infer V> ? ReadonlyMap<K, V> : T extends Set<infer V> ? ReadonlySet<V> : T extends [infer Head, ...infer Tail] ? readonly [Head, ...Tail] : T extends Array<infer V> ? ReadonlyArray<V> : T extends BuiltIn ? T : Readonly<T>;
interface ZodReadonlyDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
    innerType: T;
    typeName: ZodFirstPartyTypeKind.ZodReadonly;
}
declare class ZodReadonly<T extends ZodTypeAny> extends ZodType<MakeReadonly<T["_output"]>, ZodReadonlyDef<T>, MakeReadonly<T["_input"]>> {
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    static create: <Inner extends ZodTypeAny>(type: Inner, params?: RawCreateParams) => ZodReadonly<Inner>;
    unwrap(): T;
}
declare enum ZodFirstPartyTypeKind {
    ZodString = "ZodString",
    ZodNumber = "ZodNumber",
    ZodNaN = "ZodNaN",
    ZodBigInt = "ZodBigInt",
    ZodBoolean = "ZodBoolean",
    ZodDate = "ZodDate",
    ZodSymbol = "ZodSymbol",
    ZodUndefined = "ZodUndefined",
    ZodNull = "ZodNull",
    ZodAny = "ZodAny",
    ZodUnknown = "ZodUnknown",
    ZodNever = "ZodNever",
    ZodVoid = "ZodVoid",
    ZodArray = "ZodArray",
    ZodObject = "ZodObject",
    ZodUnion = "ZodUnion",
    ZodDiscriminatedUnion = "ZodDiscriminatedUnion",
    ZodIntersection = "ZodIntersection",
    ZodTuple = "ZodTuple",
    ZodRecord = "ZodRecord",
    ZodMap = "ZodMap",
    ZodSet = "ZodSet",
    ZodFunction = "ZodFunction",
    ZodLazy = "ZodLazy",
    ZodLiteral = "ZodLiteral",
    ZodEnum = "ZodEnum",
    ZodEffects = "ZodEffects",
    ZodNativeEnum = "ZodNativeEnum",
    ZodOptional = "ZodOptional",
    ZodNullable = "ZodNullable",
    ZodDefault = "ZodDefault",
    ZodCatch = "ZodCatch",
    ZodPromise = "ZodPromise",
    ZodBranded = "ZodBranded",
    ZodPipeline = "ZodPipeline",
    ZodReadonly = "ZodReadonly"
}

declare const userSettingSchema: ZodObject<{
    version: ZodNumber;
    userSince: ZodOptional<ZodNumber>;
    init: ZodOptional<ZodObject<{
        skipOnboarding: ZodOptional<ZodBoolean>;
    }, "strip", ZodTypeAny, {
        skipOnboarding?: boolean | undefined;
    }, {
        skipOnboarding?: boolean | undefined;
    }>>;
    checklist: ZodOptional<ZodObject<{
        items: ZodOptional<ZodObject<{
            accessibilityTests: ZodOptional<ZodObject<{
                status: ZodOptional<ZodEnum<["open", "accepted", "done", "skipped"]>>;
                mutedAt: ZodOptional<ZodNumber>;
            }, "strict", ZodTypeAny, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }>>;
            autodocs: ZodOptional<ZodObject<{
                status: ZodOptional<ZodEnum<["open", "accepted", "done", "skipped"]>>;
                mutedAt: ZodOptional<ZodNumber>;
            }, "strict", ZodTypeAny, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }>>;
            ciTests: ZodOptional<ZodObject<{
                status: ZodOptional<ZodEnum<["open", "accepted", "done", "skipped"]>>;
                mutedAt: ZodOptional<ZodNumber>;
            }, "strict", ZodTypeAny, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }>>;
            controls: ZodOptional<ZodObject<{
                status: ZodOptional<ZodEnum<["open", "accepted", "done", "skipped"]>>;
                mutedAt: ZodOptional<ZodNumber>;
            }, "strict", ZodTypeAny, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }>>;
            coverage: ZodOptional<ZodObject<{
                status: ZodOptional<ZodEnum<["open", "accepted", "done", "skipped"]>>;
                mutedAt: ZodOptional<ZodNumber>;
            }, "strict", ZodTypeAny, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }>>;
            guidedTour: ZodOptional<ZodObject<{
                status: ZodOptional<ZodEnum<["open", "accepted", "done", "skipped"]>>;
                mutedAt: ZodOptional<ZodNumber>;
            }, "strict", ZodTypeAny, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }>>;
            installA11y: ZodOptional<ZodObject<{
                status: ZodOptional<ZodEnum<["open", "accepted", "done", "skipped"]>>;
                mutedAt: ZodOptional<ZodNumber>;
            }, "strict", ZodTypeAny, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }>>;
            installChromatic: ZodOptional<ZodObject<{
                status: ZodOptional<ZodEnum<["open", "accepted", "done", "skipped"]>>;
                mutedAt: ZodOptional<ZodNumber>;
            }, "strict", ZodTypeAny, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }>>;
            installDocs: ZodOptional<ZodObject<{
                status: ZodOptional<ZodEnum<["open", "accepted", "done", "skipped"]>>;
                mutedAt: ZodOptional<ZodNumber>;
            }, "strict", ZodTypeAny, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }>>;
            installVitest: ZodOptional<ZodObject<{
                status: ZodOptional<ZodEnum<["open", "accepted", "done", "skipped"]>>;
                mutedAt: ZodOptional<ZodNumber>;
            }, "strict", ZodTypeAny, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }>>;
            mdxDocs: ZodOptional<ZodObject<{
                status: ZodOptional<ZodEnum<["open", "accepted", "done", "skipped"]>>;
                mutedAt: ZodOptional<ZodNumber>;
            }, "strict", ZodTypeAny, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }>>;
            moreComponents: ZodOptional<ZodObject<{
                status: ZodOptional<ZodEnum<["open", "accepted", "done", "skipped"]>>;
                mutedAt: ZodOptional<ZodNumber>;
            }, "strict", ZodTypeAny, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }>>;
            moreStories: ZodOptional<ZodObject<{
                status: ZodOptional<ZodEnum<["open", "accepted", "done", "skipped"]>>;
                mutedAt: ZodOptional<ZodNumber>;
            }, "strict", ZodTypeAny, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }>>;
            onboardingSurvey: ZodOptional<ZodObject<{
                status: ZodOptional<ZodEnum<["open", "accepted", "done", "skipped"]>>;
                mutedAt: ZodOptional<ZodNumber>;
            }, "strict", ZodTypeAny, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }>>;
            organizeStories: ZodOptional<ZodObject<{
                status: ZodOptional<ZodEnum<["open", "accepted", "done", "skipped"]>>;
                mutedAt: ZodOptional<ZodNumber>;
            }, "strict", ZodTypeAny, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }>>;
            publishStorybook: ZodOptional<ZodObject<{
                status: ZodOptional<ZodEnum<["open", "accepted", "done", "skipped"]>>;
                mutedAt: ZodOptional<ZodNumber>;
            }, "strict", ZodTypeAny, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }>>;
            renderComponent: ZodOptional<ZodObject<{
                status: ZodOptional<ZodEnum<["open", "accepted", "done", "skipped"]>>;
                mutedAt: ZodOptional<ZodNumber>;
            }, "strict", ZodTypeAny, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }>>;
            runTests: ZodOptional<ZodObject<{
                status: ZodOptional<ZodEnum<["open", "accepted", "done", "skipped"]>>;
                mutedAt: ZodOptional<ZodNumber>;
            }, "strict", ZodTypeAny, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }>>;
            viewports: ZodOptional<ZodObject<{
                status: ZodOptional<ZodEnum<["open", "accepted", "done", "skipped"]>>;
                mutedAt: ZodOptional<ZodNumber>;
            }, "strict", ZodTypeAny, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }>>;
            visualTests: ZodOptional<ZodObject<{
                status: ZodOptional<ZodEnum<["open", "accepted", "done", "skipped"]>>;
                mutedAt: ZodOptional<ZodNumber>;
            }, "strict", ZodTypeAny, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }>>;
            whatsNewStorybook10: ZodOptional<ZodObject<{
                status: ZodOptional<ZodEnum<["open", "accepted", "done", "skipped"]>>;
                mutedAt: ZodOptional<ZodNumber>;
            }, "strict", ZodTypeAny, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }>>;
            writeInteractions: ZodOptional<ZodObject<{
                status: ZodOptional<ZodEnum<["open", "accepted", "done", "skipped"]>>;
                mutedAt: ZodOptional<ZodNumber>;
            }, "strict", ZodTypeAny, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }, {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            }>>;
        }, "strip", ZodTypeAny, {
            controls?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            autodocs?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            accessibilityTests?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            ciTests?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            coverage?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            guidedTour?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            installA11y?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            installChromatic?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            installDocs?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            installVitest?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            mdxDocs?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            moreComponents?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            moreStories?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            onboardingSurvey?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            organizeStories?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            publishStorybook?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            renderComponent?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            runTests?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            viewports?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            visualTests?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            whatsNewStorybook10?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            writeInteractions?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
        }, {
            controls?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            autodocs?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            accessibilityTests?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            ciTests?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            coverage?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            guidedTour?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            installA11y?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            installChromatic?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            installDocs?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            installVitest?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            mdxDocs?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            moreComponents?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            moreStories?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            onboardingSurvey?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            organizeStories?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            publishStorybook?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            renderComponent?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            runTests?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            viewports?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            visualTests?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            whatsNewStorybook10?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            writeInteractions?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
        }>>;
        widget: ZodOptional<ZodObject<{
            disable: ZodOptional<ZodBoolean>;
        }, "strip", ZodTypeAny, {
            disable?: boolean | undefined;
        }, {
            disable?: boolean | undefined;
        }>>;
    }, "strip", ZodTypeAny, {
        items?: {
            controls?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            autodocs?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            accessibilityTests?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            ciTests?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            coverage?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            guidedTour?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            installA11y?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            installChromatic?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            installDocs?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            installVitest?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            mdxDocs?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            moreComponents?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            moreStories?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            onboardingSurvey?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            organizeStories?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            publishStorybook?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            renderComponent?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            runTests?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            viewports?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            visualTests?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            whatsNewStorybook10?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            writeInteractions?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
        } | undefined;
        widget?: {
            disable?: boolean | undefined;
        } | undefined;
    }, {
        items?: {
            controls?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            autodocs?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            accessibilityTests?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            ciTests?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            coverage?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            guidedTour?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            installA11y?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            installChromatic?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            installDocs?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            installVitest?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            mdxDocs?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            moreComponents?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            moreStories?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            onboardingSurvey?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            organizeStories?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            publishStorybook?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            renderComponent?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            runTests?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            viewports?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            visualTests?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            whatsNewStorybook10?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            writeInteractions?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
        } | undefined;
        widget?: {
            disable?: boolean | undefined;
        } | undefined;
    }>>;
}, "strip", ZodTypeAny, {
    version: number;
    init?: {
        skipOnboarding?: boolean | undefined;
    } | undefined;
    userSince?: number | undefined;
    checklist?: {
        items?: {
            controls?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            autodocs?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            accessibilityTests?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            ciTests?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            coverage?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            guidedTour?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            installA11y?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            installChromatic?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            installDocs?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            installVitest?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            mdxDocs?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            moreComponents?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            moreStories?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            onboardingSurvey?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            organizeStories?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            publishStorybook?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            renderComponent?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            runTests?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            viewports?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            visualTests?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            whatsNewStorybook10?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            writeInteractions?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
        } | undefined;
        widget?: {
            disable?: boolean | undefined;
        } | undefined;
    } | undefined;
}, {
    version: number;
    init?: {
        skipOnboarding?: boolean | undefined;
    } | undefined;
    userSince?: number | undefined;
    checklist?: {
        items?: {
            controls?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            autodocs?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            accessibilityTests?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            ciTests?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            coverage?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            guidedTour?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            installA11y?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            installChromatic?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            installDocs?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            installVitest?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            mdxDocs?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            moreComponents?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            moreStories?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            onboardingSurvey?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            organizeStories?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            publishStorybook?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            renderComponent?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            runTests?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            viewports?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            visualTests?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            whatsNewStorybook10?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
            writeInteractions?: {
                status?: "done" | "open" | "accepted" | "skipped" | undefined;
                mutedAt?: number | undefined;
            } | undefined;
        } | undefined;
        widget?: {
            disable?: boolean | undefined;
        } | undefined;
    } | undefined;
}>;
declare function globalSettings(filePath?: string): Promise<Settings>;
declare function _clearGlobalSettings(): void;
/**
 * A class for reading and writing settings from a JSON file. Supports nested settings with dot
 * notation.
 */
declare class Settings {
    private filePath;
    value: TypeOf<typeof userSettingSchema>;
    /**
     * Create a new Settings instance
     *
     * @param filePath Path to the JSON settings file
     * @param value Loaded value of settings
     */
    constructor(filePath: string, value: TypeOf<typeof userSettingSchema>);
    /** Save settings to the file */
    save(): Promise<void>;
}

/**
 * Actions represent the type of change to a location value.
 */
declare enum Action {
    /**
     * A POP indicates a change to an arbitrary index in the history stack, such
     * as a back or forward navigation. It does not describe the direction of the
     * navigation, only that the current index changed.
     *
     * Note: This is the default action for newly created history objects.
     */
    Pop = "POP",
    /**
     * A PUSH indicates a new entry being added to the history stack, such as when
     * a link is clicked and a new page loads. When this happens, all subsequent
     * entries in the stack are lost.
     */
    Push = "PUSH",
    /**
     * A REPLACE indicates the entry at the current index in the history stack
     * being replaced by a new one.
     */
    Replace = "REPLACE"
}
/**
 * The pathname, search, and hash values of a URL.
 */
interface Path {
    /**
     * A URL pathname, beginning with a /.
     */
    pathname: string;
    /**
     * A URL search string, beginning with a ?.
     */
    search: string;
    /**
     * A URL fragment identifier, beginning with a #.
     */
    hash: string;
}
/**
 * An entry in a history stack. A location contains information about the
 * URL path, as well as possibly some arbitrary state and a key.
 */
interface Location extends Path {
    /**
     * A value of arbitrary data associated with this location.
     */
    state: any;
    /**
     * A unique string associated with this location. May be used to safely store
     * and retrieve data in some other storage API, like `localStorage`.
     *
     * Note: This value is always "default" on the initial location.
     */
    key: string;
}

/**
 * Map of routeId -> data returned from a loader/action/error
 */
interface RouteData {
    [routeId: string]: any;
}
declare enum ResultType {
    data = "data",
    deferred = "deferred",
    redirect = "redirect",
    error = "error"
}
/**
 * Successful result from a loader or action
 */
interface SuccessResult {
    type: ResultType.data;
    data: any;
    statusCode?: number;
    headers?: Headers;
}
/**
 * Successful defer() result from a loader or action
 */
interface DeferredResult {
    type: ResultType.deferred;
    deferredData: DeferredData;
    statusCode?: number;
    headers?: Headers;
}
/**
 * Redirect result from a loader or action
 */
interface RedirectResult {
    type: ResultType.redirect;
    status: number;
    location: string;
    revalidate: boolean;
    reloadDocument?: boolean;
}
/**
 * Unsuccessful result from a loader or action
 */
interface ErrorResult {
    type: ResultType.error;
    error: any;
    headers?: Headers;
}
/**
 * Result from a loader or action - potentially successful or unsuccessful
 */
type DataResult = SuccessResult | DeferredResult | RedirectResult | ErrorResult;
type LowerCaseFormMethod = "get" | "post" | "put" | "patch" | "delete";
type UpperCaseFormMethod = Uppercase<LowerCaseFormMethod>;
/**
 * Active navigation/fetcher form methods are exposed in lowercase on the
 * RouterState
 */
type FormMethod = LowerCaseFormMethod;
/**
 * In v7, active navigation/fetcher form methods are exposed in uppercase on the
 * RouterState.  This is to align with the normalization done via fetch().
 */
type V7_FormMethod = UpperCaseFormMethod;
type FormEncType = "application/x-www-form-urlencoded" | "multipart/form-data" | "application/json" | "text/plain";
type JsonObject = {
    [Key in string]: JsonValue;
} & {
    [Key in string]?: JsonValue | undefined;
};
type JsonArray = JsonValue[] | readonly JsonValue[];
type JsonPrimitive = string | number | boolean | null;
type JsonValue = JsonPrimitive | JsonObject | JsonArray;
/**
 * @private
 * Internal interface to pass around for action submissions, not intended for
 * external consumption
 */
type Submission = {
    formMethod: FormMethod | V7_FormMethod;
    formAction: string;
    formEncType: FormEncType;
    formData: FormData;
    json: undefined;
    text: undefined;
} | {
    formMethod: FormMethod | V7_FormMethod;
    formAction: string;
    formEncType: FormEncType;
    formData: undefined;
    json: JsonValue;
    text: undefined;
} | {
    formMethod: FormMethod | V7_FormMethod;
    formAction: string;
    formEncType: FormEncType;
    formData: undefined;
    json: undefined;
    text: string;
};
/**
 * @private
 * Arguments passed to route loader/action functions.  Same for now but we keep
 * this as a private implementation detail in case they diverge in the future.
 */
interface DataFunctionArgs {
    request: Request;
    params: Params;
    context?: any;
}
/**
 * Arguments passed to loader functions
 */
interface LoaderFunctionArgs extends DataFunctionArgs {
}
/**
 * Arguments passed to action functions
 */
interface ActionFunctionArgs extends DataFunctionArgs {
}
/**
 * Loaders and actions can return anything except `undefined` (`null` is a
 * valid return value if there is no data to return).  Responses are preferred
 * and will ease any future migration to Remix
 */
type DataFunctionValue = Response | NonNullable<unknown> | null;
/**
 * Route loader function signature
 */
interface LoaderFunction {
    (args: LoaderFunctionArgs): Promise<DataFunctionValue> | DataFunctionValue;
}
/**
 * Route action function signature
 */
interface ActionFunction {
    (args: ActionFunctionArgs): Promise<DataFunctionValue> | DataFunctionValue;
}
/**
 * Route shouldRevalidate function signature.  This runs after any submission
 * (navigation or fetcher), so we flatten the navigation/fetcher submission
 * onto the arguments.  It shouldn't matter whether it came from a navigation
 * or a fetcher, what really matters is the URLs and the formData since loaders
 * have to re-run based on the data models that were potentially mutated.
 */
interface ShouldRevalidateFunction {
    (args: {
        currentUrl: URL;
        currentParams: AgnosticDataRouteMatch["params"];
        nextUrl: URL;
        nextParams: AgnosticDataRouteMatch["params"];
        formMethod?: Submission["formMethod"];
        formAction?: Submission["formAction"];
        formEncType?: Submission["formEncType"];
        text?: Submission["text"];
        formData?: Submission["formData"];
        json?: Submission["json"];
        actionResult?: DataResult;
        defaultShouldRevalidate: boolean;
    }): boolean;
}
/**
 * Keys we cannot change from within a lazy() function. We spread all other keys
 * onto the route. Either they're meaningful to the router, or they'll get
 * ignored.
 */
type ImmutableRouteKey = "lazy" | "caseSensitive" | "path" | "id" | "index" | "children";
type RequireOne<T, Key = keyof T> = Exclude<{
    [K in keyof T]: K extends Key ? Omit<T, K> & Required<Pick<T, K>> : never;
}[keyof T], undefined>;
/**
 * lazy() function to load a route definition, which can add non-matching
 * related properties to a route
 */
interface LazyRouteFunction<R extends AgnosticRouteObject> {
    (): Promise<RequireOne<Omit<R, ImmutableRouteKey>>>;
}
/**
 * Base RouteObject with common props shared by all types of routes
 */
type AgnosticBaseRouteObject = {
    caseSensitive?: boolean;
    path?: string;
    id?: string;
    loader?: LoaderFunction;
    action?: ActionFunction;
    hasErrorBoundary?: boolean;
    shouldRevalidate?: ShouldRevalidateFunction;
    handle?: any;
    lazy?: LazyRouteFunction<AgnosticBaseRouteObject>;
};
/**
 * Index routes must not have children
 */
type AgnosticIndexRouteObject = AgnosticBaseRouteObject & {
    children?: undefined;
    index: true;
};
/**
 * Non-index routes may have children, but cannot have index
 */
type AgnosticNonIndexRouteObject = AgnosticBaseRouteObject & {
    children?: AgnosticRouteObject[];
    index?: false;
};
/**
 * A route object represents a logical route, with (optionally) its child
 * routes organized in a tree-like structure.
 */
type AgnosticRouteObject = AgnosticIndexRouteObject | AgnosticNonIndexRouteObject;
type AgnosticDataIndexRouteObject = AgnosticIndexRouteObject & {
    id: string;
};
type AgnosticDataNonIndexRouteObject = AgnosticNonIndexRouteObject & {
    children?: AgnosticDataRouteObject[];
    id: string;
};
/**
 * A data route object, which is just a RouteObject with a required unique ID
 */
type AgnosticDataRouteObject = AgnosticDataIndexRouteObject | AgnosticDataNonIndexRouteObject;
/**
 * The parameters that were parsed from the URL path.
 */
type Params<Key extends string = string> = {
    readonly [key in Key]: string | undefined;
};
/**
 * A RouteMatch contains info about how a route matched a URL.
 */
interface AgnosticRouteMatch<ParamKey extends string = string, RouteObjectType extends AgnosticRouteObject = AgnosticRouteObject> {
    /**
     * The names and values of dynamic parameters in the URL.
     */
    params: Params<ParamKey>;
    /**
     * The portion of the URL pathname that was matched.
     */
    pathname: string;
    /**
     * The portion of the URL pathname that was matched before child routes.
     */
    pathnameBase: string;
    /**
     * The route object that was used to match.
     */
    route: RouteObjectType;
}
interface AgnosticDataRouteMatch extends AgnosticRouteMatch<string, AgnosticDataRouteObject> {
}
declare class DeferredData {
    private pendingKeysSet;
    private controller;
    private abortPromise;
    private unlistenAbortSignal;
    private subscribers;
    data: Record<string, unknown>;
    init?: ResponseInit;
    deferredKeys: string[];
    constructor(data: Record<string, unknown>, responseInit?: ResponseInit);
    private trackPromise;
    private onSettle;
    private emit;
    subscribe(fn: (aborted: boolean, settledKey?: string) => void): () => boolean;
    cancel(): void;
    resolveData(signal: AbortSignal): Promise<boolean>;
    get done(): boolean;
    get unwrappedData(): {};
    get pendingKeys(): string[];
}

/**
 * State maintained internally by the router.  During a navigation, all states
 * reflect the the "old" location unless otherwise noted.
 */
interface RouterState {
    /**
     * The action of the most recent navigation
     */
    historyAction: Action;
    /**
     * The current location reflected by the router
     */
    location: Location;
    /**
     * The current set of route matches
     */
    matches: AgnosticDataRouteMatch[];
    /**
     * Tracks whether we've completed our initial data load
     */
    initialized: boolean;
    /**
     * Current scroll position we should start at for a new view
     *  - number -> scroll position to restore to
     *  - false -> do not restore scroll at all (used during submissions)
     *  - null -> don't have a saved position, scroll to hash or top of page
     */
    restoreScrollPosition: number | false | null;
    /**
     * Indicate whether this navigation should skip resetting the scroll position
     * if we are unable to restore the scroll position
     */
    preventScrollReset: boolean;
    /**
     * Tracks the state of the current navigation
     */
    navigation: Navigation;
    /**
     * Tracks any in-progress revalidations
     */
    revalidation: RevalidationState;
    /**
     * Data from the loaders for the current matches
     */
    loaderData: RouteData;
    /**
     * Data from the action for the current matches
     */
    actionData: RouteData | null;
    /**
     * Errors caught from loaders for the current matches
     */
    errors: RouteData | null;
    /**
     * Map of current fetchers
     */
    fetchers: Map<string, Fetcher>;
    /**
     * Map of current blockers
     */
    blockers: Map<string, Blocker>;
}
/**
 * Data that can be passed into hydrate a Router from SSR
 */
type HydrationState = Partial<Pick<RouterState, "loaderData" | "actionData" | "errors">>;
/**
 * Potential states for state.navigation
 */
type NavigationStates = {
    Idle: {
        state: "idle";
        location: undefined;
        formMethod: undefined;
        formAction: undefined;
        formEncType: undefined;
        formData: undefined;
        json: undefined;
        text: undefined;
    };
    Loading: {
        state: "loading";
        location: Location;
        formMethod: Submission["formMethod"] | undefined;
        formAction: Submission["formAction"] | undefined;
        formEncType: Submission["formEncType"] | undefined;
        formData: Submission["formData"] | undefined;
        json: Submission["json"] | undefined;
        text: Submission["text"] | undefined;
    };
    Submitting: {
        state: "submitting";
        location: Location;
        formMethod: Submission["formMethod"];
        formAction: Submission["formAction"];
        formEncType: Submission["formEncType"];
        formData: Submission["formData"];
        json: Submission["json"];
        text: Submission["text"];
    };
};
type Navigation = NavigationStates[keyof NavigationStates];
type RevalidationState = "idle" | "loading";
/**
 * Potential states for fetchers
 */
type FetcherStates<TData = any> = {
    Idle: {
        state: "idle";
        formMethod: undefined;
        formAction: undefined;
        formEncType: undefined;
        text: undefined;
        formData: undefined;
        json: undefined;
        data: TData | undefined;
        " _hasFetcherDoneAnything "?: boolean;
    };
    Loading: {
        state: "loading";
        formMethod: Submission["formMethod"] | undefined;
        formAction: Submission["formAction"] | undefined;
        formEncType: Submission["formEncType"] | undefined;
        text: Submission["text"] | undefined;
        formData: Submission["formData"] | undefined;
        json: Submission["json"] | undefined;
        data: TData | undefined;
        " _hasFetcherDoneAnything "?: boolean;
    };
    Submitting: {
        state: "submitting";
        formMethod: Submission["formMethod"];
        formAction: Submission["formAction"];
        formEncType: Submission["formEncType"];
        text: Submission["text"];
        formData: Submission["formData"];
        json: Submission["json"];
        data: TData | undefined;
        " _hasFetcherDoneAnything "?: boolean;
    };
};
type Fetcher<TData = any> = FetcherStates<TData>[keyof FetcherStates<TData>];
interface BlockerBlocked {
    state: "blocked";
    reset(): void;
    proceed(): void;
    location: Location;
}
interface BlockerUnblocked {
    state: "unblocked";
    reset: undefined;
    proceed: undefined;
    location: undefined;
}
interface BlockerProceeding {
    state: "proceeding";
    reset: undefined;
    proceed: undefined;
    location: Location;
}
type Blocker = BlockerUnblocked | BlockerBlocked | BlockerProceeding;

/**
 * NOTE: If you refactor this to split up the modules into separate files,
 * you'll need to update the rollup config for react-router-dom-v5-compat.
 */

declare global {
    var __staticRouterHydrationData: HydrationState | undefined;
}

declare global {
	interface SymbolConstructor {
		readonly observable: symbol;
	}
}

declare enum SupportedBuilder {
    WEBPACK5 = "webpack5",
    VITE = "vite",
    RSBUILD = "rsbuild"
}

declare enum SupportedFramework {
    ANGULAR = "angular",
    EMBER = "ember",
    HTML_VITE = "html-vite",
    NEXTJS = "nextjs",
    NEXTJS_VITE = "nextjs-vite",
    PREACT_VITE = "preact-vite",
    REACT_NATIVE_WEB_VITE = "react-native-web-vite",
    REACT_VITE = "react-vite",
    REACT_WEBPACK5 = "react-webpack5",
    SERVER_WEBPACK5 = "server-webpack5",
    SVELTE_VITE = "svelte-vite",
    SVELTEKIT = "sveltekit",
    VUE3_VITE = "vue3-vite",
    WEB_COMPONENTS_VITE = "web-components-vite",
    HTML_RSBUILD = "html-rsbuild",
    NUXT = "nuxt",
    QWIK = "qwik",
    REACT_RSBUILD = "react-rsbuild",
    SOLID = "solid",
    VUE3_RSBUILD = "vue3-rsbuild",
    WEB_COMPONENTS_RSBUILD = "web-components-rsbuild"
}

declare global {
    var globalProjectAnnotations: NormalizedProjectAnnotations<any>;
    var defaultProjectAnnotations: ProjectAnnotations<any>;
}
type WrappedStoryRef = {
    __pw_type: 'jsx';
    props: Record<string, any>;
} | {
    __pw_type: 'importRef';
};
type UnwrappedJSXStoryRef = {
    __pw_type: 'jsx';
    type: UnwrappedImportStoryRef;
};
type UnwrappedImportStoryRef = ComposedStoryFn;
declare global {
    function __pwUnwrapObject(storyRef: WrappedStoryRef): Promise<UnwrappedJSXStoryRef | UnwrappedImportStoryRef>;
}

type Result = {
    compatible: boolean;
    reasons?: string[];
};
interface AddonVitestCompatibilityOptions {
    builder?: SupportedBuilder;
    framework?: SupportedFramework | null;
    projectRoot?: string;
}
/**
 * Centralized service for @storybook/addon-vitest dependency collection and compatibility
 * validation
 *
 * This service consolidates logic from:
 *
 * - Code/addons/vitest/src/postinstall.ts
 * - Code/lib/create-storybook/src/addon-dependencies/addon-vitest.ts
 * - Code/lib/create-storybook/src/services/FeatureCompatibilityService.ts
 */
declare class AddonVitestService {
    private readonly packageManager;
    constructor(packageManager: JsPackageManager$1);
    /**
     * Collect all dependencies needed for @storybook/addon-vitest
     *
     * Returns versioned package strings ready for installation:
     *
     * - Base packages: vitest, @vitest/browser, playwright
     * - Next.js specific: @storybook/nextjs-vite
     * - Coverage reporter: @vitest/coverage-v8
     */
    collectDependencies(): Promise<string[]>;
    /**
     * Install Playwright browser binaries for @storybook/addon-vitest
     *
     * Installs Chromium with dependencies via `npx playwright install chromium --with-deps`
     *
     * @param packageManager - The package manager to use for installation
     * @param prompt - The prompt instance for displaying progress
     * @param logger - The logger instance for displaying messages
     * @param options - Installation options
     * @returns Array of error messages if installation fails
     */
    installPlaywright(options?: {
        yes?: boolean;
    }): Promise<{
        errors: string[];
        result: 'installed' | 'skipped' | 'aborted' | 'failed';
    }>;
    /**
     * Validate full compatibility for @storybook/addon-vitest
     *
     * Checks:
     *
     * - Webpack configuration compatibility
     * - Builder compatibility (Vite or Next.js)
     * - Renderer/framework support
     * - Vitest version (>=3.0.0)
     * - MSW version (>=2.0.0 if installed)
     * - Next.js installation (if using @storybook/nextjs)
     * - Vitest config files (if configDir provided)
     */
    validateCompatibility(options: AddonVitestCompatibilityOptions): Promise<Result>;
    /**
     * Validate package versions for addon-vitest compatibility Public method to allow early
     * validation before framework detection
     */
    validatePackageVersions(): Promise<Result>;
    /**
     * Validate vitest config files for addon compatibility
     *
     * Public method that can be used by both postinstall and create-storybook flows
     */
    validateConfigFiles(directory: string): Promise<Result>;
    /** Validate workspace config file structure */
    private isValidWorkspaceConfigFile;
    /** Validate Vitest config file structure */
    private isValidVitestConfig;
    private isWorkspaceConfigArray;
    private isDefineWorkspaceExpression;
    private isDefineConfigExpression;
    private isMergeConfigExpression;
    private isSafeToExtendWorkspace;
}

export { ANGULAR_JSON_PATH, type AddonVitestCompatibilityOptions, AddonVitestService, AngularJSON, type NpmOptions, ProjectType, SUPPORTED_ESLINT_EXTENSIONS, Settings, _clearGlobalSettings, addToDevDependenciesIfNotPresent, adjustTemplate, cliStoriesTargetPath, coerceSemver, configureEslintPlugin, configureFlatConfig, copyTemplate, copyTemplateFiles, detectPnp, extractEslintInfo, findEslintFile, getBabelDependencies, getRendererDir, getVersionSafe, globalSettings, hasStorybookDependencies, normalizeExtends, readFileAsJson, suggestESLintPlugin, writeFileAsJson };
