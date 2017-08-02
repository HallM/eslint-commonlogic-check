# no-comma-in-indexing

Catches when using a comma between expressions in an indexing operator, such as `myArray[,]`. Some languages do use commas for multidimensional arrays, but JS is not one. These are generally an error and should be changes to the proper multi-dimensional array format `myArray[][]`.

## Rule Details

Examples of **incorrect** code for this rule:

```js
myArray[row, col]
```

Examples of **correct** code for this rule:

```js
myArray[row][col]
```
