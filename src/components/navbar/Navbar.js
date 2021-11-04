import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
	return (
		<nav className=''>

			<label>
				<input type='checkbox' />
				<span className='menu'>
					<span className='hamburger'></span>
				</span>

				<ul className='list-unstyled m-0 text-center'>
					<li className=''>
						<NavLink className='' exact to='/react-projects/'>Home</NavLink>
					</li>
				</ul>
			</label>

		</nav >

	);
};

export default Navbar;
