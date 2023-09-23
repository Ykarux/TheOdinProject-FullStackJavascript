import {useEffect, useRef} from 'react';

export default function Button() {
	const buttonRef = useRef(null)

	useEffect(() => {
		buttonRef.current.focus();
		buttonRef.current.textContent = 'Hey, I\'m different!';
		let timeout = setTimeout(() => {
			buttonRef.current.textContent = 'Click Me!';
		}, 2000);

		return () => {
			clearTimeout(timeout);
		};
	}, []);

	return <button ref={buttonRef}>Click me!</button>
}