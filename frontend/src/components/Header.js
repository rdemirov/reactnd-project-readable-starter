import React, { Component } from 'react';
import { connect } from 'react-redux';
import {sortPosts} from '../actions';
import {
	PageHeader,
	ButtonToolbar,
	ButtonGroup,
	Button
} from 'react-bootstrap';

class Header extends Component {
	render() {
		let {sortPosts} = this.props;
		return (
			<PageHeader>
				<h1>Readable</h1>
				<p><ButtonToolbar>
					<ButtonGroup bsSize="large">
						<Button bsStyle='primary'>Add new post</Button>
						<Button onClick={()=>(sortPosts({sortBy:'dateDesc'}))}>Newest </Button>
						<Button onClick={()=>(sortPosts({sortBy:'dateAsc'}))}>Oldest</Button>
						<Button onClick={()=>(sortPosts({sortBy:'votesDesc'}))}>Most voted</Button>
						<Button onClick={()=>(sortPosts({sortBy:'votesAsc'}))}>Least voted</Button>
					</ButtonGroup></ButtonToolbar></p>
			</PageHeader>
		);
	}
}

const mapStateToProps = () => ({

});


export default connect(mapStateToProps, {sortPosts})(Header);