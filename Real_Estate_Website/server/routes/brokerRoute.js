import express from "express";
import { createBroker, getBroker, updateBroker, deleteBroker } from "../controllers/brokerCntrl.js";
const router = express.Router();

router.post("/register", createBroker);
router.get("/:id", getBroker);
router.delete("/:id", deleteBroker);
router.put("/update/:id", updateBroker);


export { router as BrokerRoute }
