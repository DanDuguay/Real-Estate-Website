import asynHandler from 'express-async-handler'
 import { prisma } from "../config/prismaConfig.js"

 export const createBroker = asynHandler(async(req, res) =>{
    console.log("creating a broker")
    let {email} = req.body;
    
    const brokerExists = await prisma.broker.findUnique({ where: { email: email } });

    if(!brokerExists){
        const broker = await prisma.broker.create({data: req.body})
        res.send({
            message: "Broker Registered successfully",
            broker: broker,
        })
    }else res.status(201).send({message: "Broker already exists"})
 });
