import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='container text-center text-danger my-5 py-5'>
			<h1 className='display-1'>404</h1>
			<p className='h1'>Page Not Found</p>
			<p>Back To  
				<NavLink className='mx-2' exact to='/facebook-react/'>Home</NavLink>
			</p>
		</div>
	);
};

export default NotFound;
