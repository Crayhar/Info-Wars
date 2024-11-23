import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapWithScrollZoom = () => {
    const [zoom, setZoom] = useState(13); // Initial zoom level

    // Custom hook to use the map instance
    const MapZoom = () => {
        const map = useMap();
        useEffect(() => {
            map.setZoom(zoom);
        }, [zoom, map]);
        return null;
    };

    // Update zoom based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const newZoom = 13 + scrollPosition / 500; // Adjust divisor for zoom sensitivity
            setZoom(newZoom);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <MapContainer center={[51.505, -0.09]} zoom={zoom} style={{ height: '100vh', width: '100vw', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <MapZoom />
        </MapContainer>
    );
};

export default MapWithScrollZoom;
