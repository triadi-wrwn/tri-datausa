import { EChartsOption } from "echarts";

import Charts from "@/components/ui-group/echarts";

const Dashboard = () => {
  const option: EChartsOption = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
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
  
  
  return (
    <div className="p-6">
      {/* Title and Description */}
      <div className="my-10 text-center">
        <h1 className="text-3xl text-slate-600 font-bold mb-2">Census Bureau</h1>
        <p className="text-gray-600">The American Community Survey (ACS) is conducted by the US Census and sent to a portion of the population every year.</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded shadow">
          <Charts option={option} style={{ height: '352px' }} />
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">Grid Item 2</div>
        <div className="bg-gray-100 p-4 rounded shadow">Grid Item 3</div>
        <div className="bg-gray-100 p-4 rounded shadow">Grid Item 4</div>
      </div>
    </div>
  );
};

export default Dashboard;
