import * as mongoose from 'mongoose';
import { Station, StationModel } from '../../models/station.model';

export class StationRepository {
    public mongoose: mongoose.Mongoose;

    constructor() {
        this.mongoose = mongoose;
        this.connectToDatabase();
    }

    private connectToDatabase(): void {
        this.mongoose.Promise = global.Promise;
        this.mongoose.connect(`mongodb://${process.env.MONGODB_BASEURL}/${process.env.MONGODB_DATABASE}`, {
          useUnifiedTopology: true,
          useNewUrlParser: true,
          useCreateIndex: true
        });
    }

    public async storeData(stations: Station[]) {

        const StationModel = new Station().getModelForClass(Station, {
            existingMongoose: mongoose,
            schemaOptions: { collection: 'stations' }});

        const trial = new StationModel(stations);
        trial.save();
        const stationSchema = new this.mongoose.Schema({
            StationModel
        });
        
        stations.forEach(async station => {
            await StationModel.create(station);


            const StationSchema = this.mongoose.model('Station', stationSchema);
            const myData = new StationSchema((station as any));
            myData.save()
                .then((item: any) => {
                    console.log(item, 'item saved to the database');
                })
                .catch(err => {
                    console.log(err, 'unable to save');
                });
            
        });
    }

    private createDatabaseSchema(): void {
        // StationModel.create
    }

    public async getStation(code: string): Promise<Station> {
        return StationModel.findOne({'code': code});
    }

    async getStations(): Promise<Station[]> {
        return StationModel.find({});
    }
}