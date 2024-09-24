export const makeReadableDate = (date) =>
  new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

export const makeMonetaryNumber = (number) =>
  `$${Number(number ?? 0).toLocaleString()}`;
