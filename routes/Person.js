import express from "express";
import Person from "../controllers/Person.js";

const router = express.Router();
router.get("/read", Person.GetPerson)
router.post("/create", Person.createPerson)
router.put("/update", Person.UpdatePerson)
router.delete("/delete", Person.DeletePerson)

export default router;