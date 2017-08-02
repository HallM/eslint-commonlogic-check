# no-identical-bitwise-sides

Catches if both sides of a bitwise operator are the same expression. These are generally a typo, a logic error, or the bitwise expression can be reduced.

## Rule Details

Examples of **incorrect** code for this rule:

```js
x & x
(x + 3 - y) ^ ((x + 3) - y)
```

Examples of **correct** code for this rule:

```js
x & y
(x + 3 * y) ^ ((x + 3) * y)
```
