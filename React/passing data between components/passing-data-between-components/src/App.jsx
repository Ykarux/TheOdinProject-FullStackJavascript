import './App.css'

function Button({text = 'Click Me !', color = 'blue', fontSize = 12, handleClick}) {

	const buttonStyle = {
		color: color,
		fontSize: fontSize + 'px'
	}
	return <button style={buttonStyle}
	               onClick={() => {
		               handleClick('http://www.google.com')
	               }}>{text}</button>
}

function App() {

	function handleClickButton(url) {
		window.location.href = url
	}

	return (
		<>
			<Button handleClick={handleClickButton}/>
			<Button text="Don't click me"
			        color="red"
			/>
			<Button fontSize={20}/>
		</>
	)
}

export default App
