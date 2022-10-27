//ejercicio 1

//class celulares {
//  constructor(color, peso, tamanio, rdc, ram) {
//    this.color = color;
//    this.peso = peso;
//    this.tamanio = tamanio;
//    this.resolucionDeCamara = rdc;
//    this.memoriaRam = ram;
//    this.encendido = false;
//  }
//
//  prender() {
//    if (this.encendido == false) {
//      alert("celular prendido");
//      this.encendido = true;
//    } else {
//      alert("celular apagado");
//      this.encendido = false;
//    }
//  }
//
//  reiniciar() {
//    if (this.encendido == true) {
//      alert("reiniciando celularo");
//    } else {
//      alert("el celular esta apagado");
//    }
//  }
//
//  tomarFotos() {
//    alert(`foto tomada en una resolucion de: ` + this.resolucionDeCamara);
//  }
//
//  grabarVideo() {
//    alert("grabando video en: " + this.resolucionDeCamara);
//  }
//
//  mostrarInfo() {
//    return `
//    Color:<b>${this.color}</b><br>
//    Peso:<b>${this.peso}</b><br>
//    Tamaño:<b>${this.tamanio}</b><br>
//    Resolucion de camara:<b>${this.resolucionDeCamara}</b><br>
//    Memoria RAM:<b>${this.ram}</b><br>
//      `;
//  }
//}

//class celularAltaGama extends celulares {
//constructor(color, peso, tamanio, rdc, ram, rdce) {
//super(color, peso, tamanio, rdc, ram);
//this.resolucionDeCamaraExtra = rdce;
//}

//grabarVideoLento() {
//alert("estas grabando en camara lenta");
//}
//reconocimientoFacial() {
//alert("vamos a iniciar un reconocimiento facial");
//}

//mobileInfo() {
//return `
//${this.mostrarInfo()}
//  resolucion de camara trasera: <b>${this.resolucionDeCamaraExtra}</b><br>`;
//}
//}

//celular1 = new celulares("rojo", "150g", "5", "full hd", "2gb");
//celular2 = new celulares("negro", "155g", "5.4", "full hd", "2gb");
//celular3 = new celulares("blanco", "15046g", "5.9", "full hd", "2gb");

//celular1.prender();
//celular1.tomarFotos();
//celular1.grabarVideo();
//celular1.prender();

//celular1 = new celularAltaGama("rojo", "130g", "5.2", "4k", "3gb", "full hd");
//celular2 = new celularAltaGama("rojo", "142g", "6", "4k", "4gb", "hd");

//document.write(`
//${celular1.mobileInfo()}<br>
//${celular2.mobileInfo()}<br>
//`);

//class App {
//  constructor(descargas, puntuacion, peso) {
//    this.descargas = descargas;
//    this.puntuacion = puntuacion;
//    this.peso = peso;
//    this.iniciada = false;
//    this.instalada = false;
//  }
//
//  abrir() {
//    if (this.iniciada == false && this.instalada == true) {
//      this.iniciada = true;
//      alert("app iniciada");
//    }
//  }
//
//  cerrar() {
//    if (this.iniciada == true && this.instalada == true) {
//      this.iniciada = false;
//      alert("app cerrada");
//    }
//  }
//
//  instalar() {
//    if (this.instalada == false) {
//      this.instalada = true;
//      alert("aplicacion instalada");
//    }
//  }
//
//  desinstalar() {
//    if (this.instalada == true) {
//      this.instalada = false;
//      alert("aplicacion desinstalada");
//    }
//  }
//
//  appInfo() {
//    return `
//    Descargas: <b>${this.descargas}</b><br>
//    Puntuacion: <b>${this.puntuacion}</b><br>
//    Peso: <b>${this.peso}</b><br>
//    `;
//  }
//}
//
//app = new App("16.000", "5 estrellas", "900mb");
//
//app.instalar();
//app.abrir();
//app.cerrar();
//app.desinstalar();
//
//document.write(app.appInfo());
