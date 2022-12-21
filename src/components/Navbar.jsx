import React from 'react'
import {LiveClock} from '.'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return (
        <nav className='h-16 bg-slate-900 flex items-center justify-between px-4'>
            <img src="src/assets/banner_color_small.png" alt="logo" className='h-10' />
            <div className='flex items-stretch text-white font-semibold h-full'>
                <a href="" className='py-auto px-5 flex items-center hover:bg-slate-700'>Ground Control</a>
                <a href="" className='py-auto px-5 flex items-center hover:bg-slate-700'>Database</a>
                <a href="" className='py-auto px-5 flex items-center hover:bg-slate-700'>Support Us</a>
                <a href="" className='py-auto px-5 flex items-center hover:bg-slate-700'>Socials</a>
                <a href="" className='py-auto px-5 flex items-center hover:bg-slate-700'>About</a>
                <a href="https://www.roblox.com/games/6647962258/Aeronautica" target="_blank" rel="noopener noreferrer" className='py-auto px-5 flex items-center bg-green-700 hover:bg-green-600'><FontAwesomeIcon icon={faPlay} />&nbsp;&nbsp;Play Aeronautica</a>
            </div>
            {/* <div></div> */}
            <LiveClock/>
        </nav>
    );
}

export default Navbar