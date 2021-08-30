import React from 'react';
import { Label } from '../reusable/Label';
import { ErrorMessage } from '../reusable/ErrorMessage';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export const DateBlock = ({
                              name,
                              value,
                              errorMessage,
                              onFieldChange,
                              label = name,
                              isRequired = false,
                              format = 'Pp',
                              showTimeSelectOnly = false,
                              showTimeSelect = false,
                              showTimeInput = false,
                              peekNextMonth = false,
                              showMonthDropdown = false,
                              showYearDropdown = false,
                              disabled = false,
                          }) => (
    <div className="date-block">
        <Label label={ label } isRequired={ isRequired } />

        <DatePicker
            popperClassName="date-block__date-picker"
            selected={ value }
            onChange={ (date) => onFieldChange(name, date) }
            showTimeSelect={ showTimeSelect }
            showTimeSelectOnly={ showTimeSelectOnly }
            showTimeInput={ showTimeInput }
            disabled={ disabled }
            dateFormat={ format }
            peekNextMonth={ peekNextMonth }
            showMonthDropdown={ showMonthDropdown }
            showYearDropdown={ showYearDropdown }
            dropdownMode="select"
            closeOnScroll
        />

        { errorMessage && <ErrorMessage message={ errorMessage } /> }
    </div>
);
