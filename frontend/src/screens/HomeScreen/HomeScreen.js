import React from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'




const HomeScreen = () => {

  AOS.init();



  return (
    <div data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000" style={{padding:'250px', alignItems:'center'}} >
      <h1 style={{ color: 'white'}}>welcome to bus app</h1>
      
      <Link to="/">
        <button className='btn btn-outline-warning mt-4' >Get Started</button>
      </Link>
    </div>
  )
}

export default HomeScreen
