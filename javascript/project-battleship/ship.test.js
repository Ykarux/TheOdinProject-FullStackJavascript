const {Ship} = require('./ship');


test('Ship', () => {
	const myShip = Ship(3);
	expect(myShip.length).toBe(3);
	expect(myShip.hitTimes).toBe(0);
})

test('Ship functions', () => {
	const myShip = Ship(3);
	myShip.hit()
	expect(myShip.isSunk()).toBeFalsy();
	myShip.hit()
	expect(myShip.isSunk()).toBeFalsy();
	myShip.hit()
	expect(myShip.isSunk()).toBeTruthy();
})