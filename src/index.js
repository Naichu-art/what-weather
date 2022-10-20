function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}
// Second, I build this function.
function displayWeather(response) {
  document.querySelector("#cope").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
}

// First, I build this function. Console.log Axios to see if
// its working properly.
function search(event) {
  event.preventDefault();
  let key = "3831fbd4c0f811f25ad9b6290941d5c3";
  let city = document.querySelector("#inputPassword2").value;
  //   para no buscar solo una ciudad. Sino que sea la ciudad que quiere el usuario.
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  axios.get(url).then(displayWeather);
}
