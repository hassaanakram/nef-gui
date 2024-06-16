import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { LatLngLiteral } from 'leaflet';
import { useAPI } from '../providers/apiProvider';
import { MapReposition } from './MapReposition';

interface UEMapProps {
    center: LatLngLiteral;
    //marker: LatLngLiteral;
}

const UEMap: React.FC<UEMapProps> = ({center}) => {
    useEffect(() => {
        const L = require("leaflet");
    
        delete L.Icon.Default.prototype._getIconUrl;
    
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
          iconUrl: require("leaflet/dist/images/marker-icon.png"),
          shadowUrl: require("leaflet/dist/images/marker-shadow.png")
        });
      }, []);

    const {ueLocation} = useAPI();
    const [marker, setMarker] = useState<LatLngLiteral>({lat: 51.505, lng: -0.09});

    useEffect(() => {
        console.log("UEMap: Updating marker location with ueLocation", ueLocation);
        if (ueLocation) {
            setMarker(ueLocation);
        }    
        console.log("UEMap: Updated marker location", marker);

    }, [ueLocation, marker]);

    return (
           <MapContainer className={"grow w-2/3"} center={center} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={marker}>
                    <Popup>
                        UE Location {/*change it to use imsi*/}
                    </Popup>
                 </Marker>
                 <MapReposition lat={marker.lat} lng={marker.lng}/>
            </MapContainer>
    );
};

export default UEMap;