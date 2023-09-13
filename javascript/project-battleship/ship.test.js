const Ship = require('./ship')


test('Ship', () => {
	const myShip = new Ship(3);
	expect(myShip.length).toBe(3);
	expect(myShip.hitTimes).toBe(0);
	expect(myShip.sunk).toBeFalthy();
})