//class Calculadora {
//  constructor() {}
//  sumar(num1, num2) {
//    return parseInt(num1) + parseInt(num2);
//  }
//
//  restar(num1, num2) {
//    return parseInt(num1) - parseInt(num2);
//  }
//
//  dividir(num1, num2) {
//    return parseInt(num1) / parseInt(num2);
//  }
//
//  mulitplicar(num1, num2) {
//    return parseInt(num1) * parseInt(num2);
//  }
//
//  potenciar(num, exp) {
//    return num ** exp;
//  }
//
//  raizCuadrada(num) {
//    return Math.sqrt(num);
//  }
//
//  raizCubica(num) {
//    return Math.cbrt(num);
//  }
//}
//
//const calculadora = new Calculadora();
//alert("que operacion desea realizar?");
//
//operacion = prompt(
//  "1-suma, 2-resta, 3-division, 4-multiplicacion, 5-Potenciacion, 6-raiz cuadrada,7-raiz cubica"
//);
//
//if (operacion == 1) {
//  let numero1 = prompt("primer numero para sumar");
//  let numero2 = prompt("segundo numero para sumar");
//  resultado = calculadora.sumar(numero1, numero2);
//  alert(`tu resultado es ${resultado}`);
//} else if (operacion == 2) {
//  let numero1 = prompt("primer numero para restar");
//  let numero2 = prompt("segundo numero para restar");
//  resultado = calculadora.restar(numero1, numero2);
//  alert(`tu resultado es ${resultado}`);
//} else if (operacion == 3) {
//  let numero1 = prompt("primer numero para dividir");
//  let numero2 = prompt("segundo numero para dividir");
//  resultado = calculadora.dividir(numero1, numero2);
//  alert(`tu resultado es ${resultado}`);
//} else if (operacion == 4) {
//  let numero1 = prompt("primer numero para multiplicar");
//  let numero2 = prompt("segundo numero para multiplicar");
//  resultado = calculadora.mulitplicar(numero1, numero2);
//  alert(`tu resultado es ${resultado}`);
//} else if (operacion == 5) {
//  let numero1 = prompt("numero a potenciar");
//  let numero2 = prompt("exponente");
//  resultado = calculadora.potenciar(numero1, numero2);
//  alert(`tu resultado es ${resultado}`);
//} else if (operacion == 6) {
//  let numero1 = prompt("conocer raiz cuadrada de:");
//  resultado = calculadora.raizCuadrada(numero1);
//  alert(`tu resultado es ${resultado}`);
//} else if (operacion == 7) {
//  let numero1 = prompt("conocer raiz cubica de:");
//  resultado = calculadora.raizCubica(numero1);
//  alert(`tu resultado es ${resultado}`);
//} else {
//  alert("no se encontro el resultado");
//}

//Problema 2

//const obtenerInformacion = (materia) => {
//  materias = {
//    fisica: ["perez", "pedro", "pepito", "cofla", "maria"],
//    programacion: ["dalto", "pedro", "juan", "pepito"],
//    logica: ["hernandez", "pedro", "juan", "pepito", "cofla", "maria"],
//    quimica: ["rodriguez", "pedro", "juan", "pepito", "cofla", "maria"],
//  };
//  if (materias[materia] !== undefined) {
//    return [materias[materia], materia, materias];
//  } else {
//    return materias;
//  }
//};
//
//const mostrarInformacion = (materia) => {
//  let informacion = obtenerInformacion(materia);
//  if (informacion !== false) {
//    let profesor = informacion[0][0];
//    let alumnos = informacion[0];
//    alumnos.shift();
//    document.write(
//      `El profesor de <b>${informacion[1]}</b> es <b style="color:red">${profesor}</b><br>
//        Los alumnos son:<b style="color:blue">${alumnos}</b><br><br>
//        `
//    );
//  }
//};
//
//const cantidadDeClases = (alumno) => {
//  let informacion = obtenerInformacion();
//  let clasesPresentes = [];
//  let cantidadTotal = 0;
//  for (info in informacion) {
//    if (informacion[info].includes(alumno)) {
//      cantidadTotal++;
//      clasesPresentes.push("" + info);
//    }
//  }
//  return `<b style=color:blue>${alumno}</b> esta en ${cantidadTotal} clases</b><br>
//  Esta cursando las clases: <b>${clasesPresentes}</b><br>`;
//};
//
//mostrarInformacion("fisica");
//mostrarInformacion("programacion");
//mostrarInformacion("logica");
//mostrarInformacion("quimica");
//
//document.write(cantidadDeClases("cofla"));

//problema 3
//
//let materias = {
//  fisica: ["perez", "pedro", "pepito", "cofla", "maria"],
//  programacion: ["dalto", "pedro", "juan", "pepito"],
//  logica: ["hernandez", "pedro", "juan", "pepito", "cofla", "maria"],
//  quimica: ["rodriguez", "pedro", "juan", "pepito", "cofla", "maria"],
//};
//
//const inscribir = (alumno, materia) => {
//  personas = materias[materia];
//  personas = personas;
//  if (personas.length >= 21) {
//    document.write(
//      `lo siento <b>${alumno}</b>, las calses de ${materia} ya estan llenas<br>`
//    );
//  } else {
//    personas.push(alumno);
//    if (materia == "fisica") {
//      materias = {
//        fisica: personas,
//        programacion: materias["programacion"],
//        logica: materias["logica"],
//        quimica: materias["quimica"],
//      };
//    } else if (materia == "programacion") {
//      materias = {
//        fisica: materias["fisica"],
//        programacion: personas,
//        logica: materias["logica"],
//        quimica: materias["quimica"],
//      };
//    } else if (materia == "logica") {
//      materias = {
//        fisica: materias["fisica"],
//        programacion: materias["programacion"],
//        logica: personas,
//        quimica: materias["quimica"],
//      };
//    } else if (materia == "quimica") {
//      materias = {
//        fisica: materias["fisica"],
//        programacion: materias["programacion"],
//        logica: materias["logica"],
//        quimica: personas,
//      };
//    }
//    document.write(
//      `¡felicidades ${alumno}! te has inscrito a ${materia} correctamente <br>`
//    );
//  }
//};
//document.write(materias["fisica"] + "<br>");
//
//inscribir("pedrito", "fisica");
//inscribir("pedrito", "fisica");
//inscribir("pedrito", "fisica");
//inscribir("pedrito", "fisica");
//inscribir("pedrito", "fisica");
//inscribir("pedrito", "fisica");
//inscribir("pedrito", "fisica");
//inscribir("pedrito", "fisica");
//inscribir("pedrito", "fisica");
//inscribir("pedrito", "fisica");
//inscribir("pedrito", "fisica");
//inscribir("pedrito", "fisica");
//inscribir("pedrito", "fisica");
//inscribir("pedrito", "fisica");
//inscribir("pedrito", "fisica");
//inscribir("pedrito", "fisica");
//inscribir("pedrito", "fisica");
//inscribir("pedrito", "fisica");
//inscribir("pedrito", "fisica");
//
//document.write("<br>" + materias["fisica"]);
