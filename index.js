document.getElementsByTagName("span")[0].innerHTML =
  "Me and a corner of an abstract painting.";
let getEnder = function (e) {
    let n = parseInt(e.toDateString().split(" ")[2]);
    return n > 10 && n < 14
      ? "th"
      : 1 == (n %= 10)
      ? "st"
      : 2 === n
      ? "nd"
      : 3 === n
      ? "rd"
      : "th";
  },
  objToday = new Date(),
  weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayOfWeek = weekday[objToday.getDay()],
  domEnder = getEnder(objToday);
(dayOfMonth =
  10 > objToday.getDate()
    ? "0" + objToday.getDate() + domEnder
    : objToday.getDate() + domEnder),
  (today =
    dayOfWeek +
    ", " +
    dayOfMonth +
    " " +
    (curMonth = (months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ])[objToday.getMonth()]) +
    ", " +
    (curYear = objToday.getFullYear())),
  (document.querySelector("#clock").innerHTML = today);
const hour_hand = document.querySelector("[real-hour]"),
  min_hand = document.querySelector("[real-minute]"),
  sec_hand = document.querySelector("[real-second]"),
  set_rotation = function (e, n) {
    e.style.setProperty("--rot", 360 * n);
  },
  adjust_clock = function () {
    let e = new Date(),
      n = e.getSeconds() / 60,
      t = (n + e.getMinutes()) / 60,
      a = (t + e.getHours()) / 12;
    set_rotation(sec_hand, n),
      set_rotation(min_hand, t),
      set_rotation(hour_hand, a);
  };
setInterval(adjust_clock, 1e3), adjust_clock();