CSV Upload Project

📌 Project Description

This project is a web application that allows users to upload a CSV file, store the data in a MongoDB database, and display the uploaded data with pagination and search functionality. The application consists of:

Frontend: React (TypeScript)

Backend: Node.js with Express (TypeScript/JavaScript)

Database: MongoDB

Testing: Jest (for unit testing)

Deployment: Docker with Docker Compose

🚀 Tech Stack

Frontend: React (TypeScript)

Backend: Node.js (TypeScript/JavaScript) + Express

Database: MongoDB

File Upload: Multer

Testing: Jest + Supertest

Containerization: Docker + Docker Compose

📦 csv-upload-project
├── 📂 backend
│   ├── Dockerfile
│   ├── server.js
│   ├── tests
│   │   ├── server.test.js
│   ├── package.json
│   ├── .env
├── 📂 frontend
│   ├── Dockerfile
│   ├── src
│   │   ├── App.tsx
│   │   ├── App.test.tsx
│   ├── package.json
├── sample.csv
├── docker-compose.yml
├── README.md

🛠️ Setup Instructions

1️⃣ Clone the Repository

git clone https://github.com/Darrence/csv-upload-project.git
cd csv-upload-project

2️⃣ Install Dependencies
Backend
cd backend
npm install

Frontend
cd frontend
npm install

3️⃣ Set Up Environment Variables
Create a .env file in the backend folder:
MONGO_URI=mongodb://localhost:27017/csvdb
PORT=5000

4️⃣ Run the Application
Option 1: Run Without Docker
In one terminal, start the backend:
cd backend
npm start

In another terminal, start the frontend:
cd frontend
npm start

This will start:

Backend on http://localhost:5000

Frontend on http://localhost:3000

MongoDB on mongodb://localhost:27017/

🧪 Running Tests
Run Backend Tests

cd backend
npm test

Run Frontend Tests

cd frontend
npm test

📝 Features

✅ Upload CSV File with Progress Feedback✅ Store Data in MongoDB✅ Paginate and Search Data✅ Unit Tests for Backend and Frontend

📌 Demo Instructions

Start the application (docker-compose up --build or manually start backend + frontend)

**Go to **http://localhost:3000

Upload the provided sample.csv file

Test search and pagination features

Run Jest tests (npm test************)
