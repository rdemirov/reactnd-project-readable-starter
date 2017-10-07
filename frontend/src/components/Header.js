import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	PageHeader,
	ButtonToolbar,
	ButtonGroup,
	Button
} from 'react-bootstrap';

class Header extends Component {
	render() {
		return (
			<PageHeader>
				<h1>Readable</h1>
				<p><ButtonToolbar>
					<ButtonGroup bsSize="large">
						<Button bsStyle='primary'>Add new post</Button>
						<Button>Newest </Button>
						<Button>Oldest</Button>
						<Button>Most voted</Button>
						<Button>Least voted</Button>
					</ButtonGroup></ButtonToolbar></p>
			</PageHeader>
		);
	}
}

const mapStateToProps = () => ({

});


export default connect(mapStateToProps, {})(Header);