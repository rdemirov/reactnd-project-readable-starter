import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';
import {
	Panel,
	Nav,
	NavItem
} from 'react-bootstrap';

class Categories extends Component {
	componentDidMount() {
		this.props.fetchCategories();
	}
	render() {
		let { categories } = this.props;
		return (
			<Panel bsStyle={'info'} header={'Categories'}>
				<Nav bsStyle="pills" activeKey={1}>
					{categories.map((element) => (<NavItem eventKey={element.path} key={element.name}>{element.name}</NavItem>))}
				</Nav>
			</Panel>
		);
	}
}

const mapStateToProps = (state) => ({
	categories: state.categories
});

const mapDispatchToProps = {
	fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
