import React, { useEffect, useState } from 'react'
import PopularBox from '../components/PopularBox';
export default function Popular() {
    useEffect(() => {
        getpopular()
    }, []);

    const [popular, setPopular] = useState([]);
    const [loading, setloading] = useState(false);

    const getpopular = async () => {
        const check = localStorage.getItem("popular");
        if (check) {
            setPopular(JSON.parse(check));
        }
        else {

            setloading(true);
            const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=87d3d063d9664f6f8c051d3428e66404&number=10`)
            const data = await response.json()
            localStorage.setItem("popular", JSON.stringify(data.recipes))
            console.log(data)
            setPopular(data.recipes);
            setloading(false);
        }
    }
    return (
        <section className='app'>
            <h2 id='popular'>Our <span id='gradient-text'>Popular</span> Picks</h2>

            {loading ?
                (<div id='loaddiv'></div>) :
                (


                    <div className="maincontainer">
                        <div className="maincarosel">

                            {popular.map((recipe) => (

                                <PopularBox recipe={recipe} />
                            )

                            )}
                        </div>
                    </div>

                )
            }
        </section>
    )
}
