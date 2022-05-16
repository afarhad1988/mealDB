import React, {useEffect, useState} from 'react';
import {Link,useParams} from "react-router-dom";
import axios from "axios";

const Browse = () => {
	const {name} = useParams()
	const [browse, setBrowse] = useState([])
	useEffect(()=>{
		axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
				.then(({data})=>setBrowse(data.meals))
	},[name])
	return (
			<div className='container browse-container'>
				<div className="row">

					{
						browse.map((meal)=>(
								<div className="col-3">
								<Link to={`/meal/${meal.idMeal}`} key={meal.idMeal} className='link'>
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
export default Browse;
