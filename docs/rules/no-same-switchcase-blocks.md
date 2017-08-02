# no-same-switchcase-blocks

Catches if two switch cases have the exact same set of statements, ignoring fall throughs. The two cases may be able to be joined. This may not necessarily be an error, just a suggestion.

## Rule Details

Examples of **incorrect** code for this rule:

```js
switch (x) {
  case 1:
    x = y * 3 + 4;
    break;
  case 2:
    x = (y * 3) + 4;
    break;
}
```

Examples of **correct** code for this rule:

```js
switch (x) {
  case 1:
  case 2:
    x = (y * 3) + 4;
    break;
}

switch (x) {
  case 1:
    x = y + 3 * 4;
    break;
  case 2:
    x = (y + 3) * 4;
    break;
}
```
