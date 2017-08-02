# no-identical-logical-sides

Catches if both sides of a `&&` or `||` are the same expression. This is probably an error or a typo.

## Rule Details

Examples of **incorrect** code for this rule:

```js
x && x

(x == 4 * 3) || (x == (4 * 3))
```

Examples of **correct** code for this rule:

```js
x && x

(x == 4 + 3) || (x == (4 * 3))
```
