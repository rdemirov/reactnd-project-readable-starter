import React, { Component } from 'react';
import Categories from './Categories';
import Header from './Header';
import Posts from './Posts';
import {
	Grid,
	Row,
	Panel
} from 'react-bootstrap';

class Readable extends Component {
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

export default Readable;
