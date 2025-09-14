import { Router } from "express";
import { PostController } from "./post.controller";




const router = Router();


router.post("/", PostController.createPost)
router.get("/", PostController.getAllPost)
router.get("/:id", PostController.getSinglePost)
router.patch("/:id", PostController.updatePostInfo)



export const PostRoutes = router