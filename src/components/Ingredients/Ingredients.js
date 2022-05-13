import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const Ingredients = () => {
	const {name} = useParams()
	const [ingredients, setIngredients] = useState({})
	const [isLoading, setIsLoading] = useState(true)

	useEffect(()=>{
		axios(`https://www.themealdb.com/api/json/v2/1/filter.php?i=${name}`)

				.then((res)=> {
					setIngredients(res.data)
					setIsLoading(false)
				})

	},[name])
	if(isLoading){
		return 'Loading'
	}
	return (
			<div className='container'>
				<div className='row'>
					<div className='col-4  col-sm-6 col-md-6 col-lg-4'>
						<h2 className='randomMeal-title'>{name}</h2>
						<div className='randomMeal-pic'>
							<img className='randomMeal-img' src={`https://www.themealdb.com/images/ingredients/${name}.png`} alt=""/>
						</div>
					</div>
					<div className='col-8 col-sm-6 col-md-6 col-lg-4'>
						<h2 className='ingredients-title'>Meals</h2>
						{
							ingredients.meals.map((ingredient, index) => (
									<div className='ingredients-about' key={index}>
										<Link to={`/meal/${ingredient.idMeal}`} className='link'>
											<div className='ingredients-group'>
												<img className='ingredients-img'
													 src={`${ingredient.strMealThumb}`}
													 alt=""/>
												<h4 className='element-name'>{ingredient.strMeal}</h4>
											</div>
										</Link>
									</div>
							))
						}

					</div>

				</div>

			</div>
	);
};
export default Ingredients;