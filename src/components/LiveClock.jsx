import React, {useState}  from 'react'

const LiveClock = () => {
    const [currentTime, setCurrentTime] = useState(() => new Date().toUTCString());

    const updateTime = () => {
        setCurrentTime(new Date().toUTCString());
    }

    setInterval(updateTime, 1000);

    return (
        <div className='text-white font-medium text-md md:visible collapse'>
            <h3>{currentTime}</h3>
        </div>
    )
}

export default LiveClock