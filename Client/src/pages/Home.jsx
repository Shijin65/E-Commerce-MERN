import React from 'react'
import ProductSection from '../components/ProductSection'
import TopBrand from '../components/TopBrand'

const Home = () => {
  return (
    <div className='flex flex-col gap-10'>
        <ProductSection/>
        <TopBrand/>
    </div>
  )
}

export default Home