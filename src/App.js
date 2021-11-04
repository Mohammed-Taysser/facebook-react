import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home';
import NotFound from './pages/404';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {

	render() {
		return (
			<BrowserRouter>

				<Navbar />

				<Switch>
					<Route exact path='/facebook-react/' component={Home} />
					<Route component={NotFound} />
				</Switch>

			</BrowserRouter>

		);
	}
}


export default App;
