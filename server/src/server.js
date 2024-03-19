import connectionToDb from "../config/db.connection.js";
import app from "./app.js";
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await connectionToDb();
  console.log(`App is listen on http://localhost:${PORT}`);
});
