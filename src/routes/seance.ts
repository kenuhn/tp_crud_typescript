import { Router } from "express";
import {
  deleteSession,
  getByIdSession,
  getSession,
  postSession,
  updateSession,
} from "../controller/seance";
const router = Router();

router.get("/", getSession);
router.get("/:id", getByIdSession);
router.post("/", postSession);
router.put("/:id", updateSession);
router.delete("/:id", deleteSession);

export default router;
