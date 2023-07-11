import React from 'react'
import "../style/style.css"
import Card from '../components/Card'

function Home() {
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
                <Card />
                <Card />
                <Card />
                <Card />
        </section>
    </div>
  )
}

export default Home