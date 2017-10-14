import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Panel, Well, Grid, Row, Col, Button, ButtonGroup, ButtonToolbar, Glyphicon, Badge } from 'react-bootstrap';
import { deleteCommentAsync, voteForCommentAsync } from '../actions'
import { connect } from 'react-redux'
class CommentDetails extends Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpVote = this.handleUpVote.bind(this);
        this.handleDownVote = this.handleDownVote.bind(this);
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

    render() {
        let { comment } = this.props;
        return (
            <Well >
                <Grid>
                    <Row>
                        <Col xs={10}>
                       { moment(new Date(comment.timestamp)).format('YYYY-MM-DD')}
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
                                <Button><Glyphicon glyph="pencil" /></Button>
                                <Button onClick={() => (this.handleDelete(comment.id))}>
                                    <Glyphicon style={{ color: 'red' }} glyph="remove" /> </Button>
                                <Button onClick={() => (this.handleUpVote(comment.id))}>
                                    <Glyphicon style={{ color: 'green' }} glyph="thumbs-up" />&nbsp;<Badge pullRight style={{ backgroundColor: 'green' }}>{comment.voteScore > 0 ? comment.voteScore : ''}</Badge></Button>
                                <Button onClick={() => (this.handleDownVote(comment.id))}>
                                    <Glyphicon style={{ color: 'red' }} glyph="thumbs-down" />&nbsp;<Badge pullRight style={{ backgroundColor: 'red' }}>{comment.voteScore < 0 ? comment.voteScore : ''}</Badge></Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </Row>
                </Grid>
            </Well>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    comment: ownProps.comment
})

const mapDispatchToProps = {
    deleteCommentAsync, voteForCommentAsync
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentDetails)
