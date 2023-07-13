import Data from './data.json' assert {type: 'json'}


// PARSING
console.log(Data['members'][0]['powers'][1])
let myString = '{"name":"John", "age":30, "birth":"1986-12-14", "city":"New York"}'
let myObj = JSON.parse(myString)
console.log(myObj)
const myArrayAsString = '["Ford", "Mercedes","Audi"]'
let myArray = JSON.parse(myArrayAsString)
console.log(myArray)

// To use date in json :
let birthDate = new Date(myObj.birth)
console.log(birthDate)
// or
let mySecondObj = JSON.parse(myString, function (key, value) {
	if (key === 'birth') {
		return new Date(value)
	} else {
		return value
	}
})
console.log(mySecondObj)

// STRINGIFYING
const myThirdObj = {
	name: 'John', age: 30, city: 'New York'
}

const myJson = JSON.stringify(myThirdObj)
console.log(myJson)
const mySecondArray = ['Mercedes', 'Ford', 'BMW']
const mySecondJson = JSON.stringify(mySecondArray)
console.log(mySecondJson)

// To stringify date: JSON.stringify() automatically convert date to JSON
const myFourthObj = {
	name: 'John',
	today: new Date(),
	city: 'New York'
}
const myThirdJson = JSON.stringify(myFourthObj)
console.log(myThirdJson)