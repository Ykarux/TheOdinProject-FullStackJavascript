import PropTypes from 'prop-types';
import './Card.css'

function Card({url, name}) {
	return (
		<div className="card">
			<img src={url}
			     alt={name}/>
			<div className="card-bottom">
				<button>-</button>
				<h2>{name}</h2>
				<button>+</button>
			</div>
		</div>
	)
}

Card.propTypes = {
	url: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
}

export default Card