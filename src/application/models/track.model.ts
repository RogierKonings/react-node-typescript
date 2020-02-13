import { prop, Typegoose } from '@typegoose/typegoose';

export class Track extends Typegoose {
    @prop()
    spoorNummer?: string;
}
