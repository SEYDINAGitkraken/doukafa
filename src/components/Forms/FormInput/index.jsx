import React from "react";

const FormInput = ({ onChange, label, children, ...otherProps })=>{
    return (
        <>
            {label && (
                <label htmlFor= {label} className="form-label"> {label} </label>
            )}
            
            <div className="form-group">
                {children && (children) }
                <input type="text" className="form-input" id={label} onChange = { onChange } { ...otherProps } />
            </div>
        </>
    );
}

export default FormInput;