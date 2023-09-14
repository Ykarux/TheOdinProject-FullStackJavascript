const {GameBoard} = require('./gameboard');

test('GameBoard', () => {
	const myGameBoard = GameBoard(10);
	expect(myGameBoard.length).toBe(10);
	myGameBoard.placeShip(3, 6, 3);
	myGameBoard.placeShip(1, 1, 2);
	expect(() => myGameBoard.placeShip(1, 8, 3)).toThrow()
	expect(myGameBoard.hit(3, 9)).toBeFalsy()
	expect(myGameBoard.hit(8, 5)).toBeFalsy()
	expect(myGameBoard.areShipsSunk()).toBeFalsy()
	expect(myGameBoard.hit(1, 1)).toBeTruthy()
	expect(myGameBoard.hit(1, 2)).toBeTruthy()
	expect(myGameBoard.hit(1, 3)).toBeFalsy()
	expect(myGameBoard.hit(3, 6)).toBeTruthy()
	expect(myGameBoard.areShipsSunk()).toBeFalsy()
	expect(myGameBoard.hit(3, 7)).toBeTruthy()
	expect(myGameBoard.shotsList()).toContain([[3, 9, false], [8, 5, false], [1, 1, true], [1, 2, true], [1, 3, false], [3, 6, true], [3, 7, true], [3, 8, true]])
	expect(myGameBoard.hit(3, 8)).toBeTruthy()
	expect(myGameBoard.areShipsSunk()).toBeTruthy()
})