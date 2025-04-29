import { SortBase, type SortCoreElement } from "./SortBase";

export class BucketSort extends SortBase {
	public core<T>(content: SortCoreElement<T>): SortCoreElement<T> {
		const arr = content.concat();
		const bucket: SortCoreElement<T>[] = [];

		for (const element of arr) {
			const cache = bucket[element.num];
			if (cache) {
				bucket[element.num] = cache.concat(element);
			} else {
				bucket[element.num] = [element];
			}
		}

        const result: SortCoreElement<T> = [];

		for (let i = 0; i < bucket.length; i++) {
			const elements = bucket[i];
			if (elements) {
                result.push(...elements);
			}
		}

		return result;
	}
}
