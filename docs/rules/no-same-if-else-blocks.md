# no-same-if-else-blocks

Catches when If, ElseIf, or Else statements execute the same block of statements. This may be an error or could be simplified.

## Rule Details

Examples of **incorrect** code for this rule:

```js
if (x) {
  z = x * 3;
} else {
  z = x * 3;
}
```

Examples of **correct** code for this rule:

```js
if (x) {
  z = x * 3;
} else {
  z = y * 3;
}
```
