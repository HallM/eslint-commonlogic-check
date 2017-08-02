# no-identical-math-sides

Catches if both sides of a math operator (`-`, `%`, `/`, but not `+` nor `*`) are the same expression. This may be an error as the expression could be simplified.

## Rule Details

Examples of **incorrect** code for this rule:

```js
x - x

(x + z - 3) / (x + z - 3)
```

Examples of **correct** code for this rule:

```js
x + x
x * x

x - y

(x + z) / (x - 3)
```
