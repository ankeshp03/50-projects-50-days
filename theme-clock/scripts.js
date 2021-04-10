var DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
var MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

var hoursPerDeg = 360 / 12;
var minutesPerDeg = 360 / 60;
var secondsPerDeg = 360 / 60;

var themeButtonEl = document.querySelector(".theme-button");
var wrapperEl = document.querySelector(".wrapper");
var timeEl = document.querySelector(".time");
var dateEl = document.querySelector(".date");
var hoursEl = document.querySelector(".hours-needle");
var minutesEl = document.querySelector(".minutes-needle");
var secondsEl = document.querySelector(".seconds-needle");

window.addEventListener("load", startClock);

var initializeClock = (function () {
  var date = new Date();
  var time = getTime12HourFormat(date);
  var positions = {
    hours:
      hoursPerDeg * time.hours + (time.minutes * (minutesPerDeg / 60)) / 12,
    minutes: minutesPerDeg * time.minutes + time.seconds * (secondsPerDeg / 60),
    seconds: secondsPerDeg * time.seconds
  };

  return function setClockTime() {
    positions.hours += minutesPerDeg / 60;
    positions.minutes += secondsPerDeg / 60;
    positions.seconds += secondsPerDeg;

    setRotation(hoursEl, positions.hours);
    setRotation(minutesEl, positions.minutes);
    setRotation(secondsEl, positions.seconds);
    setDateTimeText();
  };
})();

function startClock() {
  initializeClock();
  setInterval(initializeClock, 1000);
}

function setDateTimeText() {
  var date = new Date();
  var time = getTime12HourFormat(date);
  var dateValue = `<span class="date-dateValue">${date.getDate()}</span>`;
  var dateText = `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${dateValue}`;
  var timeText = `${time.hours}:${
    time.minutes.toString().length - 1 ? "" : "0"
  }${time.minutes} ${time.period}`;
  if (dateEl.innerHTML !== dateText) dateEl.innerHTML = dateText;
  if (timeEl.innerHTML !== timeText) timeEl.innerText = timeText;
}

function setRotation(el, degreeValue) {
  el.style.setProperty("transform", `rotate(${degreeValue}deg)`);
}

function getTime12HourFormat(date) {
  var hour24Format = date.getHours();
  var hours = hour24Format > 12 ? hour24Format - 12 : hour24Format;
  var period = hour24Format > 12 ? "PM" : "AM";
  return {
    hours,
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    period
  };
}

themeButtonEl.addEventListener("click", toggleTheme);

function toggleTheme() {
  wrapperEl.classList.toggle("dark");
  themeButtonEl.innerText = wrapperEl.classList.contains("dark")
    ? "Light mode"
    : "Dark mode";
}
