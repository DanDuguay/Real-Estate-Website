import asynHandler from 'express-async-handler'
 import { prisma } from "../config/prismaConfig.js"
import asyncHandler from "express-async-handler";

 export const createUser = asynHandler(async(req, res) =>{
    const {name, email, password, role} = req.body.data
     console.log(req.body.data)
    
    const userExists = await prisma.user.findUnique({ where: { email: email } });

    if(!userExists){
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
                role
            }
        })
        res.send({
            message: "User Registered successfully",
            user: user,
        })
    }else res.status(201).send({message: "User already exists"})
 });


export const UserExists = asynHandler(async(req,res) =>{
    const {email, password} = req.body.data;
    let getUser
    console.log(req.body.data)
    try {
        getUser = await prisma.user.findUnique({
            where: {email, password}
        })
    } catch { return null}

    if (getUser !== null){
        res.send({message: "User exists", user: exists})
    } else res.status(201).send({message: "User doesn't exist"})
});






