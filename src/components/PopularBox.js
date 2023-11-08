import React from 'react'
import { Link } from 'react-router-dom'
export default function PopularBox({ recipe }) {

    return (
        <div className='box'>
            <Link to={"/recipe/" + recipe.id}>
                <img src={recipe.image} alt={recipe.title} loading="lazy" />
                <span className='title'>{recipe.title.slice(0, 17)}<span className='time'>{recipe.readyInMinutes} min</span></span>
                <span className='veg'>{recipe.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</span>
                {/* <div className="gradient"></div> */}
            </Link>
        </div>
    )
}
