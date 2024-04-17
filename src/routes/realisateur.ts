import { Router } from "express";
import {
  deleteDirector,
  getByIdDirector,
  getDirector,
  postDirector,
  updateDirector,
} from "../controller/realisateur";
const router = Router();

router.get("/", getDirector);
router.get("/:id", getByIdDirector);
router.post("/", postDirector);
router.put("/:id", updateDirector);
router.delete("/:id", deleteDirector);

export default router;
