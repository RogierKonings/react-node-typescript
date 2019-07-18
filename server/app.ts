import { NextFunction } from "connect";

const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const router = require('./routes/index');

interface ResponseError extends Error {
  status?: number;
}

class App {
  public express: any;

  constructor() {
    this.express = express();
    this.mountRoutes();

    this.setErrorHandling();
  }

  private mountRoutes(): void {
    this.express.use('/api', router)
    this.express.use('/', (req: Request, res: any) => res.sendFile(path.join(__dirname, '../dist', 'index.html')));
  }

  private setErrorHandling(): void {
    this.setErrorNotFound();
    this.setErrorHandler();
  }

  private setErrorNotFound(): void {
    this.express.use((req: Request, res: Response, next: NextFunction) => {
      const err: ResponseError = new Error('Not Found');
      err.status = 404;
      next(err);
    });
  }

  private setErrorHandler(): void {
    this.express.use((err: Error, req: any, res: any, next: NextFunction) => {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status((err as ResponseError).status || 500);
      res.render('error');
    });
  }

}

export default new App().express;

// const app = express();

// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'dist')));


// // error handler
// app.use((err: ResponseError, req: any, res: any, next: any) => {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// export default app;
