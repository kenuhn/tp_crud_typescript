import mongoose from "mongoose";
import { IFilm, filmSchema } from "./film";

export interface ISession {
  film: IFilm;
  date: Date;
  time: string;
  availableSeats: number;
}

const sessionSchema = new mongoose.Schema<ISession>({
  film: [filmSchema],
  date: { type: Date },
  time: { type: String },
  availableSeats: { type: Number },
});

export const sessionModel = mongoose.model<ISession>(
  "directeur",
  sessionSchema
);
