import { combineReducers } from 'redux';
import actionTypes from '../actions/actionTypes';

const defaultPostsState = [];
const defaultCommentsState = [];
const defaultCategoriesState = [];

const commentsReducer = (state = defaultCommentsState, action) => {
	switch (action.type) {
	default:
	}
	return state;
};

const categoriesReducer = (state = defaultCategoriesState, action) => {
	switch (action.type) {
	case actionTypes.GET_ALL_CATEGORIES: {
		return [...action.categories];
	}
	}
	return state;
};

const postsReducer = (state = defaultPostsState, action) => {
	switch (action.type) {
	case actionTypes.GET_ALL_POSTS: {
		return [...action.posts];
	}
	case actionTypes.SORT_POSTS: {
		let posts = state.sort((a, b) => {
			switch (action.params.sortBy) {
			case 'dateAsc': return a.timestamp - b.timestamp;
			case 'dateDesc': return b.timestamp - a.timestamp;
			case 'votesAsc': return a.voteScore - b.voteScore;
			case 'votesDesc': return b.voteScore - a.voteScore;
			}
		});
		return [...posts];
	}
	}
	return state;
};

export default combineReducers({
	posts: postsReducer,
	comments: commentsReducer,
	categories: categoriesReducer
});