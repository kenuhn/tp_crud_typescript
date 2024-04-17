import mongoose from "mongoose";
import { IDirector, directorSchema } from "./realisateur";

export interface IFilm {
  title: string;
  releaseYear: number;
  genre: string;
  directors: IDirector[];
}

export const filmSchema = new mongoose.Schema<IFilm>({
  title: { type: String },
  releaseYear: { type: Number },
  genre: { type: String },
  directors: [directorSchema],
});

export const filmModel = mongoose.model<IFilm>("film ", filmSchema);
