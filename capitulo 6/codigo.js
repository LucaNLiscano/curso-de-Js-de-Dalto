const contenedor=document.querySelector(".flex-container");
document.querySelector(".send-button").value ="COMPRAR";
let contador=0;
function crearLlave(nombre,modelo,precio){
    contador ++;
    Img="<img src='llave.png'></img>";
    nombre=`<h2>${nombre}</h2>`,
    modelo=`<h3 id='${modelo}'>${modelo}</h3>`,
    precio=`<p>Precio: <b>$${precio}</b></p>`;

    return[Img,nombre,modelo,precio];
}

const changeHidden = (number) =>{
    document.querySelector(".key-data").value = number;
}

let documentFragment=document.createDocumentFragment();

for(let i =0;i<=20;i++) {
    let mrandom=Math.round(Math.random()*10000);
    let prandom=Math.round(Math.random()*10+30);
    let llave=crearLlave(`llave ${i}`,`modelo ${mrandom}`,prandom);  
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{changeHidden(mrandom)});
    div.tabIndex = i;
    div.classList.add(`item-${i}`,`flex-item`);
    div.innerHTML =llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);