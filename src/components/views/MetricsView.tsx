import { ChartAreaInteractive } from '@/components/ui/chart-double';

export default function MetricsView() {
  return (
    <div className="pb-6 pl-6 overflow-y-auto h-full">
      <div className="max-w-3xl"></div>
      <div>
        <h2 className="text-2xl font-bold mb-6">Métricas</h2>
        <ChartAreaInteractive />
      </div>
    </div>
  );
}
