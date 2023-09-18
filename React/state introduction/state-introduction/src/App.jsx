import {useState} from 'react'
import './App.css'

const COLORS = ['pink', 'blue', 'yellow']

function App() {
	const [backgroundColor, setBackgroundColor] = useState(COLORS[0])
	const [count, setCount] = useState(0)

	const onButtonClick = (color) => () => {
		setBackgroundColor(color)
		setCount(count + 1)
	}

	return (
		<div style={{backgroundColor}}>
			{COLORS.map(color => {
				return (
					<button type="button"
					        key={color}
					        onClick={onButtonClick(color)}>{color}</button>
				)
			})}
			<h1>{count}</h1>
		</div>
	)
}


export default App
