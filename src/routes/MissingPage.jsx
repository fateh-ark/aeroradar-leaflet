import React from 'react'
import { Navbar,BurgerMainNav } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const MissingPage = () => {
  return (
    <div className='relative bg-slate-800 w-screen h-screen flex flex-col overflow-hidden'>
        <Navbar/>
        <BurgerMainNav/>

        <div className='relative flex w-screen h-full items-center justify-items-center z-0'>
          <div className='mx-auto flex flex-col items-center'>
            <div className='relative flex items-center lg:gap-10 md:gap-8 gap-4 lg:h-72 md:h-64 h-40 pointer-events-none'>
              <h1 className='lg:text-[24rem] md:text-[20rem] text-[12rem] text-white font-bold'>4</h1>
              <img src="src/assets/404-radar.png" alt="0" className='lg:h-72 lg:w-72 md:h-64 md:w-64 h-40 w-40 animate-[spin_2s_linear_infinite]'/>
              <h1 className='lg:text-[24rem] md:text-[20rem] text-[12rem] text-sky-500 font-bold'>4</h1>
              <div className='absolute w-full flex'>
                <div className='mx-auto border-4 border-sky-500 lg:p-40 md:p-32 p-20 rounded-full animate-ping'></div>
              </div>
            </div>
            <p className='md:mt-14 md:mb-8 my-6 text-white lg:text-3xl md:text-2xl text-xl text-center px-8'>Huh, we can't seem to find the page you're looking for within our radars.</p>
            <a href="/" className='text-white lg:text-2xl text-xl font-bold rounded bg-sky-500 hover:bg-sky-400 active:bg-sky-600 lg:py-5 lg:px-12 py-4 px-8 z-10'><FontAwesomeIcon icon={faArrowLeft} />&nbsp;&nbsp;Go back to live map</a>
          </div>
        </div>
    </div>
  )
}

export default MissingPage