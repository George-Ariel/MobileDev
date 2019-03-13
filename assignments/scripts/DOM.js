function poofPoofBuhBye() {
    var list = document.getElementById("loooongList");
    
    if (list.hasChildNodes()) {
      list.removeChild(list.childNodes[0]);
    }
  }