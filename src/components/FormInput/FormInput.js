import React from 'react';
import './FormInput.css';  

const FormInput = props => {
    return (
        <section className={props.error ? "error" : ""}>
            <label htmlFor={props.value}>{props.label}<span className="sub-label">{props.subLabel}</span></label> 
            <input 
                className="text-input" 
                id={props.value} 
                onChange={event => props.onChange(event)} 
                type={props.type}   
            />
            <p className="error-message">{props.error}</p>
        </section>
    )
}

export default FormInput; 