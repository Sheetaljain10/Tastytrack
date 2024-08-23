import express from "express"
import cors from "cors";
import { connectDB } from "./configuration/db.js";
import foodRouter from "./routes/foodRoute.js";

const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

//Connect to DB.
connectDB();

//Api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});

// mongodb+srv://sheetaljain3618:<password>@cluster0.o8x9fal.mongodb.net/?