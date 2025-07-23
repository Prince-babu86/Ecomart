import React from 'react'
import Swiper from '../components/Swiper'
import Banner from '../components/Banner'
import Search from '../components/Search'
import MyProducts from '../components/MyProducts'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Swiper/>
        <Banner/>
       {/* <Search/> */}
      <MyProducts/>
    <Footer/>
     
    </div>
  )
}

export default Home