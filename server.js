const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>K-FLOW ONLINE 🚀</h1>
    <p>Sistema rodando com sucesso</p>
  `);
});

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
