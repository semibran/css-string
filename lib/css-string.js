module.exports = function stringify (style) {
  let result = ''
  let prefix = ''
  for (const prop in style) {
    const value = style[prop]
    if (typeof value === 'object') {
      result += prop + '{' + stringify(value) + '}'
    } else {
      result += prefix + prop + ':' + value
      prefix = ';'
    }
  }
  return result
}
