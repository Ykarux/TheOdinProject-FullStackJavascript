import {useEffect, useState} from 'react'

import './App.css'
import Card from './Card.jsx';

function App() {
	const [bestScore, setBestScore] = useState(0)
	const [score, setScore] = useState(0)
	const [currentlyScored, setCurrentlyScore] = useState([])
	const [nextRound, setNextRound] = useState([])

	function handleClick(e) {
		if (currentlyScored.includes(e.target.id.slice(-2))) {
			if (score > bestScore) {
				setBestScore(score)
				setScore(0)
			} else {
				setScore(0)
			}
		} else {
			setScore(score + 1)
		}
		setCurrentlyScore([])
	}

	useEffect(() => {
		const arr = []
		for (let i = 0; i < 10; i++) {
			const randomId = Math.floor(Math.random() * 151)
			if (arr.includes(randomId)) {
				i--;
			} else {
				arr.push(randomId)
			}
		}
		setNextRound(arr)
	}, [score]);

	return (
		<div className="container">
			<h1>Best score : {bestScore}</h1>
			<h1>Current score : {score}</h1>
			<div className="container-card">{
				nextRound.map(id => {
					return <Card key={id}
					             id={id}
					             handleClick={handleClick}/>
				})
			}
			</div>
		</div>
	)
}

export default App
