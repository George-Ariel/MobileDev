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

array={key1: 'hmm this is interesting',key2:'this was made using an associative array'}; 
alert(array['key2']);
