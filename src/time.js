/* eslint-disable no-unused-vars */
export default function time() {
  const curDate = new Date();
  const hh =
    curDate.getHours() < 10 ? `0${curDate.getHours()}` : curDate.getHours();
  const mm =
    curDate.getMinutes() < 10
      ? `0${curDate.getMinutes()}`
      : curDate.getMinutes();
  const ss =
    curDate.getSeconds() < 10
      ? `0${curDate.getSeconds()}`
      : curDate.getSeconds();
  console.log(`${hh}:${mm}:${ss}`);
  return `${hh}:${mm}:${ss}`;
}
