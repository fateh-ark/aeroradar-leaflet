import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faFilter, faHistory, faMagnifyingGlassPlus, faMagnifyingGlassMinus, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const ControlBar = () => {
    return (
        <div className='h-12 bg-slate-900 flex items-center justify-between'>
            <div className='flex items-stretch text-white font-regular h-full'>
                <button className='py-auto px-4 flex items-center hover:bg-slate-700'><FontAwesomeIcon icon={faCog} />&nbsp;&nbsp;Settings</button>
                <button className='py-auto px-4 flex items-center hover:bg-slate-700'><FontAwesomeIcon icon={faFilter} />&nbsp;&nbsp;Filters</button>
                <button className='py-auto px-4 flex items-center hover:bg-slate-700'><FontAwesomeIcon icon={faHistory} />&nbsp;&nbsp;Playback</button>
            </div>
            <div className='flex items-center  font-regular h-full px-4 gap-4'>
                <div className='bg-white py-0.5 px-3 rounded-full flex items-center justify-between w-60'>
                    <p className='mx-1 text-md font-semibold'>SERVER</p>
                    <p className='mx-1 text-lg font-semibold text-blue-600'>ALL SERVER</p>
                    <FontAwesomeIcon icon={faAngleUp} />
                </div>
                <div className='bg-white p-0.5 rounded-full flex items-center'>
                    <button className='bg-blue-600 text-white rounded-full px-2 py-0.5 hover:bg-blue-400'>
                        <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                    </button>
                    <p className='mx-3 text-lg font-medium'>16x</p>
                    <button className='bg-blue-600 text-white rounded-full px-2 py-0.5 hover:bg-blue-400'>
                        <FontAwesomeIcon icon={faMagnifyingGlassMinus} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ControlBar