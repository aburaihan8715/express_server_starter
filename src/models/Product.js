import { timeStamp } from "console";
import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required!"],
      unique: true,
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Product price is required!"],
    },
    quantity: {
      type: Number,
      required: [true, "Product quantity is required!"],
    },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.models.Product || mongoose.model("Product", productsSchema);
