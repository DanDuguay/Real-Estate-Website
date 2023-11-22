import express from "express";
import {getAdmin} from "../controllers/adminCntrl.js"
const router = express.Router()

router.post("/getadmin", getAdmin)

export {router as adminRoute}