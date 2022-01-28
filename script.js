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

  // content permenungan
var isirenungan ="Bacaan: 2Sam. 11:1-4a.5-10a.13-17 Markus 4:26-34 Kata-Nya lagi: Dengan apa hendak kita membandingkan Kerajaan Allah itu, atau dengan perumpamaan manakah hendaknya kita menggambarkannya? Hal Kerajaan itu seumpama biji sesawi yang ditaburkan di tanah. Memang biji itu yang paling kecil dari pada segala jenis benih yang ada di bumi. Tetapi apabila ia ditaburkan, ia tumbuh dan menjadi lebih besar dari pada segala sayuran yang lain dan mengeluarkan cabang-cabang yang besar, sehingga burung-burung di udara dapat bersarang dalam naungannya. Dalam banyak perumpamaan yang semacam itu Ia memberitakan firman kepada mereka sesuai dengan pengertian mereka, dan tanpa perumpamaan Ia tidak berkata-kata kepada mereka, tetapi kepada murid-murid-Nya Ia menguraikan segala sesuatu secara tersendiri. (Mrk. 4:30-34) Sahabat pelita hati, Konon biji sesawi adalah sangat kecil, lebih kecil daripada butiran pasir. Namun yang kecil itu jika ditaburkan di tanah yang baik, disirami dan dirawat pada akhirnya akan dapat bertumbuh menjadi besar dan dapat menjadi tempat bersarang burung-burung di udara. Di sini Tuhan mau menggambarkan bahwa kerajaan Allah itu bertumbuh dan berkembang seperti bji sesawi, mula-mula kecil dan bisa menjadi besar dan bermanfaat bagi yang lainnya. Sahabat terkasih, Gambaran dan pertumbuhan biji sesawi itu kiranya dapat menggambarkan pertumbuhan iman kita. Iman adalah tanggapan manusia terhadap wahyu atau pemberian diri Allah. Agar iman yang kecil dan rapuh ini bisa subur dan berkembang  butuh perawatan dan pupuk dengan doa dan firman kasih-Nya. Jika demikian, niscaya akan menjadi kokoh dan kuat serta memiliki daya yang luar biasa. Demikian juga niat dan kehendak baik kita, jika dipupuk dan dirawat akan berkembang dan berdayaguna bagi sesama. Semoga kita dapat belajar dari biji sesawi yang kecil itu dan akhirnya dapat menjdi besar. Kita tebarkan perhatian dan kasih kita kepada sesama. Walaupun kecil dan sederhana tetapi dapat berdaya guna serta memberi pengaruh yang besar bagi sesama yang sungguh membutuhkan. Berkah Dalem."
  document.getElementById("permenungan").innerHTML = isirenungan;

