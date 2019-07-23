import * as express from 'express';
import path from 'path';
import * as travelInformation from './routes/travel-information';
import HttpException from './exceptions/http-exception';

// const favicon = require('serve-favicon');
// const logger = require('morgan');
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');


class App {
  public express: any;

  constructor() {
    this.express = express();
    this.setSecurityHeaders();
    this.mountRoutes();

    this.setErrorHandling();
  }

  private setSecurityHeaders(): void {
    this.express.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.header('X-Content-Type-Options', 'nosniff');
      res.header('X-Frame-Options', 'deny');
      res.header('X-XSS-Protection', '1; mode=block');
      next();
    });
  }

  private mountRoutes(): void {
    this.express.use('/api', travelInformation)
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
      res.render('error');
    });
  }

}

export default new App().express;
