import { SortBase, type SortCoreElement } from "./SortBase";

export class ShellSort extends SortBase {
	public core<T>(content: SortCoreElement<T>): SortCoreElement<T> {
		const arr = content.concat();
		for (
			let step = parseInt((arr.length / 2).toString());
			step > 0;
			step = parseInt((step / 2).toString())
		) {
			for (let i = step; i < arr.length; i++) {
				const tmp = arr[i] as SortCoreElement<T>[number];

				let l = i;

				do {
					const element = arr[l - step] as SortCoreElement<T>[number];
					if (element.num > tmp.num) {
						arr[l] = element;
					} else {
						break;
					}
					l -= step;
				} while (l >= step);

				arr[l] = tmp;
			}
		}
		return arr;
	}
}
