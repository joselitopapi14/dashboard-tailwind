type Venta = {
  id: string
  producto: string
  categoria: string
  cantidad: number
  precioUnitario: number
  total: number
  fecha: string
  cliente: string
}

export const ventas: Venta[] = [
  { id: "v001", producto: "Leche Entera", categoria: "Lacteos", cantidad: 5, precioUnitario: 3500, total: 17500, fecha: "2025-10-01", cliente: "María González" },
  { id: "v002", producto: "Queso Mozarella", categoria: "Lacteos", cantidad: 2, precioUnitario: 12000, total: 24000, fecha: "2025-10-01", cliente: "Juan Pérez" },
  { id: "v003", producto: "Carne de Res", categoria: "Carnes", cantidad: 3, precioUnitario: 18000, total: 54000, fecha: "2025-10-02", cliente: "Ana Martínez" },
  { id: "v004", producto: "Pollo", categoria: "Carnes", cantidad: 4, precioUnitario: 12000, total: 48000, fecha: "2025-10-02", cliente: "Carlos Rodríguez" },
  { id: "v005", producto: "Tomate", categoria: "Verduras", cantidad: 10, precioUnitario: 2500, total: 25000, fecha: "2025-10-03", cliente: "Laura Sánchez" },
  { id: "v006", producto: "Manzana", categoria: "Frutas", cantidad: 8, precioUnitario: 3000, total: 24000, fecha: "2025-10-03", cliente: "Pedro López" },
  { id: "v007", producto: "Arroz", categoria: "Granos", cantidad: 6, precioUnitario: 4500, total: 27000, fecha: "2025-10-04", cliente: "Sofía Ramírez" },
  { id: "v008", producto: "Laptop HP", categoria: "Tecnologia", cantidad: 1, precioUnitario: 2500000, total: 2500000, fecha: "2025-10-04", cliente: "Roberto Castro" },
  { id: "v009", producto: "Mouse Inalámbrico", categoria: "Tecnologia", cantidad: 3, precioUnitario: 45000, total: 135000, fecha: "2025-10-05", cliente: "Diana Herrera" },
  { id: "v010", producto: "Sofá 3 Puestos", categoria: "Muebles", cantidad: 1, precioUnitario: 1200000, total: 1200000, fecha: "2025-10-05", cliente: "Miguel Ángel Torres" },
  { id: "v011", producto: "Camiseta Algodón", categoria: "Ropa", cantidad: 5, precioUnitario: 35000, total: 175000, fecha: "2025-10-06", cliente: "Valentina Cruz" },
  { id: "v012", producto: "Pantalón Jean", categoria: "Ropa", cantidad: 2, precioUnitario: 75000, total: 150000, fecha: "2025-10-06", cliente: "Andrés Morales" },
  { id: "v013", producto: "Muñeca Barbie", categoria: "Juguetes", cantidad: 3, precioUnitario: 65000, total: 195000, fecha: "2025-10-07", cliente: "Carolina Díaz" },
  { id: "v014", producto: "El Principito", categoria: "Libros", cantidad: 4, precioUnitario: 28000, total: 112000, fecha: "2025-10-07", cliente: "Fernando Vargas" },
  { id: "v015", producto: "Raqueta de Tenis", categoria: "Deportes", cantidad: 1, precioUnitario: 180000, total: 180000, fecha: "2025-10-08", cliente: "Gabriela Ruiz" },
  { id: "v016", producto: "Vajilla 24 Piezas", categoria: "Hogar", cantidad: 2, precioUnitario: 120000, total: 240000, fecha: "2025-10-08", cliente: "Javier Méndez" },
  { id: "v017", producto: "Yogurt Natural", categoria: "Lacteos", cantidad: 6, precioUnitario: 4200, total: 25200, fecha: "2025-10-09", cliente: "Patricia Núñez" },
  { id: "v018", producto: "Cerdo", categoria: "Carnes", cantidad: 2, precioUnitario: 15000, total: 30000, fecha: "2025-10-09", cliente: "Ricardo Flores" },
  { id: "v019", producto: "Lechuga", categoria: "Verduras", cantidad: 7, precioUnitario: 1800, total: 12600, fecha: "2025-10-10", cliente: "Natalia Ortiz" },
  { id: "v020", producto: "Banana", categoria: "Frutas", cantidad: 12, precioUnitario: 2200, total: 26400, fecha: "2025-10-10", cliente: "Sebastián Reyes" },
  { id: "v021", producto: "Frijoles", categoria: "Granos", cantidad: 5, precioUnitario: 5000, total: 25000, fecha: "2025-10-11", cliente: "Isabella Jiménez" },
  { id: "v022", producto: "Teclado Mecánico", categoria: "Tecnologia", cantidad: 2, precioUnitario: 180000, total: 360000, fecha: "2025-10-11", cliente: "Camilo Gutiérrez" },
  { id: "v023", producto: "Mesa de Comedor", categoria: "Muebles", cantidad: 1, precioUnitario: 850000, total: 850000, fecha: "2025-10-12", cliente: "Daniela Parra" },
  { id: "v024", producto: "Zapatos Deportivos", categoria: "Ropa", cantidad: 2, precioUnitario: 120000, total: 240000, fecha: "2025-10-12", cliente: "Alejandro Silva" },
  { id: "v025", producto: "Lego Classic", categoria: "Juguetes", cantidad: 2, precioUnitario: 95000, total: 190000, fecha: "2025-10-13", cliente: "Lucía Rojas" },
  { id: "v026", producto: "Cien Años de Soledad", categoria: "Libros", cantidad: 3, precioUnitario: 42000, total: 126000, fecha: "2025-10-13", cliente: "Mateo Vega" },
  { id: "v027", producto: "Balón de Básquet", categoria: "Deportes", cantidad: 2, precioUnitario: 85000, total: 170000, fecha: "2025-10-14", cliente: "Mariana Castillo" },
  { id: "v028", producto: "Juego de Sábanas", categoria: "Hogar", cantidad: 3, precioUnitario: 95000, total: 285000, fecha: "2025-10-14", cliente: "Santiago Romero" },
  { id: "v029", producto: "Mantequilla", categoria: "Lacteos", cantidad: 4, precioUnitario: 6500, total: 26000, fecha: "2025-10-15", cliente: "Valeria Acosta" },
  { id: "v030", producto: "Pescado", categoria: "Carnes", cantidad: 2, precioUnitario: 22000, total: 44000, fecha: "2025-10-15", cliente: "Felipe Medina" },
  { id: "v031", producto: "Zanahoria", categoria: "Verduras", cantidad: 9, precioUnitario: 2000, total: 18000, fecha: "2025-10-15", cliente: "Emma Suárez" },
  { id: "v032", producto: "Naranja", categoria: "Frutas", cantidad: 10, precioUnitario: 2800, total: 28000, fecha: "2025-10-15", cliente: "Daniel Cárdenas" },
  { id: "v033", producto: "Lentejas", categoria: "Granos", cantidad: 4, precioUnitario: 4800, total: 19200, fecha: "2025-10-15", cliente: "Catalina Ríos" },
  { id: "v034", producto: "Silla Ergonómica", categoria: "Muebles", cantidad: 2, precioUnitario: 320000, total: 640000, fecha: "2025-10-15", cliente: "Nicolás Peña" },
  { id: "v035", producto: "Harry Potter", categoria: "Libros", cantidad: 2, precioUnitario: 55000, total: 110000, fecha: "2025-10-15", cliente: "Juliana Ospina" },
]
