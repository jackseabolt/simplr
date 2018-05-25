import React from 'react'; 
import Dropdown from 'react-dropdown'; 
import 'react-dropdown/style.css'
import './FormDropdown.css'; 

const FormDropdown = props => {
    return (
        <section className={props.error ? "error" : ""}>
            <label htmlFor="type">Type of Business</label> 
            <Dropdown 
                className={props.error ? "dropdown error-dropdown" : "dropdown"} 
                options={["Accounting Firm", "Law Office", "Marketing Agency", "Other"]} 
                onChange={e => props.onChange({ type: e.value })} 
                value={props.type}
                placeholder="Select your Business" id="type"
            />
            <p className="error-message">Please select a valid business type</p>
        </section>
    )
}

export default FormDropdown; 