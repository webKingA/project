/* eslint-disable no-underscore-dangle */
import axios, { AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";
import { IServerResult } from "../interface/app.interface";
import { ERequest } from "../interface/enum";


export const ClientAxiosInstance = axios.create();
ClientAxiosInstance.defaults.baseURL = process.env.BASEURL;
ClientAxiosInstance.defaults.timeout = 36_000_000; // 10min

let timeout: number;
const showError = (messages: string[] | string) => {
  clearTimeout(timeout);
  timeout = window.setTimeout(() => {
    toast.error(typeof messages === "string" ? messages : messages.join(" "));
  }, 100);
};

const Fetch = async <T>(FetchConfig: {
  url: string;
  method: ERequest;
  data?: {
    [key: string]: any;
  };
  params?: {
    [key: string]: any;
  };
  headers?: {
    [key: string]: string;
  };
  disableErrorMessage?: boolean;
  fileRequest?:boolean;
  responseType?:
    | "arraybuffer"
    | "blob"
    | "document"
    | "json"
    | "text"
    | "stream";
}): Promise<IServerResult<T>> => {
  return new Promise(async (resolve, reject) => {

    const token = window.localStorage.getItem("token");
    let request: any = {
      method: FetchConfig.method,
      url: FetchConfig.url,
      data: FetchConfig.data,
      params: FetchConfig.params,
      headers: {
        ...FetchConfig.headers,
        "Content-Type": FetchConfig.fileRequest ? "multipart/form-data; boundary=<calculated when request is sent>" : "application/json;charset=utf-8",
        "Accept-Language": "fa-IR,fa;q=0.9",
      },
      responseType: FetchConfig.responseType,
    };

    if (token && request.headers) {
      request.headers.Authorization = "Bearer "+token.replaceAll('"',"") ;
    }

    await ClientAxiosInstance(request)
      .then((res) => {
        resolve(res.data as IServerResult<T>);
      })
      .catch(async (error) => {
		console.log("===================",error)
        reject(error);
      });
  });
};
export default Fetch;
