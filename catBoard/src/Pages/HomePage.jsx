import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import ConfigBar from '../components/ConfigBar'
import KeyboardType from '../components/KeyboardType'
import Footer from '../components/Footer'
import ResultPage from './ResultPage'
function HomePage() {

    
  return (
    <>
    <Navbar />  
   
    <KeyboardType />

    <Footer />
    </>
  )
}

export default HomePage
