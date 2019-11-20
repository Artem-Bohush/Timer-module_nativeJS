function timer(wrapClass, deadLine) {
  function getTimeRamaining(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / 1000 / 60 / 60) % 24),
      days = Math.floor((t / 1000 / 60 / 60) / 24);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  function setClock(selector, endTime) {
    const timer = document.querySelector(`.${selector}`),
      days = timer.querySelector('.days'),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      const time = getTimeRamaining(endTime);

      function checkZero(num) {
        if (num >= 10) {
          return num;
        } else {
          return '0' + num;
        }
      }

      if (time.total >= 0) {
        days.textContent = checkZero(time.days) + ' дн.';
        hours.textContent = checkZero(time.hours);
        minutes.textContent = checkZero(time.minutes);
        seconds.textContent = checkZero(time.seconds);
      } else {
        clearInterval(timeInterval);
        days.textContent = '00 дн.';
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  }
  setClock(wrapClass, deadLine);
}

timer('wrapper-class', '2019-12-31');
