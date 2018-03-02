# css-string
> create CSS-compatible strings from object trees

```js
let style = document.createElement("style")
document.head.appendChild(style)
style.innerText = stringify({
  body: {
    display: "flex",
    height: "100%"
  }
})
```

This package exposes the `stringify` function, which creates CSS-compatible strings from object trees. The resulting strings can be used directly in dynamic stylesheets as well as [`HTMLElement.style`][HTMLElement.style].

## usage
[![npm badge]][npm package]

```js
> stringify({ color: "red" })
"color:red"
```

Use strings as keys to represent complex selectors, property names, and values.

```js
> stringify({
    "*": {
      "margin": 0,
      "padding": 0,
      "box-sizing": "border-box"
    }
  })
"*{margin:0;padding:0;box-sizing:border-box}"
```

If a declaration has an object as its value, it will be treated as a rule with its own selector and declarations.

```js
> stringify({
    nav: {
      display: "flex",
      a: {
        color: "inherit"
      }
    }
  })
"nav{display:flex;a{color:inherit}}"
```

[npm package]:       https://www.npmjs.com/package/css-string
[npm badge]:         https://nodei.co/npm/css-string.png?mini
[HTMLElement.style]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
