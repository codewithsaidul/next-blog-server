import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";





const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await UserService.createUser(req.body);

        res.status(201).json({ message: "User created successfully", data: result})
    } catch (error) {
        res.status(400).json(error)
    }
}


const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await UserService.getAllUsers();

        res.status(200).json({ message: "User retrived successfully", data: result})
    } catch (error) {
        res.status(400).json(error)
    }
}



export const UserController = {
    createUser, getAllUsers
}