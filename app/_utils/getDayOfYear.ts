export const getDayOfYear = (date: Date) => {
  const start = new Date(date.getFullYear(), 0, 1);
  const dayOfYear = Math.floor((date.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  return dayOfYear;
};

export const getDateFromDayOfYear = (dayNumber: number) => {
  const currentYear = new Date().getFullYear();
  const start = new Date(currentYear, 0, 1);
  const date = new Date(start);
  date.setDate(start.getDate() + dayNumber - 1);
  return date;
};
