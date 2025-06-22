# Library Management System

## Overview
এই প্রজেক্টে আমি একটি Library Management System API তৈরি করেছি **Express**, **TypeScript**, এবং **MongoDB (Mongoose)** ব্যবহার করে।  
প্রজেক্টের মূল লক্ষ্য ছিল বইয়ের ডেটা ম্যানেজমেন্ট, ধার নেওয়া, এবং প্রয়োজনীয় বিভিন্ন ফিচার যেমন ফিল্টারিং, সোর্টিং ইত্যাদি ইমপ্লিমেন্ট করা।

---

## Features & Implementation

### ১. Book Model ও Validation  
- `title`, `author`, `genre`, `isbn`, `description`, `copies`, ও `available` ফিল্ড সহ বইয়ের স্কিমা তৈরি করেছি।  
- `genre` এর জন্য Enum ব্যবহার করেছি যাতে শুধুমাত্র নির্দিষ্ট মানগুলো (FICTION, NON_FICTION, SCIENCE, HISTORY, BIOGRAPHY, FANTASY) গ্রহণ করা হয়।  
- `isbn` ইউনিক রাখতে বলেছি।  
- `copies` অবশ্যই ০ বা তার বেশি হতে হবে।  
- `available` ফিল্ডের ডিফল্ট মান true রাখা হয়েছে।

### ২. Borrow Model ও Business Logic  
- Borrow মডেলে `book` (ObjectId), `quantity`, ও `dueDate` ফিল্ড আছে।  
- ধার নেওয়ার সময় চেক করেছি বইয়ের পর্যাপ্ত কপি আছে কিনা।  
- ধার নেওয়ার পর `copies` কমিয়ে দিয়েছি, আর যদি ০ হয় তাহলে `available` false করে দিয়েছি।  
- এই লজিকগুলো Mongoose এর instance/static methods এবং middleware দিয়ে নিয়ন্ত্রণ করেছি।

### ৩. API Endpoints  
- **Create Book:** POST `/api/books`  
- **Get All Books:** GET `/api/books` (ফিল্টার, সোর্ট, লিমিট সাপোর্ট করে)  
- **Get Book By ID:** GET `/api/books/:bookId`  
- **Update Book:** PUT `/api/books/:bookId`  
- **Delete Book:** DELETE `/api/books/:bookId`  
- **Borrow Book:** POST `/api/borrow`  
- **Borrowed Books Summary:** GET `/api/borrow` (Aggregation pipeline দিয়ে সারাংশ প্রদান করে)

### ৪. Aggregation Pipeline  
- Borrow রেকর্ডগুলোকে `book` ফিল্ড দিয়ে গ্রুপ করেছি।  
- প্রতিটি বইয়ের মোট ধার নেওয়া কপি যোগ করেছি (totalQuantity)।  
- বইয়ের `title` ও `isbn` তথ্যসহ রেজাল্ট ফিরিয়েছি।  
- এটা লাইব্রেরির স্টক ও ধার ব্যবস্থাপনায় সাহায্য করে।

### ৫. Error Handling  
- প্রতিটি API তে সঠিক Validation ও Error Response দিয়েছি।  
- Error Response এর ফরম্যাট consistent রাখা হয়েছে।

---

## Technologies Used  
- Node.js  
- Express.js  
- TypeScript  
- MongoDB (Mongoose)  

---

## Challenges & Learnings  
- TypeScript দিয়ে স্কিমা ও মডেল তৈরির সময় টাইপ সেফটি বৃদ্ধি পেয়েছে।  
- Middleware ও Mongoose methods দিয়ে বিজনেস লজিক ইমপ্লিমেন্ট করেছি।  
- Aggregation pipeline নিয়ে ভালো ধারণা পেয়েছি।  
- Proper Validation ও Error Handling করা শিখেছি।

---

## How to Run  
- কোড ক্লোন করে `npm install` চালান।  
- `.env` ফাইলে MongoDB কানেকশন স্ট্রিং যুক্ত করুন।  
- `npm run dev` চালিয়ে লোকাল সার্ভার চালু করুন।  
- Postman বা অন্য API টুল দিয়ে API টেস্ট করুন।

---

## Conclusion  
এই প্রজেক্টে RESTful API তৈরির কাজ সম্পূর্ণ করেছি যেখানে ডেটার ইন্টিগ্রিটি ও বিজনেস রুল মেইনটেইন করা হয়েছে Mongoose ফিচার ব্যবহার করে।  
লাইব্রেরি ম্যানেজমেন্ট এর জন্য এটি একটি কার্যকর সমাধান।

---

**Thank you for checking out my project!**

🪧 Read in english
📚 Library Management System
Overview
In this project, I have developed a Library Management System API using Express, TypeScript, and MongoDB (Mongoose).
The main goal of this project was to manage book data, allow borrowing, and implement features like filtering and sorting.

Features & Implementation
1. Book Model & Validation
Schema includes: title, author, genre, isbn, description, copies, and available.

Used enum validation for genre (FICTION, NON_FICTION, SCIENCE, HISTORY, BIOGRAPHY, FANTASY).

isbn field is required to be unique.

copies must be a non-negative number.

available defaults to true.

2. Borrow Model & Business Logic
Schema includes: book (ObjectId), quantity, and dueDate.

Validates if enough copies of the book are available before borrowing.

Reduces available copies when a book is borrowed.

Sets available to false if copies reach 0.

Business logic is handled using Mongoose static/instance methods and middleware.

3. API Endpoints
Create Book: POST /api/books

Get All Books: GET /api/books (supports filtering, sorting, and limit)

Get Book By ID: GET /api/books/:bookId

Update Book: PUT /api/books/:bookId

Delete Book: DELETE /api/books/:bookId

Borrow Book: POST /api/borrow

Borrowed Books Summary: GET /api/borrow (using aggregation pipeline)

4. Aggregation Pipeline
Groups borrow records by book field.

Calculates the total quantity borrowed per book (totalQuantity).

Returns book title and isbn along with the total.

This helps manage library stock and track borrow activity efficiently.

5. Error Handling
All APIs implement proper validation and consistent error responses.

The error format includes message, success, and error details.

Technologies Used
Node.js

Express.js

TypeScript

MongoDB (with Mongoose)

Challenges & Learnings
TypeScript improved type safety in models and schema definitions.

Implemented business logic effectively using Mongoose middleware and methods.

Gained solid understanding of MongoDB Aggregation Pipeline.

Learned to handle validations and error responses in a clean and structured way.

How to Run
Clone the repository

Run npm install

Add your MongoDB connection string in the .env file

Run the server using npm run dev

Test the APIs using Postman or any API testing tool

Conclusion
This project demonstrates a complete RESTful API where data integrity and business rules are enforced using Mongoose features.
It provides an effective solution for managing a library system.

Thank you for checking out my project! 🙌
