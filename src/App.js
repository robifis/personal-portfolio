import React from 'react';
import Home from './components/Home';
import './static/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App (){
	return (
		<div className='container body d-flex justify-content-center align-items-center'>
			<Home />
		</div>
	);
}

export default App;
