QuizLift 🚀
![QuizLift Banner](https://github.com/Sarthak2284/QuizLift/blob/main/.github/assets/banner.png?raw=true)
An intelligent quiz generation platform powered by AI. Create engaging, multiple-choice quizzes on any topic in seconds.

📖 About The Project
Quiz creation is often a time-consuming task for educators, content creators, and students. QuizLift was built to solve this problem by leveraging the power of Large Language Models (LLMs). With a simple topic input, QuizLift instantly generates a relevant, structured, multiple-choice quiz, saving hours of manual effort and making learning more interactive and engaging.

This project is being built as part of a 10-day public development sprint, showcasing rapid MVP development with the MERN stack and AI integration.

(Here's where a screenshot or GIF of the final app would go!)
✨ Key Features
🧠 AI-Powered Quiz Generation: Enter any topic and get a unique quiz in moments.

🔐 Secure User Authentication: JWT-based authentication for user registration and login.

📊 Score Tracking: Get immediate feedback and a score upon quiz completion.

📚 Quiz History: Logged-in users can review their past quiz attempts and results.

** responsive Design:** Fully functional on both desktop and mobile devices.

🛠️ Built With
This project utilizes the MERN stack along with the OpenAI API.

Backend:

Node.js

Express.js

MongoDB with Mongoose

OpenAI API

JSON Web Tokens (JWT) for Authentication

Bcrypt.js for Password Hashing

Frontend:

React

Vite

Axios for API requests

React Router for Client-Side Routing

🚀 Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
Make sure you have the following installed on your machine:

Node.js (v18 or later)

npm or yarn

Git

A MongoDB Atlas account or a local MongoDB instance.

Installation
Clone the repository

```bash
git clone https://github.com/Sarthak2284/QuizLift.git
cd QuizLift
```

Install Backend Dependencies

```bash
cd server
npm install
```

Install Frontend Dependencies

```bash
cd ../client
npm install
```

Set Up Environment Variables
In the /server directory, create a .env file and add the following variables.

Code snippet

MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_super_secret_key
OPENAI_API_KEY=your_openai_api_key
Run the Backend Server
From the /server directory:

Bash

```bash
npm start
```

The server should now be running on http://localhost:5000.

Run the Frontend Development Server
From the /client directory:

Bash

```bash
npm run dev
```

The app should now be accessible at http://localhost:5173 (or another port specified by Vite).

🛣️ Roadmap
This project is currently in the initial development phase. See the open issues for a full list of proposed features (and known issues).

[x] Stage 1: Backend Foundation & API Setup

[ ] Stage 2: Frontend Scaffolding & UI Components

[ ] Stage 3: AI Integration & Core Functionality

[ ] Stage 4: Polish, User Experience & Deployment

📜 License
Distributed under the MIT License. See LICENSE for more information.

📧 Contact
Sarthak Jyoti Mishra - [https://www.linkedin.com/in/sarthak-j-mishra] - sarthakjm2284@gmail.com

Project Link: https://github.com/Sarthak2284/QuizLift
