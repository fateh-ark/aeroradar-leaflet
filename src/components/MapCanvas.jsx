import React from 'react'
import { MapContainer, ImageOverlay, AttributionControl, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {CRS} from 'leaflet';

const ZoomButtonController = () => {
    const map = useMap()
    document.getElementById('btn-zoom-in-1').addEventListener('mouseup',function(){
        map.zoomIn();
    })
    document.getElementById('btn-zoom-out-1').addEventListener('mouseup',function(){
        map.zoomOut();
    })
    document.getElementById('btn-zoom-in-2').addEventListener('mouseup',function(){
        map.zoomIn();
    })
    document.getElementById('btn-zoom-out-2').addEventListener('mouseup',function(){
        map.zoomOut();
    })
    map.on('zoomend', function() {
        document.getElementById("btn-zoom-level-1").innerHTML = map.getZoom() * 16 + "x";
        document.getElementById("btn-zoom-level-2").innerHTML = map.getZoom() * 16 + "x";
    });
    return null;
}

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
        className="w-full h-full bg-[#a0b2ca] z-0"
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
            <ZoomButtonController/>

        </MapContainer>
    );
}

export default MapCanvas