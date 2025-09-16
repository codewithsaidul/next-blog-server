import { Router } from "express";
import { StatsController } from "./stats.controller";



const router = Router();


router.get("/", StatsController.getBlogStat)


export const StatsRoutes = router;