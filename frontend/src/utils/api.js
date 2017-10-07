import uuid from 'uuid';
const url = 'http://localhost';
const port = 3001;

let token = localStorage.token;
if (!token)
	token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
	'Accept': 'application/json',
	'Authorization': token
};

export default {
	getCategories: () =>
		fetch(`${url}:${port}/categories`, { headers })
			.then(res => res.json())
			.then(data => data.categories),

	getPosts: () =>
		fetch(`${url}:${port}/posts`, { headers })
			.then(res => res.json())
			.then(data => data),

	getPostsForCategory: (category) =>
		fetch(`${url}:${port}/posts/:${category}`, { headers })
			.then(res => res.json())
			.then(data => data.posts),

	getComments: (postId) =>
		fetch(`${url}:${port}/posts/:${postId}/comments`, { headers })
			.then(res => res.json())
			.then(data => data.posts),

	getCommentDetails: (commentId) =>
		fetch(`${url}:${port}/comments/:${commentId}`, { headers })
			.then(res => res.json())
			.then(data => data.comments),

	getPostDetails: (postId) =>
		fetch(`${url}:${port}/posts/:${postId}`, { headers })
			.then(res => res.json())
			.then(data => data.posts),

	editPostDetails: (params) => {
		let { postId, title, body } = params;
		return fetch(`${url}:${port}/posts/:${postId}`,
			{ headers, method: 'PUT', body: { title, body } })
			.then(res => res.json())
			.then(data => data.posts);
	},

	editCommentDetails: (params) => {
		let { commentId, body } = params;
		let timestamp = Date.now();
		return fetch(`${url}:${port}/comments/:${commentId}`,
			{ headers, method: 'PUT', body: { timestamp, body } })
			.then(res => res.json())
			.then(data => data.posts);
	},

	deleteComment: (commentId) =>
		fetch(`${url}:${port}/comments/:${commentId}`,
			{ headers, method: 'DELETE' })
			.then(res => res.json())
			.then(data => data.posts),

	deletePost: (postId) =>
		fetch(`${url}:${port}/posts/:${postId}`,
			{ headers, method: 'DELETE' })
			.then(res => res.json())
			.then(data => data.posts),

	voteForPost: (params) => {
		let { postId, option } = params;
		return fetch(`${url}:${port}/posts/:${postId}`,
			{ headers, method: 'POST', body: { option } })
			.then(res => res.json())
			.then(data => data.posts);
	},

	voteForComment: (params) => {
		let { commentId, option } = params;
		return fetch(`${url}:${port}/comments/:${commentId}`,
			{ headers, method: 'POST', body: { option } })
			.then(res => res.json())
			.then(data => data.posts);
	},

	addNewPost: (params) => {
		params.id = uuid.v1();
		params.timestamp = Date.now();
		return fetch(`${url}:${port}/posts/`,
			{ headers, method: 'POST', body: params })
			.then(res => res.json())
			.then(data => data.posts);
	},

	addNewComment: (params) => {
		params.id = uuid.v1();
		params.timestamp = Date.now();
		return fetch(`${url}:${port}/comments`,
			{ headers, method: 'POST', body: params })
			.then(res => res.json())
			.then(data => data.posts);
	}
};