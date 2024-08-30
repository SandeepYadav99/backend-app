
import express from "express";
import userCTX from "./users.js"
import personCtx from "./Person.js"

const router = express.Router();

router.use("/user", userCTX);
router.use("/person", personCtx);

export default router