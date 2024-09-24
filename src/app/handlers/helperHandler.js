export const makeReadableDate = (date) =>
  new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  export const makeMonetaryNumber = (number) =>
    `₦${Number(number ?? 0).toLocaleString()}`;