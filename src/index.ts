import { BubbleSort } from "./Sort/BubbleSort";
import { BogoSort } from "./Sort/BogoSort";

import type { SortElement } from "./Sort/SortBase";

export class SortMan {
	public static readonly bogo = new BogoSort();
	public static readonly bubble = new BubbleSort();

	public static sort<T>(content: SortElement<T>): T[] {
		return this.bubble.sort(content);
	}
}
