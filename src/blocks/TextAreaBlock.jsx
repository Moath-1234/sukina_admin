import React from "react";
import { CInputGroup, CTextarea } from "@coreui/react";
import { Label } from "../reusable/Label";
import { ErrorMessage } from "../reusable/ErrorMessage";

export const TextAreaBlock = ({
    name,
    value,
    errorMessage,
    onFieldChange,
    type = "text",
    label = name,
    placeholder = label,
    maxLength = 100,
    isRequired = false,
    icon = null,
}) => (
    <div className="text-input-block">
        <Label label={label} isRequired={isRequired} />

        <CInputGroup>
            <CTextarea
                name={name}
                value={value}
                placeholder={placeholder}
                type={type}
                onChange={({ target: { value } }) => onFieldChange(name, value)}
                className={errorMessage ? "border-danger" : ""}
            />

            {icon && <CInputGroup.Prepend>{icon}</CInputGroup.Prepend>}
        </CInputGroup>

        {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
);
