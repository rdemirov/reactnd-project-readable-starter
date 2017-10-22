import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

import {
	fetchCategories
} from '../actions';
import {
	Panel,
	Nav,
	NavItem
} from 'react-bootstrap';

class Categories extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchCategories();
	}

	render() {
		let { categories } = this.props;
		return (
			<Panel bsStyle={'info'} header={'Categories'} style={{width:'98%',marginLeft:'1%',marginRight:'1%'}}>
				<NavLink to={'/'}>{'All'}</NavLink>
				{categories.map((category)=>(	<NavLink style={{margin:'10px'}} to={`/${category.path}`}>{category.name}</NavLink>))}
				
			</Panel>
		);
	}
}

Categories.propTypes = {
	fetchCategories: PropTypes.func.isRequired,
	fetchPosts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	categories: state.categories
});

const mapDispatchToProps = {
	fetchCategories//,
	//getPostsForCategoryAsync,
	//fetchPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
