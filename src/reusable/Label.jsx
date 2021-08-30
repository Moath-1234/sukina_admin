import React from 'react';
import { CLabel } from '@coreui/react';

export const Label = ({ label, classAttr = '', isRequired }) => (
    <div className={ `reusable-label ${ classAttr }` }>
        <CLabel>{ label }</CLabel>

        { isRequired && <span className="requiredField">*</span> }
    </div>
);
