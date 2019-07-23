const ENDPOINTS = {
    TRAVEL_INFORMATION: {
        BASE_URL: 'https://gateway.apiportal.ns.nl/public-reisinformatie/api/',
        STATIONS: 'v2/stations'
    }
}

class TravelInformation {

    public getStations(): string {
        return ENDPOINTS.TRAVEL_INFORMATION.BASE_URL + ENDPOINTS.TRAVEL_INFORMATION.STATIONS;
    }
}

const Endpoints = { TravelInformation: new TravelInformation() };
export default Endpoints;