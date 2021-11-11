import React from 'react';
import BookMark from '../components/homepage/book_marks';
import Contacts from '../components/homepage/contacts';
import Posts from '../components/homepage/posts';
import '../css/homepage.min.css';

const NotFound = () => {
	return (
		<div className='d-flex mt-5 pt-3'>
			<div className='vh-100 col-md-3 position-fixed book-marks'><BookMark /></div>
			<div className='vh-100 col-md-6 offset-3 posts'><Posts /></div>
			<div className='vh-100 col-md-3 position-fixed contacts'><Contacts /></div>
		</div>
	);
};

export default NotFound;
