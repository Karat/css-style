# css-style

Shareable stylelint config

## Install

```
yarn add --dev ssh://git@github.com:Karat/css-style.git
yarn add --dev stylelint
```

## Use

Extend in your project [stylelint config](https://stylelint.io/user-guide/configuration/):


```
// .stylelintrc.js
module.exports = {
  extends: ['css-style']
}
```

## Run

```
yarn run stylelint "app/**/*.scss"
```

- With [autofix option](https://stylelint.io/user-guide/cli/#autofixing-errors): `yarn run stylelint "app/**/*.scss" --fix`

- You can find editor plugins for [Atom](https://atom.io/packages/linter-stylelint), [VS Code](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint), etc.
