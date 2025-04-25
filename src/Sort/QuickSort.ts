import { sortCheck } from "../utils/array";
import { SortBase, type SortCoreElement } from "./SortBase";

export class QuickSort extends SortBase {
	public core<T>(content: SortCoreElement<T>): SortCoreElement<T> {
		let arr: SortCoreElement<T> = content.concat();
		for (;;) {
			const pivot = Math.floor(arr.length / 2);
			const pivotElement = arr[pivot];
			if (!pivotElement) {
				return content;
			}
			const left: SortCoreElement<T> = [];
			const right: SortCoreElement<T> = [];
			for (let i = 0; i < arr.length; i++) {
				const element = arr[i] as SortCoreElement<T>[number];
				if (i === pivot) continue;
				if (pivotElement.num < element.num) {
					right.push(element);
				} else {
					left.push(element);
				}
			}
			arr = [...this.core(left), ...[pivotElement], ...this.core(right)];
			if (sortCheck(arr.map(({ num }) => num))) {
				break;
			}
		}
		return arr;
	}
}
