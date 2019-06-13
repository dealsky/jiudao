// 去除字符串的前缀0
function removePrefixZero(str) {
  return str.replace(/\b(0+)/gi, '')
}

export {
  removePrefixZero
}