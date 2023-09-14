function Player(name) {
	function attack(x, y, gameboard) {
		return gameboard.hit(x, y)
	}

	return {
		get name() {
			return name
		},
		attack,
	}
}

module.exports = {Player}