import * as express from 'express';
import path from 'path';
import * as travelInformation from './api/travel-information';
import { HttpException } from '../models/http-exception';
import * as addRequestId from 'express-request-id';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import { StationRepository } from './repository/station-repository';
import { TravelInformation } from './api/travel-information';


// const favicon = require('serve-favicon');
// const logger = require('morgan');
// const cookieParser = require('cookie-parser');

class App {
  public express: express.Express;

  constructor() {
    this.express = express();

    this.setDatabase();

    this.setBodyParser();
    this.setSecurityHeaders();
    this.setLogger();
    this.mountRoutes();

    this.setErrorHandling();
  }

  private async setDatabase() {
    const travelInformation = new TravelInformation();
    const stations = await travelInformation.getAllStations();
    const repo = new StationRepository(stations);
    const stationBrn = await repo.getStation('BRN');
    console.log('the station is:', stationBrn);
  }

  private setBodyParser(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({
      extended: true
    }));
  }

  private setSecurityHeaders(): void {
    this.express.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.header('X-Content-Type-Options', 'nosniff');
      res.header('X-Frame-Options', 'deny');
      res.header('X-XSS-Protection', '1; mode=block');
      next();
    });
  }

  private setLogger(): void {
    this.express.use(addRequestId());
    logger.token('id', (req: any) => {
      return req.id
    });

    const loggerFormat = ':id :remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms';

    this.express.use(logger(loggerFormat, {
      skip: (req: express.Request, res: express.Response) => {
        return res.statusCode < 400
      },
      stream: process.stderr
    }));
    this.express.use(logger(loggerFormat, {
      skip: (req: express.Request, res: express.Response) => {
        return res.statusCode >= 400
      },
      stream: process.stdout
    }));
  }

  private mountRoutes(): void {
    // this.express.use('/api', (travelInformation as express.Application));
    this.express.use('/', (req: express.Request, res: express.Response) => res.sendFile(path.join(__dirname, '../dist', 'index.html')));
  }

  private setErrorHandling(): void {
    this.setErrorNotFound();
    this.setErrorHandler();
  }

  private setErrorNotFound(): void {
    this.express.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      const err: HttpException = new HttpException(404, 'Not Found');
      next(err);
    });
  }

  private setErrorHandler(): void {
    this.express.use((err: HttpException, req: express.Request, res: express.Response, next: express.NextFunction) => {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.json({error: 'error'});
    });
  }

}

export default new App().express;
