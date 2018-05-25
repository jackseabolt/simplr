import React from 'react'; 
import './FormCheckbox.css'; 

const FormCheckbox = props => {
    return (
        <section role="region" className={props.error ? "error" : ""}>
            <h4>{props.title}</h4>
            <label className="container">I have read and do accept <a href={props.link}>{props.topic}</a>
                <input type="checkbox" onChange={event => props.onChange(event)}/>
                <span className="checkmark"></span>
            </label>
            <p className="error-message">{props.error}</p>
        </section>
    )
}

export default FormCheckbox; 