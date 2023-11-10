import express from "express";
import { submitOffer } from "../controllers/propertyOfferController.js";
const router = express.Router();

router.post("/submitOffer", submitOffer);

export { router as propertyOffer };
