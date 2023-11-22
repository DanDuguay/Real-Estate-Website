import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const getAdmin = asyncHandler(async(req, res) => {
    const password = req.body.password;
    let getAdmin
    try {
        getAdmin = await prisma.admin.findUnique({
            where: {password: password}
        })
    } catch { return null}

    if (getAdmin !== null){
        res.send({
            message: "User exists",
            admin: getAdmin
        })
    } else res.status(201).send({message: "Admin doesn't exist"})
})