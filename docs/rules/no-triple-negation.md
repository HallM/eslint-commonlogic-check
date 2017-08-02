# no-triple-negation

Catches when using 3 or more negation operators. These operations can be simplified to 1 (for odd number of negations) or 2 (for even number of negations) negation operators and using more can lead to decreased readability and increased risk of typos.

## Rule Details

Examples of **incorrect** code for this rule:

```js
!!!x
!!!!!!!!x
```

Examples of **correct** code for this rule:

```js
!x
!!x
```
