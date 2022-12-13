import axios from "axios";

export const BASEURL = "http://62.3.41.67:8090/api";
const fetchClient = () => {
  const defaultOptions = {
    baseURL: BASEURL,
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config: any) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token
      ? `Bearer ${token}`
      : "";
    return config;
  });

  return instance;
};

export default fetchClient();
