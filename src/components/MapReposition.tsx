import React, { useEffect, } from 'react';
import { useMap } from 'react-leaflet';

interface MapRepositionProps {
    lat: number;
    lng: number;
};

export const MapReposition: React.FC<MapRepositionProps> = ({lat, lng}) => {
    const map = useMap();
     useEffect(() => {
       map.setView([lat, lng]);
     }, [lat, lng]);
     return null;
}