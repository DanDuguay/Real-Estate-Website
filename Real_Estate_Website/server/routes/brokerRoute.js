import express from "express";
import {
  createBroker,
  getBroker,
  updateBroker,
  deleteBroker,
  getAllBrokers,
  requestViste
} from "../controllers/brokerCntrl.js";
const router = express.Router();

router.post("/register", createBroker);
router.get("/displayBrokers", getAllBrokers);
router.get("/broker", getAllBrokers);
router.get("/:id", getBroker);
router.delete("/:id", deleteBroker);
router.put("/update/:id", updateBroker);
router.post("/requestviste/:id", requestViste)

export { router as BrokerRoute };
