import * as superagent from 'superagent';
import * as express from 'express';
import { Endpoints } from '../../../configuration/endpoints';
import { Station } from '../../../models/station.model';
import { StationRepository } from '../../repository/station-repository';

class StationsController {

    public path = `${Endpoints.TravelInformation.Stations}`;

    public router = express.Router();

    constructor() {
        console.log('initialize controller');
        this.initializeRoutes();
    }

    public initializeRoutes(): void {
        this.router.get(this.path, this.getAllStations);
    }

    private getAllStations = (request: express.Request, response: express.Response) => {
        StationsController.retrieveStations()
            .then((station: Station[]) => {
                const repo = new StationRepository();
                StationRepository.storeData(station);


                // response.send(station);
            })
            .catch(() => new Error('Error retrieving the stations from the API'))

    }

    private static retrieveStations(): Promise<Station[]> {
        const headers = {
            'Ocp-Apim-Subscription-Key': process.env.API_KEY,
            'Accept': 'application/json'
        };
        return superagent
            .get(`${process.env.TRAVELINFORMATION_BASEURL}${process.env.TRAVELINFOMRATION_STATIONS}`)
            .set(headers)
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
