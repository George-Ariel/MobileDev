          function save() {
              var newItem = document.getElementById("shrekC").value;
              localStorage.shrekC = newItem;
          }

          function load() {
            var nomComplete = {};
            nomComplete['nombre'] = document.getElementById("nombre").value;
            localStorage.setItem("nomComplete", JSON.stringify(nomComplete));
            var biogr = JSON.parse(localStorage.nomComplete);
            var venga = localStorage.shrekC; 
            var out = "Nice choice with " + venga + "!" + " " + biogr['nombre'] + " welcome to the club!";
            document.getElementById("yesss").innerHTML = out;
          }

          function wRONG() {
            var gotIt = document.getElementById("yesss");
            gotIt.innerHTML = "Even though you like " + localStorage.shrekC + ", you chose poorly by deciding not to join.";
          }

          function aBout() {
              var nomComplete = {};
              nomComplete['nombre'] = document.getElementById("nombre").value;
              nomComplete['country'] = document.getElementById("country").value;
              localStorage.setItem("nomComplete", JSON.stringify(nomComplete));
              var biogr = JSON.parse(localStorage.nomComplete);
              var out = "Welcome " + biogr['nombre'] + " from " + biogr['country'] + "!";
              document.getElementById("showName").innerHTML = out;
          }