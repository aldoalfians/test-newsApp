import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import NewsRoute from "./routes/newsRoute.js";
// import News from './models/news.js'

dotenv.config();

const app = express();

// News.sync();

app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

app.use(express.json());
app.use(NewsRoute);

app.listen(process.env.APP_PORT, console.log("server running at port 5000"));
