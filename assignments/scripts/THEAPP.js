// 35.6762° N, 139.6503° E - tokyo


//getting JSON information
function loadAPI() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        bringWeather(this.responseText);
        // just to check --> console.log(JSON.parse(this.responseText));

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