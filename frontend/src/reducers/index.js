import { combineReducers } from 'redux';
import actionTypes from '../actions/actionTypes';

const defaultPostsState = { postsArray: [] };
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
	default:
	}
	return state;
};

export default combineReducers({
	posts: postsReducer,
	comments: commentsReducer,
	categories: categoriesReducer
});