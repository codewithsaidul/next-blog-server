import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";





const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await UserService.createUser(req.body);
        console.log("Hello User Controller")

        res.status(201).json({ message: "User created successfully", data: result})
    } catch (error) {
        console.log(error)
    }
}



export const UserController = {
    createUser
}