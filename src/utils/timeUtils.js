import { Text } from "@ui-kitten/components";

export const getClosingTime = (currentOpeningHours) => {
  const today = new Date();
  const date = today.getDate();

  // Check if venue is closed
  if (currentOpeningHours?.openNow === false) {
    return "Closed";
  }

  // Otherwise, get the closing time
  const periods = currentOpeningHours?.periods;
  const todayPeriod = periods?.find((period) => period.open.date.day === date);
  if (!todayPeriod) return "N/A"

  const closeHour = todayPeriod.close.hour;
  const closeHourAdjusted = closeHour === 0 ? 12 : closeHour > 12 ? closeHour - 12 : closeHour; // Adjust for 12-hour format

  const closeMinute = todayPeriod.close.minute;
  const closeMinuteFormatted = closeMinute < 10 ? `0${closeMinute}` : closeMinute;

  const closeTimeSuffix = closeHour >= 12 ? "PM" : "AM";
  const closeTime = `Open until ${closeHourAdjusted}:${closeMinuteFormatted} ${closeTimeSuffix}`;

  return closeTime;
};
