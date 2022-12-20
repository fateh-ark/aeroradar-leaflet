import React from 'react'
import { MapContainer, ImageOverlay } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {CRS} from 'leaflet';


const MapCanvas = () => {
    const bounds = [[-500,-500], [500,500]];
    
    return (
        <MapContainer
        center={[0, 0]}
        zoom={2}
        maxZoom={5}
        className="w-full h-full bg-[#a0b2ca]"
        crs={CRS.Simple} // This works
        >
        <ImageOverlay
            url="src/assets/map.png"
            bounds={bounds}
        />
        </MapContainer>
    );
}

export default MapCanvas