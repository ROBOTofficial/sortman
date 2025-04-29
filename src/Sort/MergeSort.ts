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
			let i = 0;
			let l = 0;

			while (i < left.length && l < right.length) {
				const leftElement = left[i];
				const rightElement = right[l];

				if (leftElement && rightElement && leftElement.num < rightElement.num) {
					const element = left[i++];
					if (element) {
						result.push(element);
					}
				} else {
					const element = right[l++];
					if (element) {
						result.push(element);
					}
				}
			}

			return result.concat(left.slice(i)).concat(right.slice(l));
		})();
	}
}
