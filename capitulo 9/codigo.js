const nombre = document.getElementById("nombre");
const mail = document.getElementById("mail");
const materia = document.getElementById("materia");
const btn = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let error = validarCampos();
  if (error[0]) {
    resultado.innerHTML = error[1];
    resultado.classList.add("red");
    resultado.classList.remove("green");
  } else {
    resultado.innerHTML = "Solicitud enviada correctamente";
    resultado.classList.remove("red");
    resultado.classList.add("green");
  }
});

const validarCampos = () => {
  let error = [];
  if (nombre.value.length < 4 || nombre.value.length > 40) {
    error[0] = true;
    error[1] = "El nombre es invalido";
    return error;
  } else if (
    mail.value.length < 5 ||
    mail.value.length > 40 ||
    mail.value.indexOf("@") == -1 ||
    mail.value.indexOf(".") == -1
  ) {
    error[0] = true;
    error[1] = "El mail es invalido";
    return error;
  } else if (materia.value < 4 || materia.value > 40) {
    error[0] = true;
    error[1] = "La materia no existe";
  }
  error[0] = false;
  return error;
};
