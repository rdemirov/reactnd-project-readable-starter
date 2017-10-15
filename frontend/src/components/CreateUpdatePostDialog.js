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
                body:'',
                title:''
            },
            validations: {
                author: null,
                title: null,
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
        this.props.addPost(this.state.formData);
    }

    render() {
        let { showDialog, closeDialog, categories } = this.props;
        let { author, title, category, body } = this.state.formData;
        return (
            <Modal show={showDialog} bsSize="large" onHide={closeDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD/EDIT POST</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form horizontal>
                        <FormGroup>
                            <Col xs={2}>
                                <ControlLabel>Author </ControlLabel>
                            </Col>
                            <Col xs={4}>
                                <FormControl
                                    type='text'
                                    id='author'
                                    placeholder='Enter post author'
                                    value={author}
                                    onChange={this.handleChange}
                                />
                            </Col>
                            <Col xs={2}>
                                <ControlLabel>Category </ControlLabel>
                            </Col>
                            <Col xs={4}>
                                <FormControl
                                    id='category'
                                    componentClass='select'
                                    onChange={this.handleChange}
                                    value={category || categories[0]}>
                                    {categories.map((element) => (<option key={element.path} value={element.path}>{element.name}</option>))}
                                </FormControl>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="title">
                            <Col xs={2}>
                                <ControlLabel>Title </ControlLabel>
                            </Col>
                            <Col xs={10}>
                                <FormControl
                                    type='text'
                                    value={title}
                                    onChange={this.handleChange}
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
                                    value={body}
                                    onChange={this.handleChange}
                                    placeholder="Enter post body" />
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