# no-modulo-then-multiply

Catches when multiplying a number by the result of a modulo, such as `x % y * z`. This is commonly mistaken as `x % (y * z)`, but is really `(x % y) * z`. Use parenthesis to manually group and clarify the intention.

## Rule Details

Examples of **incorrect** code for this rule:

```js
x % y * z
```

Examples of **correct** code for this rule:

```js
(x % y) * z

x % (y * z)
```
