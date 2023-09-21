import {useEffect, useState} from 'react';

// eslint-disable-next-line react/prop-types,no-unused-vars
function Card({id, handleClick}) {

	const [url, setUrl] = useState('')
	const [name, setName] = useState('')

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(response => {
			response.json().then(pokemon => {
				setUrl(pokemon.sprites.front_default)
				setName(pokemon.name)
			})
		})
	}, [id])

	return (
		<div className="card"
		     onClick={handleClick}
		     id={'pokemon' + id}>
			<img src={url}
			     alt={'Pokemon.jsx ' + id}/>
			<h2>{name}</h2>
		</div>
	)
}

export default Card