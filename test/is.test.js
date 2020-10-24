const assert = require('assert')
const type = require('../src/type')

test('is array', () => {
	assert.strictEqual(type.is.array([]), true)
})

test('is regexp', () => {
	assert.strictEqual(type.is.regexp(/a-z/gi), true)
	assert.strictEqual(type.is.regexp(new RegExp('a-z')), true)
})

test('is function', () => {
	assert.strictEqual(
		type.is.function(function () {}),
		true
	)
	assert.strictEqual(
		type.is.function(() => {}),
		true
	)
})

test('is arguments', () => {
	assert.strictEqual(type.is.arguments(arguments), true)
})

test('is date', () => {
	assert.strictEqual(type.is.date(new Date()), true)
})

test('is number', () => {
	assert.strictEqual(type.is.number(1), true)
	assert.strictEqual(type.is.number(1.1234), true)
	assert.strictEqual(type.is.number(-1), true)
	assert.strictEqual(type.is.number(-1.1234), true)
	assert.strictEqual(type.is.number(Infinity), true)
	assert.strictEqual(type.is.number(NaN), false)
	assert.strictEqual(type.is.number(new Number(1)), true)
})

test('is NaN', () => {
	assert.strictEqual(type.is.NaN(NaN), true)
	assert.strictEqual(type.is.NaN(1), false)
	assert.strictEqual(type.is.NaN(1.1234), false)
	assert.strictEqual(type.is.NaN(-1), false)
	assert.strictEqual(type.is.NaN(-1.1234), false)
	assert.strictEqual(type.is.NaN(Infinity), false)
	assert.strictEqual(type.is.NaN(new Number(1)), false)
})

test('is string', () => {
	assert.strictEqual(type.is.string('hello world'), true)
	assert.strictEqual(type.is.string(new String('hello')), true)
})

test('is null', () => {
	assert.strictEqual(type.is.null(null), true)
	assert.strictEqual(type.is.null(undefined), false)
})

test('is undefined', () => {
	assert.strictEqual(type.is.undefined(undefined), true)
	assert.strictEqual(type.is.undefined(null), false)
})

test('is object', () => {
	assert.strictEqual(type.is.object({}), true)
	assert.strictEqual(type.is.object(new Object()), true)
})

test('is map', () => {
	assert.strictEqual(type.is.map(new Map()), true)
})

test('is set', () => {
	assert.strictEqual(type.is.set(new Set()), true)
})

test('is promise', () => {
	assert.strictEqual(type.is.promise(new Promise(() => {})), true)
})
