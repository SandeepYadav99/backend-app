import express from "express";
import SignupUser from "../controllers/SignupUser.js";

let router = express.Router();

router.post("/signup", SignupUser.Signup)

export default router;
