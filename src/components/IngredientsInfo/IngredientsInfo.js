// import React, {useEffect, useState} from 'react';
// import axios from "axios";
// import {useParams} from "react-router-dom";
//
// const IngredientsInfo = () => {
// 	const {name} = useParams()
// 	const [ingredientInfo, setIngredientInfo] = useState({})
// 	const [isLoading, setIsLoading] = useState(true)
//
// 	useEffect(()=>{
// 		axios(`https://www.themealdb.com/api/json/v2/1/filter.php?i=${name}`)
//
// 				.then((res)=> {
// 					setIngredientInfo(res.data)
// 					setIsLoading(false)
// 				})
//
// 	})
// 	if(isLoading){
// 		return 'Loading'
// 	}
// 	return (
// 			<div>
// 				{
// 					ingredientInfo
// 				}
//
// 			</div>
// 	);
// };
// export default IngredientsInfo;