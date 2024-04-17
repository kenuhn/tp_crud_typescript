import { Request, Response } from "express";
import { directorModel } from "../model/realisateur";

export const getDirector = async (req: Request, res: Response) => {
  try {
    const AllDirector = await directorModel.find();

    return res.status(200).json(AllDirector);
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
};

export const getByIdDirector = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(id);
    const director = await directorModel.findOne({ _id: id });

    return res.status(200).json(director);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const postDirector = async (req: Request, res: Response) => {
  try {
    const director = req.body;
    await directorModel.create({
      ...director,
    });

    res.status(201).json({ message: `director enregistré ${director}` });
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
};

export const updateDirector = async (req: Request, res: Response) => {
  try {
    const updateData = req.body;
    const directorId = req.params.directorId;

    await directorModel.updateOne(
      { _id: directorId },
      { $set: updateData },
      { new: true }
    );
    res.status(200).json({ message: "mise à jour avec succés" });
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
};
export const deleteDirector = async (req: Request, res: Response) => {
  try {
    const directorId = req.params.directorId;

    await directorModel.deleteOne({ _id: directorId });
    res.status(200).json({ message: "suppression avec succés" });
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
};
