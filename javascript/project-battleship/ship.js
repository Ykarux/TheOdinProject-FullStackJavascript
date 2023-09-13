function Ship(length) {
	let hitTimes = 0;

	function hit() {
		hitTimes++;
	}

	function isSunk() {
		return hitTimes === length;
	}

	return {
		get length() {
			return length;
		},
		get hitTimes() {
			return hitTimes;
		},
		hit,
		isSunk,
	}
}

module.exports = {Ship}