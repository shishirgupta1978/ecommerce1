import React from 'react'
import Banner from '../Components/Banner'
import Feature from '../Components/Feature'
import HeroImage from '../Components/HeroImage'
import NewsLetter from '../Components/NewsLetter'
import Product1 from '../Components/Product1'
import SmallBanner from '../Components/SmallBanner'
import TextBanner from '../Components/TextBanner'

const Home = () => {
  return (
    <div>
      <HeroImage/>
      <Feature/>
      <Product1/>
      <Banner/>
      <Product1/>
      <SmallBanner/>
      <TextBanner/>
      <NewsLetter/>

    </div>
  )
}

export default Home
