import {
  axiosErrorHandler,
  axiosResponseHandler,
  mainAxios,
} from "../apis/axios";

export const postRequest = async (url, body, configs) => {
  let responseBody = { status: "failed", message: "" };

  try {
    const postResponse = await mainAxios.post(url, body, configs);
    responseBody = await axiosResponseHandler(postResponse);
  } catch (errorResponse) {
    responseBody = await axiosErrorHandler(errorResponse.response);
  }

  return responseBody;
};

export const getRequest = async (url, configs) => {
  let responseBody = { status: "failed", message: "" };

  try {
    const postResponse = await mainAxios.get(url, configs);
    responseBody = await axiosResponseHandler(postResponse);
  } catch (errorResponse) {
    responseBody = await axiosErrorHandler(errorResponse);
  }

  return responseBody;
};

export const putRequest = async (url, body, configs) => {
  let responseBody = { status: "failed", message: "" };

  try {
    const postResponse = await mainAxios.put(url, body, configs);
    responseBody = await axiosResponseHandler(postResponse);
  } catch (errorResponse) {
    responseBody = await axiosErrorHandler(errorResponse);
  }

  return responseBody;
};

export const patchRequest = async (url, body, configs) => {
  let responseBody = { status: "failed", message: "" };

  try {
    const postResponse = await mainAxios.patch(url, body, configs);
    responseBody = await axiosResponseHandler(postResponse);
  } catch (errorResponse) {
    responseBody = await axiosErrorHandler(errorResponse);
  }

  return responseBody;
};

export const deleteRequest = async (url, configs) => {
  let responseBody = { status: "failed", message: "" };

  try {
    const postResponse = await mainAxios.delete(url, configs);
    responseBody = await axiosResponseHandler(postResponse);
  } catch (errorResponse) {
    responseBody = await axiosErrorHandler(errorResponse);
  }

  return responseBody;
};
