import React from 'react'
import { NavLink } from 'react-router-dom';
import main from '../images/main course.png';
import side from '../images/side dish.png';
import dessert from '../images/dessert.png';
import appe from '../images/appe.png';
import salad from '../images/salad.png';
import bread from '../images/bread.png';
import bf from '../images/breakfast.png';
import soup from '../images/hot-soup.png';
import bev from '../images/soft-drink.png';
import sauce from '../images/sauces.png';
import mar from '../images/shoyu.png';
import ff from '../images/kebab.png';
import snack from '../images/snack.png';
import drink from '../images/cocktail.png';
export default function Category() {
  return (
    <div className="app1">
      <div className="cat">
        <div className='listcategory'>

          <NavLink to={'/cuisine/main course'} className='navlink'>
            <img src={main} alt="maincourse" className='cat-img'/>
            <h4>MainCourse</h4>
          </NavLink>
          <NavLink to={'/cuisine/side dish'} className='navlink'>
          <img src={side} alt="sidedish" className='cat-img'/>
            <h4>SideDish</h4>
          </NavLink>
          <NavLink to={'/cuisine/dessert'} className='navlink'>
          <img src={dessert} alt="dessert" className='cat-img'/>
            <h4>Dessert</h4>
          </NavLink>
          <NavLink to={'/cuisine/appetizer'} className='navlink'>
          <img src={appe} alt="appe" className='cat-img'/>
            <h4>Appetizer</h4>
          </NavLink>
          <NavLink to={'/cuisine/salad'} className='navlink'>
          <img src={salad} alt="salad" className='cat-img'/>
            <h4>Salad</h4>
          </NavLink>
          <NavLink to={'/cuisine/bread'} className='navlink'>
          <img src={bread} alt="bread" className='cat-img'/>
            <h4>Bread</h4>
          </NavLink>
          <NavLink to={'/cuisine/breakfast'} className='navlink'>
          <img src={bf} alt="bf" className='cat-img'/>
            <h4>Breakfast</h4>
          </NavLink>
          <NavLink to={'/cuisine/soup'} className='navlink'>
          <img src={soup} alt="soup" className='cat-img'/>
            <h4>Soup</h4>
          </NavLink>
          <NavLink to={'/cuisine/beverage'} className='navlink'>
          <img src={bev} alt="bev" className='cat-img'/>
            <h4>Beverage</h4>
          </NavLink>
          <NavLink to={'/cuisine/sauce'} className='navlink'>
          <img src={sauce} alt="sauce" className='cat-img'/>
            <h4>Sauce</h4>
          </NavLink>
          <NavLink to={'/cuisine/marinade'} className='navlink'>
          <img src={mar} alt="mar" className='cat-img'/>
            <h4>Marinade</h4>
          </NavLink>
          <NavLink to={'/cuisine/fingerfood'} className='navlink'>
          <img src={ff} alt="ff" className='cat-img'/>
            <h4>Fingerfood</h4>
          </NavLink>
          <NavLink to={'/cuisine/snack'} className='navlink'>
          <img src={snack} alt="snack" className='cat-img'/>
            <h4>Snack</h4>
          </NavLink>
          <NavLink to={'/cuisine/drink'} className='navlink'>
          <img src={drink} alt="drink" className='cat-img'/>
            <h4>Drink</h4>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
