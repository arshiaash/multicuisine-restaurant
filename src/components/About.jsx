import React from 'react'
import img from '../assets/img/about.png'
import Button from "../layouts/Button"

const About = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5'>
      <img src={img} alt="img" />
      <div className='space-y-4 lg:pt-14'>
        <h1 className='font-semibold text-4xl text-center md:text-start'>
            Why Choose Us?
        </h1>
        

        <p>Discover a culinary journey like no other at TasteTales, where we specialize in Indian, Italian, and Chinese cuisines. 
          Our menu is carefully crafted to offer authentic flavors from each culture, whether you crave the spices of India, the comfort of Italian pasta, or the savory delights of Chinese stir-fries. 
          With a commitment to quality ingredients and expert preparation, every dish promises a memorable dining experience. Join us and indulge in a fusion of diverse tastes that will satisfy every palate.

        </p>
        
        <div className='flex justify-center lg:justify-start'>
            <Button title="Learn More"/>
        </div>
      </div>
    </div>
  )
}

export default About
