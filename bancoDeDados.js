// const api = axios
//   .get("mockend.com/juunegreiros/BE-test-api/products", {
//     params: {
//       ID: 12345,
//     },
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.error(error);
//   })
//   .finally(function () {
//     // sempre será executado
//   });

// const axios = require("axios");
// const users = axios
//   .get("https://mockend.com/juunegreiros/BE-test-api/users")
//   .then((data) => {
//     data.JSON();
//     return users;
//   });

function getUsers() {
  return Object.values(users);
}

function getUserById(id) {
  return users[id] || {};
}

const products = axios.get(
  "https://mockend.com/juunegreiros/BE-test-api/products"
);
// .then((data) => data.json());

function getProducts() {
  return Object.values(products);
}

function getProductById(id) {
  return produto[id] || {};
}

module.exports = { getUsers, getUserById, getProducts, getProductById };
