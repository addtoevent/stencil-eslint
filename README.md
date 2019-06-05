# eslint-plugin-stencil

ESLint rules specific to Stencil JS projects.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-stencil`:

```
$ npm install eslint-plugin-stencil --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-stencil` globally.

## Usage

Add `stencil` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "stencil"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "stencil/no-global-html-attribute-prop-names": "error"
    }
}
```

Or alternatively extend the Stencil recommended ruleset:

```
{
    "extends": {
        "plugin:stencil/recommended"
    }
}
```

## Supported Rules

- `no-global-html-attribute-prop-names`

This rule catches Stencil Prop names that share names of [Global HTML Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes).




