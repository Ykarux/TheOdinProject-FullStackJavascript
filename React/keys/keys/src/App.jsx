import './App.css'

const people = [
	{
		name: 'Bruce',
		id: 154738,
	},
	{
		name: 'Clark',
		id: 329547
	},
	{
		name: 'john',
		id: 1538275
	}
]

function App() {

	return (
		<>
			<ul>
				{people.map(person => {
					return <li key={person.id}>{person.name}</li>
				})}
			</ul>
		</>
	)
}

export default App
