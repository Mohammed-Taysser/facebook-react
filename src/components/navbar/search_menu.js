import React from 'react';
import favicon from '../../images/icon/favicon.png';

const SearchMenu = () => {
	return (

		<div className='search-menu d-flex justify-content-around'>
			<form className=''>
				<label htmlFor='search-input' className='visually-hidden'>search</label>
				<input type='email' className='form-control rounded-pill' id='search-input' placeholder='search ...' />
			</form>
			<img src={favicon} alt='favicon' className='ml-2' />
		</div>

	);
};

export default SearchMenu;
