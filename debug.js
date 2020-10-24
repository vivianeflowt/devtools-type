const type = require('./index')

const isNaN = (value) => {
	return typedetect(value).toLowerCase()
}

const valor1 = NaN // NaN
const valor2 = 1 // Numero

console.log(type.typeOf(valor1))

console.log(type.is.NaN(1))
console.log(type.isNot.NaN(1))
