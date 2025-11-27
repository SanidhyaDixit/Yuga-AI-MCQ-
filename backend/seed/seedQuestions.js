const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Question = require("../models/Question");

dotenv.config();

const seedQuestions = async () => {
  try {
    await connectDB();

    await Question.deleteMany({});

    const questions = [
      {
        questionText: "Which of the following is NOT a feature of React?",
        options: [
          "Virtual DOM",
          "JSX",
          "Two-way data binding by default",
          "Component-based architecture"
        ],
        correctOptionIndex: 2,
        explanation:
          "React primarily uses one-way data flow. Two-way data binding is available but not by default as in some other frameworks like Angular."
      },
      {
        questionText: "Which HTTP method is typically used to create a new resource in a REST API?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correctOptionIndex: 1,
        explanation:
          "POST is commonly used to create new resources, while PUT is often used for full updates."
      },
      {
        questionText: "In MongoDB, documents are stored in which structure?",
        options: ["Tables", "Collections", "Rows", "Schemas"],
        correctOptionIndex: 1,
        explanation:
          "MongoDB stores BSON documents inside collections, which are similar to tables in relational databases."
      },
      {
        questionText: "Which hook in React is used to perform side effects such as data fetching?",
        options: ["useState", "useEffect", "useContext", "useReducer"],
        correctOptionIndex: 1,
        explanation:
          "useEffect is designed for side effects like data fetching, subscriptions, or manually changing the DOM."
      },
      {
        questionText: "Which of the following is true about Node.js?",
        options: [
          "It runs only on the browser",
          "It is a programming language",
          "It is a JavaScript runtime built on Chrome's V8 engine",
          "It can only be used for frontend"
        ],
        correctOptionIndex: 2,
        explanation:
          "Node.js is a JavaScript runtime built on Chrome's V8 engine, primarily used for server-side JavaScript."
      }
    ];

    await Question.insertMany(questions);
    console.log("Questions seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding questions:", error);
    process.exit(1);
  }
};

seedQuestions();
