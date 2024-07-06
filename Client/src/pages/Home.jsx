import React from 'react'
import ProductSection from '../components/ProductSection'
import TopBrand from '../components/TopBrand'

const Home = () => {
  return (
    <div className='flex flex-col gap-10 p-4'>
        <ProductSection/>
        <TopBrand/>
    </div>
  )
}

export default Home