import express from "express";
import { createUser, UserExists} from "../controllers/userCntrl.js";
const router = express.Router()

router.post("/registeruser", createUser)
router.post("/getuser", UserExists)



export {router as userRoute}