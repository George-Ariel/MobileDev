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

  var maxValue = minInHour * hourBase;
  var timeInMins;
  var newHour;

  //normalize and find total time in minutes to make easier to solve
  if (hours === hrFormat) {
    timeInMins = mins;
    hours = 0;
  } else {
    timeInMins = hours * minInHour + mins;
  }





  //var wakeUp = (comBined - 630) / 60;

//keep the 12hr format going 
  if (newHour === 0) {
    hours = hrFormat;
  } else {
    hours = newH;
  }

//display correct correspodning AM or PM
  if ((change > 0 && newHour < hours) || (change < 0 && newHour > hours)) {
    if (ampmFormat == "AM") {
      ampmFormat = "PM";
    } else {
      ampmFormat = "AM";
    }
  }

  return [hours, mins, ampmFormat];
}






function fourCycles() {


  var x = document.getElementById("ampm").selectedIndex;
  // 0 = "AM" which makes the statement true
  // 1 = "PM" which makes the statement false 
  if (Boolean(x) == false) {
    var hoursToMins = (h + 12) * 60; // Normalizing the hours to minutes 
  } else {
    var hoursToMins = h * 60;
  }
  var comBined = hoursToMins + m;
  var wakeUp = (comBined - 360) / 60; // subtract 360 meaning FOUR cycles

  //to get minutes
  var chopExtra = wakeUp.toFixed(2);
  var decimalToMins = chopExtra.toString();
  var justDecimal = decimalToMins.slice(-3);
  var justMinutes = parseFloat(justDecimal);
  var finalMinutes = justMinutes * 60;

  // to get hour
  var finalHour = Math.floor(wakeUp);
  if (finalHour > 12) {
    var notMilitaryLol = finalHour - 12; // turning into 12hr format
    var finalTime = notMilitaryLol + " : " + finalMinutes + "PM";
    document.getElementById("cycle4").innerHTML = finalTime;
  } else {
    var finalTime = finalHour + " : " + finalMinutes + "AM";
    document.getElementById("cycle4").innerHTML = finalTime;
  }
}

function fiveCycles() {
  var h = parseInt(localStorage.hour) // parseInt turns it into a useable number
  var m = parseInt(localStorage.minutes)

  var x = document.getElementById("ampm").selectedIndex;
  // 0 = "AM" which makes the statement true
  // 1 = "PM" which makes the statement false 
  if (Boolean(x) == false) {
    var hoursToMins = (h + 12) * 60; // Normalizing the hours to minutes 
  } else {
    var hoursToMins = h * 60;
  }
  var comBined = hoursToMins + m;
  var wakeUp = (comBined - 450) / 60; // subtract 450 meaning FIVE cycles

  //to get minutes
  var chopExtra = wakeUp.toFixed(2);
  var decimalToMins = chopExtra.toString();
  var justDecimal = decimalToMins.slice(-3);
  var justMinutes = parseFloat(justDecimal);
  var finalMinutes = justMinutes * 60;

  // to get hour
  var finalHour = Math.floor(wakeUp);
  if (finalHour > 12) {
    var notMilitaryLol = finalHour - 12; // turning into 12hr format
    var finalTime = notMilitaryLol + " : " + finalMinutes + "PM";
    document.getElementById("cycle5").innerHTML = finalTime;
  } else {
    var finalTime = finalHour + " : " + finalMinutes + "AM";
    document.getElementById("cycle5").innerHTML = finalTime;
  }
}

function sixCycles() {
  var h = parseInt(localStorage.hour) // parseInt turns it into a useable number
  var m = parseInt(localStorage.minutes)

  var x = document.getElementById("ampm").selectedIndex;
  // 0 = "AM" which makes the statement true
  // 1 = "PM" which makes the statement false 
  if (Boolean(x) == false) {
    var hoursToMins = (h + 12) * 60; // Normalizing the hours to minutes 
  } else {
    var hoursToMins = h * 60;
  }
  var comBined = hoursToMins + m;
  var wakeUp = (comBined - 540) / 60; // subtract 540 meaning SIX cycles

  //to get minutes
  var chopExtra = wakeUp.toFixed(2);
  var decimalToMins = chopExtra.toString();
  var justDecimal = decimalToMins.slice(-3);
  var justMinutes = parseFloat(justDecimal);
  var finalMinutes = justMinutes * 60;

  // to get hour
  var finalHour = Math.floor(wakeUp);
  if (finalHour > 12) {
    var notMilitaryLol = finalHour - 12; // turning into 12hr format
    var finalTime = notMilitaryLol + " : " + finalMinutes + "PM";
    document.getElementById("cycle6").innerHTML = finalTime;
  } else {
    var finalTime = finalHour + " : " + finalMinutes + "AM";
    document.getElementById("cycle6").innerHTML = finalTime;
  }
}

function sevenCycles() {


  //to get minutes
  var chopExtra = wakeUp.toFixed(2);
  var decimalToMins = chopExtra.toString();
  var justDecimal = decimalToMins.slice(-3);
  var justMinutes = parseFloat(justDecimal);
  var finalMinutes = justMinutes * 60;

  // to get hour
  var finalHour = Math.floor(wakeUp);
  if (finalHour > 12) {
    var notMilitaryLol = finalHour - 12; // turning into 12hr format
    var finalTime = notMilitaryLol + " : " + finalMinutes + "PM";
    document.getElementById("cycle7").innerHTML = finalTime;
  } else {
    var finalTime = finalHour + " : " + finalMinutes + "AM";
    document.getElementById("cycle7").innerHTML = finalTime;
  }
}




//     alert("Please select an hour and a minute before trying to calculate!");


function clearStorage() {
  localStorage.clear();
}