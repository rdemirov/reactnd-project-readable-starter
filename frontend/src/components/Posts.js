import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, removePostAsync, voteForPostAsync } from '../actions';
import PostDetail from './PostDetail';
import {
	Panel,
	Grid,
	Row,
	Col,
	Button,
	ButtonToolbar,
	ButtonGroup,
	Label,
	Glyphicon,
	Modal

} from 'react-bootstrap';

class Posts extends Component {

	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleUpVote = this.handleUpVote.bind(this);
		this.handleDownVote = this.handleDownVote.bind(this);
	}

	componentDidMount() {
		this.props.fetchPosts();
	}

	handleDelete(postId) {
		this.props.deletePost(postId);
	}

	handleUpVote(postId) {
		this.props.voteForPost({ postId, option: 'upVote' });
	}

	handleDownVote(postId) {
		this.props.voteForPost({ postId, option: 'downVote' });
	}

	render() {
		let { posts } = this.props;
		return (
			<Panel header={<span><label>Posts</label> <Button style={{float:'right'}}>Add Post</Button></span>}>
				{posts.map((post) => (
					<Panel collapsible bsStyle='info'
						header={<Row>
							<Col xs={3}>
								<label>{new Date(post.timestamp).toLocaleDateString()}</label>
							</Col>
							<Col xs={6}>
								<label>{post.title}</label>
							</Col>
							<Col>
								<label>Votescore: {post.voteScore}</label>
							</Col>
						</Row>}
						footer={
							<ButtonToolbar>
								<ButtonGroup>
									<Button><Glyphicon glyph="pencil" /></Button>
									<Button onClick={() => (this.handleDelete(post.id))}>
										<Glyphicon style={{ color: 'red' }} glyph="remove" /> </Button>
									<Button onClick={() => (this.handleUpVote(post.id))}><Glyphicon glyph="thumbs-up" /></Button>
									<Button onClick={() => (this.handleDownVote(post.id))}><Glyphicon glyph="thumbs-down" /></Button>
								</ButtonGroup>
							</ButtonToolbar>
						}
						eventKey={post.id}>
                       <PostDetail post={post} />
					</Panel>
				))}
				<Modal show={this.props.showModal} onHide={this.close}>
				<Modal.Header closeButton>
				  <Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>

	  
				  <hr />
	  
				  <h4>Overflowing text to show scroll behavior</h4>
				  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
				  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
				  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
				  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
				  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
				  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
				  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
				  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
				  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
				</Modal.Body>
				<Modal.Footer>
				  <Button onClick={this.close}>Close</Button>
				</Modal.Footer>
			  </Modal>
			</Panel>
		);
	}
}

const mapStateToProps = (state) => ({
	posts: state.posts.postsArray,
	showModal:state.showModal
});


export default connect(mapStateToProps, { fetchPosts, deletePost: removePostAsync, voteForPost: voteForPostAsync })(Posts);