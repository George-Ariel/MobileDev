var theBeatles = ["John Lenon", "Paul McCartney", "Ringo Star"];
document.getElementById("whoFOURTH").innerHTML = theBeatles;

function beatlesWho() {
  theBeatles[theBeatles.length] = "George Harrison";
  document.getElementById("whoFOURTH").innerHTML = theBeatles;
}


var character = [];
character[0] = "Shrek";
character[1] = "Fiona";
character[2] = "Donkey"; 
character[3] = "Gingy";
character[4] = "Lord Farquaad";
document.getElementById("shrekMovies").innerHTML = character[0] + " " + character.length;

