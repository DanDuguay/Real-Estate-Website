import asynHandler from 'express-async-handler'
 import { prisma } from "../config/prismaConfig.js"

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

export const userExists = asynHandler(async(req,res) =>{
    // console.log("[userExists][req.body.password]: " +req.body.password);
    const password = req.body.password;
    let getUser
    try {
        getUser = await prisma.user.count({
            where: {password: password}
        })
        //console.log("[userExists][getUser]: " + getUser)
    } catch { return 0}

    if (getUser !== null){
        res.status(200).send({response: 1})
    } else res.status(201).send({message: "User doesn't exist"})
});

export const getUser = asynHandler(async(req, res) => {
    // console.log("[getUser][req.body.password]: " + req.body.password);
    const password = req.body.password;
    let getUser
    try {
        getUser = await prisma.user.findUnique({
            where: {password: password}
        })
    } catch { return null}

    if (getUser !== null){
        res.send({
            message: "User exists",
            user: getUser
        })
    } else res.status(201).send({message: "User doesn't exist"})
})




