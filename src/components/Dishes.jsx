import React from 'react'
import DishesCard from '../layouts/DishesCard'
import img1 from "../assets/img/img1.jpg"
import img2 from "../assets/img/img2.jpg"
import img3 from "../assets/img/img3.jpg"
import img4 from "../assets/img/img4.jpg"
import img5 from "../assets/img/img5.jpg"
import img6 from "../assets/img/img6.jpg"

const Dishes = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
      <h1 className='text-4xl font-semibold text-center p-24 pb-10'>Our Dishes</h1>
      <div className='flex flex-wrap gap-8 justify-center'>
        <DishesCard img={img1} title="Tandoori Chicken" price="$15"/>
        <DishesCard img={img4} title="Paneer Tikka" price="$10"/>
        <DishesCard img={img5} title="Yangzhou Fried Rice" price="$12"/>
        <DishesCard img={img6} title="Lasagna" price="$15"/>
        <DishesCard img={img2} title="Sweet and Sour Pork" price="$10"/>
        <DishesCard img={img3} title="Chinese Macaroni Pasta" price="$30"/>
        

      </div>
    </div>
  )
}

export default Dishes
