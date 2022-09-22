
export const getTimeRemaining = (e) => {
  const total = Date.parse(e) - Date.parse(new Date().toString());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / 1000 / 60 / 60) % 24);
  return {
    total,
    hours,
    minutes,
    seconds,
  };
};
export const startTimer = (e) => {
  let { total, minutes, seconds } = getTimeRemaining(e);
  if (total >= 0) {
    // update the timer
    // check if less than 10 then we need to
    // add '0' at the beginning of the variable
  let  timer =
      // (hours > 9 ? hours : "0" + hours) +
      //   ":" +
      (minutes > 9 ? minutes : "0" + minutes) +
      ":" +
      (seconds > 9 ? seconds : "0" + seconds);
  }
};

export const clearTimer = (e) => {
  // If you adjust it you should also need to
  // adjust the Endtime formula we are about
  // to code next
  let timer = "01:30";

  // If you try to remove this line the
  // updating of timer Variable will be
  // after 1000ms or 1sec
  // if (TimeRef.current) clearInterval(TimeRef.current);
  const id = setInterval(() => {
    startTimer(e);
  }, 1000);
  //  TimeRef.current = id;
};

export const getDeadTime = () => {
  let deadline = new Date();

  // This is where you need to adjust if
  // you entend to add more time
  deadline.setSeconds(deadline.getSeconds() + 90);
  return deadline;
};
