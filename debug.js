const type = require('./index')

const isNaN = (value) => {
	return typedetect(value).toLowerCase()
}

const valor1 = NaN // NaN
const valor2 = 1 // Numero
const valor3 = Infinity // Numero

console.log(type.typeOf(valor3))

console.log(typeof valor3)
