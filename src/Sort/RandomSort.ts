import { sortCheck } from "../utils/array";
import { SortBase, type SortCoreElement } from "./SortBase";

export class RandomSort extends SortBase {
	public core<T>(content: SortCoreElement<T>): SortCoreElement<T> {
		for (;;) {
			const arr = new Array<SortCoreElement<T>[number]>(content.length);
			for (const element of content) {
				const index = (() => {
					let i = Math.floor(Math.random() * content.length);
					while (arr[i]) {
						i = Math.floor(Math.random() * content.length);
					}
					return i;
				})();
				arr[index] = element;
			}
			if (sortCheck(arr.map(({ num }) => num))) {
				return arr;
			}
		}
	}
}
