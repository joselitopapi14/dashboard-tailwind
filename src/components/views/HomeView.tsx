import { ChartAreaInteractive } from "../ui/chart-double";
import { FieldDemo } from "../ui/FieldDemo";
import { ProductsTableWrapper } from "@/components/ui/ProductsTableWrapper";

export default function HomeView() {
  return (
    <div className="pb-6 pl-6 overflow-y-auto h-full">
      <div className="max-w-3xl"></div>
      <div>
        <h2 className="text-2xl font-bold mb-6">Inicio</h2>
        <ChartAreaInteractive />
      </div>
    </div>
  );
}
