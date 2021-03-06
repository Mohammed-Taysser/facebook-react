import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Profile from './pages/profile';
import NotFound from './pages/404';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {

	render() {
		return (
			<BrowserRouter>

				<Navbar />

				<Switch>
					<Route exact path='/facebook-react/' component={Home} />
					<Route exact path='/facebook-react/profile' component={Profile} />
					<Route component={NotFound} />
				</Switch>

			</BrowserRouter>

		);
	}
}


export default App;
