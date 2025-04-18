import { EChartsOption } from "echarts";

import { LineChartProps } from "./index.types";

const useLineChart = (props: LineChartProps) => {
  const { data, height = '500px', width = '100%', title } = props;

  const yearList = data.map(function (item) {
    return item[0];
  });

  const valueList = data.map(function (item) {
    return item[1];
  });

  const option: EChartsOption = {
    title: [
      {
        left: 'center',
        text: title,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
    xAxis: [
      {
        name: 'Year',
        nameLocation: 'middle',
        nameGap: 30,
        data: yearList,
        show: true,
      },
    ],
    yAxis: [
      {
        nameLocation: 'middle',
        nameGap: 40,
        nameRotate: 90,
        minInterval: 1,
        axisLabel: { showMaxLabel: false }
      },
    ],
    grid: [
      {
        // left: '20%',
        bottom: '60%',
      },
    ],
    series: [
      {
        type: 'line',
        showSymbol: false,
        data: valueList,
        label: {
          show: true,
          formatter: '{c}' // Show value
        }
      },
    ],
  };

  return {
    option,
    height,
    title,
    width,
  };
};
export default useLineChart;
