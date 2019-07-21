import app from './app';
import * as cluster from 'cluster';
import * as dotenv from 'dotenv';


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
            for (let i = 0; i < numWorkers; i++) cluster.fork();

            cluster.on('online', (worker: any) => console.log('Worker', worker.process.pid, 'is online'));
            cluster.on('exit', (worker: any, code: any, signal: any) => {
                console.log('Worker', worker.process.pid, 'died with code:', code, ', and signal:', signal);
                console.log('Starting a new worker');
                cluster.fork();
            });

        } else {
            app.listen(port, (err: Error) => {
                if (err) {
                    return console.log(err);
                }
                return console.log(`server is listening on ${port}`)
            })
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
