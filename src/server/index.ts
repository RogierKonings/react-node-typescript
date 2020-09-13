import App from './app';
import StationsController from './controllers/stations/stations.controller';
import * as cluster from 'cluster';
import * as dotenv from 'dotenv';
import * as os from 'os';

dotenv.config();

const DEFAULT_PORT = 3000;
const port = process.env.PORT || DEFAULT_PORT;

class Server {
  constructor(userPort: number | string) {
    const normalizedPort = Server.normalizePort(userPort);
    Server.start(normalizedPort);
  }

  private static start(normalizedPort: number) {
    if (cluster.isMaster) {
      const numWorkers = os.cpus().length;

      console.log('Master cluster setting up', numWorkers, 'workers....');
      for (let i = 0; i < numWorkers; i += 1) {
        cluster.fork();
      }

      cluster.on('online', (worker: cluster.Worker) => console.log('Worker', worker.process.pid, 'is online'));
      cluster.on('exit', (worker: cluster.Worker, code: number, signal: string) => {
        console.log('Worker', worker.process.pid, 'died with code:', code, ', and signal:', signal);
        console.log('Starting a new worker');
        cluster.fork();
      });
    } else {
      const app = new App([new StationsController()], normalizedPort);
      app.listen();
    }
  }

  private static normalizePort(value: number | string): number {
    const userPort = typeof value === 'string' ? parseInt(value, 10) : value;

    if (userPort >= 0) {
      return userPort;
    }
    return DEFAULT_PORT;
  }
}

const server = new Server(port);
