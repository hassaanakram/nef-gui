import React from 'react';
import UEMap from '../components/UEMap';
import Header from '../components/Header';
import UELocationForm from '../components/UELocationForm';
import { useAPI } from '../providers/apiProvider';

import { LatLngLiteral } from 'leaflet';

const Dashboard: React.FC = () => {
    const centerPosition: LatLngLiteral = {lat: 51.505, lng: -0.09};
    // const markerPosition: LatLngLiteral = {lat: 51.505, lng: -0.09};
    const {getUELocation} = useAPI();
    // markerPosition = ueLocation
    return (
        <div className="flex flex-col place-items-center h-dvh w-dvw">
            <Header scheme={'alternate'}/>
            <UEMap center={centerPosition}/>
            <UELocationForm onSubmit={(afid, imsi) => getUELocation(afid, imsi)}/>
        </div>
    );
};

export default Dashboard;