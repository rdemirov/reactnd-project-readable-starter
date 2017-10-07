import actionTypes from './actionTypes';
import api from '../utils/api';


export const sortPosts = (params) => ({
	type: actionTypes.SORT_POSTS,
	params
});

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

const deletePost = (posts) => ({
	type: actionTypes.DELETE_POST,
	posts
});

export const removePostAsync = (postId) => dispatch => (
	api.deletePost(postId)
		.then(post => dispatch(deletePost(post)))
);