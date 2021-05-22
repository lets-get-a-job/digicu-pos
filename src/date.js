export function date(targetDate) {
  const year = targetDate.getFullYear().toString();
  const month = targetDate.getMonth() + 1;
  let monthS;
  if (month < 10) monthS = `0${month.toString()}`;
  else monthS = month.toString();
  const day = targetDate.getDate();
  let dayS;
  if (day < 10) dayS = `0${day.toString()}`;
  else dayS = day.toString();
  return `${year}-${monthS}-${dayS}`;
}

export function splitDate(targetDate) {
  return {
    year: targetDate.getFullYear(),
    month: targetDate.getMonth() + 1,
    day: targetDate.getDate(),
  };
}
