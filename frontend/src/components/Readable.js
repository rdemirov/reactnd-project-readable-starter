import React, { Component } from 'react';
import Posts from './Posts';
import PropTypes from 'prop-types';
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
				<Posts history={this.props.history} categoryChange={this.props.categoryChange} category={this.props.match.params.category || 'all'}/>
				</Row>
			</Grid>
		);
	}
}

Readable.propTypes = {
	history: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired,
	categoryChange: PropTypes.bool
}

export default Readable;
