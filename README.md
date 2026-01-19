# SYMB Project - Order Management System

A full-stack Order Management System built with the MERN stack (MongoDB, Express, React, Node.js) and Tailwind CSS.

## Features

- **Order Management**: Create, view, and filter orders by status (Paid/Unpaid).
- **Delivery Assignment**: Auto-assign deliveries based on distance.
- **Real-time Status**: Track order lifecycle from Creation -> Assignment -> Payment.
- **Responsive UI**: 3-column dashboard (Paid | All Orders | Assigned).

## Tech Stack

- **Backend**: Node.js, Express, Mongoose
- **Frontend**: React (Vite), Tailwind CSS
- **Database**: MongoDB

## Setup Instructions

### Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables in `.env`:
   ```
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the server:
   ```bash
   npm run dev
   ```
   Server runs on `http://localhost:3000`.

### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   Application runs on `http://localhost:5173`.
