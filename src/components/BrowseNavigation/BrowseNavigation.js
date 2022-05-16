import React from 'react';
import {Link} from "react-router-dom";


const BrowseNavigation = () => {
	const alphabet = ['a /', 'b /', 'c /', 'd /','e /','f /','g /', 'h /', 'i /', 'j /','k /','l /','m /', 'n /', 'o /', 'p /','q /','r /','s /', 't /', 'u /', 'v /','w /','x /','y /','z']
	return (
			<div className='browseNavigation'>
				<h3 className='title-name'>Browse by Name</h3>
				{
					alphabet.map((item)=>(
							<Link to={`/browse/${item}`} key={item} className='link link-item'>{item.toLocaleUpperCase()}</Link>
					))
				}
			</div>
	);
};
export default BrowseNavigation;
