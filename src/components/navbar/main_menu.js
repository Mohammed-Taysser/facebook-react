import React from 'react';

const MainMenu = () => {
	return (

		<div className='main-menu d-flex justify-content-around text-muted'>
			<div className='mx-2'><div className='icon'>
				<i className='bi bi-people'></i></div></div>
			<div className='mx-2'><div className='icon'>
				<i className='bi bi-person-workspace'></i></div></div>
			<div className='mx-2'><div className='icon'>
				<i className='bi bi-house'></i></div></div>
			<div className='mx-2'><div className='icon'>
				<i className='bi bi-shop'></i></div></div>
		</div>

	);
};

export default MainMenu;
