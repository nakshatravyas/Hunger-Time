import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../images/bg1.png';
import { FaHome } from 'react-icons/fa';
export default function Search() {
  const navigate = useNavigate();
  const [searchterm, setsearchterm] = useState('');
  const submithandle = (e) => {
    e.preventDefault();
    navigate('/searched/' + searchterm)
    console.log('submit');
  }
  return (
    <section className="searchsection">
      <Link to={'/'} className='home'>
        <FaHome />
      </Link>
      <img src={logo} alt="" id='logo' />
      <form className='form' onSubmit={submithandle}>
        <input type="text" placeholder='Search for recipies' value={searchterm} onChange={(e) => setsearchterm(e.target.value)} />
        <FaSearch onClick={submithandle}></FaSearch>
      </form>
      <div className="opacity-layer"></div>
    </section>
  )
}
