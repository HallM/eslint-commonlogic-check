# no-bad-odd-checks

Catches if using `x % 2 === 1` to check for odd. This type of check fails when x is negative as `-1 % 2 === -1`. Recommends to use `x % 2 !== 0` for checking if a value is odd.

## Rule Details

Examples of **incorrect** code for this rule:

```js
x % 2 == 1
x % 2 === 1
x % 2 == true
x % 2 == !false
x % 2 == !0
x % 2 == ~0
```

Examples of **correct** code for this rule:

```js
x % 2 == 0
x % 2 !== 0
```
