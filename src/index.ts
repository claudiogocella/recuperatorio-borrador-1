let cantidad: number = Number(
  prompt("Ingrese cantidad de productos que desea llevar")
);

let nombreProductos: string[] = new Array(cantidad);
let precioProducto: number[] = new Array(cantidad);
let cantProducto: number[] = new Array(cantidad);
let total: number = 0;

function cargarProductos(productos: string[], precio: number[], cant: number) {
  let msj: string = "";
  let i: number = 0;
  let unit: number = 0;
  let unidades: number = 0;

  for (i = 0; i < cant; i++) {
    productos[i] = prompt("Ingrese nombre de producto");
    precio[i] = Number(prompt("Ingrese valor del producto"));
    unidades = Number(prompt("Ingrese unidades del producto"));
    cantProducto[i] = unidades;
    unit += unidades;
    total += precio[i] * unidades;
  }

  msj = "Detalle de la compra: ";
  msj += " Usted compro " + unit + " productos...   ";
  for (i = 0; i < cant; i++) {
    msj +=
      ". Precio de " +
      cantProducto[i] +
      " " +
      productos[i] +
      " es $ " +
      precio[i] * cantProducto[i];
  }
  msj += ". El total de su compra es de $ " + total;
  console.log(msj);
}

cargarProductos(nombreProductos, precioProducto, cantidad);

if (total < 1000) {
  console.log("Su compra es de $" + total + ", no participa del sorteo");
} else if (total >= 1000 && total < 2000) {
  console.log(
    "Su compra es de $" + total + " y participa por le sorteo de un Tv LED"
  );
} else if (total >= 2000 && total < 3000) {
  console.log(
    "Su compra es de $" + total + " y participa por le sorteo de una moto 0Km"
  );
} else
  console.log(
    "Su compra es de $" + total + " y participa por le sorteo de un Auto 0 Km"
  );