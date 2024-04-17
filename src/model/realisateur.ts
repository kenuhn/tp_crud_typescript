import mongoose from "mongoose";

export interface IDirector {
  name: string;
  birthDate: Date;
  biography: string;
}

export const directorSchema = new mongoose.Schema<IDirector>({
  name: { type: String },
  birthDate: { type: Date },
  biography: { type: String },
});

export const directorModel = mongoose.model<IDirector>(
  "directeur",
  directorSchema
);
