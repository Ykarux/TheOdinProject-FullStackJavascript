import useImage from './useImage.jsx';

function Image() {
	const {imageURL, loading, error} = useImage()

	if (error) return <p>A network error was encountered</p>;
	if (loading) return <p>Loading...</p>;

	return (
		<>
			<h1>An image</h1>
			<img src={imageURL}
			     alt={'placeholder text'}/>
		</>
	)
}

export default Image