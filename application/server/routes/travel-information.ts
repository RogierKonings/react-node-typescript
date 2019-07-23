import * as express from 'express';
import * as superagent from 'superagent';
import { Router } from 'express';
import Endpoints from '../configuration/endpoints';


const API_KEY = process.env.API_KEY;


class TravelInformation {

    public router: Router;

    get headers(): Object {
        return { 'Ocp-Apim-Subscription-Key': API_KEY }
    }

    constructor() {
        this.router = express.Router();
        this.getAllStations();
    }

    private getAllStations(): void {

        this.router.get('/stations', (req: any, res: any, next: any) => {

            superagent
                .get(Endpoints.TravelInformation.getStations())
                .set(this.headers)
                .end((error: any, response: any) => {
                    if (error) { return error; }
                    res.send(response.text);
                });
        });

    }

}


module.exports = new TravelInformation().router;
