const type = require('../index')

console.log(type.is.string('aaaa'))
console.log(type.is.string(1))
console.log(type.isNot.string(1))
