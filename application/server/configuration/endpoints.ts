const API = {
    TRAVEL_INFORMATION: {
        BASE_URL: 'https://gateway.apiportal.ns.nl/reisinformatie-api/api/',
        STATIONS: 'v2/stations'
    }
}

export const Endpoints = {
    travelInformation: {
        getStations() {
            return API.TRAVEL_INFORMATION.BASE_URL + API.TRAVEL_INFORMATION.STATIONS;
      }
    }
  };
  
  
  