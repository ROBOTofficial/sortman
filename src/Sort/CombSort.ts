import { SortBase, type SortCoreElement } from "./SortBase";

export class CombSort extends SortBase {
	public core<T>(content: SortCoreElement<T>): SortCoreElement<T> {
		const data = content.concat();
		let h = Math.floor((data.length * 10) / 13);

		for (;;) {
			let swaps = 0;

			for (let i = 0; i + h < data.length; i++) {
				const element = data[i];
				const next = data[i + h];
				if (element && next && element.num > next.num) {
					const tmp = element;
					data[i] = next;
					data[i + h] = tmp;
					swaps++;
				}
			}

			if (h === 1) {
				if (swaps === 0) {
					break;
				}
			} else {
				h = Math.floor((h * 10) / 13);
			}
		}

		return data;
	}
}
