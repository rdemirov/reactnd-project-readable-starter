import React from 'react'
import PropTypes from 'prop-types'
import { Jumbotron } from 'react-bootstrap';

const propTypes = {

}

function NotFound(props) {
    return (
        <Jumbotron>
            <h1>ERROR 404</h1>
            <p>The page you were looking for was not found.</p>
        </Jumbotron>
    )
}

NotFound.propTypes = propTypes

export default NotFound
