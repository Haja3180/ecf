import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../style/style.css"
import Card from '../components/Card'

function Home() {


    const[meals, setMeals] = useState([]);
    const[searchValue, setSearchValue] = useState("");
    const[rangeValue, setRangeValue]=useState(2);
    const[sortMethod, setSortMethod]=useState("");

    const searchMeal = ()=>{
      axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s='+searchValue)
      .then((Response) =>{setMeals(Response.data.meals)})
    }

    useEffect(searchMeal,[searchValue]);


  return (
    <div>
        <header>
            <h1>
                React Cook
            </h1>
            <div className="searchContainer">
                <input 
                    type="text"
                    placeholder='Rechercher un repas'
                    onChange={(e)=>setSearchValue(e.target.value)}
                />
                <button 
                    id='searchBtn'
                    onClick={()=>searchMeal()}>
                    Rechercher
                </button>
            </div>
            <div className="rangeContainer">
                <input 
                    type="range" 
                    name="" 
                    id="" 
                    min={1}
                    max={24}
                    value={rangeValue}
                    onChange = {(e) => {setRangeValue(e.target.value)}}
                />
                <span>{rangeValue}</span>
            </div> 
            <div className="sortButtons">
                <button id='croissant' onClick={()=> setSortMethod("croissant")}>
                    Croissant
                </button>
                <button id='decroissant' onClick={()=> setSortMethod("decroissant")}>
                    Decroissant
                </button>
            </div>
        </header>
        <section className="mealContainer">
            {meals
                .sort((a,b)=>{
                    if(sortMethod==="croissant"){
                    return(a.strMeal.localeCompare(b.strMeal))
                    }
                    if(sortMethod==="decroissant"){
                    return(b.strMeal.localeCompare(a.strMeal))
                    }
                }
                )
                .slice (0, rangeValue)
                .map((meal, index)=>(<Card meal={meal} key={index}/>))
            }
        </section>
    </div>
  )
}

export default Home