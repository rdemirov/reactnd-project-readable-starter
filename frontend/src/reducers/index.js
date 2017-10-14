import { combineReducers } from 'redux';
import actionTypes from '../actions/actionTypes';

const defaultPostsState = {
	postsArray: [],
	showModal:false
};
const defaultCommentsState = [];
const defaultCategoriesState = [];

const commentsReducer = (state = defaultCommentsState, action) => {
	switch (action.type) {
		case actionTypes.GET_COMMENTS_FOR_POST: {
			return [
				...state,
				...action.comments
			]
		}
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
			return { postsArray: action.posts };
		}

		case actionTypes.FILTER_POSTS_BY_CATEGORY: {
			return { postsArray: action.posts };
		}

		case actionTypes.SORT_POSTS: {
			let posts = state.postsArray.sort((a, b) => {
				switch (action.params.sortBy) {
					case 'dateAsc': return a.timestamp - b.timestamp;
					case 'dateDesc': return b.timestamp - a.timestamp;
					case 'votesAsc': return a.voteScore - b.voteScore;
					case 'votesDesc': return b.voteScore - a.voteScore;
				}
			});
			return { postsArray: [...posts] };
		}
		case actionTypes.DELETE_POST: {
			let posts = state.postsArray.filter((element) => (element.id !== action.post.id));
			return {
				postsArray: posts
			};
		}
		case actionTypes.VOTE_FOR_POST: {
			let posts = state.postsArray.map((post) => {
				if (post.id === action.post.id) post.voteScore = action.post.voteScore;
				return post;
			});
			return {
				postsArray: posts
			};
		}
	}
	return state;
};

export default combineReducers({
	posts: postsReducer,
	comments: commentsReducer,
	categories: categoriesReducer
});