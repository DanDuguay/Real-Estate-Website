import express from "express";
import {
  createBroker,
  getBroker,
  updateBroker,
  deleteBroker,
  getAllBrokers,
  requestViste,
  getBrokerCredentials
} from "../controllers/brokerCntrl.js";
const router = express.Router();

router.post("/register", createBroker);
router.get("/displayBrokers", getAllBrokers);
router.get("/broker", getAllBrokers);
router.get("/:id", getBroker);
router.post("/getbroker", getBrokerCredentials);
router.delete("/:id", deleteBroker);
router.put("/update/:id", updateBroker);
router.post("/requestviste/:id", requestViste)

export { router as BrokerRoute };
