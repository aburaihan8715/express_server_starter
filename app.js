import express from "express";
import cors from "cors";
import morgan from "morgan";

export const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// ROUTES

// HOME ROUTE
app.get("/", (req, res) => {
  res.status(200).json({ status: "success", message: "welcome to home route!" });
});

// CLIENT ERROR ROUTE
app.all("*", (req, res, next) => {
  res.status(404).json({ status: "error", message: "route not found!" });
});

// SERVER ERROR ROUTE
app.all((err, req, res) => {
  res.status(500).json({ status: "error", message: "server error!" + err });
});
