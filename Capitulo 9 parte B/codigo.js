alumnos = [
  {
    nombre: "Luca Liscano",
    email: "Lucaliscano@gmail.com",
    materia: "geometria",
  },
  {
    nombre: "karin guerra",
    email: "karin@gmail.com",
    materia: "fisica 1",
  },
  {
    nombre: "jorge ramirez",
    email: "jorge@gmail.com",
    materia: "calculo 2",
  },
  {
    nombre: "facundo roberto",
    email: "facundo@gmail.com",
    materia: "literatura",
  },
  {
    nombre: "Coffla",
    email: "Coffla@gmail.com",
    materia: "recreo",
  },
];

const btn = document.querySelector(".btn-confirmar");
const contenedor = document.querySelector(".grid-container");

for (alumno in alumnos) {
  let datos = alumnos[alumno];
  let nombre = datos["nombre"];
  let email = datos["email"];
  let materia = datos["materia"];
  let htmlcode = `
  <div class="grid-item nombre">${nombre}</div>
  <div class="grid-item email">${email}</div>
  <div class="grid-item materia">${materia}</div>
  <div class="grid-item semana">
    <select name="" class="semana-elegida">
      <option value="semana 1">Semana 1</option>
      <option value="semana 2">Semana 2</option>
    </select>
  </div>
  `;
  contenedor.innerHTML += htmlcode;
}

btn.addEventListener("click", () => {
  let confirmar = confirm("¿Realmente quieres confirmar las mesas?");
  if (confirmar) {
    document.body.removeChild(btn);
    let elementos = document.querySelectorAll(".semana");
    let semanasElegidas = document.querySelectorAll(".semana-elegida");
    for (elemento in elementos) {
      semana = elementos[elemento];
      semana.innerHTML = semanasElegidas[elemento].value;
    }
  }
});
