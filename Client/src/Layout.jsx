import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'


export const Layout = (children) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <Hero />
      {/* <div >{children}</div> */}
      <Footer/>
    </div>
  )
}
