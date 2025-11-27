A fully functional MCQ Quiz Web Application built using the MERN Stack (MongoDB, Express, React, Node.js) as part of the YUGA AI MERN Skill Assessment.
It features timed quizzes, score evaluation, and detailed result analysis.

📌 Features

✅ Built with MERN Stack
✅ Questions stored in MongoDB
✅ 4 options per question with 1 correct answer
✅ 10-minute countdown timer with auto-submit
✅ Instant score calculation
✅ Detailed result analysis with explanations
✅ Modern, responsive UI
✅ RESTful API integration

🛠 Tech Stack
Layer	Technology
Frontend	React.js
Backend	Node.js, Express
Database	MongoDB
Styling	CSS
Tools	MongoDB Compass, VS Code
📂 Project Structure
Yuga
 ├── backend
 │   ├── config
 │   │   └── db.js
 │   ├── models
 │   │   └── Question.js
 │   ├── routes
 │   │   └── questionRoutes.js
 │   ├── seed
 │   │   └── seedQuestions.js
 │   ├── .env
 │   └── server.js
 │
 ├── frontend
 │   ├── src
 │   │   ├── components
 │   │   │   ├── QuizPage.js
 │   │   │   ├── ResultPage.js
 │   │   │   └── Timer.js
 │   │   ├── api.js
 │   │   ├── App.js
 │   │   ├── index.js
 │   │   └── index.css
 │
 └── README.md

🚀 Installation & Setup
🔹 Prerequisites

Make sure you have installed:

Node.js (v14+)

MongoDB (Local or Atlas)

VS Code

🔹 Backend Setup

Open terminal and go to backend folder:

cd backend


Install dependencies:

npm install


Create .env file inside backend:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/yuga_quiz_db


Seed initial quiz questions:

npm run seed


Start backend server:

npm run dev


Backend will run at:

http://localhost:5000

🔹 Frontend Setup

Open another terminal:

cd frontend


Install dependencies:

npm install


Start React frontend:

npm start


Open in browser:

http://localhost:3000

🔗 API Endpoints
Method	Endpoint	Description
GET	/api/questions	Fetch all quiz questions
POST	/api/questions/submit	Submit answers and get score
🧪 How It Works

The frontend fetches questions from MongoDB using REST API.

User selects answers within the time limit (10 minutes).

On submission or time up:

User score is calculated.

Correct answers and explanations are displayed.

Results are shown instantly.
