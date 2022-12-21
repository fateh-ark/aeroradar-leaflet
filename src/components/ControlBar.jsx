import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faFilter, faHistory, faMagnifyingGlassPlus, faMagnifyingGlassMinus, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const ControlBar = () => {

    return (
        <div className='md:h-12 h-20 bg-slate-900 flex items-center justify-between z-0'>
            <div className='flex items-stretch text-white font-regular h-full md:w-auto md:justify-start md:mt-0 mt-1 w-full justify-between md:px-0 px-12'>
                <button className='py-auto px-4 flex md:flex-row md:my-0 my-auto flex-col items-center md:hover:bg-slate-700 md:active:bg-slate-800 md:focus:text-white md:hover:text-white hover:text-sky-200 focus:text-sky-400'><FontAwesomeIcon icon={faCog} className="md:text-base text-2xl"/>&nbsp;&nbsp;Settings</button>
                <button className='py-auto px-4 flex md:flex-row md:my-0 my-auto flex-col items-center md:hover:bg-slate-700 md:active:bg-slate-800 md:focus:text-white md:hover:text-white hover:text-sky-200 focus:text-sky-400'><FontAwesomeIcon icon={faFilter} className="md:text-base text-2xl"/>&nbsp;&nbsp;Filters</button>
                <button className='py-auto px-4 flex md:flex-row md:my-0 my-auto flex-col items-center md:hover:bg-slate-700 md:active:bg-slate-800 md:focus:text-white md:hover:text-white hover:text-sky-200 focus:text-sky-400'><FontAwesomeIcon icon={faHistory} className="md:text-base text-2xl"/>&nbsp;&nbsp;Playback</button>
            </div>
            <div className='flex items-center  font-regular h-full px-4 gap-4 md:visible collapse'>
                <div className='bg-white py-0.5 px-3 rounded-full flex items-center justify-between w-60'>
                    <p className='mx-1 text-md font-semibold'>SERVER</p>
                    <p className='mx-1 text-lg font-semibold text-sky-500'>ALL SERVER</p>
                    <FontAwesomeIcon icon={faAngleUp} />
                </div>
                <div className='bg-white p-0.5 rounded-full flex items-center w-28'>
                    <button id="btn-zoom-in-1" className='bg-sky-500 text-white rounded-full px-2 py-0.5 hover:bg-sky-400 active:bg-sky-600'>
                        <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                    </button>
                    <p id="btn-zoom-level-1" className='mx-auto text-lg font-medium'>32x</p>
                    <button id="btn-zoom-out-1" className='bg-sky-500 text-white rounded-full px-2 py-0.5 hover:bg-sky-400 active:bg-sky-600'>
                        <FontAwesomeIcon icon={faMagnifyingGlassMinus} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ControlBar