# JobTrack

JobTrack is a lightweight fullstack job application tracker built to organize job applications with a simple CRUD flow.

## 🎯 Features

- Login screen (simple frontend validation)
- Create, list, edit, and delete job applications
- Application fields:
  - Company
  - Position
  - Location
  - Job type
  - Status (`Applied`, `Interview`, `Rejected`, `Approved`)
  - Application date
  - Job link
  - Notes
- Frontend ↔ Backend integration via REST
- MongoDB persistence with Mongoose

## 🧱 Tech Stack

### Frontend
- React
- Vite
- JavaScript
- CSS Modules

### Backend
- NestJS
- TypeScript
- MongoDB
- Mongoose
- REST API

## 🎯 Running the project 

1) Frontend
npm install
npm run dev
Starts on: http://localhost:5173

2) Backend
cd jobtrack-backend
npm install
npm run start:dev
Starts on: http://localhost:3000 (default)
Create .env in jobtrack-backend/.env:
MONGODB_URI=mongodb://127.0.0.1:27017/jobtrack
Make sure MongoDB is running locally.

 ## 🌐 API Endpoints

POST /applications → create application
GET /applications → list all applications
GET /applications/:id → get one
PATCH /applications/:id → update one
DELETE /applications/:id → delete one
Frontend base URL used in src/App.jsx:
const API_URL = 'http://localhost:3000/applications'

 ✅ Validation
DTO validation with class-validator
Mongo schema with Mongoose enum/status constraints

 🚀 Why this project
This project demonstrates fullstack basics in practice:
React CRUD frontend, Node/NestJS API, MongoDB persistence, and HTTP integration between UI and backend.
