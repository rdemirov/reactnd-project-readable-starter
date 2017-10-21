import React, { Component } from 'react';
import Posts from './Posts';
import {
    Grid,
    Row,
    PageHeader
} from 'react-bootstrap';

class Readable extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <PageHeader>
                     Readable
                        <small> Second project of the Udacity React nanodegree</small>
                    </PageHeader>
                </Row>
                <Row>
                    <Posts />
                </Row>
            </Grid>
        );
    }
}

export default Readable;
