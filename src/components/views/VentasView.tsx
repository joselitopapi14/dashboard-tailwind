"use client"
import { VentasTableWrapper } from "../ui/VentasTableWrapper";

export default function VentasView() {
  return (
    <div className="pb-6 w-full">
      <h2 className="text-2xl font-bold mb-6">Ventas / Inventario</h2>
      <VentasTableWrapper />
    </div>
  );
}
