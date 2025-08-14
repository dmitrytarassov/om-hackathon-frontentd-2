import { format } from "date-fns";

type FormatType = "short";

export function formatDate(
  dateOrTimestamp: Date | number,
  formatType: FormatType = "short",
): string {
  const date =
    typeof dateOrTimestamp === "number"
      ? new Date(dateOrTimestamp)
      : dateOrTimestamp;

  if (formatType == "short") {
    return format(date, "MMM dd yyyy");
  } else {
    return format(date, "dddd, MMMM yyyy");
  }
}
