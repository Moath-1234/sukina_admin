import React from 'react';
import { CButton, CSpinner } from '@coreui/react';

export const SubmitBtn = ({ classAttr = 'mb-5 mt-3', onSubmit, textContent, isLoading = false, disabled = false }) => (
    <div className={ classAttr }>
        <CButton type="submit" size="md" className="btn btn--submit" disabled={ disabled } onClick={ onSubmit }>{ isLoading && <CSpinner variant="grow" size="sm" className="mr-1" /> } { textContent }</CButton>
    </div>
);
