import React, { Component } from 'react';
import PropTypes from 'prop-types';
import helpers from '../utils/helpers';
import {
    Well,
    Grid,
    Row,
    Col,
    Button,
    ButtonGroup,
    ButtonToolbar,
    Glyphicon,
    Badge
} from 'react-bootstrap';

import {
    deleteCommentAsync,
    voteForCommentAsync,
    openCommentsDialog
} from '../actions'
import { connect } from 'react-redux'
class CommentDetails extends Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpVote = this.handleUpVote.bind(this);
        this.handleDownVote = this.handleDownVote.bind(this);
        this.openEditDialog = this.openEditDialog.bind(this);
    }

    handleDelete(commentId) {
        this.props.deleteCommentAsync(commentId);
    }

    handleUpVote(commentId) {
        this.props.voteForCommentAsync({ commentId, option: 'upVote' });
    }

    handleDownVote(commentId) {
        this.props.voteForCommentAsync({ commentId, option: 'downVote' });
    }

    openEditDialog(comment) {
        let { body, id } = comment;
        this.props.openCommentsDialog({ commentToEdit: { body, id }, editCommentFlag: true });
    }

    render() {
        const { comment } = this.props;
        return (
            <Well >
                <Grid>
                    <Row>
                        <Col xs={10}>
                            {helpers.formatDate(comment.timestamp)}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Well style={{ width: '88%' }}> {comment.body}</Well>
                        </Col>
                    </Row>
                    <Row>
                        <ButtonToolbar>
                            <ButtonGroup>
                                <Button onClick={() => (this.openEditDialog(comment))}>
                                    <Glyphicon glyph="pencil" /></Button>
                                <Button onClick={() => (this.handleDelete(comment.id))}>
                                    <Glyphicon style={{ color: 'red' }} glyph="remove" /> </Button>
                                <Button onClick={() => (this.handleUpVote(comment.id))}>
                                    <Glyphicon style={{ color: 'green' }} glyph="thumbs-up" />
                                    <Badge pullRight style={{ backgroundColor: 'green' }}>{comment.voteScore > 0 ? comment.voteScore : ''}</Badge>
                                </Button>
                                <Button onClick={() => (this.handleDownVote(comment.id))}>
                                    <Glyphicon style={{ color: 'red' }} glyph="thumbs-down" />
                                    <Badge pullRight style={{ backgroundColor: 'red' }}>{comment.voteScore < 0 ? comment.voteScore : ''}</Badge>
                                </Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </Row>
                </Grid>
            </Well>
        )
    }
}

CommentDetails.propTypes = {
    comment: PropTypes.object.isRequired,
    deleteCommentAsync: PropTypes.func.isRequired,
    voteForCommentAsync: PropTypes.func.isRequired,
    openCommentsDialog: PropTypes.func.isRequired
}


const mapStateToProps = (state, ownProps) => ({
    comment: ownProps.comment
})

const mapDispatchToProps = {
    deleteCommentAsync,
    voteForCommentAsync,
    openCommentsDialog
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentDetails)
