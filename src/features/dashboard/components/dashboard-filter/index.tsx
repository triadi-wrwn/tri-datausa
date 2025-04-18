import { Button } from '@/components/ui-base/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui-base/select';

import { YearFilter } from '../../dashboard.types';
import useDashboardFilter from './index.hooks';

const DashboardFilter = ({
  onApply,
}: {
  onApply: (payload: YearFilter) => void;
}) => {
  
  const { yearList, year, handleYearChange } = useDashboardFilter();

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center w-full text-slate-500 mb-12 gap-4">
      <h1 className="text-sm md:text-lg">Show data from</h1>
      <Select
        onValueChange={(val) => handleYearChange('start', val)}
        value={year.start}
      >
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select year" />
        </SelectTrigger>
        <SelectContent>
          {yearList.map((y) => (
            <SelectItem key={y} value={y.toString()} disabled={y > Number(year.end)}>
              {y}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <h1 className="text-sm md:text-lg">To</h1>
      <Select
        onValueChange={(val) => handleYearChange('end', val)}
        value={year.end}
      >
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select year" />
        </SelectTrigger>
        <SelectContent>
          {yearList.map((y) => (
            <SelectItem key={y} value={y.toString()} disabled={y < Number(year.start)}>
              {y}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button onClick={() => onApply(year)}>Show</Button>
    </div>
  );
};
export default DashboardFilter;
