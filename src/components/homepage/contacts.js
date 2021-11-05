import React from 'react';
import UserAvatar_1 from '../../images/icon/avatar-1.png';
import UserAvatar_2 from '../../images/icon/avatar-2.png';
import UserAvatar_3 from '../../images/icon/avatar-3.png';
import UserAvatar_4 from '../../images/icon/avatar-4.png';
import UserAvatar_5 from '../../images/icon/avatar-5.png';
import UserAvatar_6 from '../../images/icon/avatar-6.png';

function ListItem(props) {
	return <li className='user-icon d-flex justify-content-start align-content-center align-items-center popover popover-left'>
		<a href={props.href} className='text-muted rounded py-1 w-100 align-self-center'>
			<img src={props.img} className='' alt={props.body} />
			<span className='ml-2'>{props.body}</span>
		</a>
		<div className="popover-container nice-shadow p-3 rounded">
			<div className="d-flex justify-content-start align-content-center align-items-center">
				<img src={props.img} className='mr-3' alt={props.body} />
				<div className="user-info text-muted">
					<h6 className="mb-3">{props.body}</h6>
				</div>
			</div>
		</div>
	</li>;
}

function HeroHeading() {
	return <div className="hero-heading my-4 px-2 text-muted d-flex justify-content-between align-content-center align-items-center">
		<h4 className="">contacts</h4>
		<div className="icons">
			<i className="mx-2 bi bi-camera-video"></i>
			<i className="mx-2 bi bi-search"></i>
			<i className="mx-2 bi bi-three-dots"></i>
		</div>
	</div>;
}

class Contacts extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			book_marks: [
				{ img: UserAvatar_1, body: 'mohammed taysser' },
				{ img: UserAvatar_2, body: 'ahmed moro' },
				{ img: UserAvatar_3, body: 'aurora light' },
				{ img: UserAvatar_4, body: 'asmaa mohammed' },
				{ img: UserAvatar_5, body: 'nour ahmed' },
				{ img: UserAvatar_6, body: 'esraa egypt' },
			],
		};
	}

	render() {
		return (
			<>
				<HeroHeading />
				<ul className='list-unstyled' >
					{
						this.state.book_marks.map(item => {
							return <ListItem href='#io' img={item.img} body={item.body} />;
						})
					}
				</ul>
				<hr className='mx-4' />
			</>
		);
	}
}

export default Contacts;
