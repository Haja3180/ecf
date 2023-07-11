import React from 'react'
import test from '../assets/images/test.jpg'
import "../style/style.css"

function Card({meal}) {
  return (
    <div className='card'>
        <img src={meal.strMealThumb} alt="" />
        <div className="infos">
          <span><strong>Nom du plat :</strong>{meal.strMeal}</span>
          <span><strong>Origine :</strong>{meal.strArea}</span>
          <p id='recette'>
          <strong>Recette : </strong>{meal.strInstructions}</p>
        </div>

    </div>
  )
}

export default Card