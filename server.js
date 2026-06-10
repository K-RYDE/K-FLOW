const express = require("express");
const app = express();

// PORTA (Railway usa variável de ambiente)
const PORT = process.env.PORT || 3000;

// ROTA PRINCIPAL
app.get("/", (req, res) => {
  res.send(`
    <h1>K-FLOW ONLINE 🚀</h1>
    <p>Sistema rodando com sucesso</p>
  `);
});

// SERVIDOR (IMPORTANTE: 0.0.0.0)
app.listen(PORT, "0.0.0.0", () => {
  console.log("Servidor rodando na porta " + PORT);
});
