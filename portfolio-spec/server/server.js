const express = require("express");
const cors = require("cors");
const portfolio = require("./data/portfolio");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// All the page content in one response
app.get("/api/portfolio", (req, res) => {
  res.json(portfolio);
});

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
