# no-same-if-elseif-condition

Catches when If or ElseIf conditions are the exact same expression. The second test will never execute as the condition is caught by the first one. This is more than likely an error.

## Rule Details

Examples of **incorrect** code for this rule:

```js
if (x) {
} else if (y) {
} else if (x) {
}

if (x * 3 + 4) {
} else if ((x * 3) + 4) {
}
```

Examples of **correct** code for this rule:

```js
if (x) {
} else if (y) {
} else if (z) {
}

if (x + 3 * 4) {
} else if ((x + 3) * 4) {
}
```
