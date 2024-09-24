const { default: axios } = require("axios");

const baseUrl = "http://127.0.0.1:9005/api";
// const baseUrl = "https://myserver.thrida.com/api";

export const bultixAxios = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const axiosResponseHandler = async (axiosResponse) => {
  let responseBody = { status: "success", message: "" };

  if (axiosResponse?.data.message)
    responseBody.message = axiosResponse?.data.message;

  if (axiosResponse?.data.data) responseBody.data = axiosResponse?.data.data;

  return responseBody;
};

export const axiosErrorHandler = async (errorResponse) => {
  let responseBody = {
    status: "failed",
    message: "Error Processing Request. Please Try Again Later",
  };

  if (errorResponse?.response?.data?.errors || errorResponse?.data?.errors) {
    let mainMessage = "";
    const errors =
      errorResponse?.response?.data?.errors || errorResponse?.data?.errors;

    for (const error in errors) {
      mainMessage += `${(mainMessage == "" ? "" : ", ") + errors[error][0]}`;
    }

    responseBody.message = mainMessage;
  } else if (
    errorResponse?.response?.data?.message ||
    errorResponse?.data?.message ||
    errorResponse?.message
  ) {
    responseBody.message =
      errorResponse?.response?.data?.message ||
      errorResponse?.data?.message ||
      errorResponse?.message;
  }

  return responseBody;
};
