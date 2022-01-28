const clock = () => {
    var date    = new Date();
    var hours   = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var midday;
  
    hours     = updateTime(hours);
    minutes   = updateTime(minutes);
    seconds   = updateTime(seconds);
    var name  = "Romo, suster, bapak ibu dan saudara saudari";
  
    // if else condition
  
    midday = (hours >= 12) ? "PM" : "AM";
  
    document.getElementById("clock").innerHTML =
      ""+hours+"" + ":" + ""+minutes+"" + ":" + ""+seconds+"" + ""+midday+"";
  
    var time = setTimeout(function () {
      clock();
    }, 1000);
  
    //   Good Morning and Good Night Conditions
  
    if (hours < 12) {
      var greeting = "Selamat pagi " + name + " Tuhan memberkati";
    }
  
    if (hours >= 12 && hours <= 15) {
      var greeting = "Selamat siang " + name + " sekalian tetap semangat Tuhan memberkati<br>" + " Sugeng siang " + name + " sedanten Gusti paring berkah";
      
    }

    if (hours >= 15 && hours <= 18) {
        var greeting ="Selamat sore " + name + " sekalian selamat bersantai Tuhan memberkati 🙏<br>" + " Sugeng sonten " + name + " sedaya monggo sami kendêl sekedap Gusti mberkahi🙏"
    }
  
    if (hours >= 18 && hours <= 24) {
      var greeting = "Selamat malam " + name;
    }
  
    document.getElementById("greetings").innerHTML = greeting;
  };

  const updateTime = (k) => {
    if (k < 10) {
      return "0" + k;
    } else {
      return k;
    }
  }
  
  // call clock function 
  clock();
