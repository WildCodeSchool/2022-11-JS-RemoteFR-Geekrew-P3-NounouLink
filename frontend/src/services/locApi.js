import axios from "axios";

const locAPI = axios.create({
  baseURL: "https://api-adresse.data.gouv.fr/reverse",
  timeout: 1000,
});

export default locAPI;
