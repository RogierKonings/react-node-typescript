import App from './app';
import StationsController from './controllers/stations/stations.controller';
import * as cluster from 'cluster';
import * as dotenv from 'dotenv';
import { HttpException } from '../models/http-exception.model';

 
dotenv.config();

const DEFAULT_PORT = 3000;
const port = process.env.PORT || DEFAULT_PORT;

class Server {

    constructor(port: number | string) {
        const normalizedPort = this.normalizePort(port);
        this.start(normalizedPort);
    }

    private start(port: number) {

        if (cluster.isMaster) {
            const numWorkers = require('os').cpus().length;

            console.log('Master cluster setting up', numWorkers, 'workers....');
            for (let i = 0; i < numWorkers; i++) {
                cluster.fork();
            } 

            cluster.on('online', (worker: cluster.Worker) => console.log('Worker', worker.process.pid, 'is online'));
            cluster.on('exit', (worker: cluster.Worker, code: number, signal: string) => {
                console.log('Worker', worker.process.pid, 'died with code:', code, ', and signal:', signal);
                console.log('Starting a new worker');
                cluster.fork();
            });

        } else {
             const app = new App(
                [
                    new StationsController()
                ],
                port
            );
            app.listen()        
        }
    }

    private normalizePort(value: number | string): number {
        var port = typeof value === 'string' ? parseInt(value, 10) : value;

        if (port >= 0) {
            return port;
        }
        return DEFAULT_PORT;
    }
}

new Server(port);