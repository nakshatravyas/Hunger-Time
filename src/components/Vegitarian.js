import React, { useEffect, useState } from 'react'
import VegitarianBox from '../components/VegitarianBox';
export default function Popular() {
    useEffect(() => {
        getpopular()
    }, []);

    const [vegi, setVegi] = useState([]);
    const [loading, setloading] = useState(false);

    const getpopular = async () => {
        const check = localStorage.getItem("vegi");
        if (check) {
            setVegi(JSON.parse(check));
        }
        else {

            setloading(true);
            const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=87d3d063d9664f6f8c051d3428e66404&number=10&tags=vegetarian`)
            const data = await response.json()
            localStorage.setItem("vegi", JSON.stringify(data.recipes))
            setVegi(data.recipes);
            setloading(false);
        }
    }
    return (
        <section className='app1 padding'>
            <h2 id='vegetarian'>Our <span id='gradient-text'>Vegetarian</span> Picks</h2>

            {loading ?
                (<div id='loaddiv'>
                </div>) :

                (
                    <div className="maincontainer">
                        <div className="maincarosel">


                            {vegi.map((recipe) => (
                                <VegitarianBox recipe={recipe} />
                            ))}
                        </div>
                    </div>


                )
            }
        </section>
    )
}
