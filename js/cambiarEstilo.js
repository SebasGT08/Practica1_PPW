function cambiarHojaEstilo() {
    var hojaEstilo1 = document.getElementById("hoja-estilo-1");
    var hojaEstilo2 = document.getElementById("hoja-estilo-2");

    var menu1 = document.getElementById("menu-1");
    var menu2 = document.getElementById("menu-2");
  
    if (hojaEstilo1.disabled) {
      hojaEstilo1.disabled = false;
      hojaEstilo2.disabled = true;
      menu1.disabled = false;
      menu2.disabled = true;
      // Guardar estado actual en localStorage
      localStorage.setItem("hoja-estilo", "1");
      localStorage.setItem("menu", "1");
    } else {
      hojaEstilo1.disabled = true;
      hojaEstilo2.disabled = false;
      menu1.disabled = true;
      menu2.disabled = false;
      // Guardar estado actual en localStorage
      localStorage.setItem("hoja-estilo", "2");
      localStorage.setItem("menu", "2");
    }
  }