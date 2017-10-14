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

const getPostsForCategory = (posts) => ({
	type: actionTypes.FILTER_POSTS_BY_CATEGORY,
	posts
});

export const getPostsForCategoryAsync = (category) => dispatch => (
	api.getPostsForCategory(category)
		.then(posts => dispatch(getPostsForCategory(posts)))
);

// GET_COMMENTS_FOR_POST: 'GET_COMMENTS_FOR_POST',
// GET_COMMENT_DETAILS: 'GET_COMMENT_DETAILS',
// EDIT_COMMENT_DETAILS: 'EDIT_COMMENT_DETAILS',
// DELETE_COMMENT: 'DELETE_COMMENT',
// VOTE_FOR_COMMENT: 'VOTE_FOR_COMMENT',
// ADD_COMMENT: 'ADD_COMMENT',
// SORT_COMMENTS:'SORT_COMMENTS',
// ADD_POST: 'ADD_POST',