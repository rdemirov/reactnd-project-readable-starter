import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
	fetchPosts,
	removePostAsync,
	voteForPostAsync,
	editPostAsync,
	openDialog,
	closeDialog,
	addPostAsync,
	getPostsForCategoryAsync,
	sortPosts
} from '../actions';
import Post from './Post';
import CreateUpdatePostDialog from './CreateUpdatePostDialog'
import helpers from '../utils/helpers';
import {
	Panel,
	Row,
	Col,
	Button,
	ButtonToolbar,
	ButtonGroup,
	Glyphicon,
	Badge

} from 'react-bootstrap';
import Categories from './Categories';

class Posts extends Component {

	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleUpVote = this.handleUpVote.bind(this);
		this.handleDownVote = this.handleDownVote.bind(this);
		this.openDialog = this.openDialog.bind(this);
		this.openEditDialog = this.openEditDialog.bind(this);
	}

	componentDidMount() {
		this.props.fetchPosts();
	}

	componentWillReceiveProps(nextProps) {
			if(nextProps.category!=='all')
			this.props.getPostsForCategoryAsync(nextProps.category);
			else this.props.fetchPosts()
		} 


	handleDelete(postId) {
		this.props.deletePost(postId);
	}

	openDialog() {
		this.props.openDialog({ editPostFlag: false, postToEdit: {} });
	}

	openEditDialog(post) {
		let { author, category, title, body, id } = post;
		this.props.openDialog({ postToEdit: { author, category, title, body, id }, editPostFlag: true });
	}


	handleUpVote(postId) {
		this.props.voteForPost({ postId, option: 'upVote' });
	}

	handleDownVote(postId) {
		this.props.voteForPost({ postId, option: 'downVote' });
	}

	render() {
		let { posts,
			editPostAsync,
			closeDialog,
			showModal,
			categories,
			addPostAsync,
			postEditFlag,
			sortPosts,
			postToEdit } = this.props;
		return (
			<Panel header={<span><label>Posts</label>	<ButtonGroup bsSize="large">
			<Button onClick={() => (sortPosts({ sortBy: 'dateDesc' }))}>Newest </Button>
			<Button onClick={() => (sortPosts({ sortBy: 'dateAsc' }))}>Oldest</Button>
			<Button onClick={() => (sortPosts({ sortBy: 'votesDesc' }))}>Most voted</Button>
			<Button onClick={() => (sortPosts({ sortBy: 'votesAsc' }))}>Least voted</Button>
		</ButtonGroup> <Button onClick={this.openDialog} style={{ float: 'right' }}>Add Post</Button></span>}>
				<Row>
						<Categories />
					
				</Row>
				{posts.map((post) => (
					<Panel key={post.id} bsStyle='info'
						header={<Row>
							<Col xs={6}>
								<label>{helpers.formatDate(post.timestamp)}</label>
							</Col>
							<Col xs={6}>
								<label>{post.title}</label>
							</Col>
						</Row>}
						footer={
							<ButtonToolbar>
								<ButtonGroup>
									<Button onClick={() => (this.openEditDialog(post))}><Glyphicon glyph="pencil" /></Button>
									<Button onClick={() => (this.handleDelete(post.id))}>
										<Glyphicon style={{ color: 'red' }} glyph="remove" /> </Button>
									<Button onClick={() => (this.handleUpVote(post.id))}>
										<Glyphicon style={{ color: 'green' }} glyph="thumbs-up" />&nbsp;<Badge pullRight style={{ backgroundColor: 'green' }}>{post.voteScore > 0 ? post.voteScore : ''}</Badge></Button>
									<Button onClick={() => (this.handleDownVote(post.id))}>
										<Glyphicon style={{ color: 'red' }} glyph="thumbs-down" />&nbsp;<Badge pullRight style={{ backgroundColor: 'red' }}>{post.voteScore < 0 ? post.voteScore : ''}</Badge></Button>
								</ButtonGroup>
							</ButtonToolbar>
						}
						eventKey={post.id}>
						<Post key={post.id} post={post} />
					</Panel>
				))}
				{showModal && <CreateUpdatePostDialog
					showDialog={showModal}
					closeDialog={closeDialog}
					categories={categories}
					addPost={addPostAsync}
					editPost={editPostAsync}
					editFlag={postEditFlag}
					postToEdit={postToEdit}

				/>}
			</Panel>
		);
	}
}

Posts.propTypes = {
	posts: PropTypes.array.isRequired,
	showModal: PropTypes.bool,
	categories: PropTypes.arrayOf(PropTypes.object).isRequired,
	postEditFlag: PropTypes.bool,
	postToEdit: PropTypes.object,
	fetchPosts: PropTypes.func.isRequired,
	deletePost: PropTypes.func.isRequired,
	voteForPost: PropTypes.func.isRequired,
	openDialog: PropTypes.func.isRequired,
	closeDialog: PropTypes.func.isRequired,
	addPostAsync: PropTypes.func.isRequired,
	editPostAsync: PropTypes.func.isRequired
}

const mapStateToProps = (state,ownProps) => ({
	posts: state.posts.postsArray,
	showModal: state.posts.showModal,
	categories: state.categories,
	postEditFlag: state.posts.editPostFlag,
	postToEdit: state.posts.postToEdit,
	history:ownProps.history,
	category:ownProps.category
});


export default connect(mapStateToProps, {
	fetchPosts,
	deletePost: removePostAsync,
	voteForPost: voteForPostAsync,
	openDialog,
	closeDialog,
	addPostAsync,
	editPostAsync,
	getPostsForCategoryAsync,
	sortPosts
})(Posts);