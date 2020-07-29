import React from 'react';
import Home from './components/Home';
import './static/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import BookEvent from './components/BookEvent';
require('dotenv').config();

function App (){
	return (
		<div className='container body d-flex justify-content-center align-items-center'>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/book' component={BookEvent} />
			</Switch>
		</div>
	);
}

export default App;
