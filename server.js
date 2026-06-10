const express = require("express");
const app = express();

// PORTA CORRETA (IMPORTANTE PARA RAILWAY)
const port = process.env.PORT || 3000;

// ROTA PRINCIPAL
app.get("/", (req, res) => {
  res.send("Servidor rodando 🚀");
});

// INICIAR SERVIDOR
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
