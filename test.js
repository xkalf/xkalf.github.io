const displayTime = (time) => {
  if (time < 0) return "DNF";
  let result = "";

  const msInHours = 100 * 60 * 60;
  const hours = Math.trunc(time / msInHours);
  if (hours > 0) {
    result += hours + ":";
    time -= hours * msInHours;
  }

  const msInMinute = 100 * 60;
  const minutes = Math.trunc(time / msInMinute);
  if (minutes > 0) {
    if (hours > 0 && minutes < 10) {
      result += "0" + minutes + ":";
    } else {
      result += minutes + ":";
    }
    time -= minutes * msInMinute;
  } else {
    if (hours > 0) {
      result += "00:";
    }
  }

  const msInSecond = 100;
  const seconds = Math.trunc(time / msInSecond);
  if (seconds > 0) {
    if (minutes > 0 && seconds < 10) {
      result += "0" + seconds + ".";
    } else {
      result += seconds + ".";
    }
    time -= seconds * msInSecond;
  } else {
    if (minutes > 0) {
      result += "00.";
    } else {
      result += "0.";
    }
  }

  const millSeconds = time % 100;
  if (millSeconds < 10) {
    result += "0" + millSeconds;
  } else {
    result += millSeconds;
  }
  return result;
};

console.log(displayTime(8.04));
