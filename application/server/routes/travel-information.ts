import * as express from 'express';
import * as superagent from 'superagent';
import Endpoints from '../configuration/endpoints';
import HttpException from '../exceptions/http-exception';

const API_KEY = process.env.API_KEY;

class TravelInformation {

    public router: express.Router;

    get headers(): Object {
        return { 'Ocp-Apim-Subscription-Key': API_KEY }
    }

    constructor() {
        this.router = express.Router();
        this.getAllStations();
    }

    private getAllStations() {

        this.router.get('/stations', (req: express.Request, res: express.Response, next: express.NextFunction) => {
            console.log(this.headers);
            superagent
                .get(Endpoints.TravelInformation.getStations())
                .set(this.headers)
                .end((error: HttpException, response: superagent.Response) => {
                    if (error) { return error; }
                    res.send(response.text);
                });
        });

    }

}

module.exports = new TravelInformation().router;
