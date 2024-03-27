import jsPDF from 'jspdf'
import 'jspdf-autotable'
import './App.css'

function App() {
  const facturaData = {
    numero: '123456',
    producto: 'Pizza',
    cantidad: 5,
    precio: 20,
    fecha: '2023-09-11',
    cliente: 'Angelo',
    total: 100.0,
  }

  function generarPDF() {
    const doc = new jsPDF()

    // Encabezado de la factura
    doc.text('Factura', 95, 20)
    // doc.text(`Número de factura: ${facturaData.numero}`, 10, 20)
    // doc.text(`Fecha: ${facturaData.fecha}`, 10, 30)
    // doc.text(`Cliente: ${facturaData.cliente}`, 10, 40)
    // doc.text(`Total: $${facturaData.total}`, 10, 50)

    // crear una tabla para los detalles de la factura
    const columns = [
      'Número',
      'Producto',
      'Cantidad',
      'Precio',
      'Fecha',
      'Total',
    ]

    const data = [
      [
        `${facturaData.numero}`,
        `${facturaData.producto}`,
        `${facturaData.cantidad}`,
        `${facturaData.precio}`,
        `${facturaData.fecha}`,
        `${facturaData.total}`,
      ],
    ]

    doc.autoTable({
      startY: 30,
      head: [columns],
      body: data,
    })

    // guardar el PDF con un nombre especifico
    doc.save(`factura_${facturaData.numero}.pdf`)
  }

  return (
    <div>
      <h1>FACTURA</h1>
      <h4>Aquí va el logo</h4>
      <p>Número de factura: {facturaData.numero}</p>
      <p>Fecha: {facturaData.fecha}</p>
      <p>Cliente: {facturaData.cliente}</p>
      <p>Total: ${facturaData.total}</p>
      <button onClick={generarPDF}>Generar PDF</button>
    </div>
  )
}

export default App
