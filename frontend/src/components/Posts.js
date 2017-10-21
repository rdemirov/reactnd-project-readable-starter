import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    fetchPosts,
    removePostAsync,
    voteForPostAsync,
    editPostAsync,
    openDialog,
    closeDialog,
    addPostAsync,
    sortPosts
} from '../actions';
import CreateUpdatePostDialog from './CreateUpdatePostDialog';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import {formatDate} from '../utils/helpers';
import {Grid, Row, Col} from 'react-bootstrap';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

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

    handleDelete(postId) {
        this.props.deletePost(postId);
    }

    openDialog() {
        this.props.openDialog({editPostFlag: false, postToEdit: {}});
    }

    openEditDialog(post) {
        let {author, category, title, body, id} = post;
        this
            .props
            .openDialog({
                postToEdit: {
                    author,
                    category,
                    title,
                    body,
                    id
                },
                editPostFlag: true
            });
    }

    handleUpVote(postId) {
        this
            .props
            .voteForPost({postId, option: 'upVote'});
    }

    handleDownVote(postId) {
        this
            .props
            .voteForPost({postId, option: 'downVote'});
    }

    render() {
        let {
            posts,

            closeDialog,
            showModal,
            categories,
            addPostAsync,
            postEditFlag,
            postToEdit,
            sortPosts
        } = this.props;
        return (

            <Paper zDepth={3} style={{
                height: '100%'
            }}>
                <Toolbar>
                    <ToolbarTitle text="Posts"/>
                    <ToolbarGroup>
                        <ToolbarTitle text="Sort by"/>
                        <div
                            style={{
                                padding: '1em'
                            }}>
                            <RaisedButton
                                label="NEWEST"
                                onClick={() => (sortPosts({sortBy: 'dateDesc'}))}
                                primary/>
                            <RaisedButton
                                label="OLDEST"
                                onClick={() => (sortPosts({sortBy: 'dateAsc'}))}
                                primary/>
                            <RaisedButton
                                label="MOST VOTED"
                                onClick={() => (sortPosts({sortBy: 'votesDesc'}))}
                                primary/>
                            <RaisedButton
                                label="LEAST VOTED"
                                onClick={() => (sortPosts({sortBy: 'votesAsc'}))}
                                primary/>
                        </div>
                    </ToolbarGroup>
                </Toolbar>

                <Grid>
                    <Row style={{
                        width: '95%'
                    }}>
                        <FlatButton
                            style={{
                                float: 'right'
                            }}
                            onClick={this.openDialog}
                            label="ADD NEW POST"
                            primary/>
                    </Row>
                    <Row>
                        {posts.map((post) => {
                            return (

                                <Col
                                    xs={5}
                                    style={{
                                        margin: '0.5em',
                                        fontSize: '0.875em'
                                    }}>
                                    <Card>
                                        <CardHeader
                                            title={formatDate(post.timestamp)}
                                            subtitle={`Votescore ${post.voteScore}`}/>
                                        <CardTitle title={post.title}/>
                                        <CardText>
                                            See more...
                                        </CardText>
                                    </Card>
                                </Col>

                            );
                        })}

                    </Row>

                </Grid>

                {showModal && <CreateUpdatePostDialog
                    showDialog={showModal}
                    closeDialog={closeDialog}
                    categories={categories}
                    addPost={addPostAsync}
                    editPost={editPostAsync}
                    editFlag={postEditFlag}
                    postToEdit={postToEdit}/>}
            </Paper>

        );
    }
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired,
    showModal: PropTypes.bool,
    categories: PropTypes
        .arrayOf(PropTypes.object)
        .isRequired,
    postEditFlag: PropTypes.bool,
    postToEdit: PropTypes.object,
    fetchPosts: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    voteForPost: PropTypes.func.isRequired,
    openDialog: PropTypes.func.isRequired,
    closeDialog: PropTypes.func.isRequired,
    addPostAsync: PropTypes.func.isRequired,
    editPostAsync: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({posts: state.posts.postsArray, showModal: state.posts.showModal, categories: state.categories, postEditFlag: state.posts.editPostFlag, postToEdit: state.posts.postToEdit});

export default connect(mapStateToProps, {
    fetchPosts,
    deletePost: removePostAsync,
    voteForPost: voteForPostAsync,
    openDialog,
    closeDialog,
    addPostAsync,
    editPostAsync,
    sortPosts
})(Posts);