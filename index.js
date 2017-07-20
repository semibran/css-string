module.exports = function stringify(style) {
  var result = ""
  for (var property in style) {
    var value = style[property]
    if (typeof value === "object") {
      result += property + "{" + stringify(value) + "}"
    } else {
      result += property + ":" + value + ";"
    }
  }
  return result
}
