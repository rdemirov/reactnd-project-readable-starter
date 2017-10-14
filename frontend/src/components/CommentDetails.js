import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Panel, Well, Grid, Row, Col, Button, ButtonGroup, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux'
class CommentDetails extends Component {

    render() {
        let { comment } = this.props;
        return (
            <Well>
                <Grid>
                    <Row>
                        <Col xs={2}>
                            {new Date(comment.timestamp).toLocaleDateString()}
                        </Col>
                        <Col xs={8} />
                        <Col xs={4}>
                            {comment.voteScore}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                           <Well> {comment.body}</Well>
                        </Col>
                    </Row>
                    <Row>
                        <ButtonToolbar>
                            <ButtonGroup>
                                <Button><Glyphicon glyph="pencil" /></Button>
                                <Button onClick={() => (this.handleDelete(comment.id))}>
                                    <Glyphicon style={{ color: 'red' }} glyph="remove" /> </Button>
                                <Button onClick={() => (this.handleUpVote(comment.id))}><Glyphicon glyph="thumbs-up" /></Button>
                                <Button onClick={() => (this.handleDownVote(comment.id))}><Glyphicon glyph="thumbs-down" /></Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </Row>
                </Grid>
            </Well>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    ...ownProps
})

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(CommentDetails)
