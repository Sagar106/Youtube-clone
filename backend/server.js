import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

app.get("/api/search", async (req, res) => {
  const query = req.query.q;

  const response = await fetch(
    `https://serpapi.com/search.json?engine=google_autocomplete&q=${query}&api_key=${process.env.SERP_API_KEY}`
  );

  const data = await response.json();
  res.json(data);
});

app.listen(5000, () => console.log("Server running on port 5000"));
