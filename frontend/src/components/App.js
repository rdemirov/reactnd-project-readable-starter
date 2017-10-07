import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
	Grid,
	Row,
	Col,
	Button,
	ButtonToolbar,
	ButtonGroup,
	PageHeader,
	Panel,
	PanelGroup,
	Nav,
	NavItem,
	ControlLabel
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
						<Panel bsStyle={'info'} header={'Categories'}>
							<Nav bsStyle="pills" activeKey={1}>
								<NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
								<NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
								<NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
							</Nav>
						</Panel>
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

export default App;
