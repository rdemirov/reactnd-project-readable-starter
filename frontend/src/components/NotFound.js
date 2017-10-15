import React from 'react'
import { Jumbotron } from 'react-bootstrap';

function NotFound(props) {
    return (
        <Jumbotron>
            <h1>ERROR 404</h1>
            <p>The page you were looking for was not found.</p>
        </Jumbotron>
    )
}

export default NotFound
