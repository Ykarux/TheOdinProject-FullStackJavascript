import '../styles/edit.css'

function Edit({children, id, handleSubmit}) {

	function handleCancel() {
		document.querySelector('body').classList.remove('backdrop')
		document.getElementById(id).style.display = 'none';
	}

	return (
		<form id={id}
		      className="container-edit"
		      onSubmit={handleSubmit}>
			{children}
			<button type="submit">Submit</button>
			<button type="button"
			        onClick={handleCancel}>Cancel</button>
		</form>
	)
}

export default Edit