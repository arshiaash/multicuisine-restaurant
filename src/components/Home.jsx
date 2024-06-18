import React from 'react'
import Button from "../layouts/Button"

const Home = () => {
  return (
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat">
      <div className='w-full lg:w-2/3 space-y-5'>
        <h1 className='text-backgroundColor font-semibold text-6xl'>
        Bringing the World's Kitchens to Your Table
        </h1>
        <p className='text-backgroundColor'>Experience a global culinary adventure at <span style={{ fontWeight: 'bold' }}>TasteTales</span>, where every dish captures the essence of its origin. Discover authentic flavors from around the world, all crafted to perfection and brought to your table.


        </p>
        <div className='lg:pl-44'>
            <Button title="Order Now"/>
        </div>
      </div>
    </div>
  )
}

export default Home;
