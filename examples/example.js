const type = require('../index')

console.log(type.typeOf('hello world'))
console.log(type.typeOf({}))
console.log(type.typeOf([]))
console.log(type.is.string('123'))
console.log(type.is.string(1))
console.log(type.isNot.string(1))
