import React from "react";
import { CInput, CInputGroup } from "@coreui/react";
import { Label } from "../reusable/Label";
import { ErrorMessage } from "../reusable/ErrorMessage";

export const InputBlock = ({
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
    disabled = false,
}) => (
    <div className="text-input-block">
        <Label label={label} isRequired={isRequired} />

        <CInputGroup>
            <CInput
                name={name}
                value={value}
                placeholder={placeholder}
                type={type}
                disabled={disabled}
                onChange={({ target: { value } }) => onFieldChange(name, value)}
                className={errorMessage ? "border-danger" : ""}
                onInput={(e) =>
                    type === "number" && maxLength !== 100 && (e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, maxLength))
                }
            />

            {icon && <CInputGroup.Prepend>{icon}</CInputGroup.Prepend>}
        </CInputGroup>

        {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
);
