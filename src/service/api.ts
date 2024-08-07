import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://free-time-deploy-render-test.onrender.com",
});
export default axiosInstance;
