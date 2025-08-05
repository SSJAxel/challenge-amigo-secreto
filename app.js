// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (nombre) {
        amigos.push(nombre);
        mostrarAmigos();
        input.value = '';
        input.focus();
    }
}

// Mostrar la lista de amigos en la interfaz
function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo, idx) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    if (amigos.length === 0) {
        resultado.innerHTML = '<li>Agrega al menos un nombre para sortear.</li>';
        return;
    }
    const indice = Math.floor(Math.random() * amigos.length);
    const elegido = amigos[indice];
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${elegido}</strong></li>`;
}
