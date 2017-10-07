import React, { Component } from 'react';
import Categories from './Categories';
import Header from './Header';
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
					<Panel collapsible header={'FILTERS'}>
						<Categories />
					</Panel>
				</Row>
				<Row>

					<Panel bsStyle='info' header="Panel 1" eventKey="1">Panel 1 content</Panel>
					<Panel bsStyle='info' header="Panel 2" eventKey="2">Panel 2 content</Panel>

				</Row>
			</Grid>
		);
	}
}

export default App;
