import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
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
	componentDidMount() {
		this.props.fetchPosts();
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
								<Button><Glyphicon style={{ color: 'red' }} glyph="remove" /> </Button>
								<Button><Glyphicon glyph="thumbs-up" /></Button>
								<Button><Glyphicon glyph="thumbs-down" /></Button>
							</ButtonGroup>
						</ButtonToolbar>
					}
					eventKey="2">
						<p>
							{post.body}
						</p>
					</Panel>
				))}
			</Panel>
		);
	}
}

const mapStateToProps = (state) => ({
	posts: state.posts
});


export default connect(mapStateToProps, { fetchPosts })(Posts);