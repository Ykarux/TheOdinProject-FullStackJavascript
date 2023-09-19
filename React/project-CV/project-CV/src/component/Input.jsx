import {useState} from 'react';

function Input({name, label, type, initialValue}) {

	const [value, setValue] = useState(initialValue)
	return (
		<div className="input">
			<label htmlFor={name}>{label}</label>
			<input id={name}
			       name={name}
			       type={type}
			       value={value}
			       onChange={(e) => {
				       setValue(e.target.value)
			       }}
			/>
		</div>
	)
}

export default Input