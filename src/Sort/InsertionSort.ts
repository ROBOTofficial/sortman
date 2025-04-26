import { SortBase, type SortCoreElement } from "./SortBase";

export class InsertionSort extends SortBase {
	public core<T>(content: SortCoreElement<T>): SortCoreElement<T> {
		const arr: SortCoreElement<T> = [];
		for (const element of content) {
			const max = arr[arr.length - 1] as SortCoreElement<T>[number];
			if (!arr.length) {
				arr.push(element);
				continue;
			}
			if (max.num <= element.num) {
				arr.push(element);
				continue;
			}
			for (let i = 0; i < arr.length; i++) {
				const { num } = arr[i] as SortCoreElement<T>[number];
				if (element.num <= num) {
					arr.splice(i, 0, element);
					break;
				}
			}
		}
		return arr;
	}
}
