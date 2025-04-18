import Charts from '@/components/ui-group/echarts';

import useLineChart from './index.hooks';
import { LineChartProps } from './index.types';

const LineChart = (props: LineChartProps) => {
  const { option, height } = useLineChart(props);
  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      <Charts option={option} style={{ height }} />
    </div>
  );
};

export default LineChart;
