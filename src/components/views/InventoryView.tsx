"use client"
import { FieldDemo } from "../ui/FieldDemo";
import { ProductsTableWrapper } from "../ui/ProductsTableWrapper";
import { VentasTableWrapper } from "../ui/VentasTableWrapper";

export default function VentasView() {
  return (
    <div className="pb-6 pl-6 overflow-y-auto h-full w-full">
          <h2 className="text-2xl font-bold mb-6">Inventario</h2>
          <div className="gap-6 flex w-full">
            <FieldDemo />
            <div className="flex-1">
              <ProductsTableWrapper />
            </div>
          </div>
        </div>
  );
}
