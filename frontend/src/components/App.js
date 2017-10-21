import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Readable from './Readable';
import NotFound from './NotFound';

class App extends Component {
				render() {
								return (
												<Switch>
																<Route exact path='/' component={Readable}/>
																<Route path='*' component={NotFound}/>
												</Switch>
								);
				}
}

export default App;
