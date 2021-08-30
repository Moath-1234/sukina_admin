import React from 'react';
import Select from 'react-select';
import { ErrorMessage } from '../reusable/ErrorMessage';
import { Label } from '../reusable/Label';

export const SelectBlock = ({ name, value, errorMessage, onFieldChange, options = [], label = name, maxLength = 100, isRequired = false, isMulti = false, isDisabled = false }) => {
    const onChange = (selectedOption) => onFieldChange(name, selectedOption);

    return (
        <div className="select-block">
            <Label label={ label } isRequired={ isRequired } />

            <Select className={ `basic-single mainSelect ${ errorMessage ? 'border-danger' : '' }` } classNamePrefix="select" name={ name } value={ value } options={ options } isMulti={ isMulti } onChange={ onChange } isDisabled={ isDisabled } />

            { errorMessage && <ErrorMessage message={ errorMessage } /> }
        </div>
    );
};
