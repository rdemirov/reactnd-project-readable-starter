import React, { Component } from 'react';
import Categories from './Categories';
import Header from './Header';
import Posts from './Posts';
import {
	Grid,
	Row,
	Panel,
	PageHeader
} from 'react-bootstrap';

class Readable extends Component {
	render() {
		return (
			<Grid>
				<Row>
				<PageHeader>Readable &nbsp;&nbsp;
					<small>Second project of the udacity react nanodegree</small>
					</PageHeader>
				</Row>
				<Row>
					<Posts />
				</Row>
			</Grid>
		);
	}
}

export default Readable;
