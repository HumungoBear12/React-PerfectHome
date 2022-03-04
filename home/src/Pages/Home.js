import React from 'react'
import Banner from '../Components/Banner'
import Body from '../Components/body'
import Slideshow from '../Components/Slideshow'
import Logo from '../Components/Logo'

const Home = () => {
  return (
    <div>
      <Logo/>
      <Body/>
        <Banner/>
        <Slideshow/>
    </div>
  )
}

export default Home