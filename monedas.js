// -------------------------JUGAR CON MONEDAS-------------------------------
let contenedor = document.getElementById("container");
let monedas = document.createElement("div");
monedas.classList = "monedas";

let imgFichas = document.createElement("div");
imgFichas.classList = "imgfichas";

let input = document.createElement("input");
input.placeholder = "Escribe un número (3-9)";

let boton = document.createElement("button");
boton.innerHTML = "EMPEZAR";

let numeroAzar = document.createElement("div");
numeroAzar.classList = "numramdom";

let contenedorBolas = document.createElement("div");
contenedorBolas.classList = "contenedorbolas";

let mensaje = document.createElement("div");
mensaje.classList = "mensaje";

let numMonedas = parseInt(10);

contenedor.appendChild(monedas);
contenedor.appendChild(imgFichas);
contenedor.appendChild(input);
contenedor.appendChild(boton);
contenedor.appendChild(contenedorBolas);
contenedor.appendChild(mensaje);

actualizarMonedas(numMonedas);

function actualizarMonedas(numMonedas) {
  let imagenes = document.querySelectorAll("img");
  imagenes.forEach(imagen => {
    if (imagen.src.includes("ficha.jpeg")) {
      imagen.remove();
    }
  });
  if (numMonedas > 0) {
    monedas.textContent = `Monedas: ${numMonedas}`;
    console.log(`hay ${numMonedas} monedas`);
  } else {
    mensaje.textContent = `No te quedan monedas para jugar, en breve comenzará de nuevo`;
    monedas.textContent = `Monedas: 0`;

    setTimeout(() => location.reload(), 5000);
  }
  for (let i = 0; i < numMonedas; i++) {
    let imgMoneda = document.createElement("img");
    imgMoneda.src = "imgs/ficha.jpeg";
    imgMoneda.style.width = "50px";
    imgFichas.appendChild(imgMoneda);
  }
}

boton.addEventListener("click", () => {
  let valor = parseInt(input.value);

  if (valor >= 3 && valor <= 9) {
    contenedorBolas.innerHTML = "";

    for (let i = 0; i < valor; i++) {
      crearBola(valor);
    }
  } else {
    input.value = "";
    input.focus();
  }
});
function crearBola(num) {
  let bola = document.createElement("div");
  bola.classList = "bola";
  bola.style.width = "50px";
  bola.style.display = "flex";
  bola.style.height = "50px";
  bola.style.color = "white";
  bola.style.borderRadius = "50%";
  bola.style.alignItems = "center";
  bola.style.justifyContent = "center";
  bola.style.textAlign = "center";
  bola.style.margin = "10px";
  contenedorBolas.appendChild(bola);

  let aleatorio = numRandom(num);
  bola.innerHTML = aleatorio;
  if (num == aleatorio) {
    bola.style.backgroundColor = "green";
    numMonedas++;
  } else {
    bola.style.backgroundColor = "red";
    numMonedas--;
  }
  actualizarMonedas(numMonedas);
}

function numRandom(num) {
  return Math.floor(Math.random() * num) + 1;
}
