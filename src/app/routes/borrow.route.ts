import express, { Request, Response } from "express"
import { Borrows } from "../models/borrow.model";

export const borrowRoutes = express.Router()


/// create borrow
borrowRoutes.post('/create-borrow', async (req: Request, res: Response) => {
    try {
        const body = req.body;

        //// used static model
        await Borrows.BorrowCalculate(body.book, body.quantity)
        
        const data = await Borrows.create(body)

        res.status(201).json({
            success: true,
            message: "Book borrow successfully ✅",
            data
        })
    } catch (error: any) {
         res.status(401).json({
            success: false,
            message: "Borrow Faild",
            error: error.message
        })
    }
})