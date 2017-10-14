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
                title: '',
                body: ''
            },
            validations: {
                author: null,
                title: null,
                body: null
            }
        };
    }

    render() {
        let { showDialog, closeDialog } = this.props;
        return (
            <Modal show={showDialog} bsSize="large" onHide={closeDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD/EDIT POST</Modal.Title>
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
                                    placeholder='Enter post author'
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="title">
                            <Col xs={2}>
                                <ControlLabel>Title </ControlLabel>
                            </Col>
                            <Col xs={10}>
                                <FormControl
                                    type='text'
                                    placeholder='Enter post title'
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
                                    placeholder="Enter post body" />
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