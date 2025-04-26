import { SortBase, type SortCoreElement } from "./SortBase";

export class SelectionSort extends SortBase {
	public core<T>(content: SortCoreElement<T>): SortCoreElement<T> {
		const baseArr = content.concat();
		const arr: SortCoreElement<T> = [];
		do {
			let minIndex = 0;
			let min = baseArr[minIndex] as SortCoreElement<T>[number];
			for (let i = 0; i < baseArr.length; i++) {
				const element = baseArr[i] as SortCoreElement<T>[number];
				if (element.num < min.num) {
					minIndex = i;
					min = element;
				}
			}
			baseArr.splice(minIndex, 1);
			arr.push(min);
		} while (arr.length !== content.length);
		return arr;
	}
}
