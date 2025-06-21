import express, { Request, Response } from "express"
import { Book } from "../models/books.model";

export const bookRoutes = express.Router()


// create book
bookRoutes.post('/create-book', async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const data = await Book.create(body)

        res.status(201).json({
            success: true,
            message: "Book posted successfully ✅",
            data
        })
    } catch (error) {
        console.log(error);
    }
})

// find all book data
bookRoutes.get('/', async (req: Request, res: Response) => {
    try {
        const data = await Book.find()
        res.status(201).json({
            success: true,
            message: "Book finded successfully ✅",
            data
        })
    } catch (error) {
        console.log(error);
    }
})

// find single book
bookRoutes.get('/:bookId', async (req: Request, res: Response) => {
    try {
        const bookId = req.params.bookId
        const data = await Book.findById(bookId)
        res.status(201).json({
            success: true,
            message: "Book finded successfully ✅",
            data
        })
    } catch (error) {
        console.log(error);
    }
})

/// update book
bookRoutes.put('/:bookId', async (req: Request, res: Response) => {
    try {
        const bookId = req.params.bookId;
        const updatedBody = req.body;
        const data = await Book.findByIdAndUpdate(bookId, updatedBody, { new: true })
        res.status(201).json({
            success: true,
            message: "Book Updated successfully ✅",
            data
        })
    } catch (error) {
        console.log(error);
    }
})

/// deleted book
bookRoutes.delete('/:bookId', async (req: Request, res: Response) => {
    try {
        const bookId = req.params.bookId;
        const data = await Book.findByIdAndDelete(bookId)
        res.status(201).json({
            success: true,
            message: "Book Deleted successfully ✅",
            data
        })
    } catch (error) {
        console.log(error);
    }
})
