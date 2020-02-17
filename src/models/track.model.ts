import { prop } from '@typegoose/typegoose';

export class Track {
    @prop()
    spoorNummer?: string;
}
