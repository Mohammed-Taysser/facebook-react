import React from 'react';

const UserMenu = () => {
	return (

		<div className='user-menu d-flex justify-content-center'>
			<div className=''><div className='icon mx-2 rounded-icon'>
				<i className='bi bi-caret-down-fill'></i></div></div>
			<div className=''><div className='icon mx-2 rounded-icon badge' data-badge='5'>
				<i className='bi bi-messenger'></i></div></div>
			<div className=''><div className='icon mx-2 rounded-icon badge' data-badge='10'>
				<i className='bi bi-bell-fill'></i></div></div>
			<div className=''><div className='icon mx-2 rounded-icon'>
				<i className='bi bi-bookmarks-fill'></i></div></div>
		</div>

	);
};

export default UserMenu;
