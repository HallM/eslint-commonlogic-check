# eslint-plugin-checkbugs

Checks for common sources of bugs and logic errors

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-checkbugs`:

```
$ npm install eslint-plugin-checkbugs --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-checkbugs` globally.

## Usage

Add `checkbugs` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "checkbugs"
    ]
}
```


Then you may extend from presets and/or configure the individual rules you want to use under the rules section.

```json
{
    "extends": [
        "eslint:recommended",
        "plugin:checkbugs/recommended"
    ]
}
```

```json
{
    "rules": {
        "common-bug-checks/rule-name": 2
    }
}
```

## Supported Rules

| Rule Name | Description | Level in Recommended |
| :-------- | :---------- | :---: |
| no-backwards-assign-ops | Catches potential typos `x =+ y` and `x =- y`. If the intended behavior is `x = -y`, then have a space between the = and `+`/`-`. | Warn |
| no-bad-odd-checks | Catches if using `x % 2 === 1` to check for odd. This type of check fails when x is negative as `-1 % 2 === -1`. Recommends to use `x % 2 !== 0` for checking if a value is odd. | Error |
| no-bool-math | Catches if attempting to use a boolean or a comparison result with a math operator. This can be caused by typos, logic errors, missed operator precedence, or instances where `&` or `\|` are used when `&&` or `\|\|` were intended.  | Error |
| no-bool-num-compares | Catches if attempting to comparisons (`>`, `>=`, `<`, and `<=`) between a boolean to a number. Also catches attempting to test equality between a boolean literal and a literal that is not a boolean. | Error |
| no-comma-in-indexing | Catches when using a comma between expressions in an indexing operator, such as `myArray[,]`. Some languages do use commas for multidimensional arrays, but JS is not one. These are generally an error and should be changes to the proper multi-dimensional array format `myArray[][]`. | Error |
| no-double-comparison | Catches when trying to compare a comparison, such as `3 > 2 > 1`. Some languages do support this and this makes mathematical sense. In JS, this is actually `(3 > 2) > 1` or `true > 1` which is `false`. The intended code probably should be `3 > 2 && 2 > 1`. | Error |
| no-emptyexpr-choice-loop | Catches semicolons after if/elseif/else and loops like while and for. `if (x); {}` will always run the block and probably is not the intended behavior. If this was, just use an empty block, `{}`, with any comment inside to pass the empty blocks check. | Error |
| no-identical-bitwise-sides | Catches if both sides of a bitwise operator are the same expression. These are generally a typo, a logic error, or the bitwise expression can be reduced. | Error |
| no-identical-comparison-sides | Catches if both sides of a comparison are the same expression. This is probably an error or a typo. The result would always be true for equality checks and false for all other comparisons. | Error |
| no-identical-logical-sides | Catches if both sides of a `&&` or `\|\|` are the same expression. This is probably an error or a typo. | Error |
| no-identical-math-sides | Catches if both sides of a math operator (`-`, `*`, `%`, `/`, but not `+`) are the same expression. This may be an error as the expression could be simplified. | Warn |
| no-invalid-sharedlogic-part | Catches logical expressions with patterns of shared expressions, such as `A \|\| (A && B)`, `(A && B) \|\| A`, `A \|\| (B && A)`, `(B && A) \|\| A`, which may be a logic error or typo. All four patterns can be simplified and may not operate how intended as some parts may never execute. | Error |
| no-modulo-one | Modulo by 1 always returns 0. This may be a typo or a logic issue. | Warn |
| no-modulo-then-multiply | Catches when multiplying a number by the result of a modulo, such as `x % y * z`. This is commonly mistaken as `x % (y * z)`, but is really `(x % y) * z`. Use parenthesis to manually group and clarify the intention. | Warn |
| no-overwritten-increment | Catches when the result of a post-increment or post-decrement would be overwritten with an assignment. This checks if an assignment of something contains the post-increment or post-decrement of itself. The most basic example is `x = x++` in which `x` will retain the value and not increment. | Error |
| no-same-assignment | Catches if attempting to assign a value to itself, such as `x = x`. This may be a typo or an error as the operation has no effect. | Error |
| no-same-if-else-blocks | Catches when If, ElseIf, or Else statements execute the same block of statements. This may be an error or could be simplified. | Warn |
| no-same-if-elseif-condition | Catches when If or ElseIf conditions are the exact same expression. The second test will never execute as the condition is caught by the first one. This is more than likely an error. | Error |
| no-same-switchcase-blocks | Catches if two switch cases have the exact same set of statements, ignoring fall throughs. The two cases may be able to be joined. This may not necessarily be an error, just a suggestion. | Warn |
| no-same-switchcase-condition | Catches when more than one switch case has the exact same condition. The second case will never execute as teh condition is caught by the first case. This is more than likely an error. | Error |
| no-similar-compare-expression | Catches if the two possible resulting values of a comparison expression, `x ? y : y`, are exactly the same. There may be an error or a typo or the expression can be reduced to not be a conditional. | Error |
| no-triple-negation | Catches when using 3 or more negation operators. These operations can be simplified to 1 (for odd number of negations) or 2 (for even number of negations) negation operators and using more can lead to decreased readability and increased risk of typos. | Error |
| no-ungrouped-bshift-add | Catches the pattern of adding to a bitshift, such as `x << y + 3`. This is a common source of bugs as the statement is executed as `x << (y + 3)`. Suggests using parenthesis to clarify the intended behavior. | Warn |
| no-useless-zeros | Catches when using 0 in math expressions which can easily be reduced. These may possibly be an error or a typo. | Warn |
