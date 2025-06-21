import express, { Request, Response } from "express"
import { Borrow } from "../models/borrow.model";

export const borrowRoutes = express.Router()


/// create borrow
borrowRoutes.post('/create-borrow', async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const data = await Borrow.create(body)

        res.status(201).json({
            success: true,
            message: "Book borrow successfully ✅",
            data
        })
    } catch (error) {
        console.log(error);
    }
})