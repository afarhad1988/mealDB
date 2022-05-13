import React from 'react';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import RandomMealsInfo from "./components/RandomMealsInfo";
import Footer from "./components/Footer";
import NoPage from "./components/NoPage";
import './media.css'
import Ingredients from "./components/Ingredients";

const App = () => {
	return (
			<BrowserRouter>
				<Header/>

					<Routes>
						<Route path='/' element ={<HomePage/>}/>
						<Route path='/meal/:id' element ={<RandomMealsInfo/>}/>
						<Route path='/ingredients/:name' element ={<Ingredients/>}/>
						<Route path="*" element={<NoPage />} />
					</Routes>

				<Footer/>
			</BrowserRouter>
	);
};
export default App;

