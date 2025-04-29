import { z } from "zod";
import { inversion } from "../utils/array";

export type SortCoreElement<T> = Array<{
	num: number;
	content: T;
}>;

export type SortOptionsFunc<T> = {
	func: (e: T) => number;
};

export type SortOptions<T> = (T extends number
	? Partial<SortOptionsFunc<T>>
	: Required<SortOptionsFunc<T>>) & {
	desc?: boolean;
};

export abstract class SortBase {
	private isNumArray(arr: unknown): arr is number[] {
		try {
			z.number().array().parse(arr);
			return true;
		} catch {
			return false;
		}
	}

	public sort<T extends number>(arr: T[]): T[];
	public sort<T>(arr: T[], options: SortOptions<T>): T[];
	public sort<T>(arr: T[], options?: SortOptions<T>): T[] {
		const elements = (() => {
			if (this.isNumArray(arr)) {
				return arr.map((value) => {
					return {
						num: (options && options.func ? options.func(value) : value) as number,
						content: value
					};
				});
			} else {
				const { func } = options as SortOptionsFunc<T>;
				return arr.map((value) => {
					return {
						num: func(value),
						content: value
					};
				});
			}
		})() satisfies SortCoreElement<T>;

		if (elements.length < 2) {
			return elements.map(({ content }) => content);
		}

		const result = this.core(elements).map(({ content }) => content);

		if (options && options.desc) {
			return inversion(result);
		}

		return result;
	}

	public abstract core<T>(content: SortCoreElement<T>): SortCoreElement<T>;
}
