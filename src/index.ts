import { BubbleSort } from "./Sort/BubbleSort";
import { RandomSort } from "./Sort/RandomSort";

export class SortMan {
	public static readonly random = new RandomSort();
	public static readonly bubble = new BubbleSort();
	public static readonly sort = this.bubble.sort;
}
