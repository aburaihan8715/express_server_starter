import mongoose from "mongoose";
import { mongoDbUri } from "./constant.js";

export const connectDb = async () => {
  main().catch((err) => console.log("Db connection fail", err));

  async function main() {
    await mongoose.connect(mongoDbUri);
    console.log("Db is connected");
  }
};
