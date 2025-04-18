import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import { API_ENDPOINT } from '@/lib/constants/api-urls';
import useMultiGetData from '@/lib/hooks/use-get-parallel-data';

import chartDataNormzalizer from './dashboard.normalizers';
import {
  DashboardQueryParams,
  NationPopulationResponse,
  NationPopulationResponseApi,
  YearFilter,
} from './dashboard.types';

const useDashboard = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const { DATA } = API_ENDPOINT;
  const defaultParam = {
    drilldowns: 'Nation',
    measures: 'Population',
    year: '',
  };

  const [params] = useState<DashboardQueryParams>(defaultParam);
  const [years, setYears] = useState<string[]>([]);

  const { data, isLoading } = useMultiGetData<
    NationPopulationResponse,
    NationPopulationResponseApi
  >(['dashboard'], years, DATA, {
    params,
    incrementalParamKey: 'year',
    normalizer: chartDataNormzalizer,
  });

  const updateQueryParams = (params: Record<string, string>) => {
    const searchParams = new URLSearchParams(params).toString();
    void navigate(`${location.pathname}?${searchParams}`, { replace: true });
  };

  const applyFilter = (payload: YearFilter) => {
    const newParams = {
      ...params,
      startYear: payload.start,
      endYear: payload.end,
    };
    updateQueryParams(newParams);
  };

  useEffect(() => {
    const initialSearch = Object.fromEntries(
      searchParams.entries(),
    ) as DashboardQueryParams;
    const { startYear, endYear } = initialSearch;
    const arrYears = Array.from(
      { length: Number(endYear) - Number(startYear) + 1 },
      (_, i) => String(Number(startYear) + i),
    );
    setYears(arrYears);
    if (!initialSearch.measures) {
      updateQueryParams(defaultParam);
    }
  }, [searchParams]);

  const pieData = useMemo(
    () =>
      data
        .map((el, index) => {
          if (!el?.pieData.length) {
            return { name: years[index], value: 0 };
          }
          return el?.pieData || [];
        })
        .flat(),
    [data],
  );

  const lineData = useMemo(
    () =>
      data
        .map((el, index) => {
          if (!el?.lineData.length) {
            return [[years[index], 0]];
          }
          return el?.lineData || [];
        })
        .flat(),
    [data],
  );

  const title = useMemo(() => data[0]?.annotations?.sourceName, [data]);
  const subtitle = useMemo(
    () => data[0]?.annotations?.sourceDescription,
    [data],
  );

  return {
    title,
    subtitle,
    isLoading,
    pieData,
    lineData,
    params,
    applyFilter,
  };
};

export default useDashboard;
