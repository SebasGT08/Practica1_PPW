// Verificar si hay un valor en localStorage con el nombre "hoja-estilo"
var localStorageValue = localStorage.getItem("hoja-estilo");

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