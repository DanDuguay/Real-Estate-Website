// Add this to your existing propertyRoute.js
import express from "express";
import { submitPropertyOffer } from "../controllers/offerCntrl.js";

const router = express.Router();

router.post("/submitOffer", submitPropertyOffer);

export { router as offerRoute };
