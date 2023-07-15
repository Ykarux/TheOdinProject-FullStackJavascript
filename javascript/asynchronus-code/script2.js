function foo() {
	// throw new Error('Oops !')
	console.log('why not!')
}

function bar() {
	foo()
}

function baz() {
	bar()
}

setTimeout(() => {
	console.log('Im from time out')
}, 500)

let a = 1
for (let i = 0; i < 2000000000; i++) {
	a = a + 1
}
console.log(a)

var b = {
	index: 1
};

// later
console.log(b); // ??

// even later
a.index++;