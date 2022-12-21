import React from 'react'
import { MapContainer, ImageOverlay, Marker, Popup,ZoomControl, AttributionControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {CRS} from 'leaflet';


const MapCanvas = () => {
    const bounds = [[-500,-500], [500,500]];
    
    return (
        <MapContainer
        center={[0, 0]}
        zoom={2}
        maxZoom={5}
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        zoomControl={false}
        attributionControl={false}
        className="w-full h-full bg-[#a0b2ca]"
        crs={CRS.Simple} // This works
        >
            <ImageOverlay
                url="src/assets/map.png"
                bounds={bounds}
            />

            <AttributionControl
            prefix='Leaflet 🇺🇦 | <a href="https://www.roblox.com/games/6647962258/Aeronautica" target="_blank">&copy; Aeronautica</a> <a href="" target="_blank">&copy; Aeroradar contributors</a>'
            ></AttributionControl>

            {/* <ZoomControl position="bottomright"/> */}

            <Marker position={[2,-3.5]}>
                <Popup>
                    Oconee Island Airport
                </Popup>
            </Marker>

            <Marker position={[-5.8,3]}>
                <Popup>
                    Hampden Field Airport
                </Popup>
            </Marker>

            <Marker position={[4,26]}>
                <Popup>
                    Clarence International Airport
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default MapCanvas