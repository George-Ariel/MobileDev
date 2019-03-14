var theBeatles = ["John Lenon", "Paul McCartney", "Ringo Star"];
function beatlesWho() {
  theBeatles[theBeatles.length] = "George Harrison";
  document.getElementById("whoFOURTH").innerHTML = theBeatles;
}


var persona = ["a","b","c"];
//persona['a'] = "Shrek";
//persona['b'] = "Fiona";
//persona['c'] = "Donkey"; 
document.getElementById("shrekMovies").innerHTML = persona;

var lPeople = ["Lilo", "Stitch", "Nani", "Jumba", "Pleakley", "Cobra Bubbles"];
var text = "";
var i;
for (i = 0; i < lPeople.length; i++) {
    text += lPeople[i] + "<br>";
}
document.getElementById("liloStich").innerHTML = text;