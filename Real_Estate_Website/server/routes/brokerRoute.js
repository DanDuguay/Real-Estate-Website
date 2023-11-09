import express from "express";
import {
  createBroker,
  getBroker,
  updateBroker,
  deleteBroker,
  getAllBrokers,
} from "../controllers/brokerCntrl.js";
const router = express.Router();

router.post("/register", createBroker);
router.get("/:id", getBroker);
router.get("/displayBrokers", getAllBrokers);
router.delete("/:id", deleteBroker);
router.put("/update/:id", updateBroker);

export { router as BrokerRoute };
