// Get time

const weekDay = (day) => {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
};

const formatTime = (hours) => {
  if (hours > 12) {
    hours = hours - 12;
  }
  if (hours === 0) {
    hours = "00";
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  return hours;
};

const date = new Date();

const hour = formatTime(date.getHours());
const min = date.getMinutes();
const day = weekDay(date.getDay());
const month = date.getMonth();
const today = date.getDate();

const Main = () => {
  document.getElementById("time--hours").innerText = `${hour} : ${min}`;
};

Main();
