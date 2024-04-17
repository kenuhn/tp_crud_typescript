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
    const { id } = req.params;
    console.log(id);
    const film = await filmModel.findOne({ _id: id });

    return res.status(200).json(film);
  } catch (error) {
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
    const { id } = req.params;

    await filmModel.updateOne({ _id: id }, { $set: updateData });
    res.status(200).json({ message: "film mise à jour avec succés" });
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
};
export const deleteFilm = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await filmModel.deleteOne({ _id: id });
    res.status(200).json({ message: "suppression avec succés" });
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
};
