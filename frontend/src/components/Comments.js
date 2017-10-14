import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentDetails from './CommentDetails';
import {getCommentsForPostAsync} from '../actions'

import {Panel,Grid,Row,Col,Button,Badge} from 'react-bootstrap';


class Comments extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.getCommentsForPostAsync(this.props.postId);
    }

    render() {
        let comments = this.props.comments || [];
        return (
           <Panel 
           style={{width:'95%'}}
           collapsible
           header={<span><label>Comments <Badge>{comments.length}</Badge></label>  <Button style={{float:'right'}}>Add comment</Button></span>}>
            {
                comments.map((comment) =>(<CommentDetails comment={comment} />))
            }
           </Panel>
        )
    }
}

Comments.propTypes = {

}

const mapStateToProps = (state, ownProps) => ({
    comments:state.comments.filter((element)=>((element.parentId===ownProps.postId))),
    ...ownProps
})

const mapDispatchToProps = {
    getCommentsForPostAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)

