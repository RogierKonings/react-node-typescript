import * as superagent from 'superagent';
import * as express from 'express';
import { Endpoints } from '../../../configuration/endpoints';
import { Station } from '../../../models/station.model';
import { StationRepository } from '../../repository/station-repository';

class StationsController {
  public router = express.Router();

  public headers = {
    'Ocp-Apim-Subscription-Key': process.env.API_KEY,
    'Accept': 'application/json',
  };

  constructor() {
    console.log('initialize controller');
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.get(Endpoints.TravelInformation.Stations, this.getAllStations);
  }

  private getAllStations = (request: express.Request, response: express.Response) => {
    console.log('getting stations');
    this.requestStationsFromExternalApi()
      .then((station: Station[]) => {
        const repo = new StationRepository();
        repo.storeData(station);

        response.send(station);
      })
      .catch(() => new Error('Error retrieving the stations from the API'));
  };

  private requestStationsFromExternalApi(): Promise<Station[]> {
    return superagent
      .get(`${process.env.TRAVEL_INFORMATION_BASEURL}${process.env.TRAVEL_INFORMATION_STATIONS}`)
      .set(this.headers)
      .then((response: superagent.Response) => {
        const stations: Station[] = JSON.parse(response.text).payload;
        return stations;
      })
      .catch(error => error);
  }

  // private storeStations(stations: Station[]): void {

  // }
}

export default StationsController;
