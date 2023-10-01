// Constantes
// const formulario = document.getElementsById("formulario");
const mostrarPedidoBtn = document.getElementById("mostrarPedido");
const resultado = document.getElementById("resultado");
const procederConPagoBtn = document.getElementById("procederConPago");
const agregarBurgerBtn = document.getElementById("agregarBurger");
const listaPedidosUl = document.getElementById("listaPedidosUl");

// eventListeners
mostrarPedidoBtn.addEventListener("click", () => {
  const hamburguesa = document.querySelector("input[name=hamburguesa]:checked").value;
  const papas = document.querySelector("input[name=papas]:checked").value;
  const bebida = document.querySelector("input[name=bebida]:checked").value;
  const postre = document.querySelector("select[name=postre]").value;

  const extras = document.querySelectorAll("input[type=checkbox]");
  const extrasSeleccionados = [];
  extras.forEach((extra) => { //esta función toma los checkboxes que está "checkeados" y los almacena en el array de extrasSeleccionados.
  if (extra.checked) {
    extrasSeleccionados.push( " "+extra.value );
  }
});

  const textoExtra = document.querySelector("textarea[name=textoExtra]").value;

  resultado.innerText = `Tu hamburguesa: ${hamburguesa}.
  Tus papas: ${papas}.
  Tu bebida: ${bebida}.
  Tu postre: ${postre}.
  Tus extras: ${extrasSeleccionados}.
  Tus notas: ${textoExtra}.
  `;
});


agregarBurgerBtn.addEventListener("click", () => {
  let nuevaBurger = document.createElement("li");
  nuevaBurger.textContent = resultado.innerText;
  document.getElementById("listaPedidosUl").appendChild(nuevaBurger);
})

procederConPagoBtn.addEventListener("click", () => {
  window.open("pagoMock.html"); //esto abre una nueva página al dar click al botón indicado
})
