import { z } from "zod";

export type SortOptions = {
	/** @deprecated */
	desc?: boolean;
};

export type SortNumArr = {
	arr: number[];
} & SortOptions;

export type SortNotNumArr<T> = {
	arr: T[];
	func: (e: T) => number;
} & SortOptions;

export type SortElement<T> = T extends number ? T[] | SortNumArr : SortNotNumArr<T>;

export type SortCoreElement<T> = Array<{
	num: number;
	content: T;
}>;

export abstract class SortBase {
	private isNumArray(arr: unknown): arr is number[] {
		try {
			z.number().array().parse(arr);
			return true;
		} catch {
			return false;
		}
	}
	public sort<T>(content: SortElement<T>): T[] {
		const elements = (() => {
			if (content instanceof Array) {
				return content.map((value) => {
					return { num: value, content: value as T };
				});
			}
			if (this.isNumArray(content.arr)) {
				return content.arr.map((value) => {
					return { num: value, content: value as T };
				});
			} else {
				const { arr, func } = content as SortNotNumArr<T>;
				return arr.map((value) => {
					return { num: func(value), content: value };
				});
			}
		})() satisfies SortCoreElement<T>;
		if (elements.length < 2) {
			return elements.map(({ content }) => content);
		}
		return this.core(elements).map(({ content }) => content);
	}
	public abstract core<T>(content: SortCoreElement<T>): SortCoreElement<T>;
}
