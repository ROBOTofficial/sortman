import { BubbleSort } from "./Sort/BubbleSort";
import { BogoSort } from "./Sort/BogoSort";
import { QuickSort } from "./Sort/QuickSort";
import { InsertionSort } from "./Sort/InsertionSort";
import { SelectionSort } from "./Sort/SelectionSort";
import { MergeSort } from "./Sort/MergeSort";
import { HeapSort } from "./Sort/HeapSort";

import type { SortElement } from "./Sort/SortBase";

export class SortMan {
	public static readonly bogo = new BogoSort();
	public static readonly bubble = new BubbleSort();
	public static readonly quick = new QuickSort();
	public static readonly merge = new MergeSort();
	public static readonly heap = new HeapSort();
	public static readonly insertion = new InsertionSort();
	public static readonly selection = new SelectionSort();

	public static sort<T>(content: SortElement<T>): T[] {
		return this.insertion.sort(content);
	}
}
