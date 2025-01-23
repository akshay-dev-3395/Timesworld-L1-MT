import axios from "axios";

export const BASE_URL = "https://restcountries.com/v2/";

export const getAxiosInstance = async () => {
  try {
  } catch (error) {
  } finally {
    const instance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    instance.interceptors.request.use(
      function (config) {
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    instance.interceptors.response.use(
      (response) =>
        new Promise((resolve, reject) => {
          resolve(response);
        }),
      async (error) => {
        // console.log("ERROR=API===", error);
        if (error) {
          return new Promise((resolve, reject) => {
            reject(error);
          });
        }
      }
    );

    return instance;
  }
};
