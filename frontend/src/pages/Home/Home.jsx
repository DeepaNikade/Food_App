import React, { useState } from 'react';
import './Home.css';
import Header from '../../Components/Header/Header';
import Exploremenu from '../../Components/ExploreMenu/Exploremenu';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import AppDownoad from '../../Components/AppDownload/AppDownoad';

const Home = () => {
    const [category,setcategory]=useState("All");
  return (
    <div>
        <Header/>
        <Exploremenu category={category} setcategory={setcategory}/>
        <FoodDisplay category={category}/>
        <AppDownoad/>
    </div>
  )
}

export default Home;