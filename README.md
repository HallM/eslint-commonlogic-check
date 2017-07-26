# eslint-plugin-common-bug-checks

Checks for common sources of bugs and logic errors

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-common-bug-checks`:

```
$ npm install eslint-plugin-common-bug-checks --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-common-bug-checks` globally.

## Usage

Add `common-bug-checks` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "common-bug-checks"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "common-bug-checks/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





