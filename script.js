function navigation(nav,index) {
    var i;
    var x = document.getElementsByClassName("my-tab");
    y = document.getElementsByClassName("tab-button");
    console.log(y[2]);
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
      console.log(y[i]);
      y[i].style.borderBottomColor = "rgba(252, 229, 21, 0)";
      console.log(y[i]);
    }
    y[parseInt(index)].style.borderBottomColor = "rgb(252, 229, 21)";
    y[parseInt(index)].blur();
    document.getElementById(nav).style.display = "block";  
  }