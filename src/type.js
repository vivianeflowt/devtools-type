'use strict'

const typedetect = require('./typedetect')

const typeOf = (value) => {
	if (Number.isNaN(value)) {
		return 'NaN'
	}
	if (value === Infinity) {
		return 'Infinity'
	}
	return typedetect(value).toLowerCase()
}



const is = {
	string: (value) => typeOf(value) === 'string',
	number: (value) => typeOf(value) === 'number',
	NaN: (value) => typeOf(value) === 'NaN',
	Infinity: (value) => typeOf(value) === 'Infinity',
	object: (value) => typeOf(value) === 'object',
	array: (value) => typeOf(value) === 'array',
	function: (value) => typeOf(value) === 'function',
	arguments: (value) => typeOf(value) === 'arguments',
	date: (value) => typeOf(value) === 'date',
	regexp: (value) => typeOf(value) === 'regexp',
	null: (value) => typeOf(value) === 'null',
	undefined: (value) => typeOf(value) === 'undefined',
	map: (value) => typeOf(value) === 'map',
	set: (value) => typeOf(value) === 'set',
	promise: (value) => typeOf(value) === 'promise',
}

const isNot = {
	string: (value) => typeOf(value) !== 'string',
	number: (value) => typeOf(value) !== 'number',
	NaN: (value) => typeOf(value) !== 'NaN',
	Infinity: (value) => typeOf(value) !== 'Infinity',
	object: (value) => typeOf(value) !== 'object',
	array: (value) => typeOf(value) !== 'array',
	function: (value) => typeOf(value) !== 'function',
	arguments: (value) => typeOf(value) !== 'arguments',
	date: (value) => typeOf(value) !== 'date',
	regexp: (value) => typeOf(value) !== 'regexp',
	null: (value) => typeOf(value) !== 'null',
	undefined: (value) => typeOf(value) !== 'undefined',
	map: (value) => typeOf(value) !== 'map',
	set: (value) => typeOf(value) !== 'set',
	promise: (value) => typeOf(value) !== 'promise',
}

module.exports = {
	is,
	isNot,
	typeOf,
}
