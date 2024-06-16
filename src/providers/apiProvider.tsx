import axios from 'axios';
import {
    createContext,
    useContext,
    ReactNode,
    useState,
} from 'react';
import { LatLngLiteral } from 'leaflet';

type APIContextType = {
    ueLocation: LatLngLiteral;
    getUELocation: (afid: string, imsi: string) => Promise<void>;
};

const APIContext = createContext<undefined | APIContextType>(undefined);

const APIProvider = ({children}: {children: ReactNode}) => {
    const [ueLocation, setUELocation] = useState<any>(null);

    const getUELocation = async (afid: string, imsi: string) => {
        const payload = {
            "analyEvent": "UE_MOBILITY",
            "tgtUe": {
                "gpsi": `msisdn-${imsi}`,
            },
            "suppFeat": "0"
        }
    
        try {
            const response = await axios.post(`3gpp-analyticsexposure/v1/${afid}/fetch`, payload);
            console.log('req sent')
            console.log(response);
            const ueLat = response.data?.ueMobilityInfos[0].locInfo[0].loc.geographicAreas[0].point.point.lat;
            const ueLong = response.data?.ueMobilityInfos[0].locInfo[0].loc.geographicAreas[0].point.point.lon;
            console.log(ueLat, ueLong);
            setUELocation({lat: ueLat, lng: ueLong});
            console.log(ueLocation)
        } catch (error) {
            console.error(error);
        }
    };

    const contextValue = {ueLocation, getUELocation};

    return (
        <APIContext.Provider value={contextValue}>{children}</APIContext.Provider>
    )
};

export const useAPI = (): APIContextType => {
    const context = useContext(APIContext);
    if (!context) {
        throw new Error('useAPI must be used within an APIProvider');
    }
    return context;
};

export default APIProvider;