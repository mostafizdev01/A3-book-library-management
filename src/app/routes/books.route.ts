import express, { Request, Response } from "express"
import { Book } from "../models/books.model";
import { z } from "zod";

export const bookRoutes = express.Router()

const CreateBookZod = z.object({
    title: z.string(),
    author: z.string(),
    genre: z.string(),
    isbn: z.string(),
    description: z.string().optional(),
    copies: z.number(),
    available: z.boolean()
})

// create book
bookRoutes.post('/create-book', async (req: Request, res: Response) => {
    try {
        const body = await CreateBookZod.parseAsync(req.body);
        const data = await Book.create(body)

        res.status(201).json({
            success: true,
            message: "Book posted successfully ✅",
            data
        })
    } catch (error) {
          res.status(403).json({
            success: false,
            message: "Validation failed",
            error
        })
    }
})

// find all book data
bookRoutes.get('/', async (req: Request, res: Response) => {
    try {
        const { filter, sortBy = 'createdAt', sort = 'desc', limit = '10' } = req.query;

        // Filtering
        const filterCondition = filter ? { genre: filter } : {};

        // Sorting
        const sortCondition: { [sortBy: string]: 1 | -1 } = {};
        sortCondition[sortBy as string] = sort === 'asc' ? 1 : -1;

        // Fetch from DB
        const books = await Book.find(filterCondition)
            .sort(sortCondition)
            .limit(Number(limit));

        res.json({
            success: true,
            message: "Books retrieved successfully",
            data: books,
        });
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
