# css-string
> Create CSS-compatible strings from object trees

```js
const stringify = require("css-string")

var style = document.createElement("style")
document.head.appendChild(style)
style.innerText = stringify({
  body: {
    display: "flex",
    height: "100%"
  }
})
```

This package exposes the `stringify` function, which creates CSS-compatible strings from object trees. The resulting strings can be used directly in dynamic stylesheets as well as [`HTMLElement.style`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style).

## usage
[![NPM](https://nodei.co/npm/css-string.png?mini)](https://www.npmjs.com/package/css-string)
```js
> stringify({ color: "red" })
"color:red;"
```

Use strings to represent complex selectors, property names, and values.
```js
> stringify({
    "*": {
      "margin": 0,
      "padding": 0,
      "box-sizing": "border-box"
    }
  })
"*{margin:0;padding:0;box-sizing:border-box;}"
```

If a declaration has an object as its value, it will be treated as a rule with a selector and declarations.
```js
> stringify({
    nav: {
      display: "flex",
      a: {
        color: "inherit"
      }
    }
  })
"nav{display:flex;a{color:inherit;}}"
```

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
