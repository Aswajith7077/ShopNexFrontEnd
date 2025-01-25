import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_BACKEND_HOST,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
});
export { api };
