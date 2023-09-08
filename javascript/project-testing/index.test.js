const {capitalize, reverseString, calculator} = require('./index')

test('capitalize', () => {
	expect(capitalize('string')).toMatch('String')
})

test('reverseString', () => {
	expect(reverseString('string')).toMatch('gnirts')
})

test('calculator', () => {
	expect(calculator.add(1, 2)).toEqual(3)
	expect(calculator.sub(3, 2)).toEqual(1)
	expect(calculator.mul(2, 3)).toEqual(6)
	expect(calculator.div(5, 2)).toBeCloseTo(2.5)
})