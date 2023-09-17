import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		// return only one element, if there are multiple to return, wrap then in a container
		// this can be a <div>, a fragment : empty <>
		<>
			<div>
				<a href="https://vitejs.dev"
				   target="_blank">
					<img src={viteLogo}
					     className="logo"
					     alt="Vite logo"/>
				</a>

				// Close all tags, even the individuals ones
				<input/>

				<a href="https://react.dev"
				   target="_blank">

					// camelCase attributes
					<img src={reactLogo}
					     className="logo react"
					     alt="React logo"/>

				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	)
}

export default App
