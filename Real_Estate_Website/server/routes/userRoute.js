import express from "express";
import { createUser, userExists, getUser} from "../controllers/userCntrl.js";
const router = express.Router()

router.post("/registeruser", createUser)
router.post("/checkuser", userExists)
router.post("/getuser", getUser)



export {router as userRoute}