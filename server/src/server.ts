import mongoose from "mongoose";
import app from "./app";
import { env } from "./utils";

const port = env.PORT || 3001;
const uri: string = env.MONGODB_URL || "mongodb://localhost:27017/nest_hr";

mongoose.connect(uri);

const { connection } = mongoose;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
