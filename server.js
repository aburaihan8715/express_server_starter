import { app } from "./app.js";
import { serverPort } from "./src/config/constant.js";
import { connectDb } from "./src/config/db.js";

app.listen(serverPort, async () => {
  console.log(`Server is running at http://localhost:${serverPort}`);
  await connectDb();
});
