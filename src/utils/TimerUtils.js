export const displayTime = (time) => {
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
    time -= seconds;
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

export const getBest = (arr) => {
  return Math.min(...arr);
};

export const getAvg = (arr, length) => {
  let newArr = [];

  for (let i = length - 1; i >= 0; i--) {
    newArr = [...newArr, arr[i]];
  }

  const min = Math.min(...newArr);
  const max = Math.max(...newArr);

  const index1 = newArr.indexOf(min);
  newArr.splice(index1, 1);
  const index2 = newArr.indexOf(max);
  newArr.splice(index2, 1);

  const avg = newArr.reduce((a, b) => a + b, 0) / newArr.length;

  return avg.toFixed();
};