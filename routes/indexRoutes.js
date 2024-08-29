
import express from "express";
import userCTX from "./users.js"

const router = express.Router();
router.use("/user", userCTX);


export default router