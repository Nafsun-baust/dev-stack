# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.


#Dev-Stack
-react project where we add or remove different technology.we can also card remove all at a time.

## Technologi: 
react, typescript,tailwind,json

## feature:
add card,remove card,toast

## Question:
i. JSX allows write htlm-like code inside javascript.
react makes react ui.

ii.props pass the data from parent to child only.
state store and manage data inside component 

iii.useState stored and update data in component
I used it to store technologies

iv.useEffect hook run code after component render
I used it to fetch technology data

v.unique key identify each item and can update efficiently

vi.condition rendering shows diffenrent ui depend on condition
Ex:stack is empty when there is no item,if add then it add 

vii.data is pass from parent
use props and function

