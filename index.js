document.getElementById("intro1").innerHTML =
  "me and corner of an abstract painting";
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
let baseurl='https://khodattenqua.azurewebsites.net/api';
const thought=document.getElementById('thought');
thought.addEventListener('keyup', function () {
  if (this.value!=undefined && this.value.toString().length>=96) {
    this.value=this.value.slice(0,96);
  }
});
let out=document.getElementById('out');
function end(success){
  thought.value = '';
  if(success){
    out.style.color="green";
    out.innerText="Message Has Been Sent!";
    thought.placeholder = "Message Sent!"
    thought.disabled = true;
  }else{
    out.style.color="red";
    out.innerText="Error Sending Message!";
  }
  setTimeout(function(){
    out.style.color="grey";
    out.innerText="Write Me Something";
  }, 3000);
}
document.getElementById("sbtn").onclick=function(){
  let content=thought.value;
  if (content!=undefined && content.toString().length>=96) {
    content=content.slice(0,96);
  }
  content.replace('"','.');content.replace('\'','.');
  fetch(baseurl+'/HttpTrigger1', {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({'content':content})
}).then(res => end(true)).catch(err => end(false));
}
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