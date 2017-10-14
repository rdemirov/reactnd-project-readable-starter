import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, getPostsForCategoryAsync, fetchPosts } from '../actions';
import {
	Panel,
	Nav,
	NavItem
} from 'react-bootstrap';

class Categories extends Component {
	constructor(props) {
		super(props);
		this.handleSelect = this.handleSelect.bind(this);
	}

	componentDidMount() {
		this.props.fetchCategories();
	}

	handleSelect(selectedKey) {
		if (selectedKey !== 'all')
			this.props.getPostsForCategoryAsync(selectedKey);
		else this.props.fetchPosts();
	}

	render() {
		let { categories } = this.props;
		return (
			<Panel bsStyle={'info'} header={'Categories'}>
				<Nav bsStyle="pills" activeKey={1} onSelect={this.handleSelect}>
					<NavItem eventKey={'all'} key={'all'}>{'All'}</NavItem>
					{categories.map((element) => (<NavItem eventKey={element.path} key={element.path}>{element.name}</NavItem>))}
				</Nav>
			</Panel>
		);
	}
}

const mapStateToProps = (state) => ({
	categories: state.categories
});

const mapDispatchToProps = {
	fetchCategories,
	getPostsForCategoryAsync,
	fetchPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
