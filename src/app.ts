import express, { Application, Request, Response } from 'express'
import { Book } from './app/models/books.model';
import { Borrow } from './app/models/borrow.model';
const app: Application = express();


/// useing middleware
app.use(express.json());

/// create borrow
app.post('/create-borrow', async (req: Request, res: Response) => {
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

// create book
app.post('/create-book', async (req: Request, res: Response) => {
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
app.get('/books', async (req: Request, res: Response) => {
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
app.get('/books/:bookId', async (req: Request, res: Response) => {
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
app.put('/books/:bookId', async (req: Request, res: Response) => {
    try {
        const bookId = req.params.bookId;
        const updatedBody = req.body;
        const data = await Book.findByIdAndUpdate(bookId, updatedBody, {new: true})
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
app.delete('/books/:bookId', async (req: Request, res: Response) => {
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

// 404 routes
app.use((req, res, next) => {
  console.log(`❗️Route not found: ${req.originalUrl}`);
  res.status(404).json({ message: "Route not found" });
  next()
});


app.get('/', (req: Request, res: Response) => {
    res.send("Wellcome to my webserver..")
})

export default app;