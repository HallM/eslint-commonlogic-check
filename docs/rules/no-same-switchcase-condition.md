# no-same-switchcase-condition

Catches when more than one switch case has the exact same condition. The second case will never execute as teh condition is caught by the first case. This is more than likely an error.

## Rule Details

Examples of **incorrect** code for this rule:

```js
switch (x) {
  case 1:
    break;
  case 2:
    break;
  case 1:
    break;
}
```

Examples of **correct** code for this rule:

```js
switch (x) {
  case 1:
    break;
  case 2:
    break;
  case 3:
    break;
}
```
