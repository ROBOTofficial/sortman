import { BubbleSort } from "./Sort/BubbleSort";
import { BogoSort } from "./Sort/BogoSort";
import { QuickSort } from "./Sort/QuickSort";
import { InsertionSort } from "./Sort/InsertionSort";
import { SelectionSort } from "./Sort/SelectionSort";
import { MergeSort } from "./Sort/MergeSort";
import { HeapSort } from "./Sort/HeapSort";
import { ShellSort } from "./Sort/ShellSort";

import type { SortOptions } from "./Sort/SortBase";

export class SortMan {
	public static readonly bogo = new BogoSort();
	public static readonly bubble = new BubbleSort();
	public static readonly quick = new QuickSort();
	public static readonly merge = new MergeSort();
	public static readonly heap = new HeapSort();
	public static readonly shell = new ShellSort();
	public static readonly insertion = new InsertionSort();
	public static readonly selection = new SelectionSort();

	public static sort<T extends number>(arr: T[]): T[];
	public static sort<T>(arr: T[], options: SortOptions<T>): T[];
	public static sort<T>(arr: T[], options?: SortOptions<T>): T[] {
		try {
			return this.quick.sort(arr, options as SortOptions<T>);
		} catch {
			return this.insertion.sort(arr, options as SortOptions<T>);
		}
	}
}
