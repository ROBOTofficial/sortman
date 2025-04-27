import { SortBase, type SortCoreElement } from "./SortBase";

export class HeapSort extends SortBase {
	private shiftDown<T>(arr: SortCoreElement<T>, i: number, j: number) {
		let done: boolean = false;
		let maxChild: number;

		while (i * 2 + 1 < j && !done) {
			const nodeA = arr[i * 2 + 1];
			const nodeB = arr[i * 2 + 2];
			if (i * 2 + 1 === j - 1) {
				maxChild = i * 2 + 1;
			} else if (nodeA && nodeB && nodeA.num > nodeB.num) {
				maxChild = i * 2 + 1;
			} else {
				maxChild = i * 2 + 2;
			}

			const node = arr[i];
			const maxChildNode = arr[maxChild];

			if (maxChildNode && node && node.num < maxChildNode.num) {
				arr[i] = maxChildNode;
				arr[maxChild] = node;
				i = maxChild;
			} else {
				done = true;
			}
		}
	}

	public core<T>(content: SortCoreElement<T>): SortCoreElement<T> {
		const arr = content.concat();

		for (let i: number = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
			this.shiftDown(arr, i, arr.length);
		}

		for (let i: number = arr.length - 1; i >= 1; i--) {
			const old = arr[0] as SortCoreElement<T>[number];
			arr[0] = arr[i] as SortCoreElement<T>[number];
			arr[i] = old;
			this.shiftDown(arr, 0, i);
		}

		return arr;
	}
}
