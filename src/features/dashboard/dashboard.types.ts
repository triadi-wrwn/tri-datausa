import { Annotations, BaseResponseApi } from "@/lib/types/response.type";

import { LineDataType } from "./components/linechart/index.types";
import { PieDataType } from "./components/piechart/index.types";

export type NationPopulationApi = {
  'ID Nation': string;
  Nation: string;
  'ID Year': number;
  Year: string;
  Population: number;
  'Slug Nation': string;
};

export type NationPopulation = {
  idNation: string;
  idYear: number;
  nation: string;
  year: string;
  population: number;
  slugNation: string;
};

export type NationPopulationResponseApi = BaseResponseApi<NationPopulationApi>;
export type NationPopulationResponse = {
  pieData: PieDataType[];
  lineData: LineDataType;
  annotations: Annotations;
  data: NationPopulation[];
};

export type DashboardQueryParams = {
  drilldowns: string;
  measures: string;
  year: string;
  startYear?: string;
  endYear?: string;
};

export type YearFilter = {
  start: string;
  end: string;
};