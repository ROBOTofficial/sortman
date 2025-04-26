import { SortMan } from "../src/index";
import { randomString } from "../src/utils/random";

import type { Global } from "@jest/types";
import type { SortBase } from "../src/Sort/SortBase";

export type ObjectArrData = {
	num: number;
	content: string;
	option: object;
}[];

export type SortOptions = {
	describe?: () => (blockName: Global.BlockNameLike, blockFn: Global.BlockFn) => void;
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

export const sorts: Sorts = [
	{
		name: "Default sort",
		algorithm: SortMan as unknown as SortBase
	},
	{
		name: "Bogo sort",
		algorithm: SortMan.bogo
	},
	{
		name: "Bubble sort",
		algorithm: SortMan.bubble
	},
	{
		name: "Quick sort",
		algorithm: SortMan.quick
	},
	{
		name: "Merge sort",
		algorithm: SortMan.merge
	},
	{
		name: "Insertion sort",
		algorithm: SortMan.insertion
	},
	{
		name: "Selection sort",
		algorithm: SortMan.selection
	},
	{
		name: "Heap sort",
		algorithm: SortMan.heap
	}
];
