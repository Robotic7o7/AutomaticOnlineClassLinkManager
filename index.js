var openStat = 0;

function showTime() {
  var date = new Date();
  var d = date.getDate();
  var d1 = date.getDay();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "PM";

  //Reinitializing the day to String format

  if (d1 === 1) {
    d1 = "Mon";
  }
  if (d1 === 2) {
    d1 = "Tue";
  }
  if (d1 === 3) {
    d1 = "Wed";
  }
  if (d1 === 4) {
    d1 = "Thu";
  }
  if (d1 === 5) {
    d1 = "Fri";
  }
  if (d1 === 6) {
    d1 = "Sat";
  }

  if (h == 02) {
    h = 12;
  }

  if (h > 12) {
    session = "PM";
  }
  if (h < 12) {
    session = "AM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time =
    d +
    "/" +
    d1 +
    "  " +
    "Time:" +
    "  " +
    h +
    ":" +
    m +
    ":" +
    s +
    " " +
    session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  if (h === 13 && m === 10) {
    if (s === 10) {
      Lunch();
    }
  }

  //Time Table Logic
  //Monday
  if (d1 === "Mon") {
    if (h === 9 && m === 55) {
      if (s === 10) {
        SPPM();
      }
    }
    if (h === 10 && m === 55) {
      if (s === 10) {
        PPL();
      }
    }
    if (h === 11 && m === 55) {
      if (s === 10) {
        DM();
      }
    }
    if (h === 12 && m === 55) {
      if (s === 10) {
        Lunch();
      }
    }
    if (h === 13 && m === 55) {
      if (s === 10) {
        CC();
      }
    }
    if (h === 14 && m === 55) {
      if (s === 10) {
        PY();
      }
    }
  }

  //Tuesday

  if (d1 === "Tue") {
    if (h === 9 && m === 55) {
      if (s === 10) {
        DM();
      }
    }
    if (h === 10 && m === 55) {
      if (s === 10) {
        CC();
      }
    }
    if (h === 11 && m === 55) {
      if (s === 10) {
        PPL();
      }
    }
    if (h === 12 && m === 55) {
      if (s === 10) {
        Lunch();
      }
    }
    if (h === 13 && m === 55) {
      if (s === 10) {
        PY();
      }
    }
    if (h === 14 && m === 55) {
      if (s === 10) {
        PY();
      }
    }
  }

  //Wednesday

  if (d1 === "Wed") {
    if (h === 9 && m === 55) {
      if (s === 10) {
        CC();
      }
    }
    if (h === 10 && m === 55) {
      if (s === 10) {
        DM();
      }
    }
    if (h === 11 && m === 55) {
      if (s === 10) {
        PY();
      }
    }
    if (h === 12 && m === 55) {
      if (s === 10) {
        Lunch();
      }
    }
    if (h === 13 && m === 55) {
      if (s === 10) {
        SPPM();
      }
    }
  }

  //Thursday

  if (d1 === "Thu") {
    if (h === 9 && m === 55) {
      if (s === 10) {
        PY();
      }
    }
    if (h === 10 && m === 55) {
      if (s === 10) {
        CC();
      }
    }
    if (h === 11 && m === 55) {
      if (s === 10) {
        SPPM();
      }
    }
    if (h === 12 && m === 55) {
      if (s === 10) {
        Lunch();
      }
    }
    if (h === 13 && m === 55) {
      if (s === 10) {
        DM();
      }
    }
  }

  //Friday

  if (d1 === "Fri") {
    if (h === 9 && m === 55) {
      if (s === 10) {
        PPL();
      }
    }
    if (h === 10 && m === 55) {
      if (s === 10) {
        PY();
      }
    }
    if (h === 11 && m === 55) {
      if (s === 10) {
        SPPM();
      }
    }
    if (h === 12 && m === 55) {
      if (s === 10) {
        Lunch();
      }
    }
    if (h === 13 && m === 55) {
      if (s === 10) {
        DM();
      }
    }
    if (h === 14 && m === 55) {
      if (s === 10) {
        CC();
      }
    }
  }

  //Saturday

  if (d1 === "Sat") {
    if (h === 9 && m === 55) {
      if (s === 10) {
        PPL();
      }
    }
    if (h === 10 && m === 55) {
      if (s === 10) {
        DM();
      }
    }
    if (h === 11 && m === 55) {
      if (s === 10) {
        PY();
      }
    }
    if (h === 12 && m === 55) {
      if (s === 10) {
        Lunch();
      }
    }
    if (h === 13 && m === 55) {
      if (s === 10) {
        PPL();
      }
    }
    if (h === 14 && m === 55) {
      if (s === 10) {
        SPPM();
      }
    }
  }

  setTimeout(showTime, 1000);
}
showTime();

//Period Functions with Subject Data and Zoom class Link

function PPL() {
  document.getElementById("show").innerHTML =
    "Subject: PPL Faculty: Ms. Samyuktha";
  var myWindow;
  myWindow = window.open(
    " https://us04web.zoom.us/j/7512733766?pwd=jaEXR9-dJXvfGZkEdrsCuk3pdF4fkg",
    "_blank",
    "width=200, height=200"
  );
}

function DM() {
  document.getElementById("show").innerHTML = "Subject: DM Faculty: Mr. Rajesh";
  var myWindow;
  myWindow = window.open(
    "https://us04web.zoom.us/j/6382172099?pwd=jaMXStv_YSp8sPny0dKk7sSY-BQi",
    "_blank",
    "width=200, height=200"
  );
}

function PY() {
  var myWindow;
  document.getElementById("show").innerHTML =
    "Subject: PY Faculty: Ms. Kumari Jelli";
  myWindow = window.open(
    " https://us04web.zoom.us/j/7767809555?pwd=MlYrZjJhNFVTaStFa282cHgzZWdjdz09",
    "_blank",
    "width=200, height=200"
  );
}

function SPPM() {
  document.getElementById("show").innerHTML =
    "Subject: SPPM Faculty: Dr. G. Swamy";
  myWindow = window.open(
    "https://us04web.zoom.us/j/4626783045?pwd=UENOdFBoeXVqWVk4RmEvN29nSUxodz09",
    "_blank",
    "width=200, height=200"
  );
}

function CC() {
  document.getElementById("show").innerHTML =
    "Subject: CC Faculty: Ms. Adilakshmi";
  var myWindow;
  myWindow = window.open(
    "https://us04web.zoom.us/j/7620473265?pwd=RmVXVk03T2wrOHg0U2M0ZnlYRE1rQT09",
    "_blank",
    "width=200, height=200"
  );
}

function Lunch() {
  document.getElementById("show").innerHTML = "It is Lunch Time Niggas.";
}

function playSound() {
  if (openStat === 1) {
    var tom1 = new Audio("./siren.mp3");
    tom1.play();
  }
}

function insta() {
  myWindow = window.open(
    "https://us04web.zoom.us/j/7620473265?pwd=RmVXVk03T2wrOHg0U2M0ZnlYRE1rQT09",
    "_blank",
    "width=200, height=200"
  );
}
