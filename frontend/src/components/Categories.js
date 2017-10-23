import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

import {
	fetchCategories
} from '../actions';
import {
	Panel
} from 'react-bootstrap';

class Categories extends Component {

	componentDidMount() {
		this.props.fetchCategories();
	}

	render() {
		let { categories } = this.props;
		return (
			<Panel bsStyle={'info'} header={'Categories'} style={{width:'98%',marginLeft:'1%',marginRight:'1%'}}>
				{categories.map((category)=>(	<NavLink style={{margin:'10px'}} key={category.path} to={`/${category.path}`}>{category.name}</NavLink>))}
				
			</Panel>
		);
	}
}

Categories.propTypes = {
	fetchCategories: PropTypes.func.isRequired,
	categories: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
	categories: state.categories
});

const mapDispatchToProps = {
	fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
