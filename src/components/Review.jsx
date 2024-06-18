import React from 'react'
import ReviewCard from '../layouts/ReviewCard'
import img1 from '../assets/img/pic1.png'
import img2 from '../assets/img/pic2.png'
import img3 from '../assets/img/pic3.png'

const Review = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center md:px-32 px-5'>
      <h1 className='text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10'>Customer's Review</h1>

      <div className='flex flex-col md:flex-row gap-5 mt-5'>
      <ReviewCard
        review="Absolutely loved the butter chicken and garlic naan! The flavors were authentic and reminded me of home. Definitely coming back for more!"
        img={img1} 
        name="Sarah M."
      />
      <ReviewCard
        review="The pasta here is top-notch! I had the spaghetti carbonara and it was perfectly creamy with just the right amount of pancetta. Highly recommend!"
        img={img2}
        name="Michael T."
      />
      <ReviewCard
        review="Delicious Chinese food! The crispy chicken balls were addictive, and the stir-fried noodles were full of flavor. Great service too. Will be back soon!"
        img={img3} 
        name="Emily L."
      />
      </div>
    </div>
  )
}

export default Review