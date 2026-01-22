/// <reference types="node" />
import { Readable, Writable, Duplex } from 'node:stream';
import { EventEmitter } from 'events';
import { ChildProcess } from 'node:child_process';
import { SignalConstants } from 'node:os';
import { TransformStream, ReadableStream, WritableStream } from 'node:stream/web';

interface CommonOptions$1 {
    input?: Readable;
    output?: Writable;
    signal?: AbortSignal;
    withGuide?: boolean;
}

type BoxAlignment = 'left' | 'center' | 'right';
interface BoxOptions extends CommonOptions$1 {
    contentAlign?: BoxAlignment;
    titleAlign?: BoxAlignment;
    width?: number | 'auto';
    titlePadding?: number;
    contentPadding?: number;
    rounded?: boolean;
    formatBorder?: (text: string) => string;
}

interface LogMessageOptions extends CommonOptions$1 {
    symbol?: string;
    spacing?: number;
    secondarySymbol?: string;
}

declare namespace npmlog {
    // TODO: newStream, newGroup, setGaugeTemplate and setGaugeTemplateSet need to be added
    interface Logger extends EventEmitter {
        (): any;

        level: string;
        record: MessageObject[];
        maxRecordSize: number;
        prefixStyle: StyleObject;
        headingStyle: StyleObject;
        heading: string;
        stream: any; // Defaults to process.stderr

        /**
         * Creates a log message
         * @param level
         * @param prefix
         * @param message message of the log which will be formatted using utils.format()
         * @param args additional arguments appended to the log message also formatted using utils.format()
         */
        log(level: LogLevels | string, prefix: string, message: any, ...args: any[]): void;

        /**
         * @param prefix
         * @param message message of the log which will be formatted using utils.format()
         * @param args additional arguments appended to the log message also formatted using utils.format()
         */
        silly(prefix: string, message: any, ...args: any[]): void;
        verbose(prefix: string, message: any, ...args: any[]): void;
        info(prefix: string, message: any, ...args: any[]): void;
        timing(prefix: string, message: any, ...args: any[]): void;
        http(prefix: string, message: any, ...args: any[]): void;
        notice(prefix: string, message: any, ...args: any[]): void;
        warn(prefix: string, message: any, ...args: any[]): void;
        error(prefix: string, message: any, ...args: any[]): void;
        silent(prefix: string, message: any, ...args: any[]): void;

        enableColor(): void;
        disableColor(): void;

        enableProgress(): void;
        disableProgress(): void;
        progressEnabled(): boolean;

        enableUnicode(): void;
        disableUnicode(): void;

        pause(): void;
        resume(): void;

        addLevel(level: string, n: number, style?: StyleObject, disp?: string): void;

        // Allows for custom log levels
        // npmlog.addLevel("custom", level)
        // npmlog.custom(prefix, message)
        [key: string]: any;
    }

    type LogLevels = "silly" | "verbose" | "info" | "timing" | "http" | "notice" | "warn" | "error" | "silent";

    interface StyleObject {
        fg?: string | undefined;
        bg?: string | undefined;
        bold?: boolean | undefined;
        inverse?: boolean | undefined;
        underline?: boolean | undefined;
        bell?: boolean | undefined;
    }

    interface MessageObject {
        id: number;
        level: string;
        prefix: string;
        message: string;
        messageRaw: string;
    }
}

declare var npmlog: npmlog.Logger;

/** Detects URLs in text and prevents them from being broken across lines */
declare function protectUrls(text: string, options?: {
    maxUrlLength?: number;
    maxLineWidth?: number;
}): string;
/**
 * Creates a hyperlink with custom title text if supported, otherwise falls back to "title: url"
 * format
 */
declare function createHyperlink(title: string, url: string): string;
declare function wrapTextForClack(text: string, width?: number): string;

type LogLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'silent';

type Primitive = Readonly<string | boolean | number>;
type Option<T> = T extends Primitive ? {
    value: T;
    label?: string;
    hint?: string;
} : {
    value: T;
    label: string;
    hint?: string;
};
interface BasePromptOptions {
    message: string;
}
interface TextPromptOptions extends BasePromptOptions {
    placeholder?: string;
    initialValue?: string;
    validate?: (value: string | undefined) => string | Error | undefined;
}
interface ConfirmPromptOptions extends BasePromptOptions {
    initialValue?: boolean;
    active?: string;
    inactive?: string;
}
interface SelectPromptOptions<T> extends BasePromptOptions {
    options: Option<T>[];
    initialValue?: T;
}
interface MultiSelectPromptOptions<T> extends BasePromptOptions {
    options: Option<T>[];
    initialValues?: T[];
    required?: boolean;
}
interface PromptOptions {
    onCancel?: () => void;
}
interface SpinnerInstance {
    start: (message?: string) => void;
    stop: (message?: string) => void;
    cancel: (message?: string) => void;
    error: (message?: string) => void;
    message: (text: string) => void;
}
interface TaskLogInstance {
    message: (text: string) => void;
    success: (message: string, options?: {
        showLog?: boolean;
    }) => void;
    error: (message: string) => void;
    group: (title: string) => {
        message: (text: string, options?: any) => void;
        success: (message: string) => void;
        error: (message: string) => void;
    };
}
interface SpinnerOptions {
    /** The id of the task, to be used by the log tracker. */
    id: string;
}
interface TaskLogOptions {
    /** The id of the task, to be used by the log tracker. */
    id: string;
    title: string;
    retainLog?: boolean;
    limit?: number;
}
declare abstract class PromptProvider {
    abstract text(options: TextPromptOptions, promptOptions?: PromptOptions): Promise<string>;
    abstract confirm(options: ConfirmPromptOptions, promptOptions?: PromptOptions): Promise<boolean>;
    abstract select<T>(options: SelectPromptOptions<T>, promptOptions?: PromptOptions): Promise<T>;
    abstract multiselect<T>(options: MultiSelectPromptOptions<T>, promptOptions?: PromptOptions): Promise<T[]>;
    abstract spinner(options: SpinnerOptions): SpinnerInstance;
    abstract taskLog(options: TaskLogOptions): TaskLogInstance;
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

declare const prompt: {
    executeTask: (childProcessFactories: ((signal?: AbortSignal) => ResultPromise) | ((signal?: AbortSignal) => ResultPromise)[], { intro, error, success, abortable, }: {
        intro: string;
        error: string;
        success: string;
        abortable?: boolean;
    }) => Promise<"aborted" | void>;
    executeTaskWithSpinner: (childProcessFactories: ((signal?: AbortSignal) => ResultPromise) | ((signal?: AbortSignal) => ResultPromise)[], { id, intro, error, success, abortable, }: {
        id: string;
        intro: string;
        error: string;
        success: string;
        abortable?: boolean;
    }) => Promise<"aborted" | void>;
    setPromptLibrary: (library: "clack") => void;
    getPromptLibrary: () => "clack";
    getPromptProvider: () => PromptProvider;
    isClackEnabled: () => boolean;
    getPreferredStdio: () => "inherit" | "pipe";
    text: (options: TextPromptOptions, promptOptions?: PromptOptions) => Promise<string>;
    confirm: (options: ConfirmPromptOptions, promptOptions?: PromptOptions) => Promise<boolean>;
    select: <T>(options: SelectPromptOptions<T>, promptOptions?: PromptOptions) => Promise<T>;
    multiselect: <T>(options: MultiSelectPromptOptions<T>, promptOptions?: PromptOptions) => Promise<T[]>;
    spinner: (options: SpinnerOptions) => SpinnerInstance;
    taskLog: (options: TaskLogOptions) => TaskLogInstance;
};

type Metadata = Record<string, any>;
interface LogEntry {
    timestamp: Date;
    level: LogLevel | 'prompt';
    message: string;
    metadata?: Metadata;
}
/**
 * Tracks and manages logs for Storybook CLI operations. Provides functionality to collect, store
 * and write logs to a file.
 */
declare class LogTracker {
    #private;
    /** Enables writing logs to file. */
    enableLogWriting(): void;
    /** Returns whether logs should be written to file. */
    get shouldWriteLogsToFile(): boolean;
    /** Returns a copy of all stored logs. */
    get logs(): LogEntry[];
    /**
     * Adds a new log entry.
     *
     * @param level - The log level
     * @param message - The log message
     * @param metadata - Optional metadata to attach to the log, can be any JSON serializable value
     */
    addLog(level: LogEntry['level'], message: string, metadata?: Metadata): void;
    /** Clears all stored logs. */
    clear(): void;
    /**
     * Writes all stored logs to a file and clears the log store.
     *
     * @param filePath - Optional custom file path to write logs to
     * @returns The path where logs were written, by default is debug-storybook.log in current working
     *   directory
     */
    writeToFile(filePath: string | boolean | undefined): Promise<string>;
}
declare const logTracker: LogTracker;

type Formatter = (input: string | number | null | undefined) => string

declare const CLI_COLORS: {
    success: Formatter;
    error: Formatter;
    warning: Formatter;
    info: Formatter;
    debug: Formatter;
    cta: Formatter;
    muted: Formatter;
    storybook: (text: string) => string;
};

interface ConsoleLoggerOptions {
    prefix: string;
    color: 'bgBlack' | 'bgRed' | 'bgGreen' | 'bgYellow' | 'bgBlue' | 'bgMagenta' | 'bgCyan' | 'bgWhite' | 'bgBlackBright' | 'bgRedBright' | 'bgGreenBright' | 'bgYellowBright' | 'bgBlueBright' | 'bgMagentaBright' | 'bgCyanBright' | 'bgWhiteBright';
}
declare class ConsoleLogger implements Console {
    Console: typeof ConsoleLogger;
    protected timers: Map<string, number>;
    protected counters: Map<string, number>;
    protected lastStatusLine: string | null;
    protected statusLineCount: number;
    protected get prefix(): string;
    protected get color(): (text: string) => string;
    protected formatMessage(...data: any[]): string;
    assert(condition?: boolean, ...data: any[]): void;
    /**
     * The **`console.clear()`** static method clears the console if possible.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/clear_static)
     */
    clear(): void;
    /**
     * The **`console.count()`** static method logs the number of times that this particular call to
     * `count()` has been called.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/count_static)
     */
    count(label?: string): void;
    /**
     * The **`console.countReset()`** static method resets counter used with console/count_static.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/countReset_static)
     */
    countReset(label?: string): void;
    /**
     * The **`console.debug()`** static method outputs a message to the console at the 'debug' log
     * level.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/debug_static)
     */
    debug(...data: any[]): void;
    /**
     * The **`console.dir()`** static method displays a list of the properties of the specified
     * JavaScript object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/dir_static)
     */
    dir(item?: any, options?: any): void;
    /**
     * The **`console.dirxml()`** static method displays an interactive tree of the descendant
     * elements of the specified XML/HTML element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/dirxml_static)
     */
    dirxml(...data: any[]): void;
    /**
     * The **`console.error()`** static method outputs a message to the console at the 'error' log
     * level.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/error_static)
     */
    error(...data: any[]): void;
    /**
     * The **`console.group()`** static method creates a new inline group in the Web console log,
     * causing any subsequent console messages to be indented by an additional level, until
     * console/groupEnd_static is called.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/group_static)
     */
    group(...data: any[]): void;
    /**
     * The **`console.groupCollapsed()`** static method creates a new inline group in the console.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/groupCollapsed_static)
     */
    groupCollapsed(...data: any[]): void;
    /**
     * The **`console.groupEnd()`** static method exits the current inline group in the console.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/groupEnd_static)
     */
    groupEnd(): void;
    /**
     * The **`console.info()`** static method outputs a message to the console at the 'info' log
     * level.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/info_static)
     */
    info(...data: any[]): void;
    /**
     * The **`console.log()`** static method outputs a message to the console.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/log_static)
     */
    log(...data: any[]): void;
    /**
     * The **`console.table()`** static method displays tabular data as a table.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/table_static)
     */
    table(tabularData?: any, properties?: string[]): void;
    /**
     * The **`console.time()`** static method starts a timer you can use to track how long an
     * operation takes.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/time_static)
     */
    time(label?: string): void;
    /**
     * The **`console.timeEnd()`** static method stops a timer that was previously started by calling
     * console/time_static.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/timeEnd_static)
     */
    timeEnd(label?: string): void;
    /**
     * The **`console.timeLog()`** static method logs the current value of a timer that was previously
     * started by calling console/time_static.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/timeLog_static)
     */
    timeLog(label?: string, ...data: any[]): void;
    timeStamp(label?: string): void;
    /**
     * The **`console.trace()`** static method outputs a stack trace to the console.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/trace_static)
     */
    trace(...data: any[]): void;
    /**
     * The **`console.warn()`** static method outputs a warning message to the console at the
     * 'warning' log level.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/warn_static)
     */
    warn(...data: any[]): void;
    profile(label?: string): void;
    profileEnd(label?: string): void;
}
declare class StyledConsoleLogger extends ConsoleLogger {
    private _prefix;
    private _color;
    constructor(options: ConsoleLoggerOptions);
    protected get prefix(): string;
    protected get color(): Formatter;
}

/** @deprecated Use CLI_COLORS instead */
declare const colors: {
    pink: (text: string) => string;
    purple: (text: string) => string;
    orange: (text: string) => string;
    green: (text: string) => string;
    blue: (text: string) => string;
    red: (text: string) => string;
    gray: (text: string) => string;
};
declare const logger: {
    verbose: (message: string) => void;
    line: (count?: number) => void;
    /** For non-critical issues or warnings */
    warn: (message: string) => void;
    trace: ({ message, time }: {
        message: string;
        time: [number, number];
    }) => void;
    setLevel: (level?: LogLevel) => void;
    error: (message: unknown) => void;
    setLogLevel: (level: LogLevel) => void;
    getLogLevel: () => LogLevel;
    shouldLog: (level: LogLevel) => boolean;
    debug: (message: any) => void;
    log: (message?: string | string[] | undefined, args_1?: LogMessageOptions | undefined) => void;
    info: (message: string, opts?: LogMessageOptions | undefined) => void;
    logBox: (message: string, { title, ...options }?: {
        title?: string;
    } & BoxOptions) => void;
    intro: (message: string) => void;
    outro: (message: string) => void;
    step: (message: string) => void;
    SYMBOLS: {
        success: string;
        error: string;
    };
    wrapTextForClack: typeof wrapTextForClack;
};

declare const once: {
    (type: "verbose" | "info" | "warn" | "error"): (message: string) => void;
    clear(): void;
    verbose: (message: string) => void;
    info: (message: string) => void;
    warn: (message: string) => void;
    error: (message: string) => void;
};
declare const deprecate: (message: string) => void;

export { CLI_COLORS, ConsoleLogger, type LogLevel, type SpinnerInstance, StyledConsoleLogger, type TaskLogInstance, colors, createHyperlink, deprecate, npmlog as instance, logTracker, logger, once, prompt, protectUrls };
