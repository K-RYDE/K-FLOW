const express = require("express");
const app = express();

// IMPORTANTE PRA RAILWAY
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Servidor rodando 🚀");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${port}`);
});
