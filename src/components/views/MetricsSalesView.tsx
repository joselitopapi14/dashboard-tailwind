import { ChartAreaInteractive } from '@/components/ui/chart-double';
import { VentasTableWrapper } from '../ui/VentasTableWrapper';

export default function MetricsView() {
  return (
    <div className="pb-6 h-[600px] w-full">
      <h2 className="text-2xl font-bold mb-6">Ventas</h2>
      <VentasTableWrapper />
    </div>
  );
}
