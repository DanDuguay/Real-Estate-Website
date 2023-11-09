import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createBroker = asyncHandler(async (req, res) => {
  console.log("creating a broker");
  const { name, email } = req.body.data;

  const brokerExists = await prisma.broker.findUnique({
    where: { email: email },
  });

  if (!brokerExists) {
    const broker = await prisma.broker.create({
      data: {
        name,
        email,
      },
    });
    res.send({
      message: "Broker Registered successfully",
      broker: broker,
    });
  } else res.status(201).send({ message: "Broker already exists" });
});

export const getBroker = asyncHandler(async (req, res) => {
  const id = req.params.id;
  console.log(`Get broker ID variable: ${id}\n`);
  try {
    const broker = await prisma.broker.findUnique({
      where: { id: id },
    });
    res.send(broker);
  } catch (error) {
    throw new Error(error.message);
  }
});

export const deleteBroker = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await prisma.broker.delete({
    where: { id: id },
  });

  res.status(200).json({ message: "Broker deleted successfully" });
});

export const updateBroker = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body.data;

  try {
    const updatedBroker = await prisma.broker.update({
      where: { id: id },
      data: { name, email },
    });
    res.status(200).json({
      message: "Broker info updated successfully",
      broker: updatedBroker,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while updating Broker info" });
  }
});

// Function to get all the brokers from the database
export const getAllBrokers = asyncHandler(async (req, res) => {
  const brokers = await prisma.broker.findMany({
    orderBy: {
      name: "desc",
    },
  });
  res.send(brokers);
});
