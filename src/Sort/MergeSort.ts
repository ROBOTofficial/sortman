import { SortBase, type SortCoreElement } from "./SortBase";

export class MergeSort extends SortBase {
	public core<T>(content: SortCoreElement<T>): SortCoreElement<T> {
		if (content.length < 2) {
			return content;
		}
		const middle = Math.floor(content.length / 2);
		const left = this.core(content.slice(0, middle));
		const right = this.core(content.slice(middle));
		return (() => {
			const result: SortCoreElement<T> = [];
			do {
				const leftElement = left[0] as SortCoreElement<T>[number];
				const rightElement = right[0] as SortCoreElement<T>[number];
				if (leftElement.num < rightElement.num) {
					result.push(left.shift() as SortCoreElement<T>[number]);
				} else {
					result.push(right.shift() as SortCoreElement<T>[number]);
				}
			} while (left.length && right.length);
			return result;
		})();
	}
}
