import React from 'react'
import { Navbar,MapCanvas,ControlBar } from '../components'

const MainPage = () => {
  return (
    <div className='bg-stone-200 w-screen h-screen flex flex-col'>
        <Navbar/>
        <MapCanvas/>    
        <ControlBar/>
    </div>
  )
}

export default MainPage