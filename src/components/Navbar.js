import React from 'react';
import UserMenu from './navbar/user_menu';
import MainMenu from './navbar/main_menu';
import SearchMenu from './navbar/search_menu';

const Navbar = () => {
	return (
		<nav className='navbar bg-white position-fixed nice-shadow py-2 w-100 px-3 px-md-2'>
			<div className='row px-0 mx-2'>
				<div className='col-md-4 order-1 col-6'>
					<UserMenu />
				</div>
				<div className='col-md-4 order-2 d-md-block d-none'>
					<MainMenu />
				</div>
				<div className='col-md-4 order-3 col-6'>
					<SearchMenu />
				</div>
			</div>
		</nav >

	);
};

export default Navbar;
