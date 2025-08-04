/**
 * Time utility functions for venue operations
 */

export const getClosingTime = (currentOpeningHours) => {
  // Check if venue is closed
  if (currentOpeningHours?.openNow === false) {
    return "Closed";
  }

  // Check if opening hours data exists
  if (!currentOpeningHours?.periods || !Array.isArray(currentOpeningHours.periods)) {
    return "N/A";
  }

  // Get today's day of week (0 = Sunday, 1 = Monday, etc.)
  const today = new Date();
  const dayOfWeek = today.getDay();

  // Find today's period
  const todayPeriod = currentOpeningHours.periods.find(
    (period) => period.open?.day === dayOfWeek
  );
  
  if (!todayPeriod || !todayPeriod.close) {
    return "Open 24/7";
  }

  const closeHour = todayPeriod.close.hour;
  const closeMinute = todayPeriod.close.minute || 0;
  
  // Convert to 12-hour format
  const closeHourAdjusted = closeHour === 0 ? 12 : closeHour > 12 ? closeHour - 12 : closeHour;
  const closeMinuteFormatted = closeMinute < 10 ? `0${closeMinute}` : closeMinute;
  const closeTimeSuffix = closeHour >= 12 ? "PM" : "AM";
  
  return `Open until ${closeHourAdjusted}:${closeMinuteFormatted} ${closeTimeSuffix}`;
};
