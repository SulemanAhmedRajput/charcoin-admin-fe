export const getOrdinalSuffix = (num: number) => {
  if ([11, 12, 13].includes(num % 100)) return "th";
  switch (num % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const formatNumberWithOrdinal = (num: number) => {
  if (!num) return ""; // Handle invalid or undefined values
  const formattedNumber = num.toLocaleString(); // Add commas
  return `${formattedNumber}`;
};

export const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};



export function rgbaToHex(rgba: string): string {
  // Extract values from rgba string using regex
  const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  if (!match) return "#000000"; // Default to black if invalid

  let [_, r, g, b, a] = match; // Extracted values as strings
  r = parseInt(r).toString(16).padStart(2, "0");
  g = parseInt(g).toString(16).padStart(2, "0");
  b = parseInt(b).toString(16).padStart(2, "0");

  if (a !== undefined) {
    a = Math.round(parseFloat(a) * 255)
      .toString(16)
      .padStart(2, "0");
    return `#${r}${g}${b}${a}`.toUpperCase(); // RGBA with alpha
  }

  return `#${r}${g}${b}`.toUpperCase(); // RGB to HEX
}
