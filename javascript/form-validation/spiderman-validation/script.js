const email = document.getElementById('email')
const emailError = document.querySelector('#email + span')

const country = document.getElementById('country')
const countryError = document.querySelector('#country + span')

const zcode = document.getElementById('zcode')
const zcodeError = document.querySelector('#zcode + span')

const password = document.getElementById('pwd')
const passwordError = document.querySelector('#pwd + span')

const passwordConfirmation = document.getElementById('pwdC')
const passwordConfirmationError = document.querySelector('#pwdC + span')

const button = document.querySelector('button')

function showErrorEmail() {
	email.style.borderColor = 'red'
	if (email.validity.tooShort) {
		emailError.textContent = 'Please provide a 8 minimum character long email'
	} else if (email.validity.tooLong) {
		emailError.textContent = 'Please provide a 50 maximum character long email'
	} else if (email.validity.typeMismatch) {
		emailError.textContent = 'Please provide a valid email address'
	} else if (email.validity.valueMissing) {
		emailError.textContent = 'Please provide an email address'
	} else {
		email.style.borderColor = 'green'
		emailError.textContent = ''
	}
}

function showErrorCountry() {
	country.style.borderColor = 'red'
	if (country.validity.tooShort) {
		countryError.textContent = 'Please provide a 6 minimum character long country'
	} else if (country.validity.tooLong) {
		countryError.textContent = 'Please provide a 50 maximum character long country'
	} else if (country.validity.valueMissing) {
		countryError.textContent = 'Please provide an country'
	} else {
		country.style.borderColor = 'green'
		countryError.textContent = ''
	}
}

function showErrorZcode() {
	zcode.style.borderColor = 'red'
	if (zcode.validity.patternMismatch) {
		zcodeError.textContent = 'Please provide a valid postal code'
	} else if (zcode.validity.valueMissing) {
		zcodeError.textContent = 'Please provide a postal code'
	} else {
		zcode.style.borderColor = 'green'
		zcodeError.textContent = ''
	}
}

function showErrorPassword() {
	password.style.borderColor = 'red'
	if (password.validity.patternMismatch) {
		passwordError.textContent = 'Please provide a valid password'
	} else if (password.validity.valueMissing) {
		passwordError.textContent = 'Please provide a password'
	} else {
		password.style.borderColor = 'green'
		passwordError.textContent = ''
	}
}

function showErrorPasswordConfirmation() {
	passwordConfirmation.style.borderColor = 'red'
	if (passwordConfirmation.validity.valueMissing) {
		passwordConfirmationError.textContent = 'Please provide a confirmation for your password'
	} else if (passwordConfirmation.value !== password.value) {
		passwordConfirmationError.textContent = 'The passwords are not corresponding'
		passwordConfirmation.setCustomValidity('The passwords are not corresponding')
	} else {
		passwordConfirmation.setCustomValidity('')
		passwordConfirmationError.textContent = ''
		passwordConfirmation.style.borderColor = 'green'
	}
}

email.addEventListener('input', () => {
	showErrorEmail()
})

country.addEventListener('input', () => {
	showErrorCountry()
})

zcode.addEventListener('input', () => {
	showErrorZcode()
})

password.addEventListener('input', () => {
	showErrorPassword()
})

passwordConfirmation.addEventListener('input', () => {
	showErrorPasswordConfirmation()
})

button.addEventListener('click', (e) => {
	console.log()
	if (!email.checkValidity()) {
		showErrorEmail()
		e.preventDefault()
	} else if (!country.checkValidity()) {
		showErrorCountry()
		e.preventDefault()
	} else if (!zcode.checkValidity()) {
		showErrorZcode()
		e.preventDefault()
	} else if (!password.checkValidity()) {
		showErrorPassword()
		e.preventDefault()
	} else if (!passwordConfirmation.checkValidity()) {
		showErrorPasswordConfirmation()
		e.preventDefault()
	}
})

button.addEventListener('mouseover', (e) => {
	if (!(email.checkValidity() && country.checkValidity() && zcode.checkValidity() && password.checkValidity() && passwordConfirmation.checkValidity())) {
		button.style.cursor = 'not-allowed'
	} else {
		button.style.backgroundColor = 'white'
	}
})