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
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let { id, value } = event.target;
        let formData = this.state.formData;
        formData[id] = value;
        this.setState((state) => {
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...formData
                }
            }
        })
    }

    handleSubmit() {
        let validationFlag = true;
        let formData = this.state.formData;
        let validations = this.state.validations;
        for (let key in formData) {
            if (!formData[key] || formData[key].length === 0) {
                validations[key] = 'error';
                validationFlag = false;
            } else validations[key] = 'success';
        }

        if (!validationFlag) this.setState({
            ...this.state,
            validations
        })
        else this.props.addComment({...formData,parentId:this.props.parentId});
    }

    componentDidMount() {
        let { commentToEdit, editFlag } = this.props;
        if (editFlag) {
            this.setState((state) => ({
                ...state,
                formData: {
                    ...state.formData,
                    ...commentToEdit
                }
            }))
        }
    }

    render() {
        let { showDialog, closeDialog,editFlag } = this.props;
        let { author, body } = this.state.formData;
        return (
            <Modal show={showDialog} bsSize="large" onHide={closeDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD/EDIT COMMENT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form horizontal>
                        <FormGroup
                            validationState={this.state.validations.author}
                            controlId="author">
                            <Col xs={2}>
                                <ControlLabel>Author </ControlLabel>
                            </Col>
                            <Col xs={10}>
                                <FormControl
                                    type='text'
                                    disabled={editFlag}
                                    placeholder='Enter comment author'
                                    value={author}
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup
                            validationState={this.state.validations.body}
                            controlId="body">
                            <Col xs={1}>
                                <ControlLabel>Body</ControlLabel>
                            </Col>
                            <Col xs={11}>
                                <FormControl
                                    rows={10}
                                    componentClass="textarea"
                                    placeholder="Enter comment body"
                                    value={body}
                                    onChange={this.handleChange}
                                />

                            </Col>
                        </FormGroup>
                        <Clearfix />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle='danger' onClick={closeDialog}>Cancel</Button>
                    <Button bsStyle='success' onClick={this.handleSubmit}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default CreateUpdatePostDialog;