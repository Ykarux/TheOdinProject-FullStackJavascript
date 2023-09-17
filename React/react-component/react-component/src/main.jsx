import React from 'react'
import ReactDOM from 'react-dom/client'
import {Food} from './Food.jsx';
import App from './App.jsx';
import Greeting from './Greeting.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Greeting/>
		<Food/>
		<Greeting/>
	</React.StrictMode>,
)
