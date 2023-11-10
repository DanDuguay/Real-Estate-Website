import asynHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const submitOffer = asynHandler(async (req, res) => {
  const {
    brokerName,
    licenseNumber,
    agency,
    firstName,
    email,
    buyerAddress,
    immovableAddress,
    budget,
    message,
  } = req.body; // Directly access req.body, not req.body.data

  console.log("submitOffer function before try: ", req.body);

  try {
    const result = await prisma.propertyoffers.create({
      data: {
        brokerName,
        licenseNumber,
        agency,
        firstName,
        email,
        buyerAddress,
        immovableAddress,
        budget,
        message,
      },
    });

    res.status(201).json({ message: "Offer submitted successfully", result });
  } catch (error) {
    console.error("Error submitting offer:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
