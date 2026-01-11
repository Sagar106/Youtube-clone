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

app.get("/api/searchVideos", async (req, res) => {
  const searchQuery = req.query.q;

  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}&key=${process.env.YOUTUBE_API_KEY}`
  );

  const data = await response.json();
  res.json(data);
});

app.get("/api/getVideoList", async (req, res) => {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${process.env.YOUTUBE_API_KEY}`
  );
  const data = await response.json();

  res.json(data);
});

app.listen(5000, () => console.log("Server running on port 5000"));
