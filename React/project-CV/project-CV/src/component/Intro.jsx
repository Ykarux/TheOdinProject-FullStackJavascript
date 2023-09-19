import {useState} from 'react';
import '../styles/intro.css';
import Edit from './Edit.jsx';
import Input from './Input.jsx';

function Intro() {
	const [nom, setNom] = useState('Guillaume Giannantonio')
	const [intro, setIntro] = useState('Actuellement à la recherche d"une alternance pour ma troisième année dans mon lycée de merde, je souhaite intégrer votre challeureurse entreprise, c"est pour cela que je fait ce long paragraphe de merde, que vous ne lirez d"ailleurs probablement jamais...')

	function edit() {
		document.querySelector('body').classList.add('backdrop')
		document.getElementById('edit-Intro').style.display = 'block';
	}

	function handleSubmit(e) {
		e.preventDefault()
		setNom(document.getElementById('nom').value)
		setIntro(document.getElementById('intro').value)
		document.querySelector('body').classList.remove('backdrop')
		document.getElementById('edit-Intro').style.display = 'none';
	}

	return (
		<>
			<div className="intro">
				<h2>Intro
					<svg xmlns="http://www.w3.org/2000/svg"
					     className="icon-edit"
					     id="icon-edit-Intro"
					     onClick={edit}
					     width="24"
					     height="24"
					     viewBox="0 0 24 24"
					     strokeWidth="1.5"
					     stroke="#9e9e9e"
					     fill="none"
					     strokeLinecap="round"
					     strokeLinejoin="round">
						<path stroke="none"
						      d="M0 0h24v24H0z"
						      fill="none"/>
						<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/>
						<path d="M13.5 6.5l4 4"/>
						<path d="M16 19h6"/>
					</svg>
				</h2>
				<div className="container-intro">
					<p>{nom}</p>
					<p>{intro}</p>
				</div>
			</div>
			<Edit id="edit-Intro"
			      handleSubmit={(e) => handleSubmit(e)}>
				<Input label="Nom : "
				       type="text"
				       name="nom"
				       initialValue={nom}/>
				<Input label="Introduction : "
				       type="text"
				       name="intro"
				       initialValue={intro}/>
			</Edit>
		</>
	)
}

export default Intro