import React, {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';


const BurgerMainNav = () => {
    var MainMenuToggle = false;

    useEffect(() => {
        document.getElementById('burger-main-nav').addEventListener('mouseup',function(){
            if(MainMenuToggle){
                MainMenuToggle = false;
                document.getElementById("collapsed-nav").style.visibility = "hidden"; 
                
            }else{
                MainMenuToggle = true;
                document.getElementById("collapsed-nav").style.visibility = "visible"; 
            }
            
            const mql = window.matchMedia('(max-width: 1024px)');

            mql.onchange = (e) => {
                if (!e.matches) {
                    document.getElementById("collapsed-nav").style.visibility = "collapse";
                    MainMenuToggle = false;
              }
            }
        })
    });

    return (
        <div id="collapsed-nav" className='absolute md:top-14 top-16 left-0 z-[1000] w-screen flex flex-col items-stretch text-white font-semibold lg:collapse invisible'>
            <a href="" className='py-4 md:text-lg md:px-4 px-6 text-2xl flex items-center bg-slate-900/75 hover:bg-slate-700/75 active:bg-slate-800/75'>Live Map</a>
            <hr className='border-slate-500'/>
            <a href="" className='py-4 md:text-lg md:px-4 px-6 text-2xl flex items-center bg-slate-900/75 hover:bg-slate-700/75 active:bg-slate-800/75'>Ground Control</a>
            <hr className='border-slate-500'/>
            <a href="" className='py-4 md:text-lg md:px-4 px-6 text-2xl flex items-center bg-slate-900/75 hover:bg-slate-700/75 active:bg-slate-800/75'>Database</a>
            <hr className='border-slate-500'/>
            <a href="" className='py-4 md:text-lg md:px-4 px-6 text-2xl flex items-center bg-slate-900/75 hover:bg-slate-700/75 active:bg-slate-800/75'>Support Us</a>
            <hr className='border-slate-500'/>
            <a href="" className='py-4 md:text-lg md:px-4 px-6 text-2xl flex items-center bg-slate-900/75 hover:bg-slate-700/75 active:bg-slate-800/75'>About</a>
            <hr className='border-slate-500'/>
            <a href="https://www.roblox.com/games/6647962258/Aeronautica" target="_blank" rel="noopener noreferrer" className='py-4 md:text-lg md:px-4 px-6 text-2xl flex items-center bg-green-700/75 hover:bg-green-600/75 active:bg-green-800/75'><FontAwesomeIcon icon={faPlay} />&nbsp;&nbsp;Play Aeronautica</a>
        </div>
    );
}

export default BurgerMainNav