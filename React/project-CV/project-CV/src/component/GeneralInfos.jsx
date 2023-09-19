import {useState} from 'react';
import Edit from './Edit.jsx';
import Input from './Input.jsx';
import '../styles/generalInfos.css'

function GeneralInfos() {
	const [email, setEmail] = useState('guillaume.giannantonio@protonmail.com')
	const [address, setAddress] = useState('15 Rue du bourg Pallette, Kanto')
	const [phone, setPhone] = useState('+3369!5745')

	function handleSubmit(e) {
		e.preventDefault();
		const emailInput = document.getElementById('email')
		const addressInput = document.getElementById('address')
		const phoneInput = document.getElementById('phone')
		setEmail(emailInput.value)
		setAddress(addressInput.value)
		setPhone(phoneInput.value)
		document.querySelector('.container-main').classList.remove('backdrop')
		document.getElementById('edit-generalInfos').style.display = 'none';
	}

	function edit() {
		document.querySelector('.container-main').classList.add('backdrop')
		document.getElementById('edit-generalInfos').style.display = 'block';
	}

	return (
		<>
			<div className="generalInfos">
				<h2>General Infos
					<svg xmlns="http://www.w3.org/2000/svg"
					     className="icon-edit"
					     id="icon-edit-generalInfos"
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
				<div className="container-general-infos">
					<p>Email :</p>
					<p>{email}</p>
				</div>
				<div className="container-general-infos">
					<p>Address :</p>
					<p>{address}</p>
				</div>
				<div className="container-general-infos">
					<p>Phone Number :</p>
					<p>{phone}</p>
				</div>
			</div>
			<Edit id="edit-generalInfos"
			      handleSubmit={(e) => {
				      handleSubmit(e)
			      }}>
				<Input label="Email : "
				       name="email"
				       type="email"
				       initialValue={email}
				/>
				<Input label="Address : "
				       name="address"
				       type="text"
				       initialValue={address}
				/>
				<Input label="Phone : "
				       name="phone"
				       type="text"
				       initialValue={phone}
				/>
			</Edit>
		</>
	)
}

export default GeneralInfos