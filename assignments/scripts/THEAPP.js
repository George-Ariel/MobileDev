var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?lat=-118.200912&lon=34.366661&APPID=d81576e3aa1511ba13c1f7f6157ccf2d', true);

weatherObject.send();

weatherObject.onload = function () {
  var weatherInfo = JSON.parse(weatherObject.responseText);
  console.log(weatherInfo);
  //document.getElementById('showWeather').innerHTML = weatherInfo.data;
}
// list[0].weather[0].main



function storeTime() {
  var hhh = document.getElementById("hour").value;
  localStorage.hour = hhh;
  var mmm = document.getElementById("minutes").value;
  localStorage.minutes = mmm;
}
// localStorage.WHATEVER is how you access saved data


function calcBedtime() {
  var hours = parseInt(localStorage.hour); // parseInt turns it into a useable number
  var mins = parseInt(localStorage.minutes);

  //grab selected am or pm from user
  var x = document.getElementById("ampm").selectedIndex;
  var y = document.getElementById("ampm").options;
  var ampmFormat = y[x].text;
  document.getElementById("wakeTime").innerHTML = hours + " : " + mins + ampmFormat;
}

// The average sleep cycle is 90 minutes long
// A typical night of sleep includes 5 full sleep cycles.
// 4 cycles: 90 x 4 = 360 minutes
// 5 cycles: 90 x 5 = 450 minutes
// 6 cycles: 90 x 6 = 540 minutes
// 7 cycles: 90 x 7 = 630 minutes


//calculate the optimal bedtime
function sleepCalc(hours, mins, ampmFormat, change) {

  //important facts
  var timeToFallAsleep = 15;
  var cycle = 90;
  var minInHour = 60;
  var hrFormat = 12;

  var maxValue = minInHour * hrFormat;
  var timeInMins;
  var finalHour;

  //normalize and find total time in minutes to make easier to solve
  if (hours === hrFormat) {
    timeInMins = mins;
    hours = 0;
  } else {
    timeInMins = hours * minInHour + mins;
  }

  var newTime = timeInMins + change;

  //works the magic - Math.floor() rounds a number downward and to the nearest integer
  if (newTime >= 0) {
      mins = newTime % minInHour;
      if (Math.floor(newTime / minInHour) >= hrFormat) {
        finalHour = Math.floor(newTime / minInHour) - hrFormat;
      } else {
        finalHour = Math.floor(newTime / minInHour);
      }
  } else {
      mins = minInHour + newTime % minInHour;
      finalHour = Math.floor((maxValue + (timeInMins + change)) / minInHour);
  }

//keep the 12hr format going 
  if (finalHour === 0) {
    hours = hrFormat;
  } else {
    hours = finalHour;
  }

//display correct correspodning AM or PM
  if ((change > 0 && finalHour < hours) || (change < 0 && finalHour > hours)) {
    if (ampmFormat == "AM") {
      ampmFormat = "PM";
    } else {
      ampmFormat = "AM";
    }
  }

  return [hours, mins, ampmFormat];
}












//     alert("Please select an hour and a minute before trying to calculate!");


function clearStorage() {
  localStorage.clear();
}