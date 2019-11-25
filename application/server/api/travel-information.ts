import * as superagent from 'superagent';
import { Endpoints } from '../configuration/endpoints';
import { Station } from '../../models/station';

export class TravelInformation {

    get headers(): Object {
        return {
            'Ocp-Apim-Subscription-Key': process.env.API_KEY,
            'Accept': 'application/json'
        }
    }

    constructor() {}

    public async getAllStations(): Promise<Station[]> {
        return superagent
            .get(Endpoints.travelInformation.getStations())
            .set(this.headers)
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
