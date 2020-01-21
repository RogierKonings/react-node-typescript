import { prop, arrayProp, Typegoose } from '@hasezoey/typegoose';
import * as mongoose from 'mongoose';

export enum StationType {
    FACULTATIEF_STATION = "FACULTATIEF_STATION",
    STOPTREIN_STATION = "STOPTREIN_STATION",
    KNOOPPUNT_STOPTREIN_STATION = "KNOOPPUNT_STOPTREIN_STATION",
    SNELTREIN_STATION = "SNELTREIN_STATION",
    KNOOPPUNT_SNELTREIN_STATION = "KNOOPPUNT_SNELTREIN_STATION",
    INTERCITY_STATION = "INTERCITY_STATION",
    KNOOPPUNT_INTERCITY_STATION = "KNOOPPUNT_INTERCITY_STATION",
    MEGA_STATION = "MEGA_STATION"
}

export class Track extends Typegoose {
    @prop()
    spoorNummer?: string;
}

export class Station extends Typegoose {
    @arrayProp({ items: Track })
    sporen: Track[];
    @arrayProp({ items: String })
    synoniemen: string[];
    @prop({ required: true })
    heeftFaciliteiten!: boolean;
    @prop({ required: true })
    heeftVertrektijden!: boolean;
    @prop({ required: true })
    heeftReisassistentie!: boolean;
    @prop({ required: true })
    code!: string;
    @prop({ required: true })
    namen!: {
        lang: string;
        kort: string;
        middel: string;
    };
    @prop({ required: true, enum: StationType })
    stationType!: StationType;
    @prop({ required: true })
    land!: string;
    @prop({ required: true })
    UICCode!: number;
    @prop({ required: true })
    lat!: number;
    @prop({ required: true })
    lng!: number;
    @prop({ required: true })
    radius!: number;
    @prop({ required: true })
    naderenRadius!: number;
    @prop({ required: true })
    EVACode!: string;
}

export const StationModel = new Station().getModelForClass(Station, {
    existingMongoose: mongoose,
    schemaOptions: { collection: 'stations' }
});