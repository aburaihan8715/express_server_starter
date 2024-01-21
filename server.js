import { app } from "./app.js";
import { serverPort } from "./src/config/constant.js";

app.listen(serverPort, async () => {
  console.log(`Server is running at http://localhost:${serverPort}`);
});
