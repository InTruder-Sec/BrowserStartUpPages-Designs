const UpdateTime = () => {
  data = GetTimeData();
  document.getElementById("time--hours").innerText = data.time;
  document.getElementById("time--day").innerText = data.day;
};

setInterval(UpdateTime, 1000);
