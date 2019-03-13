    var character1 = '{"warrior":"Blue Face", "legs":3, "weapon":"Wooden Spear"}' 
    var obj = JSON.parse(character1);
    document.getElementById("parse").innerHTML = obj.warrior + ", " + obj.weapon;

    var character2 = {
        name: "Red Face",
        legs: 12,
        weapon: "Shield"
    };
    var makeItJSON = JSON.stringify(character2);
    document.getElementById("strang").innerHTML = makeItJSON;