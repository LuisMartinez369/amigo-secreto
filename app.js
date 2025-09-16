// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los amigos
let amigos = [];

// Función para añadir un amigo
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor escribe un nombre válido");
    return;
  }

  // Evitar duplicados
  if (amigos.includes(nombre)) {
    alert("Ese nombre ya fue agregado");
    input.value = "";
    return;
  }

  amigos.push(nombre);
  mostrarLista();

  // Limpiar input
  input.value = "";
  input.focus();
}

// Función para mostrar la lista en pantalla
function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = amigo;

    // Botón para eliminar un nombre si el usuario se equivoca
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "❌";
    btnEliminar.classList.add("delete-btn");
    btnEliminar.onclick = () => eliminarAmigo(index);

    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
  amigos.splice(index, 1);
  mostrarLista();
}

// Función para sortear un amigo secreto

function mostrarAlerta(mensaje) {
  document.getElementById("alertMessage").textContent = mensaje;
  document.getElementById("customAlert").style.display = "flex";
}

function cerrarAlerta() {
  document.getElementById("customAlert").style.display = "none";
}

function sortearAmigo() {
  if (amigos.length === 0) {
    mostrarAlerta("No hay amigos en la lista para sortear");
    return;
  }

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAleatorio];

  const li = document.createElement("li");
  li.textContent = `🎉 El amigo secreto es: ${amigoSecreto} 🎉`;
  resultado.appendChild(li);
}
