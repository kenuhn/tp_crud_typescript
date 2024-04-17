import { Request, Response } from "express";
import { sessionModel } from "../model/seance";

export const getSession = async (req: Request, res: Response) => {
  try {
    const AllSession = await sessionModel.find();

    return res.status(200).json(AllSession);
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
};

export const getByIdSession = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(id);
    const session = await sessionModel.findOne({ _id: id });

    return res.status(200).json(session);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const postSession = async (req: Request, res: Response) => {
  try {
    const session = req.body;
    await sessionModel.create({
      ...session,
    });

    res.status(201).json({ message: `session enregistré ${session}` });
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
};

export const updateSession = async (req: Request, res: Response) => {
  try {
    const updateData = req.body;
    const { id } = req.params;

    await sessionModel.updateOne(
      { _id: id },
      { $set: updateData },
      { new: true }
    );
    res.status(200).json({ message: "mise à jour avec succés" });
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
};
export const deleteSession = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await sessionModel.deleteOne({ _id: id });
    res.status(200).json({ message: "suppression avec succés" });
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
};
