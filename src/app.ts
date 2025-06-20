import express, { Application, Request, Response } from 'express'
import { Book } from './app/models/books.model';
const app: Application = express();


/// useing middleware
app.use(express.json());

app.post('/create-book', async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const note = await Book.create(body)

        res.status(201).json({
            success: true,
            message: "Note created successfully ✅",
            note
        })
    } catch (error) {
        console.log(error);
    }
})
app.get('/books', async (req: Request, res: Response) => {
    try {
        const book = await Book.find()
        res.status(201).json({
            success: true,
            message: "Note created successfully ✅",
            book
        })
    } catch (error) {
        console.log(error);
    }
})

app.use((req, res, next) => {
  console.log(`❗️Route not found: ${req.originalUrl}`);
  res.status(404).json({ message: "Route not found" });
  next()
});

app.get('/books/:bookId', async (req: Request, res: Response) => {
    try {
        const book = await Book.find()
        res.status(201).json({
            success: true,
            message: "Note created successfully ✅",
            book
        })
    } catch (error) {
        console.log(error);
    }
})


app.get('/', (req: Request, res: Response) => {
    res.send("Wellcome to my webserver..")
})

export default app;