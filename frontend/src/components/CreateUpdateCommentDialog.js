import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Button,
    Row,
    Col,
    Form,
    FormControl,
    ControlLabel,
    FormGroup,
    Modal,
    Clearfix
} from 'react-bootstrap';

class CreateUpdatePostDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                author: 'anonymous',
                body: ''
            },
            validations: {
                author: null,
                body: null
            }
        };
    }

    render() {
        let { showDialog, closeDialog } = this.props;
        return (
            <Modal show={showDialog} bsSize="large" onHide={closeDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD/EDIT COMMENT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form horizontal>
                        <FormGroup
                            controlId="author">
                            <Col xs={2}>
                                <ControlLabel>Author </ControlLabel>
                            </Col>
                            <Col xs={10}>
                                <FormControl
                                    type='text'
                                    placeholder='Enter comment author'
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="body">
                            <Col xs={1}>
                                <ControlLabel>Body</ControlLabel>
                            </Col>
                            <Col xs={11}>
                                <FormControl
                                    rows={10}
                                    componentClass="textarea"
                                    placeholder="Enter comment body" />
                            </Col>
                        </FormGroup>
                        <Clearfix />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle='danger' onClick={closeDialog}>Cancel</Button>
                    <Button bsStyle='success' onClick={closeDialog}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default CreateUpdatePostDialog;