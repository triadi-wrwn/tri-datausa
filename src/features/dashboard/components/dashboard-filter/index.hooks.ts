import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { YearFilter } from '../../dashboard.types';

const useDashboardFilter = () => {
  const [searchParams] = useSearchParams();
  const initialStartYear = searchParams.get('startYear') || '';
  const initialEndYear = searchParams.get('endYear') || '';
  const [year, setYear] = useState<YearFilter>({
    start: initialStartYear,
    end: initialEndYear,
  });
  const yearList = Array.from(
    { length: 13 },
    (_, i) => new Date().getFullYear() - i,
  );

  const handleYearChange = (type: 'start' | 'end', value: string) => {
    setYear((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return {
    yearList,
    year,
    handleYearChange
  };
};
export default useDashboardFilter;
