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

export const getBrokerOffers = asyncHandler(async (req, res) => {
  const id = req.params.id;
  console.log(`getBrokerOffers ID: ${id}`);
  try {
    const broker = await prisma.broker.findUnique({ where: { id: id } });
    const brokerOffers = broker.propertyOffers;
    res.send(brokerOffers);
  } catch (error) {
    throw new Error(error.message);
  }
});

export const declineBrokerOffer = asyncHandler(async (req, res) => {
  const { id: brokerId, offerId } = req.params;

  try {
    // Delete the property offer from the broker's propertyOffers collection
    await prisma.broker.update({
      where: { id: brokerId },
      data: {
        propertyOffers: {
          delete: { id: offerId },
        },
      },
    });

    // Delete the property offer from the PropertyOffer model
    await prisma.PropertyOffer.delete({ where: { id: offerId } });

    res.status(200).json({ message: "Offer declined successfully" });
  } catch (error) {
    console.error("Error declining broker offer:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export const acceptBrokerOffer = asyncHandler(async (req, res) => {
  const { brokerId, offerId } = req.params;

  try {
    const broker = await prisma.broker.findUnique({ where: { id: brokerId } });
    const propertyOffer = await prisma.PropertyOffer.findUnique({
      where: { id: offerId },
    });

    await prisma.PropertyOffer.update({
      where: { id: offerId },
      data: { status: "Accepted" },
    });

    res.status(200).json({ message: "Offer accepted successfully" });
  } catch (error) {
    console.error("Error accepting broker offer:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
