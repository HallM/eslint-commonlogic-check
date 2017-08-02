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

## Included rules built-in to ESLint

| Rule Name | Options | Added in |
| :-------- | :------ | :------: |
| [no-compare-neg-zero](http://eslint.org/docs/rules/no-compare-neg-zero) | | 0.0.1 |
| [no-cond-assign](http://eslint.org/docs/rules/no-cond-assign) | | 0.0.1 |
| [no-constant-condition](http://eslint.org/docs/rules/no-constant-condition) | | 0.0.1 |
| [no-control-regex](http://eslint.org/docs/rules/no-control-regex) | | 0.0.1 |
| [no-dup-args](http://eslint.org/docs/rules/no-dup-args) | | 0.0.1 |
| [no-dup-keys](http://eslint.org/docs/rules/no-dup-keys) | | 0.0.1 |
| [no-empty](http://eslint.org/docs/rules/no-empty) | | 0.0.1 |
| [no-empty-character-class](http://eslint.org/docs/rules/no-empty-character-class) | | 0.0.1 |
| [no-ex-assign](http://eslint.org/docs/rules/no-ex-assign) | | 0.0.1 |
| [no-extra-boolean-cast](http://eslint.org/docs/rules/no-extra-boolean-cast) | | 0.0.1 |
| [curly](http://eslint.org/docs/rules/curly) | | 0.0.1 |
| [no-func-assign](http://eslint.org/docs/rules/no-func-assign) | | 0.0.1 |
| [no-inner-declarations](http://eslint.org/docs/rules/no-inner-declarations) | | 0.0.1 |
| [no-invalid-regexp](http://eslint.org/docs/rules/no-invalid-regexp) | | 0.0.1 |
| [no-irregular-whitespace](http://eslint.org/docs/rules/no-irregular-whitespace) | | 0.0.1 |
| [no-obj-calls](http://eslint.org/docs/rules/no-obj-calls) | | 0.0.1 |
| [no-regex-spaces](http://eslint.org/docs/rules/no-regex-spaces) | | 0.0.1 |
| [no-sparse-arrays](http://eslint.org/docs/rules/no-sparse-arrays) | | 0.0.1 |
| [no-unexpected-multiline](http://eslint.org/docs/rules/no-unexpected-multiline) | | 0.0.1 |
| [no-unreachable](http://eslint.org/docs/rules/no-unreachable) | | 0.0.1 |
| [no-unsafe-finally](http://eslint.org/docs/rules/no-unsafe-finally) | | 0.0.1 |
| [no-unsafe-negation](http://eslint.org/docs/rules/no-unsafe-negation) | | 0.0.1 |
| [use-isnan](http://eslint.org/docs/rules/use-isnan) | | 0.0.1 |
| [valid-typeof](http://eslint.org/docs/rules/valid-typeof) | | 0.0.1 |
| [array-callback-return](http://eslint.org/docs/rules/array-callback-return) | | 0.0.1 |
| [block-scoped-var](http://eslint.org/docs/rules/block-scoped-var) | | 0.0.1 |
| [no-case-declarations](http://eslint.org/docs/rules/no-case-declarations) | | 0.0.1 |
| [no-empty-pattern](http://eslint.org/docs/rules/no-empty-pattern) | | 0.0.1 |
| [no-global-assign](http://eslint.org/docs/rules/no-global-assign) | | 0.0.1 |
| [no-new-wrappers](http://eslint.org/docs/rules/no-new-wrappers) | | 0.0.1 |
| [no-octal](http://eslint.org/docs/rules/no-octal) | | 0.0.1 |
| [no-redeclare](http://eslint.org/docs/rules/no-redeclare) | | 0.0.1 |
| [no-unused-expressions](http://eslint.org/docs/rules/no-unused-expressions) | `{allowShortCircuit: true}` | 0.0.1 |
| [no-unmodified-loop-condition](http://eslint.org/docs/rules/no-unmodified-loop-condition) | | 0.0.1 |
| [no-unused-labels](http://eslint.org/docs/rules/no-unused-labels) | | 0.0.1 |
| [no-useless-concat](http://eslint.org/docs/rules/no-useless-concat) | | 0.0.1 |
| [no-useless-escape](http://eslint.org/docs/rules/no-useless-escape) | | 0.0.1 |
| [no-delete-var](http://eslint.org/docs/rules/no-delete-var) | | 0.0.1 |
| [no-shadow-restricted-names](http://eslint.org/docs/rules/no-shadow-restricted-names) | | 0.0.1 |
| [no-undef](http://eslint.org/docs/rules/no-undef) | | 0.0.1 |
| [no-unused-vars](http://eslint.org/docs/rules/no-unused-vars) | | 0.0.1 |
| [no-use-before-define](http://eslint.org/docs/rules/no-use-before-define) | `{functions: false, classes: false}` | 0.0.1 |
| [constructor-super](http://eslint.org/docs/rules/constructor-super) | | 0.0.1 |
| [no-class-assign](http://eslint.org/docs/rules/no-class-assign) | | 0.0.1 |
| [no-confusing-arrow](http://eslint.org/docs/rules/no-confusing-arrow) | | 0.0.1 |
| [no-const-assign](http://eslint.org/docs/rules/no-const-assign) | | 0.0.1 |
| [no-dupe-class-members](http://eslint.org/docs/rules/no-dupe-class-members) | | 0.0.1 |
| [no-duplicate-imports](http://eslint.org/docs/rules/no-duplicate-imports) | | 0.0.1 |
| [no-new-symbol](http://eslint.org/docs/rules/no-new-symbol) | | 0.0.1 |
| [no-this-before-super](http://eslint.org/docs/rules/no-this-before-super) | | 0.0.1 |
| [no-useless-computed-key](http://eslint.org/docs/rules/no-useless-computed-key) | | 0.0.1 |

