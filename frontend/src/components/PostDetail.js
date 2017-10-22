import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
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
import Comments from './Comments';
import CreateUpdatePostDialog from './CreateUpdatePostDialog'
import helpers from '../utils/helpers';
import {
    Panel,
    Grid,
    PageHeader,
    Label,
    Row,
    Col,
    Button,
    ButtonToolbar,
    ButtonGroup,
    FormControl,
    Glyphicon,
    Badge

} from 'react-bootstrap';


class PostDetail extends Component {
    constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleUpVote = this.handleUpVote.bind(this);
		this.handleDownVote = this.handleDownVote.bind(this);
		this.openEditDialog = this.openEditDialog.bind(this);
    }
    
    handleDelete(postId) {
        this.props.removePostAsync(postId);
        this.props.history.push('/');
	}


	openEditDialog(post) {
		let { author, category, title, body, id } = post;
		this.props.openDialog({ postToEdit: { author, category, title, body, id }, editPostFlag: true });
	}


	handleUpVote(postId) {
		this.props.voteForPostAsync({ postId, option: 'upVote' });
	}

	handleDownVote(postId) {
		this.props.voteForPostAsync({ postId, option: 'downVote' });
	}

    render() {
       const {post,history,editPostAsync,
        closeDialog,
        showModal,
        categories,
        addPostAsync,
        postEditFlag,
        sortPosts,
        postToEdit}=this.props;
        return (
          <Grid>
              <Row>
                  <PageHeader>
                      <h1>{post.title}</h1>
                  </PageHeader>
                
              </Row>
              <Row>
                  <Col xs={12}>
             
								<ButtonGroup>
                                <Button onClick={() => (history.push('/'))}><Glyphicon glyph="chevron-left" /></Button>
									<Button onClick={() => (this.openEditDialog(post))}><Glyphicon glyph="pencil" /></Button>
									<Button onClick={() => (this.handleDelete(post.id))}>
										<Glyphicon style={{ color: 'red' }} glyph="remove" /> </Button>
									<Button onClick={() => (this.handleUpVote(post.id))}>
										<Glyphicon style={{ color: 'green' }} glyph="thumbs-up" />&nbsp;<Badge pullRight style={{ backgroundColor: 'green' }}>{post.voteScore > 0 ? post.voteScore : ''}</Badge></Button>
									<Button onClick={() => (this.handleDownVote(post.id))}>
										<Glyphicon style={{ color: 'red' }} glyph="thumbs-down" />&nbsp;<Badge pullRight style={{ backgroundColor: 'red' }}>{post.voteScore < 0 ? post.voteScore : ''}</Badge></Button>
								</ButtonGroup>
						
                            </Col>
              </Row>
              <Row style={{marginTop:'1.5em'}}>
               <Col xs={2}>
               <Label>Author :</Label>
               </Col>
               <Col xs={6}>
               {post.author}
               </Col>
               </Row>
               <Row style={{marginBottom:'1.5em'}}>
               <Col xs={2}>
               <Label>Date :</Label>
               </Col>
               <Col xs={6}>
               {helpers.formatDate(post.timestamp)}
               </Col>
              </Row>
              <Row style={{marginBottom:'1.5em'}}>
                  <Col xs={8}>
                  <FormControl.Static>
                      {post.body}
                  </FormControl.Static>
                  </Col>
              </Row>
              <Row>
                  <Comments postId={post.id} post={post} />
              </Row>
              {showModal && <CreateUpdatePostDialog
					showDialog={showModal}
					closeDialog={closeDialog}
					categories={categories}
					addPost={addPostAsync}
					editPost={editPostAsync}
					editFlag={postEditFlag}
					postToEdit={postToEdit}

				/>}
          </Grid>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    postId:ownProps.match.params.postId,
    history:ownProps.history,
    post:state.posts.postsArray.filter((element)=>(element.id===ownProps.match.params.postId))[0],
    showModal: state.posts.showModal,
	categories: state.categories,
	postEditFlag: state.posts.editPostFlag,
	postToEdit: state.posts.postToEdit

})

const mapDispatchToProps = {
    removePostAsync,
    voteForPostAsync

}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
