
  function cutToxicPeople() {
    var item = document.getElementById("toxic");
    item.parentNode.removeChild(item);
  }


  function poofPoofBuhBye() {
    var list = document.getElementById("loooongList");
    
    if (list.hasChildNodes()) {
      list.removeChild(list.childNodes[0]);
    }
  }

  function notToday() {
    var theMILK = document.createElement("LI");
    var textnode = document.createTextNode("MILK");
    theMILK.appendChild(textnode);
  
    var list = document.getElementById("shoppingList");
    list.insertBefore(theMILK, list.childNodes[0]);
  }


  function spookyJack() {
    var listing = document.createElement("P");
    var t = document.createTextNode("All work and no play makes Jack a dull boy.");
    listing.appendChild(t);
    document.body.appendChild(listing);
  }
