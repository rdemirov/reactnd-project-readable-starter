import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentDetails from './CommentDetails';
import { getCommentsForPostAsync, openCommentsDialog, closeCommentsDialog,addCommentAsync } from '../actions'
import CreateUpdateCommentDialog from './CreateUpdateCommentDialog';

import { Panel, Grid, Row, Col, Button, Badge } from 'react-bootstrap';


class Comments extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.getCommentsForPostAsync(this.props.postId);
    }

    render() {
        let comments = this.props.comments || [];
        let { showModal, closeCommentsDialog,addCommentAsync } = this.props;
        return (
            <Panel
                style={{ width: '95%' }}
                header={<span><label>Comments <Badge>{comments.length}</Badge></label>
                    <Button style={{ float: 'right' }} onClick={this.props.openCommentsDialog}>Add comment</Button></span>}>
                {
                    comments.map((comment) => (<CommentDetails key={comment.id} comment={comment} />))
                }
                <CreateUpdateCommentDialog
                    showDialog={showModal}
                    closeDialog={closeCommentsDialog}
                    handleSubmit={addCommentAsync}
                />
            </Panel>
        )
    }
}

Comments.propTypes = {

}

const mapStateToProps = (state, ownProps) => ({
    comments: state.comments.commentsArray.filter((element) => ((element.parentId === ownProps.postId))),
    showModal: state.comments.showModal,
    ...ownProps
})

const mapDispatchToProps = {
    getCommentsForPostAsync, openCommentsDialog, closeCommentsDialog,addCommentAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)

