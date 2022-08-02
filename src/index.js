import { getTime } from "./utils";

const timeNode = document.getElementById("time");

const updateTime = () => {
  const currentTime = getTime();
  timeNode.innerHTML = currentTime;
};

setInterval(updateTime, 1000);
