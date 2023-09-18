import {useState} from 'react'
import './App.css'

function App() {
	const [person, setPerson] = useState({firstName: '', lastName: '', age: 100})

	const fullName = person.firstName + ' ' + person.lastName

	const handleIncreaseChangeGood = () => {
		const newPerson = {...person, age: person.age + 1}
		setPerson(newPerson)
	}

	const handleFirstName = (e) => {
		const newPerson = {...person, firstName: e.target.value}
		setPerson(newPerson)
	}

	const handleLastName = (e) => {
		const newPerson = {...person, lastName: e.target.value}
		setPerson(newPerson)
	}

	return (
		<>
			<h1>{fullName}</h1>
			<h2>{person.age}</h2>
			<button onClick={handleIncreaseChangeGood}>Increase age</button>
			<Input label="First Name"
			       val={person.firsName}
			       handler={handleFirstName}/>
			<Input label="Last Name"
			       val={person.lastName}
			       handler={handleLastName}/>
		</>
	)
}

function Input({label, val, handler}) {
	return (
		<>
			<label htmlFor={label}>{label}</label>
			<input type="text"
			       value={val}
			       onChange={handler}
			       id={label}/>
		</>
	)
}

export default App
