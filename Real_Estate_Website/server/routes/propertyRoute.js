import express from "express";
import { createProperty, deleteProperty, getAllProperties, getProperty, updateProperty } from "../controllers/propCntrl.js";
const router = express.Router()

router.post("/create", createProperty)
router.get("/displayProprties", getAllProperties)
router.get("/:id", getProperty)
router.delete("/:id", deleteProperty)
router.put("/update/:id", updateProperty)




export {router as propertyRoute}