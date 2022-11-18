import React from "react";

const FormTextArea = ({ label, children, onChange, ...otherProps }) =>{
    return (
        <>
            {label && (
                <label htmlFor= {label} className="form-label"> {label} </label>
            )}
            <textarea id={label} onChange = { onChange } { ...otherProps } className="form-text">{children && (children)}</textarea>
        </>
    )
}

export default FormTextArea