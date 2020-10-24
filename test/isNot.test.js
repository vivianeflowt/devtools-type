const assert = require('assert')
const type = require('../src/type')

test('is not array', () => {
	assert.strictEqual(type.isNot.array([]), false)
})

test('is not regexp', () => {
	assert.strictEqual(type.isNot.regexp(/a-z/gi), false)
	assert.strictEqual(type.isNot.regexp(new RegExp('a-z')), false)
})

test('is not function', () => {
	assert.strictEqual(
		type.isNot.function(function () {}),
		false
	)
	assert.strictEqual(
		type.isNot.function(() => {}),
		false
	)
})

test('is not arguments', () => {
	assert.strictEqual(type.isNot.arguments(arguments), false)
})

test('is not date', () => {
	assert.strictEqual(type.isNot.date(new Date()), false)
})

test('is not number', () => {
	assert.strictEqual(type.isNot.number(1), false)
	assert.strictEqual(type.isNot.number(1.1234), false)
	assert.strictEqual(type.isNot.number(-1), false)
	assert.strictEqual(type.isNot.number(-1.1234), false)
	assert.strictEqual(type.isNot.number(Infinity), true)
	assert.strictEqual(type.isNot.number(NaN), true)
	assert.strictEqual(type.isNot.number(new Number(1)), false)
})

test('is not NaN', () => {
	assert.strictEqual(type.isNot.NaN(NaN), false)
	assert.strictEqual(type.isNot.NaN(1), true)
	assert.strictEqual(type.isNot.NaN(1), true)
	assert.strictEqual(type.isNot.NaN(1.1234), true)
	assert.strictEqual(type.isNot.NaN(-1), true)
	assert.strictEqual(type.isNot.NaN(-1.1234), true)
	assert.strictEqual(type.isNot.NaN(Infinity), true)
	assert.strictEqual(type.isNot.NaN(new Number(1)), true)
})

test('is not Infinity', () => {
	assert.strictEqual(type.isNot.Infinity(Infinity), false)
	assert.strictEqual(type.isNot.Infinity(NaN), true)
	assert.strictEqual(type.isNot.Infinity(1), true)
	assert.strictEqual(type.isNot.Infinity(1.1234), true)
	assert.strictEqual(type.isNot.Infinity(-1), true)
	assert.strictEqual(type.isNot.Infinity(-1.1234), true)
	assert.strictEqual(type.isNot.Infinity(new Number(1)), true)
})

test('is not string', () => {
	assert.strictEqual(type.isNot.string('hello world'), false)
	assert.strictEqual(type.isNot.string(new String('hello')), false)
})

test('is not null', () => {
	assert.strictEqual(type.isNot.null(null), false)
})

test('is not undefined', () => {
	assert.strictEqual(type.isNot.undefined(undefined), false)
})

test('is not object', () => {
	assert.strictEqual(type.isNot.object({}), false)
	assert.strictEqual(type.isNot.object(new Object()), false)
})

test('is not map', () => {
	assert.strictEqual(type.isNot.map(new Map()), false)
})

test('is not set', () => {
	assert.strictEqual(type.isNot.set(new Set()), false)
})

test('is not promise', () => {
	assert.strictEqual(type.isNot.promise(new Promise(() => {})), false)
})
