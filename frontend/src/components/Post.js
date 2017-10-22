import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Grid,Row,Col,Label,Badge} from 'react-bootstrap';
import {getCommentsForPostAsync} from '../actions';


class Post extends Component {

    componentDidMount() {
          this.props.getCommentsForPostAsync(this.props.post.id)
    }

    render() {
        let {post,comments} = this.props;
        return (
           <Grid>
               <Row>
                   <Col xs={1}>Author </Col>
                   <Col xs={11}>{post.author}</Col>
               </Row>
               <Row>
                   <Col xs={1}>Comments </Col>
                   <Col xs={11}>{comments.length}</Col>
               </Row>
           </Grid>
        )
    }
}


Post.propTypes = {
    post: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => ({
    comments:state.comments.commentsArray.filter((comment)=>(comment.parentId===ownProps.post.id)),
    ...ownProps
});

const mapDispatchToProps = {
    getCommentsForPostAsync
}



export default connect(mapStateToProps, mapDispatchToProps)(Post)
