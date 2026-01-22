import { ComponentType, JSX } from 'react';
import { PreviewAddon, InferTypes, AddonTypes, Preview, Meta, Story } from 'storybook/internal/csf';
import { WebRenderer, Canvas, ProjectAnnotations, Args, DecoratorFunction, ArgsStoryFn, ComponentAnnotations, StoryAnnotations, Renderer } from 'storybook/internal/types';
import { RootOptions } from 'react-dom/client';

declare global {
	interface SymbolConstructor {
		readonly observable: symbol;
	}
}

/**
Returns a boolean for whether the two given types are equal.

@link https://github.com/microsoft/TypeScript/issues/27024#issuecomment-421529650
@link https://stackoverflow.com/questions/68961864/how-does-the-equals-work-in-typescript/68963796#68963796
*/
type IsEqual<T, U> =
	(<G>() => G extends T ? 1 : 2) extends
	(<G>() => G extends U ? 1 : 2)
		? true
		: false;

/**
Filter out keys from an object.

Returns `never` if `Exclude` is strictly equal to `Key`.
Returns `never` if `Key` extends `Exclude`.
Returns `Key` otherwise.

@example
```
type Filtered = Filter<'foo', 'foo'>;
//=> never
```

@example
```
type Filtered = Filter<'bar', string>;
//=> never
```

@example
```
type Filtered = Filter<'bar', 'foo'>;
//=> 'bar'
```

@see {Except}
*/
type Filter<KeyType, ExcludeType> = IsEqual<KeyType, ExcludeType> extends true ? never : (KeyType extends ExcludeType ? never : KeyType);

/**
Create a type from an object type without certain keys.

This type is a stricter version of [`Omit`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-5.html#the-omit-helper-type). The `Omit` type does not restrict the omitted keys to be keys present on the given type, while `Except` does. The benefits of a stricter type are avoiding typos and allowing the compiler to pick up on rename refactors automatically.

This type was proposed to the TypeScript team, which declined it, saying they prefer that libraries implement stricter versions of the built-in types ([microsoft/TypeScript#30825](https://github.com/microsoft/TypeScript/issues/30825#issuecomment-523668235)).

@example
```
import type {Except} from 'type-fest';

type Foo = {
	a: number;
	b: string;
	c: boolean;
};

type FooWithoutA = Except<Foo, 'a' | 'c'>;
//=> {b: string};
```

@category Object
*/
type Except<ObjectType, KeysType extends keyof ObjectType> = {
	[KeyType in keyof ObjectType as Filter<KeyType, KeysType>]: ObjectType[KeyType];
};

/**
@see Simplify
*/
interface SimplifyOptions {
	/**
	Do the simplification recursively.

	@default false
	*/
	deep?: boolean;
}

// Flatten a type without worrying about the result.
type Flatten<
	AnyType,
	Options extends SimplifyOptions = {},
> = Options['deep'] extends true
	? {[KeyType in keyof AnyType]: Simplify<AnyType[KeyType], Options>}
	: {[KeyType in keyof AnyType]: AnyType[KeyType]};

/**
Useful to flatten the type output to improve type hints shown in editors. And also to transform an interface into a type to aide with assignability.

@example
```
import type {Simplify} from 'type-fest';

type PositionProps = {
	top: number;
	left: number;
};

type SizeProps = {
	width: number;
	height: number;
};

// In your editor, hovering over `Props` will show a flattened object with all the properties.
type Props = Simplify<PositionProps & SizeProps>;
```

Sometimes it is desired to pass a value as a function argument that has a different type. At first inspection it may seem assignable, and then you discover it is not because the `value`'s type definition was defined as an interface. In the following example, `fn` requires an argument of type `Record<string, unknown>`. If the value is defined as a literal, then it is assignable. And if the `value` is defined as type using the `Simplify` utility the value is assignable.  But if the `value` is defined as an interface, it is not assignable because the interface is not sealed and elsewhere a non-string property could be added to the interface.

If the type definition must be an interface (perhaps it was defined in a third-party npm package), then the `value` can be defined as `const value: Simplify<SomeInterface> = ...`. Then `value` will be assignable to the `fn` argument.  Or the `value` can be cast as `Simplify<SomeInterface>` if you can't re-declare the `value`.

@example
```
import type {Simplify} from 'type-fest';

interface SomeInterface {
	foo: number;
	bar?: string;
	baz: number | undefined;
}

type SomeType = {
	foo: number;
	bar?: string;
	baz: number | undefined;
};

const literal = {foo: 123, bar: 'hello', baz: 456};
const someType: SomeType = literal;
const someInterface: SomeInterface = literal;

function fn(object: Record<string, unknown>): void {}

fn(literal); // Good: literal object type is sealed
fn(someType); // Good: type is sealed
fn(someInterface); // Error: Index signature for type 'string' is missing in type 'someInterface'. Because `interface` can be re-opened
fn(someInterface as Simplify<SomeInterface>); // Good: transform an `interface` into a `type`
```

@link https://github.com/microsoft/TypeScript/issues/15300

@category Object
*/
type Simplify<
	AnyType,
	Options extends SimplifyOptions = {},
> = Flatten<AnyType> extends AnyType
	? Flatten<AnyType, Options>
	: AnyType;

/**
Remove any index signatures from the given object type, so that only explicitly defined properties remain.

Use-cases:
- Remove overly permissive signatures from third-party types.

This type was taken from this [StackOverflow answer](https://stackoverflow.com/a/68261113/420747).

It relies on the fact that an empty object (`{}`) is assignable to an object with just an index signature, like `Record<string, unknown>`, but not to an object with explicitly defined keys, like `Record<'foo' | 'bar', unknown>`.

(The actual value type, `unknown`, is irrelevant and could be any type. Only the key type matters.)

```
const indexed: Record<string, unknown> = {}; // Allowed

const keyed: Record<'foo', unknown> = {}; // Error
// => TS2739: Type '{}' is missing the following properties from type 'Record<"foo" | "bar", unknown>': foo, bar
```

Instead of causing a type error like the above, you can also use a [conditional type](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html) to test whether a type is assignable to another:

```
type Indexed = {} extends Record<string, unknown>
	? '✅ `{}` is assignable to `Record<string, unknown>`'
	: '❌ `{}` is NOT assignable to `Record<string, unknown>`';
// => '✅ `{}` is assignable to `Record<string, unknown>`'

type Keyed = {} extends Record<'foo' | 'bar', unknown>
	? "✅ `{}` is assignable to `Record<'foo' | 'bar', unknown>`"
	: "❌ `{}` is NOT assignable to `Record<'foo' | 'bar', unknown>`";
// => "❌ `{}` is NOT assignable to `Record<'foo' | 'bar', unknown>`"
```

Using a [mapped type](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#further-exploration), you can then check for each `KeyType` of `ObjectType`...

```
import type {RemoveIndexSignature} from 'type-fest';

type RemoveIndexSignature<ObjectType> = {
	[KeyType in keyof ObjectType // Map each key of `ObjectType`...
	]: ObjectType[KeyType]; // ...to its original value, i.e. `RemoveIndexSignature<Foo> == Foo`.
};
```

...whether an empty object (`{}`) would be assignable to an object with that `KeyType` (`Record<KeyType, unknown>`)...

```
import type {RemoveIndexSignature} from 'type-fest';

type RemoveIndexSignature<ObjectType> = {
	[KeyType in keyof ObjectType
		// Is `{}` assignable to `Record<KeyType, unknown>`?
		as {} extends Record<KeyType, unknown>
			? ... // ✅ `{}` is assignable to `Record<KeyType, unknown>`
			: ... // ❌ `{}` is NOT assignable to `Record<KeyType, unknown>`
	]: ObjectType[KeyType];
};
```

If `{}` is assignable, it means that `KeyType` is an index signature and we want to remove it. If it is not assignable, `KeyType` is a "real" key and we want to keep it.

```
import type {RemoveIndexSignature} from 'type-fest';

type RemoveIndexSignature<ObjectType> = {
	[KeyType in keyof ObjectType
		as {} extends Record<KeyType, unknown>
			? never // => Remove this `KeyType`.
			: KeyType // => Keep this `KeyType` as it is.
	]: ObjectType[KeyType];
};
```

@example
```
import type {RemoveIndexSignature} from 'type-fest';

interface Example {
	// These index signatures will be removed.
	[x: string]: any
	[x: number]: any
	[x: symbol]: any
	[x: `head-${string}`]: string
	[x: `${string}-tail`]: string
	[x: `head-${string}-tail`]: string
	[x: `${bigint}`]: string
	[x: `embedded-${number}`]: string

	// These explicitly defined keys will remain.
	foo: 'bar';
	qux?: 'baz';
}

type ExampleWithoutIndexSignatures = RemoveIndexSignature<Example>;
// => { foo: 'bar'; qux?: 'baz' | undefined; }
```

@category Object
*/
type RemoveIndexSignature<ObjectType> = {
	[KeyType in keyof ObjectType as {} extends Record<KeyType, unknown>
		? never
		: KeyType]: ObjectType[KeyType];
};

/**
Create a type that makes the given keys optional. The remaining keys are kept as is. The sister of the `SetRequired` type.

Use-case: You want to define a single model where the only thing that changes is whether or not some of the keys are optional.

@example
```
import type {SetOptional} from 'type-fest';

type Foo = {
	a: number;
	b?: string;
	c: boolean;
}

type SomeOptional = SetOptional<Foo, 'b' | 'c'>;
// type SomeOptional = {
// 	a: number;
// 	b?: string; // Was already optional and still is.
// 	c?: boolean; // Is now optional.
// }
```

@category Object
*/
type SetOptional<BaseType, Keys extends keyof BaseType> =
	Simplify<
		// Pick just the keys that are readonly from the base type.
		Except<BaseType, Keys> &
		// Pick the keys that should be mutable from the base type and make them mutable.
		Partial<Pick<BaseType, Keys>>
	>;

/**
Convert a union type to an intersection type using [distributive conditional types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#distributive-conditional-types).

Inspired by [this Stack Overflow answer](https://stackoverflow.com/a/50375286/2172153).

@example
```
import type {UnionToIntersection} from 'type-fest';

type Union = {the(): void} | {great(arg: string): void} | {escape: boolean};

type Intersection = UnionToIntersection<Union>;
//=> {the(): void; great(arg: string): void; escape: boolean};
```

A more applicable example which could make its way into your library code follows.

@example
```
import type {UnionToIntersection} from 'type-fest';

class CommandOne {
	commands: {
		a1: () => undefined,
		b1: () => undefined,
	}
}

class CommandTwo {
	commands: {
		a2: (argA: string) => undefined,
		b2: (argB: string) => undefined,
	}
}

const union = [new CommandOne(), new CommandTwo()].map(instance => instance.commands);
type Union = typeof union;
//=> {a1(): void; b1(): void} | {a2(argA: string): void; b2(argB: string): void}

type Intersection = UnionToIntersection<Union>;
//=> {a1(): void; b1(): void; a2(argA: string): void; b2(argB: string): void}
```

@category Type
*/
type UnionToIntersection<Union> = (
	// `extends unknown` is always going to be the case and is used to convert the
	// `Union` into a [distributive conditional
	// type](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#distributive-conditional-types).
	Union extends unknown
		// The union type is used as the only argument to a function since the union
		// of function arguments is an intersection.
		? (distributedUnion: Union) => void
		// This won't happen.
		: never
		// Infer the `Intersection` type since TypeScript represents the positional
		// arguments of unions of functions as an intersection of the union.
	) extends ((mergedIntersection: infer Intersection) => void)
		? Intersection
		: never;

interface ReactRenderer extends WebRenderer {
    component: ComponentType<this['T']>;
    storyResult: StoryFnReactReturnType;
    mount: (ui?: JSX.Element) => Promise<Canvas>;
}
interface ReactParameters {
    /** React renderer configuration */
    react?: {
        /**
         * Whether to enable React Server Components
         *
         * @see https://storybook.js.org/docs/get-started/frameworks/nextjs#react-server-components-rsc
         */
        rsc?: boolean;
        /** Options passed to React root creation */
        rootOptions?: RootOptions;
    };
}
interface ReactTypes extends ReactRenderer {
    parameters: ReactParameters;
}
type StoryFnReactReturnType = JSX.Element;

type AddMocks<TArgs, DefaultArgs> = Simplify<{
    [T in keyof TArgs]: T extends keyof DefaultArgs ? DefaultArgs[T] extends (...args: any) => any & {
        mock: {};
    } ? DefaultArgs[T] : TArgs[T] : TArgs[T];
}>;

/** Extracts and unions all args types from an array of decorators. */
type DecoratorsArgs<TRenderer extends Renderer, Decorators> = UnionToIntersection<Decorators extends DecoratorFunction<TRenderer, infer TArgs> ? TArgs : unknown>;
type InferArgs<TArgs, T, Decorators> = Simplify<TArgs & Simplify<RemoveIndexSignature<DecoratorsArgs<ReactTypes & T, Decorators>>>>;
type InferReactTypes<T, TArgs, Decorators> = ReactTypes & T & {
    args: Simplify<InferArgs<TArgs, T, Decorators>>;
};
/**
 * Creates a React-specific preview configuration with CSF factories support.
 *
 * This function wraps the base `definePreview` and adds React-specific annotations for rendering
 * and documentation. It returns a `ReactPreview` that provides type-safe `meta()` and `story()`
 * factory methods.
 *
 * @example
 *
 * ```ts
 * // .storybook/preview.ts
 * import { definePreview } from '@storybook/react';
 *
 * export const preview = definePreview({
 *   addons: [],
 *   parameters: { layout: 'centered' },
 * });
 * ```
 */
declare function __definePreview<Addons extends PreviewAddon<never>[]>(input: {
    addons: Addons;
} & ProjectAnnotations<ReactTypes & InferTypes<Addons>>): ReactPreview<ReactTypes & InferTypes<Addons>>;
/**
 * React-specific Preview interface that provides type-safe CSF factory methods.
 *
 * Use `preview.meta()` to create a meta configuration for a component, and then `meta.story()` to
 * create individual stories. The type system will infer args from the component props, decorators,
 * and any addon types.
 *
 * @example
 *
 * ```ts
 * const meta = preview.meta({ component: Button });
 * export const Primary = meta.story({ args: { label: 'Click me' } });
 * ```
 */
/** @ts-expect-error We cannot implement the meta faithfully here, but that is okay. */
interface ReactPreview<T extends AddonTypes> extends Preview<ReactTypes & T> {
    /**
     * Narrows the type of the preview to include additional type information. This is useful when you
     * need to add args that aren't inferred from the component.
     *
     * @example
     *
     * ```ts
     * const meta = preview.type<{ args: { theme: 'light' | 'dark' } }>().meta({
     *   component: Button,
     * });
     * ```
     */
    type<R>(): ReactPreview<T & R>;
    meta<TArgs extends Args, Decorators extends DecoratorFunction<ReactTypes & T, any>, TMetaArgs extends Partial<TArgs & T['args']>>(meta: {
        render?: ArgsStoryFn<ReactTypes & T, TArgs & T['args']>;
        component?: ComponentType<TArgs>;
        decorators?: Decorators | Decorators[];
        args?: TMetaArgs;
    } & Omit<ComponentAnnotations<ReactTypes & T, TArgs>, 'decorators' | 'component' | 'args' | 'render'>): ReactMeta<InferReactTypes<T, TArgs, Decorators>, Omit<ComponentAnnotations<InferReactTypes<T, TArgs, Decorators>>, 'args'> & {
        args: Partial<TArgs> extends TMetaArgs ? {} : TMetaArgs;
    }>;
}
/**
 * React-specific Meta interface returned by `preview.meta()`.
 *
 * Provides the `story()` method to create individual stories with proper type inference. Args
 * provided in meta become optional in stories, while missing required args must be provided at the
 * story level.
 */
interface ReactMeta<T extends ReactTypes, MetaInput extends ComponentAnnotations<T>>
/** @ts-expect-error ReactMeta requires two type parameters, but Meta's constraints differ */
 extends Meta<T, MetaInput> {
    /**
     * Creates a story with a custom render function that takes no args.
     *
     * This overload allows you to define a story using just a render function or an object with a
     * render function that doesn't depend on args. Since the render function doesn't use args, no
     * args need to be provided regardless of what's required by the component.
     *
     * @example
     *
     * ```ts
     * // Using just a render function
     * export const CustomRender = meta.story(() => <div>Custom content</div>);
     *
     * // Using an object with render
     * export const WithRender = meta.story({
     *   render: () => <MyComponent prop="static" />,
     * });
     * ```
     */
    story<TInput extends (() => ReactTypes['storyResult']) | (StoryAnnotations<T, T['args']> & {
        render: () => ReactTypes['storyResult'];
    })>(story: TInput): ReactStory<T, TInput extends () => ReactTypes['storyResult'] ? {
        render: TInput;
    } : TInput>;
    /**
     * Creates a story with custom configuration including args, decorators, or other annotations.
     *
     * This is the primary overload for defining stories. Args that were already provided in meta
     * become optional, while any remaining required args must be specified here.
     *
     * @example
     *
     * ```ts
     * // Provide required args not in meta
     * export const Primary = meta.story({
     *   args: { label: 'Click me', disabled: false },
     * });
     *
     * // Override meta args and add story-specific configuration
     * export const Disabled = meta.story({
     *   args: { disabled: true },
     *   decorators: [withCustomWrapper],
     * });
     * ```
     */
    story<TInput extends Simplify<StoryAnnotations<T, AddMocks<T['args'], MetaInput['args']>, SetOptional<T['args'], keyof T['args'] & keyof MetaInput['args']>>>>(story: TInput
    /** @ts-expect-error hard */
    ): ReactStory<T, TInput>;
    /**
     * Creates a story with no additional configuration.
     *
     * This overload is only available when all required args have been provided in meta. The
     * conditional type `Partial<T['args']> extends SetOptional<...>` checks if the remaining required
     * args (after accounting for args provided in meta) are all optional. If so, the function accepts
     * zero arguments `[]`. Otherwise, it requires `[never]` which makes this overload unmatchable,
     * forcing the user to provide args.
     *
     * @example
     *
     * ```ts
     * // When meta provides all required args, story() can be called with no arguments
     * const meta = preview.meta({ component: Button, args: { label: 'Hi', disabled: false } });
     * export const Default = meta.story(); // Valid - all args provided in meta
     * ```
     */
    story(..._args: Partial<T['args']> extends SetOptional<T['args'], keyof T['args'] & keyof MetaInput['args']> ? [] : [never]): ReactStory<T, {}>;
}
/**
 * React-specific Story interface returned by `meta.story()`.
 *
 * Represents a single story with its configuration and provides access to the composed story for
 * testing via `story.run()`.
 *
 * Also includes a `Component` property for portable story compatibility.
 */
interface ReactStory<T extends ReactTypes, TInput extends StoryAnnotations<T, T['args']>> extends Story<T, TInput> {
    Component: ComponentType<Partial<T['args']>>;
}

export { type ReactMeta, type ReactPreview, type ReactStory, __definePreview };
