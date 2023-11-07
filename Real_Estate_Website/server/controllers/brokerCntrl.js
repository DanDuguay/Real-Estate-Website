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
  const { id } = req.params["id"];
  try {
    const broker = await prisma.properties.findUnique({
      where: { id: id },
    });
    res.send(broker);
  } catch (error) {
    throw new Error(error.message);
  }
});

export const deleteBroker = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const brokerExists = await prisma.properties.findUnique({
    where: { id: id },
  });

  if (brokerExists) {
    await prisma.properties.delete({ where: { id: id } });
    res.status(200).json({ message: "Broker deleted successfully" });
  } else res.status(404).json({ message: "Broker does not exist" });
});

export const updateBroker = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { name, email } = req.body.data;

  try {
    const updateBroker = await prisma.properties.findUnique({
      where: { id: id },
    });

    if (!updateBroker) {
      res.status(404).json({ message: "Broker not found" });
    } else {
      const updatedBroker = await prisma.properties.update({
        where: { id },
        data: { name, email },
      });
      res.status(200).json({
        message: "Broker info updated successfully",
        broker: updatedBroker,
      });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while updating Broker info" });
  }
});
