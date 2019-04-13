function storeTime() {
    var hhh = document.getElementById("hour").value;
    localStorage.hour = hhh;
    var mmm = document.getElementById("minutes").value;
    localStorage.minutes = mmm;
}

// localStorage.WHATEVER is how you access saved data


function disPlay() {
  var out = "If you go to sleep at " + localStorage.hour + " : " + localStorage.minutes + " here are the times we recommend you go to sleep at.";
  document.getElementById("showEm").innerHTML = out;
}

// information :
// The average sleep cycle - 90 minutes long.
// A typical night of sleep includes 5 full sleep cycles.
// 90 x 5 = 450 minutes, or 7.5 hours.
// Starting at your wake time, work back 7.5 hours to find your bedtime.

// 6 cycles

// 7 cycles 

// 8 cycles

// 4 cycles

// 3 cycles



// function sleepCalc {
//     var hh = localStorage.hour;
//     var mm = localStorage.minutes;

// }
  











function aBout() {
    var nomComplete = {};
    nomComplete['nombre'] = document.getElementById("nombre").value;
    nomComplete['country'] = document.getElementById("country").value;
    localStorage.setItem("nomComplete", JSON.stringify(nomComplete));
    var biogr = JSON.parse(localStorage.nomComplete);
    var out = "Welcome " + biogr['nombre'] + " from " + biogr['country'] + "!";
    document.getElementById("showName").innerHTML = out;
}