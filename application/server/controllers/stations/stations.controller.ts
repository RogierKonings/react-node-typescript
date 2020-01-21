import * as superagent from 'superagent';
import * as express from 'express';
import { Endpoints } from '../../../configuration/endpoints';
import { Station } from '../../../models/station.model';

class StationsController {

    public path = `${Endpoints.TravelInformation.getStations}`;
    public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes(): void {
        this.router.get(this.path, this.getAllStations);
    }

    private getAllStations = (request: express.Request, response: express.Response) => {
        this.retrieveStations()
            .then((result: Station[]) => {
                response.send(result);
            })
            .catch(() => new Error('Error retrieving the stations from the API'))

    }

    private retrieveStations(): Promise<Station[]> {
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
            .catch(error => {
                return error;
            });
    }

    private storeStations(stations: Station[]): void {

    }

}

export default StationsController;