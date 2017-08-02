# no-same-assignment

Catches if attempting to assign a value to itself, such as `x = x`. This may be a typo or an error as the operation has no effect.

## Rule Details

Examples of **incorrect** code for this rule:

```js
x = x

y[3 * x] = y[3 * x]
```

Examples of **correct** code for this rule:

```js
x = z

y[3 * x] = y[2 * x]
```
