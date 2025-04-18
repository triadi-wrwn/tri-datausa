import Charts from '@/components/ui-group/echarts';

import usePieChart from './index.hooks';
import { PieChartProps } from './index.types';

const PieChart = (props: PieChartProps) => {
  const { option, height } = usePieChart(props);
  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      <Charts option={option} style={{ height }} />
    </div>
  );
};
export default PieChart;
