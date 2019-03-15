var deVision = deVide(24, 3);

function deVide(rat, bat) {
  return rat / bat;
}

function myFunction() {
    document.getElementById("yes").innerHTML= deVision;
}

var person = {
    firstName: "Giovanna",
    lastName : "Sanchez",
    id     : 7898,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  function furYeet() {
    document.getElementById("yar").innerHTML = person.fullName();
}


