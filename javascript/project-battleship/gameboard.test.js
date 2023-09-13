const {GameBoard} = require('./gameboard');
const {Ship} = require('./ship');

test('GameBoard', () => {
	const myGameBoard = GameBoard(10);
	expect(myGameBoard.length).toBe(10);
	const myShip = Ship(3);
	
})