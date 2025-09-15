import { NextFunction, Request, Response } from "express";
import { PostService } from "./post.service";






const createPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await PostService.createPost(req.body);

        res.status(201).json({ message: "Post created successfully", data: result})
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}


const getAllPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await PostService.getAllPost();

        res.status(201).json({ message: "All Post retrived successfully", data: result})
    } catch (error) {
        res.status(400).json(error)
    }
}



const getSinglePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await PostService.getSinglePost(Number(req.params.id));

        res.status(201).json({ message: "Post data retrived successfully", data: result})
    } catch (error) {
        res.status(400).json(error)
    }
}


const updatePostInfo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await PostService.updatePostInfo(Number(req.params.id), req.body);

        res.status(201).json({ message: "Post data updated successfully", data: result})
    } catch (error) {
        res.status(400).json(error)
    }
}


const deletePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await PostService.deletePost(Number(req.params.id));

        res.status(201).json({ message: "Post deleted successfully", data: result})
    } catch (error) {
        res.status(400).json(error)
    }
}

export const PostController = {
    createPost, getAllPost, getSinglePost, updatePostInfo, deletePost
}