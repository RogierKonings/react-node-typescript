import * as mongoose from 'mongoose';
import { Station, StationModel } from '../../models/station.model';
import { getModelForClass } from '@typegoose/typegoose';

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
      useCreateIndex: true,
    });
  }

  public async storeData(stations: Station[]): Promise<void> {
    // const StationModel = getModelForClass(Station, {
    //     existingMongoose: mongoose,
    //     schemaOptions: { collection: 'stations' }});

    // const trial = new StationModel(stations);
    // trial.save();
    // const stationSchema = new this.mongoose.Schema({
    //     StationModel
    // });

    console.log('this', this.mongoose);

    stations.forEach(async station => {
      await StationModel.create(station);

      const myData = new StationModel(station as any);
      myData
        .save()
        .then((item: any) => {
          console.log(item, 'item saved to the database');
        })
        .catch(err => {
          console.log(err, 'unable to save');
        });
    });
  }

  // private createDatabaseSchema(): void {
  //     // StationModel.create
  // }

  public static async getStation(code: string): Promise<Station> {
    return StationModel.findOne({ code });
  }

  public static async getStations(): Promise<Station[]> {
    return StationModel.find({});
  }
}
