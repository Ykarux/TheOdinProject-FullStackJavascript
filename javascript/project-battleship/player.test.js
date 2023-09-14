const {Player} = require('./player')
const {GameBoard} = require('./gameboard')

test('Player', () => {
	const myPlayer = Player('Myname')
	expect(myPlayer.name).toBe('Myname')
	const ennemyGameBoard = GameBoard(10)
	ennemyGameBoard.placeShip(1, 1, 2)
	expect(myPlayer.attack(1, 2, ennemyGameBoard)).toBeTruthy()
	expect(myPlayer.attack(1, 4, ennemyGameBoard)).toBeFalsy()
})