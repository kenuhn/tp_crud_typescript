import { Request, Response } from "express";
import { filmModel } from "../model/film";

export const getFilm = async (req: Request, res: Response) => {
  try {
    const AllFilm = await filmModel.find();

    return res.status(200).json(AllFilm);
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
};

export const getByIdFilm = async (req: Request, res: Response) => {
  try {
    const filmId = req.params.filmId;

    const film = await filmModel.findOne({ $Set: { _id: filmId } });

    return res.status(200).json(film);
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
};

export const postFilm = async (req: Request, res: Response) => {
  try {
    const film = req.body;
    await filmModel.create({
      ...film,
    });

    res.status(201).json({ message: `film enregistré ${film}` });
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
};

export const updateFilm = async (req: Request, res: Response) => {
  try {
    const updateData = req.body;
    const filmId = req.params.filmId;

    await filmModel.updateOne(
      { _id: filmId },
      { $set: updateData },
      { new: true }
    );
    res.status(200).json({ message: "mise à jour avec succés" });
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
};
export const deleteFilm = async (req: Request, res: Response) => {
  try {
    const filmId = req.params.filmId;

    await filmModel.deleteOne({ _id: filmId });
    res.status(200).json({ message: "suppression avec succés" });
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
};
