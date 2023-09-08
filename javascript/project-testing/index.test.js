const {capitalize, reverseString, calculator} = require('./index')

test('capitalize', () => {
	expect(capitalize('string')).toMatch('String')
})

