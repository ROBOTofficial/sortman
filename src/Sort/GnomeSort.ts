import { SortBase } from "./SortBase";
import type { SortCoreElement } from "./SortBase";

export class GnomeSort extends SortBase {
	public core<T>(content: SortCoreElement<T>): SortCoreElement<T> {
		const arr = content.concat();
		let pos = 0;
		while (pos < arr.length) {
			const index = arr[pos] as SortCoreElement<T>[number];
			const last = arr[pos - 1] as SortCoreElement<T>[number];
			if (pos === 0 || index.num >= last.num) {
				pos++;
			} else {
				const temp = index;
				arr[pos] = last;
				arr[pos - 1] = temp;
				pos--;
			}
		}
		return arr;
	}
}
