import { SortBase, type SortCoreElement } from "./SortBase";

export class InsertionSort extends SortBase {
	public core<T>(content: SortCoreElement<T>): SortCoreElement<T> {
		for (let i = 1; i < content.length; i++) {
			const currentVal = content[i] as SortCoreElement<T>[number];
			let l = i - 1;
			const element = content[l] as SortCoreElement<T>[number];
			do {
				content[l + 1] = element;
				l--;
			} while (l >= 0 && element.num > currentVal.num);
			content[l + 1] = currentVal;
		}
		return content;
	}
}
