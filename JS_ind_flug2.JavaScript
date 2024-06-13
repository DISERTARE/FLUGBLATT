function openNav() {
  // Placeholder per la funzione
}

function closeNav() {
  // Placeholder per la funzione
}

function checkWindowSize() {
  var sidenav = document.getElementById("mySidenav");
  var main = document.getElementById("main");
  var button = document.getElementById("Button");

  if (sidenav && main && button) {
    if (window.innerWidth >= 1024) {
      openNav = function() {
        sidenav.style.width = "250px";
        main.style.marginLeft = "250px";
        //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        button.style.display = "none";
      };

      closeNav = function() {
        sidenav.style.width = "0";
        sidenav.style.backgroundColor = "";
        main.style.marginLeft = "0";
        //document.body.style.backgroundColor = "";
        button.style.display = "";
      };

      console.log('Desktop view');
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      openNav = function() {
        sidenav.style.width = "250px";
        main.style.marginLeft = "250px";
        //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        button.style.display = "none";
      };

      closeNav = function() {
        sidenav.style.width = "0";
        sidenav.style.backgroundColor = "";
        main.style.marginLeft = "0";
        //document.body.style.backgroundColor = "";
        button.style.display = "";
      };

      console.log('Tablet view');
    } else {
      openNav = function() {
        sidenav.style.width = "250px";
        sidenav.style.backgroundColor = "black";
        document.body.style.backgroundColor = "black";
        main.style.display = "none";
        button.style.display = "none";
      };

      closeNav = function() {
        sidenav.style.width = "0";
        sidenav.style.backgroundColor = "";
        main.style.marginLeft = "0";
        main.style.display = "";
        document.body.style.backgroundColor = "white";
        button.style.display = "";
        document.getElementById("BackVideo").style.backgroundColor = "white";
      };

      console.log('Mobile view');
    }
  } else {
    console.error("Elementi mancanti nel DOM");
  }
}

window.addEventListener('load', checkWindowSize);
window.addEventListener('resize', checkWindowSize);

//alert("PER UN'ESPERIENZA IMMERSIVA DEL FLUGBLATT II ATTIVA LE OPZIONI DI AUTOPLAY SUL TUO BROWSER E ALZA IL VOLUME");

$( function() {
    $( "#dialog" ).dialog();
  } );

//final.version