# no-double-comparison

Catches when trying to compare a comparison, such as `3 > 2 > 1`. Some languages do support this and this makes mathematical sense. In JS, this is actually `(3 > 2) > 1` or `true > 1` which is `false`. The intended code probably should be `3 > 2 && 2 > 1`.

## Rule Details

Examples of **incorrect** code for this rule:

```js
x > y > z
3 < x != 5
```

Examples of **correct** code for this rule:

```js
x > y && y > z
3 < x && x != 5
```
