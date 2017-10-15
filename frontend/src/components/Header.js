import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sortPosts } from '../actions';
import {
	PageHeader,
	ButtonToolbar,
	ButtonGroup,
	Button
} from 'react-bootstrap';

class Header extends Component {
	render() {
		let { sortPosts } = this.props;
		return (
			<PageHeader>
				<div>
					<p>
						Readable
					</p>
				</div>
				<ButtonToolbar>
					<ButtonGroup bsSize="large">
						<Button onClick={() => (sortPosts({ sortBy: 'dateDesc' }))}>Newest </Button>
						<Button onClick={() => (sortPosts({ sortBy: 'dateAsc' }))}>Oldest</Button>
						<Button onClick={() => (sortPosts({ sortBy: 'votesDesc' }))}>Most voted</Button>
						<Button onClick={() => (sortPosts({ sortBy: 'votesAsc' }))}>Least voted</Button>
					</ButtonGroup></ButtonToolbar>
			</PageHeader>
		);
	}
}

Header.propTypes = {
	sortPosts: PropTypes.func.isRequired
}

const mapStateToProps = () => ({});
export default connect(mapStateToProps, { sortPosts })(Header);