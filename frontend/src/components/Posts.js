import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, removePostAsync } from '../actions';
import {
	Panel,
	Grid,
	Row,
	Col,
	Button,
	ButtonToolbar,
	ButtonGroup,
	Glyphicon

} from 'react-bootstrap';

class Posts extends Component {

	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}

	componentDidMount() {
		this.props.fetchPosts();
	}

	handleDelete(event) {
		this.props.deletePost(event.target.id);
	}

	render() {
		let { posts } = this.props;
		return (
			<Panel header={<label>Posts</label>}>
				{posts.map((post) => (
					<Panel collapsible bsStyle='info' header={<Row>
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
								<Button id={post.id} onClick={this.handleDelete}>
									<Glyphicon style={{ color: 'red' }} glyph="remove" /> </Button>
								<Button><Glyphicon glyph="thumbs-up" /></Button>
								<Button><Glyphicon glyph="thumbs-down" /></Button>
							</ButtonGroup>
						</ButtonToolbar>
					}
					eventKey={post.id}>
						{post.body}
					</Panel>
				))}
			</Panel>
		);
	}
}

const mapStateToProps = (state) => ({
	posts: state.posts
});


export default connect(mapStateToProps, { fetchPosts,deletePost:removePostAsync })(Posts);