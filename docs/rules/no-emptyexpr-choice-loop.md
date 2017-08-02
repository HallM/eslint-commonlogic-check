# no-emptyexpr-choice-loop

Catches semicolons after if/elseif/else and loops like while and for. `if (x); {}` will always run the block and probably is not the intended behavior. If this was, just use an empty block, `{}`, with any comment inside to pass the empty blocks check.

## Rule Details

Examples of **incorrect** code for this rule:

```js
if (x);

while (x); {
}
```

Examples of **correct** code for this rule:

```js
if (x) {}

while (x) {
}
```
