import React from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css';



const HomeScreen = () => {

  AOS.init();



  return (
    <center>
    <div data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000" style={{padding:'250px'}} >
      <h1 style={{ color: 'white'}}>welcome to <span className='text-warning'>UK Transports</span> </h1>
      
      <Link to="/login">
        <button className='btn btn-outline-warning mt-4'>Get Started</button>
      </Link>
    </div>
    </center>
  )
}

export default HomeScreen
