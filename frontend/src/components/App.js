import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Readable from './Readable';
import NotFound from './NotFound';
import {
	Grid,
	Row,
	Panel
} from 'react-bootstrap';

class App extends Component {
	render() {
		return (
			<Switch>
			<Route exact path='/' component={Readable} />
			<Route path='/:category' component={Readable} />
			<Route path='*' component={NotFound} />
		</Switch>
		);
	}
}

export default App;
