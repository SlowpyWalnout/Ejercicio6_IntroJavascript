let vendedores = [];

// Asegúrate de que esta definición esté antes de la función agregarVendedor
let precioProductos = {
    "Aqua": 200,
    "Emoción": 180,
    "Alegría": 160,
    "Frescura": 150
};

function agregarVendedor() {
    let nombre = document.getElementById("nombre").value;
    let ventas = {
        "Aqua": Number(document.getElementById("aqua").value),
        "Emoción": Number(document.getElementById("emocion").value),
        "Alegría": Number(document.getElementById("alegria").value),
        "Frescura": Number(document.getElementById("frescura").value)
    };

    let totalVentas = 0;
    for (let producto in ventas) {
        let cantidad = ventas[producto];
        if (!isNaN(cantidad)) { // Comprueba que la cantidad no sea NaN
            totalVentas += cantidad * precioProductos[producto];
        }
    }

    vendedores.push({ nombre, totalVentas });
    console.log(vendedores);

    // Limpiar formulario
    document.querySelector('form').reset();
}

function mejorVendedor() {
    let mejorVendedor = vendedores.reduce((mejor, vendedor) => {
        return vendedor.totalVentas > mejor.totalVentas ? vendedor : mejor;
    }, { totalVentas: 0 });

    console.log(mejorVendedor);
}