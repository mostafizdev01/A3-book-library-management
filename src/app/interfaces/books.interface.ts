import { Types } from "mongoose";

export interface IBook {
    title: string
    author: string,
    genre: string,
    isbn: string,
    description: string,
    copies: string,
    available: boolean
}