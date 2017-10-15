import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentDetails from './CommentDetails';
import { getCommentsForPostAsync, openCommentsDialog, closeCommentsDialog } from '../actions'
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
        let { showModal, closeCommentsDialog } = this.props;
        return (
            <Panel
                style={{ width: '95%' }}
                header={<span><label>Comments <Badge>{comments.length}</Badge></label>
                    <Button style={{ float: 'right' }} onClick={this.props.openCommentsDialog}>Add comment</Button></span>}>
                {
                    comments.map((comment) => (<CommentDetails comment={comment} />))
                }
                <CreateUpdateCommentDialog
                    showDialog={showModal}
                    closeDialog={closeCommentsDialog}

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
    getCommentsForPostAsync, openCommentsDialog, closeCommentsDialog
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)

