var theBeatles = ["John Lenon", "Paul McCartney", "Ringo Star"];
function beatlesWho() {
  theBeatles[theBeatles.length] = "George Harrison";
  document.getElementById("whoFOURTH").innerHTML = theBeatles;
}


function queHoraEs() {
  var hour = new Date().getHours(); 
  var greeting;
  if (hour < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  document.getElementById("time").innerHTML = greeting;
}

array={key1: 'value1',key2:'value2'}; 
alert(array['key2']);
