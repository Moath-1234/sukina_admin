import React from "react";
import { CInputFile, CLabel } from "@coreui/react";

export const UploadFileBlock = ({ name, onFileFieldChange, label = name, accept = "image/*", multiple = false }) => {
    return (
        <div className="upload-file-input">
            <div className="field">
                <CInputFile custom id={name} name={name} data-name={`${name}Data`} accept={accept} onChange={onFileFieldChange} multiple={multiple} />

                <CLabel htmlFor={name} variant="custom-file">
                    {label}
                </CLabel>
            </div>
        </div>
    );
};
