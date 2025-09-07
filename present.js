// Cargar clientes desde el backend
async function cargarClientes() {
  const res = await fetch('http://localhost:3000/clientes');
  const data = await res.json();

  const lista = document.getElementById("listaClientes");
  lista.innerHTML = "";
  data.forEach(c => {
    const li = document.createElement("li");
    li.textContent = `${c.id} - ${c.nombre} (${c.correo})`;
    lista.appendChild(li);
  });
}

// Cargar productos desde el backend
async function cargarProductos() {
  const res = await fetch('http://localhost:3000/productos');
  const data = await res.json();

  const lista = document.getElementById("listaProductos");
  lista.innerHTML = "";
  data.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.codigo} - ${p.nombre} ($${p.precio}) Stock: ${p.stock}`;
    lista.appendChild(li);
  });
}


window.onload = () => {
  cargarClientes();
  cargarProductos();
};
