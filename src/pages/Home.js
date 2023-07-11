import React , { useState } from 'react'
import axios from 'axios'
import "../style/style.css"
import Card from '../components/Card'

function Home() {


    const[meals, setMeals] = useState([]);
    const[searchValue, setSearchValue] = useState("");
    const[rangeValue, setRangeValue]=useState(2);

    const searchMeal = ()=>{
      axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
      .then((Response) =>{setMeals(Response.data.meals)})
    }
    searchMeal();
    console.log(meals);






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
                />
                <button>Rechercher</button>
            </div>
            <div className="rangeContainer">
                <input type="range" name="" id="" />
                <span>5</span>
            </div> 
            <button>
                Croissant
            </button>
        </header>
        <section className="mealContainer">
                <Card />
        </section>
    </div>
  )
}

export default Home