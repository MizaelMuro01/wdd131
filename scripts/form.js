// Array de productos
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Función para llenar el select con los productos
function populateProductSelect() {
  const productSelect = document.getElementById('productName');
  
  // Limpiar opciones existentes (excepto la primera)
  while (productSelect.children.length > 1) {
    productSelect.removeChild(productSelect.lastChild);
  }
  
  // Agregar productos al select
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

// Ejecutar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
  populateProductSelect();
});