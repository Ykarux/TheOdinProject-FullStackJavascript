const today = new Date()

function formatDate(date) {
	return new Intl.DateTimeFormat(
		'en-US',
		{weekday: 'long'}
	).format(date);
}

const personn = {
	name: 'myName',
	theme: {
		backgroundColor: 'pink',
		border: '2px dashed blue',
	}
}

export default function TodoList() {
	const name = 'Gregorio Y. Zara'
	return (
		<>
			<h1>{name}s To Do list for {formatDate(today)}</h1>
			<ul style={
				{
					backgroundColor: 'red',
					color: 'blue',
					border: '1px solid black'
				}
			}>
				<li>Improve the videophone</li>
				<li>Prepare aeronautics lectures</li>
				<li>Work on the alcohol-fuelled engine</li>
			</ul>
			<div style={personn.theme}>
				<h1>This is my name : {personn.name}</h1>
			</div>
		</>
	)
}