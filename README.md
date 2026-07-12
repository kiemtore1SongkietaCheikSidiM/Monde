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
 
 For the country Call API I use to create my account in (https://restcountries.com/) and take a key where I use to make this


 I use this https://openweathermap.org/api/one-call-4?collection=one_call_api for the wheather API I have created an account then I get an API key for Authentification. I use it for free


 After that I start by making a search on (https://www.youtube.com/). On Search input I pyped exchangerateApi react and I find 
 that videos (https://www.youtube.com/watch?v=m0FI4clFD2Y). According to him I use to get an API key on
 (https://www.exchangerate-api.com/) And make the the rest of activities about that.


 for Timezone I use https://timeapi.io/api/Time/current/zone?timeZone