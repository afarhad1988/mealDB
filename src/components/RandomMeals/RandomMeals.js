import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import './RandomMeals.css'

const RandomMeals = () => {
	const [randomMeals, setRandomMeals] = useState({})
	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
				.then((res) => {
					setRandomMeals(res.data)
					setIsLoading(false)
				})
	}, [])
	if (isLoading) {
		return
	}
	return (
			<div >
				<h3 className='title-name'>Random Meals</h3>
				<div className='row'>

						{
							randomMeals.meals.map((meal) => (
									<div  key={meal.idMeal} className='item-col col-sm-6 col-md-6 col-lg-4'>
										<Link to={`/meal/${meal.idMeal}`} className='link'>
											<img className='element-img' src={meal.strMealThumb} alt=""/>
											<h4 className='element-name'>{meal.strMeal}</h4>
										</Link>
									</div>
							))
						}

				</div>
			</div>
	);
};
export default RandomMeals;
