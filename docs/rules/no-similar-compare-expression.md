# no-similar-compare-expression

Catches if the two possible resulting values of a comparison expression, `x ? y : y`, are exactly the same. There may be an error or a typo or the expression can be reduced to not be a conditional.

## Rule Details

Examples of **incorrect** code for this rule:

```js
x ? y : y

x ? (y * 3 + 4) : ((y * 3) + 4)
```

Examples of **correct** code for this rule:

```js
x ? y : z

x ? (y + 3 * 4) : ((y + 3) * 4)
```
