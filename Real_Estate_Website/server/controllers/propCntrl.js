import asynHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createProperty = asynHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    city,
    country,
    image,
    facilities,
    brokerEmail,
  } = req.body.data;

  console.log(req.body.data);

  try {
    const property = await prisma.properties.create({
      data: {
        title,
        description,
        price,
        address,
        city,
        country,
        image,
        facilities,
        responsible: { connect: { email: brokerEmail } },
      },
    });

    res.send({ message: "Property created successfully", property });
  } catch (err) {
    // P2002 is a specific code that would be returned if the
    // condition of a unique address would be violated
    if (err.code === "P2002") {
      throw new Error("A property with address already there");
    }
    throw new Error(err.message);
  }
});

// function to get all the properties from the database
export const getAllProperties = asynHandler(async (req, res) => {
  const properties = await prisma.properties.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  res.send(properties);
});

// function to get a specific property from the database
export const getProperty = asynHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const property = await prisma.properties.findUnique({
      where: { id: id },
    });
    res.send(property);
  } catch (error) {
    throw new Error(error.message);
  }
});

// function to delete a property from the database
export const deleteProperty = asynHandler(async (req, res) => {
  const { id } = req.params;

  const propertyExists = await prisma.properties.findUnique({
    where: { id: id },
  });

  if (propertyExists) {
    await prisma.properties.delete({ where: { id: id } });
    res.status(200).json({ message: "Property deleted successfully" });
  } else res.status(404).json({ message: "Property does not exist" });
});

// // function to update a property from the database
export const updateProperty = asynHandler(async (req, res) => {
  const { id } = req.params;

  const { title, description, price, address, city, country, image } =
    req.body.data;

  try {
    const upProperty = await prisma.properties.findUnique({
      where: { id: id },
    });

    if (!upProperty) {
      res.status(404).json({ message: "Property not found" });
    } else {
      const updatedProperty = await prisma.properties.update({
        where: { id },
        data: { title, description, price, address, city, country, image },
      });
      res.status(200).json({
        message: "Property updated successfully",
        property: updatedProperty,
      });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while updating the property" });
  }
});
