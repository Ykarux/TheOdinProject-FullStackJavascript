let currentlySelected = 0
displaySlide(currentlySelected)

function displaySlide(selected) {
	const content = document.querySelector('.content')
	let childArray = Array.from(content.children)
	childArray.forEach((child) => {
		child.style.visibility = 'hidden'
	})
	content.children[selected].style.visibility = 'visible'
}

function next(currentlySelected, totalSlideNumber, parentSVG) {
	const childArray = Array.from(parentSVG.children)
	childArray.forEach((children) => {
		children.src = 'unfilled.svg'
	})
	if (currentlySelected === totalSlideNumber - 1) {
		displaySlide(0)
		parentSVG.children[0].src = 'filled.svg'
	} else {
		displaySlide(currentlySelected + 1)
		parentSVG.children[currentlySelected + 1].src = 'filled.svg'
	}
}

function previous(currentlySelected, totalSlideNumber, parentSVG) {
	const childArray = Array.from(parentSVG.children)
	childArray.forEach((children) => {
		children.src = 'unfilled.svg'
	})
	if (currentlySelected === 0) {
		displaySlide(totalSlideNumber - 1)
		parentSVG.children[totalSlideNumber - 1].src = 'filled.svg'
	} else {
		displaySlide(currentlySelected - 1)
		parentSVG.children[currentlySelected - 1].src = 'filled.svg'
	}
}

const left = document.querySelector('.left')
const parent = document.querySelector('.icons')
left.addEventListener('click', () => {
	previous(currentlySelected, 4, parent)
	if (currentlySelected === 0) {
		currentlySelected = 4 - 1
	} else {
		currentlySelected = currentlySelected - 1
	}
})
const right = document.querySelector('.right')
right.addEventListener('click', () => {
	next(currentlySelected, 4, parent)
	if (currentlySelected === 4 - 1) {
		currentlySelected = 0
	} else {
		currentlySelected = currentlySelected + 1
	}
})

const childArray = Array.from(parent.children)
childArray.forEach((children) => {
	children.addEventListener('click', () => {
		const childArray = Array.from(parent.children)
		childArray.forEach((children2) => {
			children2.src = 'unfilled.svg'
		})
		currentlySelected = childArray.indexOf(children)
		displaySlide(currentlySelected)
		children.src = 'filled.svg'
	})
})

setInterval(function () {
	next(currentlySelected, 4, parent)
	if (currentlySelected === 4 - 1) {
		currentlySelected = 0
	} else {
		currentlySelected = currentlySelected + 1
	}
}, 5000)