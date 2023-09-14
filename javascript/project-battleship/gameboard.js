const {Ship} = require('./ship')

function GameBoard(length) {
	const ships = []
	const shotsList = []

	function placeShip(x, y, shipLength) {
		if (x + shipLength > length || y + shipLength > length) {
			throw new Error(`Can't place a ship here`);
		} else {
			const ship = Ship(shipLength);
			ships.push([x, y, ship]);
		}
	}

	function hit(x, y) {
		for (const ship of ships) {
			if (ship[0] === x && (y >= ship[1] && y < ship[1] + ship[2].length)) {
				ship[2].hit()
				shotsList.push([x, y, true])
				return true;
			}
		}
		shotsList.push([x, y, false])
		return false
	}

	function areShipsSunk() {
		for (const ship of ships) {
			if (!ship[2].isSunk()) return false
		}
		return true
	}

	return {
		get length() {
			return length;
		},
		get shotsList() {
			return shotsList;
		},
		areShipsSunk,
		placeShip,
		hit,
	}
}

module.exports = {GameBoard}