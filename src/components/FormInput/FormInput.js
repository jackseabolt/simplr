import React from 'react';
import './FormInput.css';  

export default class FormInput extends React.Component {
    render() {
        return (
            <section role="region" className={this.props.error ? "error" : ""}>
                <label htmlFor={this.props.value}>{this.props.label}<span className="sub-label">{this.props.subLabel}</span></label> 
                <input 
                    className="text-input" 
                    id={this.props.value} 
                    onChange={event => this.props.onChange(event)} 
                    type={this.props.type}   
                />
                   <p className="error-message">{this.props.errorMessage}</p>
            </section>
        )
    }
}