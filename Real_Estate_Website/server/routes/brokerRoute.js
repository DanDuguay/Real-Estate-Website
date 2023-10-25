import express from "express";
import { createBroker } from "../controllers/brokerCntrl.js";
const router = express.Router()

router.post("/register", createBroker)

export {router as BrokerRoute}