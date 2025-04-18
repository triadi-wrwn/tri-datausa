import React, { forwardRef } from 'react';
import type { DatePickerProps } from 'react-datepicker';
import ReactDatePicker from 'react-datepicker';
import { CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utility';

const DatePicker = forwardRef<
  React.ComponentRef<typeof ReactDatePicker>,
  DatePickerProps
>(
  (
    {
      dateFormat = 'dd/MM/yyyy',
      value,
      className,
      isClearable = true,
      todayButton = 'today',
      disabled,
      readOnly,
      ...rest
    },
    ref,
  ) => {
    return (
      <div className="relative w-full">
        <ReactDatePicker
          {...rest}
          className={cn(
            'react-datepicker-single',
            value && 'hasValue',
            className,
          )}
          nextMonthButtonLabel={<ChevronRight />}
          previousMonthButtonLabel={<ChevronLeft />}
          nextYearButtonLabel="Next"
          previousYearButtonLabel="Prev"
          popperClassName="react-datepicker-left"
          popperPlacement="bottom-start"
          closeOnScroll
          portalId="react-datepicker"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          todayButton={todayButton}
          autoComplete="off"
          dateFormat={dateFormat}
          disabled={disabled || readOnly}
          isClearable={disabled || readOnly ? false : isClearable}
          ref={ref}
          showPopperArrow={false}
        />
        <div className="absolute right-4 top-0 bottom-0 flex items-center justify-center">
          <CalendarIcon
            className={cn(
              'w-5 h-5',
              disabled || readOnly
                ? 'text-bboTextDisabled opacity-50'
                : 'text-bboPrimaryMain opacity-100',
            )}
          />
        </div>
      </div>
    );
  },
);
DatePicker.displayName = 'Datepicker';
export default DatePicker;
