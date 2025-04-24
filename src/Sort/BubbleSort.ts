import { sortCheck } from "../utils/array";
import { SortBase, type SortCoreElement } from "./SortBase";

export class BubbleSort extends SortBase {
	public core<T>(content: SortCoreElement<T>): SortCoreElement<T> {
		const arr = content.concat();
		for (;;) {
			for (let i = 0; i < arr.length; i++) {
				const index = arr[i];
				const next = arr[i + 1];
				if (index && next && index.num > next.num) {
					const tmp = index;
					arr[i] = next;
					arr[i + 1] = tmp;
				}
			}
			if (sortCheck(arr.map(({ num }) => num))) {
				return arr;
			}
		}
	}
}
