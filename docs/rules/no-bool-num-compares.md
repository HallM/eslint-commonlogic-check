# no-bool-num-compares

Catches if attempting to comparisons (`>`, `>=`, `<`, and `<=`) between a boolean to a number. Also catches attempting to test equality between a boolean literal and a literal that is not a boolean.

## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js
5 == true
x > false
false <= true
```

Examples of **correct** code for this rule:

```js
x < y
x != true
true == false
```
