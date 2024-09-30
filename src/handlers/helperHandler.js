export const makeReadableDate = (date = new Date()) =>
  new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

export const makeMonetaryNumber = (number = 0) =>
  Number(number) ? `$${Number(number).toLocaleString()}` : number;

export const makeFirstCharUpper = (mainString = "", separator = "_") =>
  mainString
    .split(separator)
    .map((string) =>
      string
        .split("")
        .map((char, charKey) =>
          charKey === 0 ? char.toUpperCase() : char.toLowerCase()
        )
        .join("")
    )
    .join(" ");
