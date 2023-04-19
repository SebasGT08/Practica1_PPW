// Verificar si hay un valor en localStorage con el nombre "hoja-estilo"
var localStorageValue = localStorage.getItem("hoja-estilo");
var localStorageValue2 = localStorage.getItem("menu");

if (localStorageValue === "1") {
  // Si se ha guardado el valor "1", activar la primera hoja de estilo
  var hojaEstilo1 = document.getElementById("hoja-estilo-1");
  hojaEstilo1.disabled = false;
  var hojaEstilo2 = document.getElementById("hoja-estilo-2");
  hojaEstilo2.disabled = true;
} else {
  // Si se ha guardado el valor "2", activar la segunda hoja de estilo
  var hojaEstilo1 = document.getElementById("hoja-estilo-1");
  hojaEstilo1.disabled = true;
  var hojaEstilo2 = document.getElementById("hoja-estilo-2");
  hojaEstilo2.disabled = false;
}

if (localStorageValue2 === "1") {
  // Si se ha guardado el valor "1", activar la primera hoja de estilo
  var menu1 = document.getElementById("menu-1");
  menu1.disabled = false;
  var menu2 = document.getElementById("menu-2");
  menu2.disabled = true;
} else {
  // Si se ha guardado el valor "2", activar la segunda hoja de estilo
  var menu1 = document.getElementById("menu-1");
  menu1.disabled = true;
  var menu2 = document.getElementById("menu-2");
  menu2.disabled = false;
}