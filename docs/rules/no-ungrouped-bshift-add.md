# no-ungrouped-bshift-add

Catches the pattern of adding to a bitshift, such as `x << y + 3`. This is a common source of bugs as the statement is executed as `x << (y + 3)`. Suggests using parenthesis to clarify the intended behavior.

## Rule Details

Examples of **incorrect** code for this rule:

```js
x << y + 3
x >> 5 - 3
```

Examples of **correct** code for this rule:

```js
(x << y) + 3
x >> (5 - 3)
```
