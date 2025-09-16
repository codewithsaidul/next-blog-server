import { Request, Response } from "express";
import { StatsService } from "./stats.service";


const getBlogStat = async (req: Request, res: Response) => {
  try {
    const result = await StatsService.getBlogStat();

    res.status(200).json({ message: "Stats retrive Successfully!", data: result });
  } catch (error) {
    res.status(400).json({ message: error })
  }
};



export const StatsController = {
    getBlogStat
}