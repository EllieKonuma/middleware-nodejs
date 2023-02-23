const port = 3000;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bancoDeDados = require("./bancoDeDados");

app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/user/:userId/purchase", (req, res) => {
//   // let conv = req.query.id.map((id) => getProduto(id)
//   // ({ id: Number(id), price: Math.random() * 100 })
//   // );
//   res.send({ params: req.params, query: req.query });
// });

app.get("/products", (req, res) => {
  res.send(bancoDeDados.getProducts());
});

app.get("/products", async (req, res) => {
  console.log(req.query);
  res.send(bancoDeDados.getProducts());
});

app.listen(port, () => {
  console.log(`Servidor está executando na porta ${port}.`);
});
