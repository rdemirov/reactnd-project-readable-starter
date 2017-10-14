import React from 'react'
import PropTypes from 'prop-types'
import {Grid,Row,Col,Label} from 'react-bootstrap';


function PostDetail(props) {
    let {post} = props;
    return (
        <Grid>
            <Row>
                <Col xs={1}>
                    <Label>Author :</Label>
                </Col>
                <Col xs={6}>
                    {post.author}
                </Col>
            </Row>
            <Row>
                <Col>
                    {post.body}
                </Col>
            </Row>
        </Grid>
    )
}

PostDetail.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostDetail
