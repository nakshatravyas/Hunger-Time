import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SearchedrecipeBox from '../components/SearchedrecipeBox'

export default function Searched() {
    const [searchrecipe, setsearchrecipe] = useState([]);
    const [loading, setloading] = useState(false);
    let params = useParams();
    const getsearchedrecipe = async (title) => {
        setloading(true);
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=87d3d063d9664f6f8c051d3428e66404&query=${title}`)
        const data = await response.json()
        setsearchrecipe(data.results);
        setloading(false);
    }
    useEffect(() => {
        getsearchedrecipe(params.search);
    }, [params.search])
    return (
        <>
            {
                loading ? (<div id='loaddiv'>
                </div>) : (
                    <div className='container'>
                        {searchrecipe.map((item) => (
                            <SearchedrecipeBox item={item} />
                        ))}
                    </div>
                )}
        </>
    )
}
