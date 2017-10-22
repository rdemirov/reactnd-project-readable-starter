import React, { Component } from 'react';
import Posts from './Posts';
import {
	Grid,
	Row,
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
				<Posts history={this.props.history} category={this.props.match.params.category || 'all'}/>
				</Row>
			</Grid>
		);
	}
}

export default Readable;
