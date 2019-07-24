import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
import Values from './components/values';
import Header from './components/header';
import DigitalMatters from './components/digital-matters'
import './styles/project.css'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import {BrowserRouter, Route} from 'react-router-dom'




// ReactDOM.render(<App/>, document.getElementById('app'));

ReactDOM.render(
	<Provider store={createStore(reducers)}>
	<BrowserRouter>
		<div id='routes'>
			<Route exact='true' path='/' component={App}/>
			<Route exact='true' path='/values' component={Values}/>
			<Route exact='true' path='/digital_matters' component={DigitalMatters}/>
		</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
)
