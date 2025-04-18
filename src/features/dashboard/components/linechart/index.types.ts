export type LineChartProps = {
  data: LineDataType;
  width?: number;
  height?: number;
  title?: string;
}

export type LineDataType = Array<Array<string | number>>;