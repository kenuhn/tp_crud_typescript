import { Router } from "express";
import {
  deleteFilm,
  getByIdFilm,
  getFilm,
  postFilm,
  updateFilm,
} from "../controller/film";
const router = Router();

router.get("/", getFilm);
router.get("/:id", getByIdFilm);
router.post("/", postFilm);
router.put("/:id", updateFilm);
router.delete("/:id", deleteFilm);

export default router;
