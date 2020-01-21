const API = {
    TRAVEL_INFORMATION: {
        BASE_URL: '/api/travelinformation/',
        STATIONS: 'stations'
    }
}

export const Endpoints = {
    TravelInformation: {
        getStations() {
            return API.TRAVEL_INFORMATION.BASE_URL + API.TRAVEL_INFORMATION.STATIONS;
      }
    }
  };




  
  
  