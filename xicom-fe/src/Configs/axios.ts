import axios, { AxiosInstance } from "axios";

/**
 * Base URL for API requests.
 * @type {string}
 */
const baseURL: string = "http://localhost:4000/";

/**
 * Axios instance for making HTTP requests to the specified base URL.
 * @type {AxiosInstance}
 */
const axiosInstance: AxiosInstance = axios.create({ baseURL });

export default axiosInstance;
