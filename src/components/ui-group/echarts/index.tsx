import useCharts from "./index.hooks";
import { ReactEChartsProps } from "./index.types";

const Charts = (props: ReactEChartsProps) => {
  const { style } = props;

  const { chartRef } = useCharts(props);

  return <div ref={chartRef} style={{ width: '100%', height: '200px', ...style }} />;
};

export default Charts;
