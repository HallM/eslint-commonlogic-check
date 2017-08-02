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

[sdf](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/    .md)

| Rule Name | Added in | Recommended |
| :-------- | :---------: | :---: |
| [no-backwards-assign-ops](no-https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/backwards-assign-ops.md) | 0.0.1 | Warn |
| [no-bad-odd-checks](no-https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/bad-odd-checks.md) | 0.0.1 | Error |
| [no-bool-math](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-bool-math.md) | 0.0.1 | Error |
| [no-bool-num-compares](no-https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/bool-num-compares.md) | 0.0.1 | Error |
| [no-comma-in-indexing](no-https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/comma-in-indexing.md) | 0.0.1 | Error |
| [no-double-comparison](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-double-comparison.md) | 0.0.1 | Error |
| [no-emptyexpr-choice-loop](no-https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/emptyexpr-choice-loop.md) | 0.0.1 | Error |
| [no-identical-bitwise-sides](no-https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/identical-bitwise-sides.md) | 0.0.1 | Error |
| [no-identical-comparison-sides](no-https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/identical-comparison-sides.md) | 0.0.1 | Error |
| [no-identical-logical-sides](no-https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/identical-logical-sides.md) | 0.0.1 | Error |
| [no-identical-math-sides](no-https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/identical-math-sides.md) | 0.0.1 | Warn |
| [no-invalid-sharedlogic-part](no-https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/invalid-sharedlogic-part.md) | 0.0.1 | Error |
| [no-modulo-one](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-modulo-one.md) | 0.0.1 | Warn |
| [no-modulo-then-multiply](no-https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/modulo-then-multiply.md) | 0.0.1 | Warn |
| [no-overwritten-increment](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-overwritten-increment.md) | 0.0.1 | Error |
| [no-same-assignment](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-same-assignment.md) | 0.0.1 | Error |
| [no-same-if-else-blocks](no-same-https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/if-else-blocks.md) | 0.0.1 | Warn |
| [no-same-if-elseif-condition](no-same-https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/if-elseif-condition.md) | 0.0.1 | Error |
| [no-same-switchcase-blocks](no-https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/same-switchcase-blocks.md) | 0.0.1 | Warn |
| [no-same-switchcase-condition](no-https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/same-switchcase-condition.md) | 0.0.1 | Error |
| [no-similar-compare-expression](no-https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/similar-compare-expression.md) | 0.0.1 | Error |
| [no-triple-negation](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-triple-negation.md) | 0.0.1 | Error |
| [no-ungrouped-bshift-add](no-https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/ungrouped-bshift-add.md) | 0.0.1 | Warn |
| [no-useless-zeros](https://github.com/HallM/eslint-plugin-checkbugs/blob/master/docs/rules/no-useless-zeros.md) | 0.0.1 | Warn |
