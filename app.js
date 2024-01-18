import express from "express";
import cors from "cors";
import morgan from "morgan";
import { seedRoutes } from "./src/routes/seed.js";
import { productRoutes } from "./src/routes/products.js";
import { orderRoutes } from "./src/routes/orders.js";

export const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// ROUTES
app.use("/api/seed", seedRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// HOME ROUTE
app.get("/", (req, res) => {
  console.log("Welcome to home route!!");
});
