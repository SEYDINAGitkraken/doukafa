import React from "react";

const FormCheckbox = ({label, onChange, ...otherProps}) =>{

    return (
        <label htmlFor={label} className="label-checkbox">{label && (label)}
            <input type="checkbox" name="" id={label} className="input-checkbox" onChange = { onChange } { ...otherProps } />
            <span className="checkmark"></span>
        </label>
    )
}

export default FormCheckbox;