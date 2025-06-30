import { SortMan } from "../src/index";
import { randomString } from "../src/utils/random";
import { SortMan as TranspiledSortMan } from "../dist/index.cjs";

import type { Global } from "@jest/types";
import type { SortBase } from "../src/Sort/SortBase";

export type ObjectArrData = {
	num: number;
	content: string;
	option: object;
}[];

export type SortOptions = {
	describe?: () => (blockName: Global.BlockNameLike, blockFn: Global.BlockFn) => void;
	transpiled?: SortBase;
};

export type Sort = {
	name: string;
	algorithm: SortBase;

	options?: SortOptions;
};

export type Sorts = Array<Sort>;

export type GenerateOptions = {
	repeat?: number;
	max?: number;
};

export const generateNumArrData = (options?: GenerateOptions) => {
	const result: number[] = [];
	for (let i = 0; i < (options && options.repeat ? options.repeat : 5000); i++) {
		result.push(Math.floor(Math.random() * (options && options.max ? options.max : 1000)));
	}
	return result;
};

export const generateObjectArrData = (options?: GenerateOptions) => {
	const result: ObjectArrData = [];
	for (let i = 0; i < (options && options.repeat ? options.repeat : 5000); i++) {
		result.push({
			num: Math.floor(Math.random() * (options && options.max ? options.max : 1000)),
			content: randomString(30),
			option: Math.floor(Math.random() * 2) ? { foo: "bar" } : [100, 200, 300, 400, 500]
		});
	}
	return result;
};

export const numArrData = generateNumArrData({ repeat: 10 });

export const objectArrData = generateObjectArrData({ repeat: 10 });

export const ignoreSorts = ["Default sort", "Bogo sort"] satisfies string[];

export const sorts: Sorts = [
	{
		name: "Default sort",
		algorithm: SortMan as unknown as SortBase,
		options: {
			transpiled: TranspiledSortMan as unknown as SortBase
		}
	},
	{
		name: "Bogo sort",
		algorithm: SortMan.bogo,
		options: {
			transpiled: TranspiledSortMan.bogo as unknown as SortBase
		}
	},
	{
		name: "Bubble sort",
		algorithm: SortMan.bubble,
		options: {
			transpiled: TranspiledSortMan.bubble as unknown as SortBase
		}
	},
	{
		name: "Quick sort",
		algorithm: SortMan.quick,
		options: {
			transpiled: TranspiledSortMan.quick as unknown as SortBase
		}
	},
	{
		name: "Merge sort",
		algorithm: SortMan.merge,
		options: {
			transpiled: TranspiledSortMan.merge as unknown as SortBase
		}
	},
	{
		name: "Insertion sort",
		algorithm: SortMan.insertion,
		options: {
			transpiled: TranspiledSortMan.insertion as unknown as SortBase
		}
	},
	{
		name: "Selection sort",
		algorithm: SortMan.selection,
		options: {
			transpiled: TranspiledSortMan.selection as unknown as SortBase
		}
	},
	{
		name: "Heap sort",
		algorithm: SortMan.heap,
		options: {
			transpiled: TranspiledSortMan.heap as unknown as SortBase
		}
	},
	{
		name: "Shell sort",
		algorithm: SortMan.shell,
		options: {
			transpiled: TranspiledSortMan.shell as unknown as SortBase
		}
	},
	{
		name: "Bucket sort",
		algorithm: SortMan.bucket,
		options: {
			transpiled: TranspiledSortMan.bucket as unknown as SortBase
		}
	},
	{
		name: "Comb sort",
		algorithm: SortMan.comb,
		options: {
			transpiled: TranspiledSortMan.comb as unknown as SortBase
		}
	},
	{
		name: "Gnome sort",
		algorithm: SortMan.gnome,
		options: {
			transpiled: TranspiledSortMan.gnome as unknown as SortBase
		}
	}
];
