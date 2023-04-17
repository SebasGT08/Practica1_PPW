// Obtener el formulario
const form = document.getElementById("contact-form");

// Agregar un escucha para el evento "submit"
form.addEventListener("submit", function(event) {
  // Detener el envío del formulario
  event.preventDefault();

  // Validar los campos del formulario
  if (!validateName() || !validateEmail() || !validateMessage()) {
    return;
  }
});

function validateName() {
  const nameInput = form.name;
  const name = nameInput.value.trim();

  if (name === "") {
    nameInput.classList.add("is-invalid");
    return false;
  } else {
    nameInput.classList.remove("is-invalid");
    return true;
  }
}

function validateEmail() {
  const emailInput = form.email;
  const email = emailInput.value.trim();

  // Expresión regular para validar el formato del correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "" || !emailRegex.test(email)) {
    emailInput.classList.add("is-invalid");
    return false;
  } else {
    emailInput.classList.remove("is-invalid");
    return true;
  }
}

function validateMessage() {
  const messageInput = form.message;
  const message = messageInput.value.trim();

  if (message === "") {
    messageInput.classList.add("is-invalid");
    return false;
  } else {
    messageInput.classList.remove("is-invalid");
    return true;
  }
}
