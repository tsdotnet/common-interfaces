/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

export type Primitive = string | number | boolean;

export interface Selector<TSource, TResult>
{
	(source: TSource): TResult;
}

export interface SelectorWithIndex<TSource, TResult>
{
	(source: TSource, index: number): TResult;
}

export type Action<T> = Selector<T, void>;

export type ActionWithIndex<T> = SelectorWithIndex<T, void>;

export type Predicate<T> = Selector<T, boolean>

export type PredicateWithIndex<T> = SelectorWithIndex<T, boolean>;

export interface Func<TResult>
{
	(): TResult;
}

export interface Closure
{
	(): void;
}

export interface ArrayLikeWritable<T>
{
	length: number;

	[n: number]: T;
}
