const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Meal = require("./schema");

app.use(cors());
app.use(express.json());

const users = [
  {
    email: "user1@example.com",
    password: "hashed_password1",
  },
  {
    email: "user2@example.com",
    password: "hashed_password2",
  },
];

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Cheezy Tikka",
    description: "A Cheezy Fusion! A Cheese Sauce base with Tikka topping.",
    price: 1260,
  },
  {
    id: "m2",
    name: "Cheese Sticks",
    description: "Freshly Baked Bread Filled with the Yummiest Cheese Blend",
    price: 560,
  },
  {
    id: "m3",
    name: "Oven Baked Wings",
    description: "Fresh Oven Baked Wings Tossed In Hot Peri Peri Sauce",
    price: 370,
  },
  {
    id: "m4",
    name: "Mexican Sandwich",
    description: "Mozzarella Dipped Chicken Topped with Garlic Sauce",
    price: 700,
  },
];

app.get("/", (req, res) => {
  console.log("Hello");
  res.json({ message: ["Hello", "Hi", "Bye"] });
});

app.get("/meals", (req, res) => {
  res.send(DUMMY_MEALS);
});

app.post("/orders", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

app.post("/api/signup", async (req, res) => {
  const { email, password } = req.body;
  console.log("signup:", req.body);

  try {
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      email,
      password: hashedPassword,
    };

    users.push(newUser);

    const token = jwt.sign({ email }, "abc123xyz", { expiresIn: "1h" });

    res.json({ token });
  } catch (error) {
    console.error("Signup failed:", error);
    res.status(500).json({ message: "Signup failed" });
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("login:", req.body);

  try {
    const user = users.find((user) => user.email === email);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ email }, "your_secret_key", { expiresIn: "1h" });

    res.json({ token });
  } catch (error) {
    console.error("Login failed:", error);
    res.status(500).json({ message: "Login failed" });
  }
});

app.listen(3005, () => {
  console.log("Server running");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/foodorderdb")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
