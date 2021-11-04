import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Users from './components/users';
import UserDetails from './components/user_details';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {

	// state = {
	// 	title: 'title',
	// 	body:'body',
	// 	category: 'category'
	// }

	// change_title = (e) => {
	// 	this.setState({
	// 		title: e.target.value
	// 	})
	// }

	// change_category = (e) => {
	// 	this.setState({
	// 		category: e.target.value
	// 	})
	// }

	// change_body = (e) => {
	// 	this.setState({
	// 		body: e.target.value
	// 	})
	// }

	render() {
		return (
			<BrowserRouter>

				<Navbar />

				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/about' component={About} />
					<Route exact path='/users' component={Users} />
					<Route exact path='/users/:user_id' component={UserDetails} />
				</Switch>

			</BrowserRouter>
		);
	}
}


export default App;
