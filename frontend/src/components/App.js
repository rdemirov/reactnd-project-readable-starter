import React, { Component } from 'react';
import Categories from './Categories';
import { connect } from 'react-redux';
import './App.css';
import {
	Grid,
	Row,
	Col,
	Button,
	ButtonToolbar,
	ButtonGroup,
	PageHeader,
	PanelGroup,
	ControlLabel,
	Panel
} from 'react-bootstrap';

class App extends Component {
	render() {
		return (
			<Grid>
				<Row>
					<PageHeader>
						<h1>Readable</h1>
						<p><ButtonToolbar>
							<ButtonGroup bsSize="large">
								<Button bsStyle='primary'>Add new post</Button>
								<Button>Newest </Button>
								<Button>Oldest</Button>
								<Button>Most voted</Button>
								<Button>Least voted</Button>
							</ButtonGroup></ButtonToolbar></p>
					</PageHeader>
				</Row>
				<Row>
					<Panel collapsible header={'FILTERS'}>
						<Categories />
					</Panel>
				</Row>
				<Row>

					<Panel bsStyle='info' header="Panel 1" eventKey="1">Panel 1 content</Panel>
					<Panel bsStyle='info' header="Panel 2" eventKey="2">Panel 2 content</Panel>

				</Row>
			</Grid>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({

})


export default connect(mapStateToProps, null)(App)
