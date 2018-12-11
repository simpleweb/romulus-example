// @flow
import axios from "axios";
import { logRequest, logResponse, logError } from "./logging";
import { API_URL } from "Romulus/App/Config";

const RomulusAxios = axios.create({
  baseURL: API_URL,
});

RomulusAxios.interceptors.request.use(
  config => {
    logRequest(config);
    return config;
  },
  error => {
    console.log("request errr", error);
    return Promise.reject(error);
  }
);

RomulusAxios.interceptors.response.use(
  response => {
    logResponse(response);
    return response;
  },
  error => {
    if (error.response) {
      logError(error.response);
    }
    return Promise.reject(error);
  }
);

export default RomulusAxios;
