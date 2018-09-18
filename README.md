# json-import

a test of how we can import JSON in september 2018.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [requirements](#requirements)
- [start](#start)
- [tested](#tested)
  - [fetch](#fetch)
  - [import](#import)
  - [using a bundler (parcel in this case)](#using-a-bundler-parcel-in-this-case)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## requirements

- [node](http://nodejs.org/download/) >= 8.12.0
- [yarn](https://yarnpkg.com/lang/en/) >= 1.9.4

## start

```
yarn install
yarn start
```

server will be listening on http://127.0.0.1:8080

## tested

### [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

- Present in all browsers > IE11. See [caniuse](https://caniuse.com/#search=fetch)
- Replacement of XMLHttpRequest.
- Can use a [unfetch polyfill](https://github.com/developit/unfetch)

```js
fetch('/data.json')
  .then(response => response.json())
  .then(json => console.log(json))
```

### [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

- Present in all browsers > IE11. See [caniuse](https://caniuse.com/#search=module)
- Can't import JSON file
- Have to add the `type="module"` attribute on the script tag
- No [real polyfill](https://github.com/ModuleLoader/browser-es-module-loader)

```js
import json from '/data.js'
console.log(json)
```

### using a bundler ([parcel](https://parceljs.org/) in this case)

- Work in all browsers
- Can import json
- Add a build step

```js
import json from '../public/data.json'
console.log(json)
```
