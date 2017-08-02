# no-useless-zeros

Catches when using 0 in math expressions which can easily be reduced. These may possibly be an error or a typo.

For example:
```
x + 0 is always x
x / 0 is always NaN
0 - x is always -x
x & 0 is always 0
```

## Rule Details

Examples of **incorrect** code for this rule:

```js
x + 0
x / 0
0 - x
0 * x
x & 0
0 | x
```

Examples of **correct** code for this rule:

```js
x + 5
x / 5
5 - x
5 * x
x & 5
5 | x
```
