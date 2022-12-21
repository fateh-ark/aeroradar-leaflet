import React from 'react'
import { Navbar,MapCanvas,ControlBar,ZoomControlMobile,BurgerMainNav } from '../components'

const MainPage = () => {
  return (
    <div className='relative bg-stone-200 w-screen h-screen flex flex-col overflow-hidden'>
        <Navbar/>
        <BurgerMainNav/>
        <ZoomControlMobile/>
        <MapCanvas/>    
        <ControlBar/>
    </div>
  )
}

export default MainPage