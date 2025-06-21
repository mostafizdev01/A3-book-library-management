import { model, Schema } from "mongoose"
import { IBorrow } from "../interfaces/borrow.interface"

const borrowSchema = new Schema<IBorrow>({
        book: {
        type: Schema.Types.ObjectId,
        ref: "Book",
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        trim: true
    },
    dueDate: {
        type: Date,
        required: true,
        trim: true
    }
}, { versionKey: false, timestamps: true }
)


export const Borrows = model<IBorrow>("Borrow", borrowSchema)