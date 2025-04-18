import { EChartsOption } from "echarts";

import { PieChartProps } from "./index.types";

const usePieChart = (props: PieChartProps) => {
  const { data, height = '500px', title, width = '100%' } = props;
  const option: EChartsOption = {
    title: {
      text: title,
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      bottom: 'bottom',
      left: 'center'
    },
    series: [
      {
        type: 'pie',
        radius: '50%',
        data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  return {
    option,
    height,
    title,
    width
  }
}
export default usePieChart