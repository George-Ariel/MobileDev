// 35.6762° N, 139.6503° E - tokyo

// getting coordinates from user by allowing location
var x = document.getElementById("coordinates");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showError);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

// showPosition, 
// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude;
// }


// accounting for errors & users who have blocked their locations
function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}






//getting JSON information
function loadAPI() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        bringWeather(this.responseText);
        // just to check --> console.log(JSON.parse(this.responseText));
        position.coords.latitude
        position.coords.longitude

      }
    };
    xhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast?APPID=d81576e3aa1511ba13c1f7f6157ccf2d&lat=35&lon=139", true);
    xhttp.send();
  }

  //geting the specific weather "subpoint" from the JSON
  function bringWeather(data) {
    var wrrr = JSON.parse(data);
    console.log(wrrr.list[0].weather[0].main);
  }




  //grabbing the current city from the user - text not coordinates omg why did i take a break

localStorage.setItem("name", "uhhh");
document.getElementById('input').value = localStorage.getItem("name");


