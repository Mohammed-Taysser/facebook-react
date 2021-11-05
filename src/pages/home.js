import React from 'react';
import BookMark from '../components/homepage/book_marks';
import Contacts from '../components/homepage/contacts';
import '../css/homepage.min.css';

const NotFound = () => {
	return (
		<div className='d-flex mt-5 pt-3'>
			<div className="vh-100 col-md-3 book-marks"><BookMark /></div>
			<div className="vh-100 col-md-6 posts"></div>
			<div className="vh-100 col-md-3 contacts"><Contacts /></div>
		</div>
	);
};

export default NotFound;
