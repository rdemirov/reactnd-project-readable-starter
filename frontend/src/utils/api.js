import uuid from 'uuid';
const url = 'http://localhost';
const port = 3001;

let token = localStorage.token;
if (!token)
	token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
	'Accept': 'application/json',
	'Content-type': 'application/json',
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
			.then(posts => posts),

	getPostsForCategory: (category) =>
		fetch(`${url}:${port}/posts/${category}`, { headers })
			.then(res => res.json())
			.then(posts => posts),

	getCommentsForPost: (postId) =>
		fetch(`${url}:${port}/posts/${postId}/comments`, { headers })
			.then(res => res.json())
			.then(comments => comments),

	getCommentDetails: (commentId) =>
		fetch(`${url}:${port}/comments/${commentId}`, { headers })
			.then(res => res.json())
			.then(comment => comment),

	getPostDetails: (postId) =>
		fetch(`${url}:${port}/posts/${postId}`, { headers })
			.then(res => res.json())
			.then(post => post),

	editPostDetails: (params) => {
		let { postId, title, body } = params;
		return fetch(`${url}:${port}/posts/${postId}`,
			{ headers, method: 'PUT', body: { title, body } })
			.then(res => res.json())
			.then(post => post);
	},

	editCommentDetails: (params) => {
		let { commentId, body } = params;
		let timestamp = Date.now();
		return fetch(`${url}:${port}/comments/${commentId}`,
			{ headers, method: 'PUT', body: { timestamp, body } })
			.then(res => res.json())
			.then(comment => comment);
	},

	deleteComment: (commentId) =>
		fetch(`${url}:${port}/comments/${commentId}`,
			{ headers, method: 'DELETE' })
			.then(res => res.json())
			.then(comment => comment),

	deletePost: (postId) =>
		fetch(`${url}:${port}/posts/${postId}`,
			{ headers, method: 'DELETE' })
			.then(res => res.json())
			.then(post => post),

	voteForPost: (params) => {
		let { postId, option } = params;
		console.log(params);
		return fetch(`${url}:${port}/posts/${postId}`,
			{
				headers,
				method: 'POST',
				body: JSON.stringify({ option:params.option })
			})
			.then(res => res.json())
			.then(post => post);
	},

	voteForComment: (params) => {
		let { commentId, option } = params;
		return fetch(`${url}:${port}/comments/${commentId}`,
			{ headers, method: 'POST', body: { option } })
			.then(res => res.json())
			.then(comment => comment);
	},

	addNewPost: (params) => {
		params.id = uuid.v1();
		params.timestamp = Date.now();
		return fetch(`${url}:${port}/posts/`,
			{ headers, method: 'POST', body: params })
			.then(res => res.json())
			.then(post => post);
	},

	addNewComment: (params) => {
		params.id = uuid.v1();
		params.timestamp = Date.now();
		return fetch(`${url}:${port}/comments`,
			{ headers, method: 'POST', body: params })
			.then(res => res.json())
			.then(comment => comment);
	}
};