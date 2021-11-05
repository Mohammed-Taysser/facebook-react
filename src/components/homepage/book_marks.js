import React from 'react';
import UserAvatar from '../../images/icon/avatar-1.png';

function ListItem(props) {
	return <li className='user-icon d-flex justify-content-start align-content-center align-items-center'>
		<a href={props.href} className='text-aurora rounded px-2 py-1 w-100 align-self-center'>
			<i className={'icon mx-3 bi bi-' + props.icon}></i>
			<span className=''>{props.body}</span>
		</a>
	</li>;
}

class BookMark extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			book_marks: [
				{ icon: 'people', body: 'find friends' },
				{ icon: 'person-workspace', body: 'marketplace' },
				{ icon: 'house', body: 'groups' },
				{ icon: 'shop', body: 'watch' },
				{ icon: 'bookmarks-fill', body: 'memories' },
				{ icon: 'bookmarks-fill', body: 'saved' },
				{ icon: 'bookmarks-fill', body: 'pages' },
				{ icon: 'bookmarks-fill', body: 'events' },
				{ icon: 'bookmarks-fill', body: 'most recent' },
			],
		};
	}

	render() {
		return (
			<>
				<ul className='list-unstyled px-4' >
					<li className='user-icon d-flex justify-content-start align-content-center align-items-center'>
						<a href='#' className='text-aurora rounded px-2 py-1 w-100'>
							<img src={UserAvatar} alt="user-avatar" className='rounded-circle' />
							<span className='mx-2'>mohammed</span>
						</a>
					</li>
					{
						this.state.book_marks.map(item => {
							return <ListItem href='#io' icon={item.icon} body={item.body} />;
						})
					}
				</ul>
				<hr className='mx-4' />
			</>
		);
	}
}

export default BookMark;
