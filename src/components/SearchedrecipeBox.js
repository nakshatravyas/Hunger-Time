import React from 'react'
import { Link } from 'react-router-dom'
export default function SearchedrecipeBox({ item }) {

    return (
        <div className='box' >
            <Link to={"/recipe/"+item.id}>
            <img src={item.image} alt={item.title} loading="lazy"/>
            <span className='title' id='categoryboxtit'>{item.title.slice(0, 20)}</span>
            {/* <span className='veg'>{item.vegetarian?"Vegetarian":"Non-Vegetarian"}</span> */}
            {/* <div className="gradient"></div> */}
            </Link>
        </div>
    )
}
