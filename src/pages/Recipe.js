import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IngredientsList from "../components/IngredientsList";
import { motion } from "framer-motion";
import React from 'react'
export default function Recipe() {
  const [details, setdetails] = useState({});
  const [loading, setloading] = useState(false);
  let params = useParams();
  const getdetails = async (title) => {
    setloading(true);
    const response = await fetch(`https://api.spoonacular.com/recipes/${title}/information?apiKey=87d3d063d9664f6f8c051d3428e66404`)
    const data = await response.json()
    setdetails(data);
    setloading(false);
  }
  useEffect(() => {
    getdetails(params.name);
  }, [params.name])
  return (<>
  {
    loading?(<div id='loaddiv'></div>) :(
      <motion.section className="recipe-upperbox" animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:0.5}}>
      <div className="recipe-titimg">

        <h1 className="recipe-title">{details.title}</h1>
        <img src={details.image} alt={details.title} className="recipe-img" loading="lazy" />
        <div className="time-veg">
          <span id="mins">{details.readyInMinutes} mins</span>
          <span className='veg' id="veg-nonveg">{details.vegetarian?"Vegetarian":"Non-Vegetarian"}</span>
        </div>
      </div>
      <div className="summary">
        <h2>Summary</h2>
        <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
      </div>
      <div className="summary">
        <h2>Ingredients</h2>
        <ul>
          {details.extendedIngredients?.map((ingredientsobj) => (
            <IngredientsList ingredientsobj={ingredientsobj} />
            ))}
        </ul>
      </div>
      <div className="summary">
        <h2>Instructions</h2>
        <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
      </div>
    </motion.section>
            )}
            </>
  )
}
