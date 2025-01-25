import axios from "axios";
// const https = require("https");
// import https from "https";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_BACKEND_HOST,
});
export { api };
