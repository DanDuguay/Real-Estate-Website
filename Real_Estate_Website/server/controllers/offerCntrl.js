// Create a new file: offerCntrl.js
import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const submitPropertyOffer = asyncHandler(async (req, res) => {
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
  } = req.body;

  try {
    const propertyOffer = await prisma.propertyOffer.create({
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

    res.status(201).json({
      message: "Property offer submitted successfully",
      propertyOffer,
    });
  } catch (error) {
    console.error("Error submitting property offer:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
