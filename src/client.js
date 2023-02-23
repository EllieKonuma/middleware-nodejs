const { default: axios } = require("axios");

const apiUrl = "https://mockend.com/juunegreiros/BE-test-api";

const getProducts = async () => {
  const res = await axios
    .get(`${apiUrl}/products`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
  return res;
};

const getProductById = async (id) => {
  const res = await axios
    .get(`${apiUrl}/products/${id}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return res;
};

const getUsers = async () => {
  const res = await axios
    .get(`${apiUrl}/users`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return res;
};

const getUserById = async (id) => {
  const res = await axios
    .get(`${apiUrl}/users/${id}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return res;
};

module.exports = { getUsers, getUserById, getProducts, getProductById };
