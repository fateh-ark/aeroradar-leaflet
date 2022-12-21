import React from 'react'
import {LiveClock} from '.'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return (
        <nav className='h-16 bg-slate-900 flex items-center justify-between px-4 z-0'>
            <div className='flex items-center gap-2'>
                <button id="burger-main-nav" className="text-white text-2xl hover:bg-slate-700 active:bg-slate-800 py-1 px-3 rounded lg:collapse visible">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <a href=""><img src="src/assets/banner_color_small.png" alt="logo" className='h-10' /></a>
            </div>
            <div className='flex items-stretch text-white font-semibold h-full lg:visible collapse'>
                <a href="" className='py-auto xl:px-5 px-3 xl:text-base lg:text-sm text-base flex items-center hover:bg-slate-700 active:bg-slate-800'>Live Map</a>
                <a href="" className='py-auto xl:px-5 px-3 xl:text-base lg:text-sm text-base flex items-center hover:bg-slate-700 active:bg-slate-800'>Ground Control</a>
                <a href="" className='py-auto xl:px-5 px-3 xl:text-base lg:text-sm text-base flex items-center hover:bg-slate-700 active:bg-slate-800'>Database</a>
                <a href="" className='py-auto xl:px-5 px-3 xl:text-base lg:text-sm text-base flex items-center hover:bg-slate-700 active:bg-slate-800'>Support Us</a>
                <a href="" className='py-auto xl:px-5 px-3 xl:text-base lg:text-sm text-base flex items-center hover:bg-slate-700 active:bg-slate-800'>About</a>
                <a href="https://www.roblox.com/games/6647962258/Aeronautica" target="_blank" rel="noopener noreferrer" className='py-auto xl:px-5 px-3 xl:text-base lg:text-sm text-base flex items-center bg-green-700 hover:bg-green-600 active:bg-green-800'><FontAwesomeIcon icon={faPlay} />&nbsp;&nbsp;Play Aeronautica</a>
            </div>
            <LiveClock/>
        </nav>
    );
}

export default Navbar