// Add this to your existing propertyRoute.js
import express from "express";
import {
  submitPropertyOffer,
  getBrokerOffers,
  acceptBrokerOffer,
  declineBrokerOffer,
} from "../controllers/offerCntrl.js";

const router = express.Router();

router.post("/submitOffer", submitPropertyOffer);
router.get("/propertyOffers/:id", getBrokerOffers);
router.get("/propertyOffers/accept/:brokerId/:offerId", acceptBrokerOffer);
router.get("/propertyOffers/decline/:brokerId/:offerId", declineBrokerOffer);

export { router as offerRoute };
