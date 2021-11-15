import React from 'react';
import UserAvatar_1 from '../../images/icon/avatar-1.png';
import UserAvatar_2 from '../../images/icon/avatar-2.png';
import UserAvatar_3 from '../../images/icon/avatar-3.png';
import UserAvatar_4 from '../../images/icon/avatar-4.png';
import UserAvatar_5 from '../../images/icon/avatar-5.png';
import UserAvatar_6 from '../../images/icon/avatar-6.png';

function PostItem(props) {
	return <li className='post p-3 nice-shadow rounded my-3 text-muted'>
		<div className=' d-flex justify-content-between align-content-center align-items-center'>
			<div className=' d-flex justify-content-start align-content-center align-items-center'>
				<img src={props.img} className='' alt={props.body} />
				<p className='m-0 popover popover-top'>
					<span className='ml-2 font-weight-bold d-block'>{props.body}</span>
					<small className='ml-2 font-weight-bold'>
						{props.date}
						<i className='bi bi-globe mx-2'></i>
					</small>
					<div className='popover-container p-3 nice-shadow rounded bg-white'>
						<div className=' d-flex justify-content-start align-content-center align-items-center'>
							<img src={props.img} className='' alt={props.body} />
							<p className='m-0'>
								<span className='ml-2 font-weight-bold d-block'>{props.body}</span>
							</p>
						</div>
					</div>
				</p>
			</div>
			<div className='post-menu popover popover-left'>
				<i className='bi bi-three-dots'></i>
				<div className='popover-container p-3 nice-shadow rounded bg-white'>
					<div className=' d-flex justify-content-start align-content-center align-items-center'>
						<img src={props.img} className='' alt={props.body} />
						<p className='m-0'>
							<span className='ml-2 font-weight-bold d-block'>{props.body}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
		<div className='content mt-3'>
			<p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut libero veniam suscipit sed incidunt explicabo fugit omnis saepe! Itaque cumque impedit veritatis neque. Obcaecati nam molestias reprehenderit illo quae ullam.</p>
			<p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut libero veniam suscipit sed incidunt explicabo fugit omnis saepe! Itaque cumque impedit veritatis neque. Obcaecati nam molestias reprehenderit illo quae ullam.</p>
			<img src={UserAvatar_2} alt='post-photo' className='' />
		</div>
	</li>;
}

function Status() {
	return <div className='hero-heading my-4 px-2 text-muted d-flex justify-content-between align-content-center align-items-center'>
		<h4 className=''>contacts</h4>
		<div className='icons'>
			<i className='mx-2 bi bi-camera-video'></i>
			<i className='mx-2 bi bi-search'></i>
			<i className='mx-2 bi bi-three-dots'></i>
		</div>
	</div>;
}

class Posts extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			book_marks: [
				{ img: UserAvatar_1, date: '01-11-1999', body: 'mohammed taysser' },
				{ img: UserAvatar_2, date: '13-07-2012', body: 'ahmed moro' },
				{ img: UserAvatar_3, date: '07-04-2020', body: 'aurora light' },
				{ img: UserAvatar_4, date: '10-02-1999', body: 'asmaa mohammed' },
				{ img: UserAvatar_5, date: '09-06-1042', body: 'nour ahmed' },
				{ img: UserAvatar_6, date: '28-12-1245', body: 'esraa egypt' },
			],
		};
	}

	render() {
		return (
			<>
				<Status />
				<ul className='list-unstyled users px-2' >
					{
						this.state.book_marks.map(item => {
							return <PostItem href='#io' img={item.img} date={item.date} body={item.body} />;
						})
					}
				</ul>
			</>
		);
	}
}

export default Posts;
