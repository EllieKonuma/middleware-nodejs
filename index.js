const express = require("express");
const { urlencoded } = require("body-parser");
const client = require("./client");

// Setup API
const port = 3000;
const app = express();
app.use(urlencoded({ extended: true }));
app.use(express.json());

// Define routes
app.get("/products", async (_, res) => {
  const products = await client.getProducts();
  res.send(products);
});

app.get("/products/:productId", async (req, res) => {
  const { productId } = req.params;
  const product = await client.getProductById(productId);
  res.send(product);
});

app.get("/users", async (_, res) => {
  const users = await client.getUsers();
  res.send(users);
});

app.get("/users/:userId", async (req, res) => {
  const { userId } = req.params;
  const user = await client.getUserById(userId);
  res.send(user);
});

app.post("/users/:userId/purchase", async (req, res) => {
  const { userId } = req.params;
  const productIds = req.body;

  const { tax } = await client.getUserById(userId);
  const products = await Promise.all(
    productIds.map((id) => client.getProductById(id))
  );

  const productsPrice = products.reduce(
    (priceSum, product) => priceSum + product.price,
    0
  );
  const total = ((tax / 100) * productsPrice).toFixed(2);

  res.send({ total: total });
});

// Start server
app.listen(port, () => {
  console.log(`Servidor está executando na porta ${port}.`);
});
