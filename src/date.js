export default function date() {
  const curDate = new Date();
  const year = curDate.getFullYear().toString();
  const month = curDate.getMonth() + 1;
  let monthS;
  if (month < 10) monthS = `0${month.toString()}`;
  else monthS = month.toString();
  const day = curDate.getDate();
  let dayS;
  if (day < 10) dayS = `0${day.toString()}`;
  else dayS = day.toString();
  return `${year}-${monthS}-${dayS}`;
}
