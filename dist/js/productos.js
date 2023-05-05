const productos = [
    { nombre: 'beholder 2', categoria: 'terror', imagen: 'assets/img/Beholder2.webp ' },
    { nombre: 'the war in mine', categoria: 'suspenso', imagen: 'assets/img/portada-the-war.jpg' },
    { nombre: 'The executioner', categoria: 'accion', imagen: 'assets/img/portada-executioner.jpeg' },
    { nombre: 'daylight', categoria: 'terror', imagen: 'assets/img/portada-daylight.jpg'},
    { nombre: 'Survival Horror', categoria: 'suspenso', imagen: 'assets/img/portada-survival-horror.webp'},
    { nombre: 'Village:Resident Evil', category: 'suspenso', imagen: 'assets/img/portada-village.webp'},
    { nombre: 'Alan Woke', categoria: 'accion', imagen: 'assets/img/portada-alan.jpg'},
    { nombre: 'daylight', categoria: 'terror', imagen: 'assets/img/portada-daylight.jpg'}
]

function mostrarProductos(categoria = '') {
    const catalogo = document.getElementById('catalogo');
    catalogo.innerHTML = '';
  
    productos
      .filter(producto => categoria === '' || producto.categoria === categoria)
      .forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <h2>${producto.nombre}</h2>
        `;
        catalogo.appendChild(div);
      });
  }
  
  mostrarProductos();
  
  const botonesFiltro = document.querySelectorAll('.btn-filtro');
  botonesFiltro.forEach(boton => {
    boton.addEventListener('click', () => {
      const categoria = boton.getAttribute('data-categoria');
      botonesFiltro.forEach(boton => boton.classList.remove('active'));
      boton.classList.add('active');
      mostrarProductos(categoria);
    });
  });
  // Inicializar el catálogo y los botones de filtro al cargar la página
document.addEventListener('DOMContentLoaded', inicializarCatalogo);