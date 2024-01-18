import express from "express";
import { Product } from "../models/Product.js";
import { productsData } from "../data/data.js";

const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    // 01.delete all products
    await Product.deleteMany({});
    // 02.add all products
    const products = await Product.insertMany(productsData);
    res.status(200).json({ status: "success", message: "Products returned", result: products.length, data: products });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

export { router as seedRoutes };
