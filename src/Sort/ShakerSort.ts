import { swap } from "../utils/swap";
import { SortBase, type SortCoreElement } from "./SortBase";

export class ShakerSort extends SortBase {
	private asc<T>(arr: SortCoreElement<T>, start: number, end: number) {
		if (start < end) {
			if (
				(arr[start] as SortCoreElement<T>[number]).num >
				(arr[start + 1] as SortCoreElement<T>[number]).num
			) {
				swap(start, start + 1, arr);
			}
			this.asc(arr, start + 1, end);
		}
		return arr;
	}

	private desc<T>(arr: SortCoreElement<T>, start: number, end: number) {
		if (end > start) {
			if (
				(arr[end - 1] as SortCoreElement<T>[number]).num >
				(arr[end] as SortCoreElement<T>[number]).num
			) {
				swap(end - 1, end, arr);
			}
			this.desc(arr, start, end - 1);
		}
		return arr;
	}

	public core<T>(content: SortCoreElement<T>): SortCoreElement<T> {
		let arr = content.concat();
		let start = 0;
		let end = arr.length - 1;

		while (true) {
			arr = this.asc(arr, start, end);
			end--;
			if (start === end) {
				break;
			}
			arr = this.desc(arr, start, end);
			start++;
			if (start === end) {
				break;
			}
		}
		return arr;
	}
}
