# no-overwritten-increment

Catches when the result of a post-increment or post-decrement would be overwritten with an assignment. This checks if an assignment of something contains the post-increment or post-decrement of itself. The most basic example is `x = x++` in which `x` will retain the value and not increment.

## Rule Details

Examples of **incorrect** code for this rule:

```js
x = x++;

y = y-- + 4;
```

Examples of **correct** code for this rule:

```js
x = ++x;

x = y++;

y = y - 1 + 4;
```
