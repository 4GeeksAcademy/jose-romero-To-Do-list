import React, { useEffect, useState } from "react";
import TodoList from './TodoList'


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	
	return (

		<div className="App">
			<TodoList />
			
		</div>
		

	);
};

export default Home;
