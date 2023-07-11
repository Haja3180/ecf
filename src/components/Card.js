import React from 'react'
import test from '../assets/images/test.jpg'
import "../style/style.css"

function Card() {
  return (
    <div className='card'>
        <img src={test} alt="" />
        <div className="infos">
          <span><strong>Nom du plat :</strong> Nom</span>
          <span><strong>Origine :</strong> origine</span>
          <p id='Recette'>Recette</p>
        </div>

    </div>
  )
}

export default Card