//problema 1.

//let free = false;

//const validarCliente = (time) => {
//  let edad = prompt("¿cual es tu edad?");
//  if (edad > 18) {
//    if (time >= 2 && time < 7 && free == false) {
//      alert("podes pasar gratis");
//      free = true;
//    } else {
//      alert("podes pasar,pero tenes que pagar entrada");
//    }
//  } else {
//    alert("sos menor, no podes pasar");
//  }
//};
//
////problema 2
//
//let cantidad = prompt("¿cuantos alumnos son?");
//let alumnosTotales = [];
//
//for (i = 0; i < cantidad; i++) {
//  alumnosTotales[i] = [prompt("nombre del alumno " + (i + 1)), 0];
//}
//
//const tomarAsistencia = (nombre, p) => {
//  let presencia = prompt(nombre);
//  if (presencia == "p" || presencia == "p") {
//    alumnosTotales[p][1]++;
//  }
//};
//
//for (i = 0; i < 30; i++) {
//  for (alumno in alumnosTotales) {
//    tomarAsistencia(alumnosTotales[alumno][0], alumno);
//  }
//}
//
//for (alumno in alumnosTotales) {
//  let resultado = `${alumnosTotales[alumno][0]}:<br>
//            Presentes:${alumnosTotales[alumno][1]}<br>
//            Ausencias:${30 - alumnosTotales[alumno][1]}
//
//    `;
//
//  if (30 - alumnosTotales[alumno][1] > 18) {
//    resultado += "reprobado por inasistencias <br><br>";
//  } else {
//    resultado += "<br><br>";
//  }
//
//  document.write(resultado);
//}

//problema 3

//
//const sumar = (num1, num2) => {
//  return parseInt(num1) + parseInt(num2);
//};
//
//const restar = (num1, num2) => {
//  return parseInt(num1) - parseInt(num2);
//};
//
//const dividir = (num1, num2) => {
//  return parseInt(num1) / parseInt(num2);
//};
//
//const mulitplicar = (num1, num2) => {
//  return parseInt(num1) * parseInt(num2);
//};
//
//alert("que operacion desea realizar?");
//
//operacion = prompt("1-suma, 2-resta, 3-division, 4-multiplicacion");
//
//if (operacion == 1) {
//  let numero1 = prompt("primer numero para sumar");
//  let numero2 = prompt("segundo numero para sumar");
//  resultado = sumar(numero1, numero2);
//  alert(`tu resultado es ${resultado}`);
//} else if (operacion == 2) {
//  let numero1 = prompt("primer numero para restar");
//  let numero2 = prompt("segundo numero para restar");
//  resultado = restar(numero1, numero2);
//  alert(`tu resultado es ${resultado}`);
//} else if (operacion == 3) {
//  let numero1 = prompt("primer numero para dividir");
//  let numero2 = prompt("segundo numero para dividir");
//  resultado = dividir(numero1, numero2);
//  alert(`tu resultado es ${resultado}`);
//} else if (operacion == 4) {
//  let numero1 = prompt("primer numero para multiplicar");
//  let numero2 = prompt("segundo numero para multiplicar");
//  resultado = mulitplicar(numero1, numero2);
//  alert(`tu resultado es ${resultado}`);
//} else {
//  alert("no se encontro el resultado");
//}
