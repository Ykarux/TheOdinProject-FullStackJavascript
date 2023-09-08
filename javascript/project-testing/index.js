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
	let result = ''
	for (let i = 0; i < string.length; i++) {
		if (letters.includes(string.charAt(i))) {
			const isCap = (string.charAt(i) === string.charAt(i).toUpperCase())
			const index = (letters.indexOf(string.charAt(i)) + key) % 26
			const letter = letters.charAt(index)
			result += isCap ? letter.toUpperCase() : letter
		} else {
			result += string.charAt(i)
		}
	}
	return result
}

function analyseArray(arr) {
	const min = Math.min(...arr)
	const max = Math.max(...arr)
	const avg = arr.reduce((a, b) => a + b, 0) / arr.length
	const length = arr.length
	return {
		min,
		max,
		avg,
		length
	}
}

module.exports = {capitalize, reverseString, calculator, caesarCipher, analyseArray}