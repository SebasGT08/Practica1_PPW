function validateForm() {
  const nameInput = document.getElementById("name");
  const numberInput = document.getElementById("numberS");
  const correoInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  // Validar nombre
  if (nameInput.value.trim().length < 3) {
    nameInput.classList.add("is-invalid");
    nameInput.parentElement.querySelector(".error-feedback").style.display = "block";
    return false;
  } else {
    nameInput.classList.remove("is-invalid");
    nameInput.parentElement.querySelector(".error-feedback").style.display = "none";
  }

  // Validar número de celular
  if (!/^\d{10}$/.test(numberInput.value)) {
    numberInput.classList.add("is-invalid");
    numberInput.parentElement.querySelector(".error-feedback").style.display = "block";
    return false;
  } else {
    numberInput.classList.remove("is-invalid");
    numberInput.parentElement.querySelector(".error-feedback").style.display = "none";
  }

  // Validar correo electrónico
  if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(correoInput.value)) {
    correoInput.classList.add("is-invalid");
    correoInput.parentElement.querySelector(".error-feedback").style.display = "block";
    return false;
  } else {
    correoInput.classList.remove("is-invalid");
    correoInput.parentElement.querySelector(".error-feedback").style.display = "none";
  }
  

  // Validar mensaje
  if (messageInput.value.trim().length < 5) {
    messageInput.classList.add("is-invalid");
    messageInput.parentElement.querySelector(".error-feedback").style.display = "block";
    return false;
  } else {
    messageInput.classList.remove("is-invalid");
    messageInput.parentElement.querySelector(".error-feedback").style.display = "none";
  }

  alert("Formulario Enviado\n\n" +
  "Nombre: " + nameInput.value + "\n" +
  "Celular: " + numberInput.value + "\n" +
  "Correo: " + correoInput.value + "\n" +
  "Mensaje: " + messageInput.value);

  return true;
}