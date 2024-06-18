import React from 'react'
import DishesCard from '../layouts/DishesCard'
import img1 from '../assets/img/menu1.jpg'
import img2 from '../assets/img/menu2.jpg'
import img3 from '../assets/img/menu3.jpg'
const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
      <h1 className='text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10'>Signature Dishes</h1>
      <div className='flex flex-wrap gap-8 justify-center'>
        <DishesCard img={img1} title="Spaghetti Carbonara" price="$14"/>
        <DishesCard img={img2} title="Biriyani" price="$12"/>
        <DishesCard img={img3} title="Chicken Fritters" price="$12"/>
      </div>
      
    </div>
  )
}

export default Menu
