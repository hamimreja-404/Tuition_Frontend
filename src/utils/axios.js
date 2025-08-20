import axios from "axios";
console.log("This is VITE_API_URL:",import.meta.env.VITE_API_URL);
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})

export default axiosInstance;
