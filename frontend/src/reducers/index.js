import { combineReducers } from 'redux';
import actionTypes from '../actions/actionTypes';

const defaultPostsState = {
	postsArray: [],
	showModal: false,
	editPostFlag: false,
	postToEdit: {}
};
const defaultCommentsState = {
	commentsArray: [],
	showModal: false,
	selectedPostId: '',
	editCommentFlag: false,
	commentToEdit: {}
};
const defaultCategoriesState = [];

const commentsReducer = (state = defaultCommentsState, action) => {
	switch (action.type) {
		case actionTypes.GET_COMMENTS_FOR_POST: {
			let postComments = state.commentsArray.filter((comment)=>(action.comments.findIndex((element)=>(element.id===comment.id))===-1));
						return {
				...state,
				commentsArray: [...postComments, ...action.comments]
			}
		}
		case actionTypes.DELETE_COMMENT: {
			let comments = state.commentsArray.filter((comment) => (comment.id !== action.comment.id));
			return {
				...state,
				commentsArray: comments
			}
		}
		case actionTypes.VOTE_FOR_COMMENT: {
			return {
				...state,
				commentsArray: state.commentsArray.map((comment) => {
					if (comment.id === action.comment.id) return action.comment;
					else return comment;
				}).sort((a, b) => (b.voteScore - a.voteScore))
			}

		}

		case actionTypes.OPEN_COMMENTS_DIALOG: {
			return {
				...state,
				...action.params,
				showModal: true,
				selectedPostId: action.params.postId
			}

		}
		case actionTypes.CLOSE_COMMENTS_DIALOG: {
			return {
				...state,
				showModal: false
			}
		}
		case actionTypes.ADD_COMMENT: {
			return {
				...state,
				commentsArray: [...state.commentsArray, action.comment],
				showModal: false
			}
		}

		case actionTypes.EDIT_COMMENT_DETAILS: {
			return {
				...state,
				commentsArray: state.commentsArray.map((element) => {
					if (element.id === action.comment.id) return action.comment;
					else return element;
				}),
				showModal: false
			}
		}
		default: return state;

	}

};

const categoriesReducer = (state = defaultCategoriesState, action) => {
	switch (action.type) {
		case actionTypes.GET_ALL_CATEGORIES: {
			return [...action.categories];
		}
		default: return state;
	}

};

const postsReducer = (state = defaultPostsState, action) => {
	switch (action.type) {
		case actionTypes.GET_ALL_POSTS: {
			return {
				...state,
				postsArray: action.posts
			};
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
					default: return 1;
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
			if (post.id === action.post.id) return action.post;
				return post;
			}).sort((a, b) => (b.voteScore - a.voteScore))
			return {
				postsArray: posts
			};
		}
		case actionTypes.OPEN_DIALOG: {
			return {
				...state,
				...action.params,
				showModal: true
			}
		}
		case actionTypes.CLOSE_DIALOG: {
			return {
				...state,
				showModal: false
			}
		}

		case actionTypes.ADD_POST: {
			return {
				...state,
				postsArray: [...state.postsArray, action.post],
				showModal: false
			}
		}
		case actionTypes.EDIT_POST: {
			let postsArray = state.postsArray.map((post) => {
				if (post.id === action.post.id) return action.post;
				else return post;
			})
			return {
				...state,
				postsArray,
				showModal: false
			}
		}
		default: return state;
	}
};

export default combineReducers({
	posts: postsReducer,
	comments: commentsReducer,
	categories: categoriesReducer
});