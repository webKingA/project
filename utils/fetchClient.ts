import axios from "axios";

const fetchClient = () => {
  const defaultOptions = {
    baseURL: process.env.BASEURL,
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
