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


// The average sleep cycle is 90 minutes long
// A typical night of sleep includes 5 full sleep cycles.
// 4 cycles: 90 x 4 = 360 minutes
// 5 cycles: 90 x 5 = 450 minutes
// 6 cycles: 90 x 6 = 540 minutes
// 7 cycles: 90 x 7 = 630 minutes


//calculate the optimal bedtime
function fourCycles() {
    var h = parseInt(localStorage.hour) // parseInt turns it into a useable number
    var m = parseInt(localStorage.minutes)

    var x = document.getElementById("ampm").selectedIndex;
    // 0 = "AM" which makes the statement true
    // 1 = "PM" which makes the statement false 
    if (Boolean(x) == true) {
        var hoursToMins = (h + 12) * 60; // Normalizing the hours to minutes 
    } else {
        var hoursToMins = h * 60;
    }
    var comBined = hoursToMins + m;
    var wakeUp = (comBined - 450) / 60; // subtract 90 meaning ONE cycle 

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
        document.getElementById("cycle1").innerHTML = finalTime;
    } else {
        var finalTime = finalHour + " : " + finalMinutes + "AM";
        document.getElementById("cycle1").innerHTML = finalTime;
    }
}
function fiveCycles() {
    var h = parseInt(localStorage.hour) // parseInt turns it into a useable number
    var m = parseInt(localStorage.minutes)

    var x = document.getElementById("ampm").selectedIndex;
    // 0 = "AM" which makes the statement true
    // 1 = "PM" which makes the statement false 
    if (Boolean(x) == true) {
        var hoursToMins = (h + 12) * 60; // Normalizing the hours to minutes 
    } else {
        var hoursToMins = h * 60;
    }
    var comBined = hoursToMins + m;
    var wakeUp = (comBined - 450) / 60; // subtract 90 meaning ONE cycle 

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
        document.getElementById("cycle1").innerHTML = finalTime;
    } else {
        var finalTime = finalHour + " : " + finalMinutes + "AM";
        document.getElementById("cycle1").innerHTML = finalTime;
    }
}
function sixCycles() {
    var h = parseInt(localStorage.hour) // parseInt turns it into a useable number
    var m = parseInt(localStorage.minutes)

    var x = document.getElementById("ampm").selectedIndex;
    // 0 = "AM" which makes the statement true
    // 1 = "PM" which makes the statement false 
    if (Boolean(x) == true) {
        var hoursToMins = (h + 12) * 60; // Normalizing the hours to minutes 
    } else {
        var hoursToMins = h * 60;
    }
    var comBined = hoursToMins + m;
    var wakeUp = (comBined - 450) / 60; // subtract 90 meaning ONE cycle 

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
        document.getElementById("cycle1").innerHTML = finalTime;
    } else {
        var finalTime = finalHour + " : " + finalMinutes + "AM";
        document.getElementById("cycle1").innerHTML = finalTime;
    }
}
function sevenCycles() {
    var h = parseInt(localStorage.hour) // parseInt turns it into a useable number
    var m = parseInt(localStorage.minutes)

    var x = document.getElementById("ampm").selectedIndex;
    // 0 = "AM" which makes the statement true
    // 1 = "PM" which makes the statement false 
    if (Boolean(x) == true) {
        var hoursToMins = (h + 12) * 60; // Normalizing the hours to minutes 
    } else {
        var hoursToMins = h * 60;
    }
    var comBined = hoursToMins + m;
    var wakeUp = (comBined - 450) / 60; // subtract 90 meaning ONE cycle 

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
        document.getElementById("cycle1").innerHTML = finalTime;
    } else {
        var finalTime = finalHour + " : " + finalMinutes + "AM";
        document.getElementById("cycle1").innerHTML = finalTime;
    }
}













//     alert("Please select an hour and a minute before trying to calculate!");





// Starting at your wake time, work back 7.5 hours to find your bedtime.

// 6 cycles

// 7 cycles 

// 8 cycles

// 4 cycles // 

function clearStorage() {
    localStorage.clear();
}