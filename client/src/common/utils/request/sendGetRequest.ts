import { getErrorMessage } from "@utils";
import axios, { AxiosRequestConfig } from "axios";

const sendGetRequest = async <T>(
  url: string,
  config?: AxiosRequestConfig<any> | undefined
): Promise<T> => {
  try {
    const response = await axios.get(url, config);
    const { data } = response;

    return data;
  } catch (error) {
    const errorMessage = getErrorMessage(error, sendGetRequest.name);
    throw new Error(errorMessage);
  }
};

export { sendGetRequest };
