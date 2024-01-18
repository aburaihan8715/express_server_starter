import express from "express";
import { Product } from "../models/Product.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ status: "success", message: "Products returned", result: products.length, data: products });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

export { router as productRoutes };
