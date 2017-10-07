import actionTypes from './actionTypes';
import api from '../utils/api';

const getCategories = (categories) => ({
	type: actionTypes.GET_ALL_CATEGORIES,
	categories
});

export const fetchCategories = () => dispatch => (
	api.getCategories()
		.then(categories => dispatch(getCategories(categories)))
);

const getPosts = (posts) => ({
	type: actionTypes.GET_ALL_POSTS,
	posts
});

export const fetchPosts = () => dispatch => (
	api.getPosts()
		.then(posts => dispatch(getPosts(posts)))
);