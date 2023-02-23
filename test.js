const axios = require("axios");
const listaDeUsers = "https://mockend.com/juunegreiros/BE-test-api/users";
const getUsers = () => {
  axios
    .get(listaDeUsers)
    .then((response) => {
      const data = response.data;
      return console.log(data);
    })
    .catch((error) => console.error(error));
};
// console.log(users.data);

getUsers();
