# sortman

Sortman is sort lib in javascript.

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

const sorted = SortMan.sort({
	arr: data,
	func: (e) => e.i
});

console.log(sorted);
```

# Repository

https://github.com/ROBOTofficial/sortman
