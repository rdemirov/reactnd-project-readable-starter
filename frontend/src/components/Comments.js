import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CommentDetails from './CommentDetails';
import {
    getCommentsForPostAsync,
    openCommentsDialog,
    editCommentAsync,
    closeCommentsDialog,
    addCommentAsync
} from '../actions';
import CreateUpdateCommentDialog from './CreateUpdateCommentDialog';

import { Panel, Button, Badge } from 'react-bootstrap';


class Comments extends Component {
    constructor(props) {
        super(props)
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
    }

    handleOpenDialog() {
        this.props.openCommentsDialog({ postId: this.props.postId, editCommentFlag: false, commentToEdit: {} })
    }

    componentDidMount() {
        this.props.getCommentsForPostAsync(this.props.postId);
    }

    render() {
        let comments = this.props.comments || [];
        let { showModal, closeCommentsDialog, editCommentAsync, addCommentAsync, editCommentFlag, commentToEdit } = this.props;
        return (
            <Panel
                style={{ width: '95%' }}
                header={<span><label>Comments <Badge>{comments.length}</Badge></label>
                    <Button style={{ float: 'right' }} onClick={this.handleOpenDialog}>Add comment</Button></span>}>
                {
                    comments.map((comment) => (<CommentDetails key={comment.id} comment={comment} />))
                }
                {showModal && <CreateUpdateCommentDialog
                    showDialog={showModal}
                    closeDialog={closeCommentsDialog}
                    handleSubmit={addCommentAsync}
                    addComment={addCommentAsync}
                    editComment={editCommentAsync}
                    parentId={this.props.parentId}
                    editFlag={editCommentFlag}
                    commentToEdit={commentToEdit}
                />}
            </Panel>
        )
    }
}

Comments.propTypes = {
    comments: PropTypes.array,
    showModal: PropTypes.bool,
    parentId: PropTypes.string,
    editCommentFlag: PropTypes.bool,
    commentToEdit: PropTypes.object,
    postId: PropTypes.string.isRequired,
    getCommentsForPostAsync: PropTypes.func.isRequired,
    editCommentAsync: PropTypes.func.isRequired,
    openCommentsDialog: PropTypes.func.isRequired,
    closeCommentsDialog: PropTypes.func,
    addCommentAsync: PropTypes.func.isRequired

}

const mapStateToProps = (state, ownProps) => ({
    comments: state.comments.commentsArray.filter((element) => ((element.parentId === ownProps.postId))),
    showModal: state.comments.showModal,
    parentId: state.comments.selectedPostId,
    editCommentFlag: state.comments.editCommentFlag,
    commentToEdit: state.comments.commentToEdit,
    ...ownProps
})

const mapDispatchToProps = {
    getCommentsForPostAsync,
    editCommentAsync,
    openCommentsDialog,
    closeCommentsDialog,
    addCommentAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)

