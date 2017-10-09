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

const deletePost = (post) => ({
	type: actionTypes.DELETE_POST,
	post
});

export const removePostAsync = (postId) => dispatch => (
	api.deletePost(postId)
		.then(post => dispatch(deletePost(post)))
);

const voteForPost = (post) => ({
	type: actionTypes.VOTE_FOR_POST,
	post
});

export const voteForPostAsync = (params) => dispatch => (
	api.voteForPost(params)
		.then(post => dispatch(voteForPost(post)))
);

export const openDialog = (params) => ({
	type: actionTypes.OPEN_DIALOG,
	params
});

export const closeDialog = (params) => ({
	type: actionTypes.CLOSE_DIALOG,
	params
});