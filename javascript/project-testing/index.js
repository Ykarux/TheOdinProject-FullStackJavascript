function capitalize(string) {
	return string.slice(0, 1).toUpperCase() + string.slice(1)
}

function reverseString(string) {
	return string.split('').reverse().join('')
}

const calculator = {
	add(a, b) {
		return a + b;
	},
	sub(a, b) {
		return a - b;
	},
	mul(a, b) {
		return a * b;
	},
	div(a, b) {
		return a / b;
	},
}

function caesarCipher(string, key) {
	const letters = 'abcdefghijklmnopqrstuvwxyz'
	const result = ''
	for (let i = 0; i < string.length; i++) {
		if (letters.includes(string.charAt(i))) {
			const isCap = (string.charAt(i) === string.charAt(i).toUpperCase())
			const letter = letters.charAt((letters.indexOf(string.charAt(i)) + key) % 26)
			result += isCap ? letter.toUpperCase() : letter
		}
	}
	return result
}

module.exports = {capitalize, reverseString, calculator, caesarCipher}