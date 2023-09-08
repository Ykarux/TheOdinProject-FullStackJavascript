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

module.exports = {capitalize, reverseString, calculator}