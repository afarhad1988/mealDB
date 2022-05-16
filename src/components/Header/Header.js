import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import './Header.css'
import logo from '../../assets/images/logo-small.png'
import facebook from '../../assets/images/facebook_icon.png'
import twitter from '../../assets/images/twitter_icon.png'
import 'boxicons'

const Header = () => {
	const navigate = useNavigate()
	const [search, setSearch] = useState('')
	const handleChange = (e) => setSearch(e.target.value)
	const handleSearch = (e) => {
		if (e.key === 'Enter') {
			navigate(`/browse/${search}`)
			setSearch('')
		}
	}
	return (
			<section className='header'>
				<div className="container header-container">
					<Link to='/'><img className="header-logo" src={logo} alt="logo"/></Link>
					<div className="nav-bar">
						<Link to='/'>
							<button className='btn-home'>Home</button>
						</Link>
						<button className='btn-api'>API</button>
						<button className='btn-forum'>Forum</button>
						<a href="https://www.facebook.com/TheDataDB/" className='facebook'><img src={facebook}
																								alt="facebook-icon"/></a>
						<a href="https://twitter.com/TheAudioDB" className='twitter'><img src={twitter}
																						  alt="twitter-icon"/></a>
						<input type="text" placeholder='Search' className='search' value={search}
							   onChange={handleChange} onKeyPress={handleSearch}/>
					</div>
					<div className="burger">
						<i className='bx bx-menu'></i>
					</div>
				</div>
			</section>
	);
};
export default Header;
