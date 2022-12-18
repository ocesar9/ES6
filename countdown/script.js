import CountDown from "./countdown.js";

const timeToChristmas = new CountDown('24 December 2022 23:59:59 GMT-0300');
const timeToNewYear = new CountDown('31 December 2022 23:59:59 GMT-0300');

setInterval(()=>{
  console.log(timeToChristmas.total);
},1000)