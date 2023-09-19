import '../styles/edit.css'

function Edit({children, id, handleSubmit}) {

	function handleCancel() {
		document.querySelector('.container-main').classList.remove('backdrop')
		document.getElementById('edit-generalInfos').style.display = 'none';
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