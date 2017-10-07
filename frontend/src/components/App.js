import React, { Component } from 'react';
import Categories from './Categories';
import Header from './Header';
import Posts from './Posts';
import { connect } from 'react-redux';
import './App.css';
import {
	Grid,
	Row,
	Col,
	Panel
} from 'react-bootstrap';

class App extends Component {
	render() {
		return (
			<Grid>
				<Row>
					<Header />
				</Row>
				<Row>
					<Panel header={'FILTERS'}>
						<Categories />
					</Panel>
				</Row>
				<Row>
					<Posts />
				</Row>
			</Grid>
		);
	}
}

export default App;
