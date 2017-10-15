import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Button,
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
        this.defaultState = {
            formData: {
                author: 'anonymous',
                body: '',
                title: ''
            },
            validations: {
                author: null,
                title: null,
                body: null
            }
        };
        this.state = this.defaultState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let { postToEdit, editFlag } = this.props;
        if (editFlag) {
            this.setState((state) => ({
                ...state,
                formData: {
                    ...state.formData,
                    ...postToEdit
                }
            }))
        }
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
        else {
            if (this.props.editFlag) this.props.editPost({ ...formData, postId: this.props.postToEdit.id });
            else this.props.addPost(formData);
        }
    }

    render() {
        let { showDialog, closeDialog, categories, editFlag } = this.props;
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
                                <FormGroup validationState={this.state.validations.author}>
                                    <ControlLabel  style={{paddingLeft:'10%'}}>Author </ControlLabel>
                                </FormGroup>
                            </Col>
                            <Col xs={4}>
                                <FormGroup validationState={this.state.validations.author}>
                                    <FormControl
                                        type='text'
                                        id='author'
                                        placeholder='Enter post author'
                                        value={author}
                                        onChange={this.handleChange}
                                        disabled={editFlag}
                                    />
                                </FormGroup>
                            </Col>

                            <Col xs={2}>
                                <ControlLabel>Category </ControlLabel>
                            </Col>
                            <Col xs={4}>
                                <FormControl
                                    id='category'
                                    componentClass='select'
                                    disabled={editFlag}
                                    onChange={this.handleChange}
                                    value={category || categories[0]}>
                                    {categories.map((element) => (<option key={element.path} value={element.path}>{element.name}</option>))}
                                </FormControl>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="title" validationState={this.state.validations.title}>
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
                        <FormGroup controlId="body" validationState={this.state.validations.body}>
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

CreateUpdatePostDialog.propTypes = {
    showDialog: PropTypes.bool.isRequired,
    closeDialog: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(PropTypes.object),
    addPost: PropTypes.func.isRequired,
    editPost: PropTypes.func.isRequired,
    editFlag: PropTypes.bool.isRequired,
    postToEdit: PropTypes.object
}

export default CreateUpdatePostDialog;