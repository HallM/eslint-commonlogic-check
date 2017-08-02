# no-backwards-assign-ops

Catches potential typos `x =+ y` and `x =- y`. These commonly are typos. If the intended behavior is `x = -y`, then place a space between the `=` and `+`/`-` to clarify the intended behavior.

## Rule Details

Examples of **incorrect** code for this rule:

```js
x =+ y

x=-y
```

Examples of **correct** code for this rule:

```js
x += y
x= -y
```
