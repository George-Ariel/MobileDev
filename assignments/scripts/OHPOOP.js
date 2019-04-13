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

function cycleOne() {
    var hoursToMins = (localStorage.hour * 60); // Normalizing the hours to minutes 
    var h = parseInt(hoursToMins)
    var m = parseInt(localStorage.minutes)
    var totalMins = h + m;
    var wakeUp = (totalMins + 90) / 60;  // tested with 450 meaning FIVE cycle
    if (wakeUp > 12) {
        var arise = wakeUp - 12;
        document.getElementById("cycle1").innerHTML = arise;
    } else {
        document.getElementById("cycle1").innerHTML = wakeUp;
    }
}

function cycleTwo() {
    var hoursToMins = (localStorage.hour * 60); // Normalizing the hours to minutes 
    var h = parseInt(hoursToMins)
    var m = parseInt(localStorage.minutes)
    var totalMins = h + m;
    var wakeUp = (totalMins + 450) / 60;  // tested with 450 meaning FIVE cycle
    if (wakeUp > 12) {
        var arise = wakeUp - 12;
        document.getElementById("cycle2").innerHTML = arise;
    } else {
        document.getElementById("cycle2").innerHTML = wakeUp;
    }
}










// function sleepCalc(wakeUp) {

    


// function getMyCallback(randomValue)
// {
//     return function(otherParam)
//     {
//         return randomValue * otherParam //or whatever it is you are doing.
//     }

// }

// var myCallback = getMyCallBack(getRand())

// alert(myCallBack(1));
// alert(myCallBack(2));





    
    // localStorage.minutes 
    
    
//     / 60;
//     if (normalizeIntoMinutes > 12) {
//         goToBed = normalizeIntoMinutes - 12;
//         document.getElementById("cycle1").innerHTML = goToBed;
//     } else {
//         document.getElementById("cycle1").innerHTML = normalizeIntoMinutes;
//     }

// }




// var one = "optimal time is" + h + " : " + m + " !";
// document.getElementById("showEm").innerHTML = one;

// }

// information :
// function sleepCalcc() {
//     var timeToFallAsleep = 15;
//     var cycle = 90;
//     var minInHour = 60;
//     var hourBase = 12;
//     var plan = document.getElementById('plan');
//     var getUp = document.getElementById('getUp');
//     var goToBed = document.getElementById('goToBed');

//     var bedTime = document.getElementById('bedTime');
//     var getUpTime = document.getElementById('getUpTime');
//     var calcAgain = document.getElementsByClassName('calcAgain');

//     bedTime.addEventListener('click', checkBedTime);
//     getUpTime.addEventListener('click', checkGetUpTime);
// }


//     function calculateTime(hours, min, dayHalf, change) {
//         var maxValue = minInHour * hourBase;
//         var timeInMin;
//         var newH;

//         //нормирую часы
//         if (hours === hourBase) {
//             timeInMin = min;
//             hours = 0;
//         } else {
//             timeInMin = hours * minInHour + min;
//         }

//         var newTime = timeInMin + change;

//         //считаю минуты и часы
//         if (newTime >= 0) {
//             min = newTime % minInHour;
//             if (Math.floor(newTime / minInHour) >= hourBase) {
//                 newH = Math.floor(newTime / minInHour) - hourBase;
//             } else {
//                 newH = Math.floor(newTime / minInHour);
//             }
//         } else {
//             min = minInHour + newTime % minInHour;
//             newH = Math.floor((maxValue + (timeInMin + change)) / minInHour);
//         }

// //вычисляю половину дня
//         if ((change > 0 && newH < hours) || (change < 0 && newH > hours)) {
//             if (dayHalf == "AM") {
//                 dayHalf = "PM";
//             } else {
//                 dayHalf = "AM";
//             }
//         }

//         //возвращаю часы к нужному формату
//         if (newH === 0) {
//             hours = hourBase;
//         }
//         else {
//             hours = newH;
//         }

//         return [hours, min, dayHalf];

//     }


// The average sleep cycle - 90 minutes long.
// A typical night of sleep includes 5 full sleep cycles.
// 90 x 5 = 450 minutes, or 7.5 hours.

// Starting at your wake time, work back 7.5 hours to find your bedtime.

// 6 cycles

// 7 cycles 

// 8 cycles

// 4 cycles

// 3 cycles