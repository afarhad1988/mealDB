import React from 'react';
import './Footer.css'
import {Link} from "react-router-dom";

const Footer = () => {
	return (
			<div className='footer'>
				<div className="container footer-container">
					<div className='footer-information'>
						<h4 className='footer-title'>© 2022 TheMealDB</h4>
						<h4 className='footer-title'>
							Proudly built in the UK
							<img className='footer-img' src="https://www.themealdb.com/images/icons/flags/big/16/gb.png"
								 alt=""/>
						</h4>
					</div>
					<div className='footer-project' >
						<Link to='/'><img src="https://www.themealdb.com/images/logo-tcdb.png" alt=""/></Link>
						<Link to='/'><img src="https://www.themealdb.com/images/logo-tadb.png" alt=""/></Link>
						<Link to='/'><img src="https://www.themealdb.com/images/logo-tsdb.png" alt=""/></Link>
					</div >
					<div className='footer-link'>
						<Link className='link' to='/'><span>About</span></Link>
						<Link className='link' to='/'><span>FAQ</span></Link>
						<Link className='link' to='/'><span>Contact</span></Link>
					</div>
				</div>
			</div>
	);
};
export default Footer;
