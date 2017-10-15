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

const getPostsForCategory = (posts) => ({
	type: actionTypes.FILTER_POSTS_BY_CATEGORY,
	posts
});

export const getPostsForCategoryAsync = (category) => dispatch => (
	api.getPostsForCategory(category)
		.then(posts => dispatch(getPostsForCategory(posts)))
);

const getCommentsForPost = (comments) => ({
	type: actionTypes.GET_COMMENTS_FOR_POST,
	comments
});

export const getCommentsForPostAsync = (postId) => dispatch => (
	api.getCommentsForPost(postId)
		.then(comments => dispatch(getCommentsForPost(comments)))
);

const deleteComment = (comment) => ({
	type: actionTypes.DELETE_COMMENT,
	comment
});

export const deleteCommentAsync = (commentId) => dispatch => (
	api.deleteComment(commentId)
		.then(comment => dispatch(deleteComment(comment)))
);

const voteForComment = (comment) => ({
	type: actionTypes.VOTE_FOR_COMMENT,
	comment
});

export const voteForCommentAsync = (params) => dispatch => (
	api.voteForComment(params)
		.then(comment => {
			dispatch(voteForComment(comment))
		})
);

const addPost = (post) => ({
	type: actionTypes.ADD_POST,
	post
});

export const addPostAsync = (params) => dispatch => (
	api.addNewPost(params)
		.then(post => dispatch(addPost(post)))
);

const addComment = (comment) => ({
	type: actionTypes.ADD_COMMENT,
	comment
});

export const addCommentAsync = (params) => dispatch => (
	api.addNewComment(params)
		.then(comment => dispatch(addComment(comment)))
);

export const openDialog = (params) => ({
	type: actionTypes.OPEN_DIALOG,
	params
});

export const closeDialog = (params) => ({
	type:  actionTypes.CLOSE_DIALOG,
	params
});

export const openCommentsDialog = (params) => ({
	type: actionTypes.OPEN_COMMENTS_DIALOG,
	params
});

export const closeCommentsDialog = (params) => ({
	type:  actionTypes.CLOSE_COMMENTS_DIALOG,
	params
});