import { model, Schema } from "mongoose"
import { IBook } from "../interfaces/books.interface"

const noteSchema = new Schema<IBook>({
    title: {type: String, required: true, trim: true}
}, {versionKey: false, timestamps: true}
)

export const Book = model("Book", noteSchema)