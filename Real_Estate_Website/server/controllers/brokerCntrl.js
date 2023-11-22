import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createBroker = asyncHandler(async (req, res) => {
  console.log("creating a broker");
  const { name, email, password } = req.body.data;
  const role = "Broker"

  const brokerExists = await prisma.broker.findUnique({
    where: { email: email },
  });

  if (!brokerExists) {
    const broker = await prisma.broker.create({
      data: {
        name,
        email,
        password,
        role
      },
    });
    res.send({
      message: "Broker Registered successfully",
      broker: broker,
    });
  } else res.status(201).send({ message: "Broker already exists" });
});

export const getBrokerCredentials = asyncHandler(async(req, res) => {
  const password = req.body.password;
  let getBroker
  try {
    getBroker = await prisma.broker.findUnique( {
      where: {password: password}
    })
  } catch { return null}

  if (getBroker !== null){
    res.send({
      message: "Broker exists",
      broker: getBroker
    })
  } else res.status(201).send({message: "Broker doesn't exist"})
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



export const requestViste = asyncHandler(async (req, res) => {
  const { email, date } = req.body;
  const { id } = req.params;
  console.log(id)

  try {
    const alreadyBooked = await prisma.broker.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });
    console.log(id)
    if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
      res
        .status(400)
        .json({ message: "This property is already booked by you" });
    } else {
      // console.log(id)
      // console.log(email)
      await prisma.broker.update({
        
        where: { email: email },
        data: {
          bookedVisits: { push: { id, date } },
        },
      });
      res.send("your visit is booked successfully");
    }
  } catch (err) {
    throw new Error(err.message);
  }
});