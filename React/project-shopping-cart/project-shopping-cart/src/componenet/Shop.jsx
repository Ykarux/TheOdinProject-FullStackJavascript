import Navbar from './Navbar.jsx';
import Card from './Card.jsx';
import './Shop.css'

const items = [
	{
		id: 0,
		name: 'bulbasaur',
		url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
	},
	{
		id: 1,
		name: 'ivysaur',
		url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
	},
	{
		id: 2,
		name: 'venusaur',
		url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
	},
	{
		id: 3,
		name: 'charmander',
		url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
	}
]

function Shop() {
	return (
		<>
			<Navbar/>
			<div className="container">
				{items.map(pokemon => {
					return (
						<Card key={pokemon.id}
						      url={pokemon.url}
						      name={pokemon.name}></Card>
					)
				})}
			</div>
		</>
	)
}

export default Shop