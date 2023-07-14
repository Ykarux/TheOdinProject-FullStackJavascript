let myPromise = new Promise(function (resolve, reject) {
	if (1 + 1 === 2) {
		resolve('The equation is correct')
	} else {
		reject('The equation is not correct')
	}
})

myPromise.then(function (result) {
	console.log('Success : ' + result)
}).catch(function (err) {
	console.log('Error : ' + err)
}).finally(function () {
	console.log('Finish')
})

let myPromise2 = new Promise(function (resolve, reject) {
	setTimeout(() => {
		resolve('Done in 500 ms')
	}, 500)
})

let myPromise3 = new Promise(function (resolve, reject) {
	setTimeout(() => {
		resolve('Done in 1000 ms')
	}, 1000)
})

Promise.all([myPromise3, myPromise2]).then(function (result) {
	console.log(result[0]) // done in 1000ms
	console.log(result[1]) // done in 500ms
})

let myPromise4 = new Promise(function (resolve, reject) {
	setTimeout(() => {
		reject('Failed in 1000 ms')
	}, 1000)
})

let myPromise5 = new Promise(function (resolve, reject) {
	setTimeout(() => {
		resolve('Done in 500 ms')
	}, 500)
})

Promise.all([myPromise4, myPromise5]).then(function (result) {
	// Never processed
	console.log(result[0])
	console.log(result[1])
}).catch(function (err) {
	console.log(err) // Failed in 1000 ms
})

let myPromise6 = new Promise(function (resolve, reject) {
	setTimeout(() => {
		resolve('Done in 500ms')
	}, 500)
})

let myPromise7 = new Promise(function (resolve, reject) {
	setTimeout(() => {
		resolve('Done in 1000ms')
	}, 1000)
})

Promise.race([myPromise6, myPromise7]).then(function (result) {
	console.log(result) // Done in 500ms
})