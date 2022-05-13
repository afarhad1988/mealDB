import React, {useEffect, useState} from 'react';
import { useParams} from "react-router-dom";
import axios from "axios";

const RandomMealsInfo = () => {
	const {id} = useParams()
	const [randomMeals, setRandomMeals] = useState({})
	const [isLoading, setIsLoading] = useState(true)
	const [ingredients, setIngredients] = useState([])
	const getIngredients = (meal) => {
		let result = []
		for (let i = 0; i < 20; i++) {
			if (meal[`strIngredient${i + 1}`]) {
				result = [...result, meal[`strIngredient${i + 1}`]]
			}
		}
		setIngredients(result)
	}
	useEffect(() => {
		axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
				.then((res) => {
					setRandomMeals((res.data.meals[0]))
					setIsLoading(false)
					getIngredients(res.data.meals[0])
				})
	}, [id])
	if (isLoading) {
		return
	}
	return (
			<div className='container'>
				<div className='row'>

					<div className='col-4  col-sm-6 col-md-6 col-lg-4'>
						<h2 className='randomMeal-title'>{randomMeals.strMeal}</h2>
						<div className='randomMeal-pic'>
							<img className='randomMeal-img' src={randomMeals.strMealThumb} alt=""/>
						</div>
					</div>
					<div className='col-8 col-sm-6 col-md-6 col-lg-4'>
						<h2 className='ingredients-title'>Ingredients</h2>
						{
							ingredients.map((ingredient, index) => (
									<div className='ingredients-about' key={index}>

											<img className='ingredients-img'
												 src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`}
												 alt=""/>
											<div className='ingredients-name'>{ingredient}</div>

									</div>
							))
						}

					</div>

				</div>
				<h2 className='instructions'>Instructions</h2>
				<p className='instructions-about'>{randomMeals.strInstructions}</p>
			</div>
	);
};
export default RandomMealsInfo;
