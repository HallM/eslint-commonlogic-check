# no-identical-comparison-sides

Catches if both sides of a comparison are the same expression. This is probably an error or a typo. The result would always be true for equality checks and false for all other comparisons.

## Rule Details

Examples of **incorrect** code for this rule:

```js
x == x

(x * 3 + 4) != ((x * 3) + 4)
```

Examples of **correct** code for this rule:

```js
x == y

(x + 3 * 4) != ((x + 3) * 4)
```
