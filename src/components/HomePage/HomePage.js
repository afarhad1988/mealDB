import React from 'react';
import './HomePage.css'
import meal from "../../assets/images/meal-icon.png";
import RandomMeals from "../RandomMeals";
import LatestMeals from "../LatestMeals";
import BrowseNavigation from "../BrowseNavigation";



const HomePage = () => {
	return (
			<div className='container'>
				<div className='information'>
					<img src={meal} alt="meal-logo"/>
					<div>
						<h1 className='title'>Welcome to TheMealDB</h1>
						<p className='subtitle'>
							Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world. <br/>
							We also offer a <a href="https://www.themealdb.com/api.php" className='link_for_json'>free JSON API</a> for anyone wanting
							to use it, with additional features for subscribers.
						</p>
					</div>
					<img src={meal} alt="meal-logo"/>
				</div>
				<LatestMeals/>
				<RandomMeals/>
				<BrowseNavigation/>
			</div>

	);
};
export default HomePage;
