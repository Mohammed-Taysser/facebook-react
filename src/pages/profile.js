import React, { Component } from 'react';
import '../css/profile.min.css';
import coverImage from '../images/background/profile/cover.jpg';
import userImage from '../images/icon/avatar-1.png';
import UserAvatar_1 from '../images/icon/avatar-7.png';
import UserAvatar_2 from '../images/icon/avatar-2.png';
import UserAvatar_3 from '../images/icon/avatar-3.png';
import UserAvatar_4 from '../images/icon/avatar-4.png';
import UserAvatar_5 from '../images/icon/avatar-5.png';
import UserAvatar_6 from '../images/icon/avatar-6.png';

function ProfileCover() {
	return <div className="profile-cover position-relative" style={{ backgroundImage: `url('${coverImage}')` }}>
		<div className="edit-cover position-absolute">
			<a className='btn btn-light' href='#'>
				<i className="bi bi-camera-fill"></i>
				<span className='ms-2 d-none d-lg-inline-block'> edit cover photo</span>
			</a>
		</div>
	</div>;
}

function ProfileAvatar() {
	return <div className="profile-avatar d-lg-flex justify-content-between align-content-end align-items-center position-relative">
		<div className="profile-avatar-image mx-auto mx-lg-4 d-lg-flex justify-content-center align-items-center text-center text-lg-left">
			<figure className="avatar">
				<img src={userImage} alt="user-avatar" className='' />
				<div className="avatar-icon rounded-circle bg-light">
					<a href="#" className='text-dark'>
						<i className="bi bi-camera-fill"></i>
					</a>
				</div>
			</figure>
			<div className="user-info align-self-end  mb-md-3">
				<h1 className="h3 font-weight-bold ps-2">mohammed taysser</h1>
				<p className="text-muted ps-2  text-md-left mb-1">10 friends</p>
				<div className="friends-images position-relative d-flex align-items-center justify-content-center text-center text-lg-left my-3 my-md-0">
					<a href="#" className='d-inline-block avatar-link rounded-circle'>
						<img src={UserAvatar_1} alt="user-avatar-1" className='avatar-image rounded-circle' />
					</a>
					<a href="#" className='d-inline-block avatar-link rounded-circle'>
						<img src={UserAvatar_2} alt="user-avatar-2" className='avatar-image rounded-circle' />
					</a>
					<a href="#" className='d-inline-block avatar-link rounded-circle'>
						<img src={UserAvatar_3} alt="user-avatar-3" className='avatar-image rounded-circle' />
					</a>
					<a href="#" className='d-inline-block avatar-link rounded-circle'>
						<img src={UserAvatar_4} alt="user-avatar-4" className='avatar-image rounded-circle' />
					</a>
					<a href="#" className='d-inline-block avatar-link rounded-circle'>
						<img src={UserAvatar_5} alt="user-avatar-5" className='avatar-image rounded-circle' />
					</a>
					<a href="#" className='d-inline-block avatar-link rounded-circle'>
						<img src={UserAvatar_6} alt="user-avatar-6" className='avatar-image rounded-circle' />
					</a>
				</div>
			</div>
		</div>
		<div className="edit-profile text-center text-lg-left mt-md-5">
			<button className='btn btn-primary mx-2'>
				<i className="bi bi-plus-circle-fill me-1"></i>
				Add story
			</button>
			<button className='btn btn-light mx-2'>
				<i className="bi bi-pencil-fill me-1"></i>
				Edit profile
			</button>
		</div>
	</div>;
}

class Profile extends Component {
	render() {
		return (
			<div className='mt-5 pt-2 nice-shadow px-lg-5'>
				<div className="container px-lg-5">
					<ProfileCover />
					<ProfileAvatar />
				</div>
			</div>
		);
	}
}

export default Profile;
