import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlassPlus, faMagnifyingGlassMinus, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const ZoomControlMobile = () => {

    return (
        <div className='absolute top-20 right-4 flex flex-col z-[100] items-end justify-items-end gap-4 md:collapse visible'>
            <div className='bg-white py-2 px-4 rounded-full flex items-center justify-between w-60'>
                <p className='mx-1 text-lg font-semibold'>SERVER</p>
                <p className='mx-1 text-xl font-semibold text-sky-500'>ALL SERVER</p>
                <FontAwesomeIcon icon={faAngleDown} className="text-xl"/>
            </div>
            <div className='flex flex-col bg-white items-center justify-items-center py-1 w-12 rounded'>
                <button id="btn-zoom-in-2" className='bg-sky-500 text-white rounded px-3 py-2 hover:bg-sky-400 active:bg-sky-600'>
                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                </button>
                <p id="btn-zoom-level-2" className='mx-auto my-2 text-xl font-medium'>32x</p>
                <button id="btn-zoom-out-2" className='bg-sky-500 text-white rounded px-3 py-2 hover:bg-sky-400 active:bg-sky-600'>
                    <FontAwesomeIcon icon={faMagnifyingGlassMinus} />
                </button>
            </div>
        </div>
    );
}

export default ZoomControlMobile