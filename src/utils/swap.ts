import type { SortCoreElement } from "../Sort/SortBase";

export function swap<T>(left: number, right: number, arr: SortCoreElement<T>) {
	const tmp = arr[left] as SortCoreElement<T>[number];
	arr[left] = arr[right] as SortCoreElement<T>[number];
	arr[right] = tmp;
}
