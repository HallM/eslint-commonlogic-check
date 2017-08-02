# no-bool-math

Catches if attempting to use a boolean or a comparison result with a math operator. This can be caused by typos, logic errors, missed operator precedence, or instances where `&` or `|` are used when `&&` or `||` were intended.

## Rule Details

Examples of **incorrect** code for this rule:

```js
x + true
true & y
```

Examples of **correct** code for this rule:

```js
x + y
true && y
```
