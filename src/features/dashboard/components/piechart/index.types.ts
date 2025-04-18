export type PieChartProps = {
  data: PieDataType[];
  width?: number;
  height?: number;
  title?: string;
}

export type PieDataType = {
  name: string;
  value: number;
};