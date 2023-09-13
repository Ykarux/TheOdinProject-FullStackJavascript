const {Ship} = require('./ship');


test('Ship', () => {
	const myShip = Ship(3);
	expect(myShip.length).toBe(3);
	expect(myShip.hitTimes).toBe(0);
})

test('Ship functions', () => {
	const myShip = Ship(3);
	expect(myShip.hit()).toBe(1);
	expect(myShip.isSunk()).toBeFalsy();
	expect(myShip.hit()).toBe(2);
	expect(myShip.isSunk()).toBeFalsy();
	expect(myShip.hit()).toBe(3);
	expect(myShip.isSunk()).toBeTruthy();
})