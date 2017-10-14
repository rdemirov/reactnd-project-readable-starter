import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentDetails from './CommentDetails';

import {Panel,Grid,Row,Col} from 'react-bootstrap';


class Comments extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
         
    }

    render() {
        let comments = this.props.comments || [];
        return (
           <Panel collapsible
           header={<label>Comments {comments.length}</label>}>
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
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)

