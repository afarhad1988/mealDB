import React, {useEffect, useState} from 'react';
import axios from "axios";
import './LatestMeals.css'
import {Link} from "react-router-dom";


const LatestMeals = () => {
	const [latestMeals, setLatestMeals] = useState({})
	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		axios('https://www.themealdb.com/api/json/v2/1/latest.php')
				.then((res) => {
					setLatestMeals(res.data)
					setIsLoading(false)
				})
	}, [])
	if (isLoading) {
		return
	}
	return (
			<div className='latestMeals'>
				<h3 className='title-name'>Latest Meals</h3>
				<div className="row">
					{
						latestMeals.meals.map((latest)=>(
								<div className='item-col col-sm-6 col-md-6 col-lg-4' key={latest.idMeal}>
									<Link to={`/meal/${latest.idMeal}`} className='link'>
										<img className='element-img' src={latest.strMealThumb} alt=""/>
										<h4 className='element-name'>{latest.strMeal}</h4>
									</Link>
								</div>
						))
					}
				</div>

			</div>
	);
};
export default LatestMeals;
