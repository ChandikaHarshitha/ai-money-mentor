const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/ask", async (req, res) => {
  const { question } = req.body;

  // Dummy AI response (for prototype)
  const reply = "Based on your input, consider investing in SIPs and saving regularly.";

  res.json({ reply });
});

app.listen(5000, () => console.log("Server running on port 5000"));