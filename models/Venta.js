class Venta {
  constructor(cliente) {
    this.cliente = cliente;
    this.items = [];
    this.total = 0;
    this.qr = null;
  }

  agregarItem(item) {
    this.items.push(item);
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.items.reduce((acc, item) => acc + item.subtotal, 0);
  }

  generarQR() {
    this.qr = `QR-${Date.now()}`;
  }
}

module.exports = Venta;
