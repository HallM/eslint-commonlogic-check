# eslint-plugin-checkbugs

Checks for common sources of bugs and logic errors

## Installation

You'll first need to install [ESLint](http://eslint.org) with NPM, Yarn, or your favorite package manager:

```
$ npm i eslint --save-dev
$ yarn add --dev eslint
```

Next, install `eslint-plugin-checkbugs`:

```
$ npm install eslint-plugin-checkbugs --save-dev
$ yarn add --dev eslint-plugin-checkbugs
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
        "checkbugs/rule-name": 2
    }
}
```

## Supported Rules

| Rule Name | Added in | Recommended |
| :-------- | :---------: | :---: |
| [no-backwards-assign-ops](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-backwards-assign-ops.md) | 0.0.1 | Warn |
| [no-bad-odd-checks](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-bad-odd-checks.md) | 0.0.1 | Error |
| [no-bool-math](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-bool-math.md) | 0.0.1 | Error |
| [no-bool-num-compares](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-bool-num-compares.md) | 0.0.1 | Error |
| [no-comma-in-indexing](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-comma-in-indexing.md) | 0.0.1 | Error |
| [no-double-comparison](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-double-comparison.md) | 0.0.1 | Error |
| [no-emptyexpr-choice-loop](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-emptyexpr-choice-loop.md) | 0.0.1 | Error |
| [no-identical-bitwise-sides](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-identical-bitwise-sides.md) | 0.0.1 | Error |
| [no-identical-comparison-sides](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-identical-comparison-sides.md) | 0.0.1 | Error |
| [no-identical-logical-sides](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-identical-logical-sides.md) | 0.0.1 | Error |
| [no-identical-math-sides](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-identical-math-sides.md) | 0.0.1 | Warn |
| [no-invalid-sharedlogic-part](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-invalid-sharedlogic-part.md) | 0.0.1 | Error |
| [no-modulo-one](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-modulo-one.md) | 0.0.1 | Warn |
| [no-modulo-then-multiply](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-modulo-then-multiply.md) | 0.0.1 | Warn |
| [no-overwritten-increment](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-overwritten-increment.md) | 0.0.1 | Error |
| [no-same-assignment](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-same-assignment.md) | 0.0.1 | Error |
| [no-same-if-else-blocks](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-same-if-else-blocks.md) | 0.0.1 | Warn |
| [no-same-if-elseif-condition](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-same-if-elseif-condition.md) | 0.0.1 | Error |
| [no-same-switchcase-blocks](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-same-switchcase-blocks.md) | 0.0.1 | Warn |
| [no-same-switchcase-condition](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-same-switchcase-condition.md) | 0.0.1 | Error |
| [no-similar-compare-expression](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-similar-compare-expression.md) | 0.0.1 | Error |
| [no-triple-negation](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-triple-negation.md) | 0.0.1 | Error |
| [no-ungrouped-bshift-add](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-ungrouped-bshift-add.md) | 0.0.1 | Warn |
| [no-useless-zeros](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-useless-zeros.md) | 0.0.1 | Warn |
