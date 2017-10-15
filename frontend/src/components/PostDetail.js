import React from 'react'
import PropTypes from 'prop-types'
import {Grid,Row,Col,Label} from 'react-bootstrap';
import Comments from './Comments';


function PostDetail(props) {
    let {post} = props;
    return (
        <Grid>
            <Row style={{paddingBottom:'1.5em'}}>
                <Col xs={1}>
                    <Label>Author :</Label>
                </Col>
                <Col xs={6}>
                    {post.author}
                </Col>
            </Row>
            <Row style={{paddingBottom:'1.5em'}}>
                <Col>
                    {post.body}
                </Col>
            </Row>
            <Row>
                <Comments postId={post.id}/>
            </Row>
        </Grid>
    )
}

PostDetail.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostDetail
