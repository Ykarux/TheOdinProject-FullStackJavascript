import './Navbar.css'
import {Link} from 'react-router-dom';

function Navbar() {
	return (
		<div className="navbar">
			<Link to="/"><button>Home</button></Link>
			<Link to="/shop"><button>Shop</button></Link>
			<Link to="/cart"><button>Cart</button></Link>
		</div>
	)
}

export default Navbar