# `SortMan`

Sortman is sort lib in javascript.

Various sorting options are supported, including object sorting and switching between ascending and descending order.

# Installation

```console
npm install sortman
```

# Usage

```ts
import { SortMan } from "sortman";

const data = [200, 300, 100];

const sorted = SortMan.sort(data);

console.log(sorted);
```

```ts
import { SortMan } from "sortman";

const data = [
	{
		i: 200
	},
	{
		i: 300
	},
	{
		i: 100
	}
];

const sorted = SortMan.sort(data, {
	func: (e) => e.i
});

console.log(sorted);
```

# Support sorts

- Bogo sort - `SortMan.bogo`
- Bubble sort - `SortMan.bubble`
- Bucket sort - `SortMan.bucket`
- Comb sort - `SortMan.comb`
- Gnome sort - `SortMan.gnome`
- Heap sort - `SortMan.heap`
- Insertion sort - `SortMan.insertion`
- Merge sort - `SortMan.merge`
- Quick sort - `SortMan.quick`
- Selection sort - `SortMan.selection`
- Shell sort - `SortMan.shell`

# Options

## Desc

By setting it to true, the output results will be in descending order.

```ts
import { SortMan } from "sortman";

const data = [200, 300, 100];

const sorted = SortMan.sort(data, {
	desc: true
});

console.log(sorted);
```

# Repository

https://github.com/ROBOTofficial/sortman
