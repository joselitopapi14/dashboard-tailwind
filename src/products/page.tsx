import { columns } from "./columnsProduct"
import type { Product } from "./columnsProduct"
import { DataTable } from "./data-table"

async function getData(): Promise<Product[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      nombre: "Leche Entera",
      categoria: "Lácteos",
      cantidad: 50,
      precio: 3500,
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}