class ItemVenta {
  constructor(producto, cantidad) {
    this.producto = producto;
    this.cantidad = cantidad;
    this.subtotal = producto.precio * cantidad;
  }
}

module.exports = ItemVenta;
