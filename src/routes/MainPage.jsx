import React from 'react'
import { Navbar,MapCanvas } from '../components'

const MainPage = () => {
  return (
    <div className='bg-stone-200 w-screen h-screen flex flex-col'>
        <Navbar/>
        <MapCanvas/>    
    </div>
  )
}

export default MainPage