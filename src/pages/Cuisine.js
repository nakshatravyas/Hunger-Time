import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import CuisineBox from '../components/CuisineBox'
import { Link, useParams } from 'react-router-dom'
export default function Cuisine() {
  const [cuisine, setcuisine] = useState([]);
  const [loading, setloading] = useState(false);
  let params = useParams();
  const getcuisine = async (title) => {
    setloading(true);
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=87d3d063d9664f6f8c051d3428e66404&type=${title}`)
    const data = await response.json()
    setcuisine(data.results);
    setloading(false);
  }
  useEffect(() => {
    getcuisine(params.type);
  }, [params.type])
  return (
    <>
      {loading ? (<div id='loaddiv'>
      </div>) : (

        <motion.div className='container' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
          {cuisine.map((item) => (
            <CuisineBox item={item} />
          ))}
        </motion.div>
      )}
    </>
  )
}
