import React from 'react';
import FormInput from '../FormInput'; 
import FormCheckbox from '../FormCheckbox'; 
import FormDropdown from '../FormDropdown/FormDropdown'; 
import validate from '../../helpers/validate'; 
import './RegistrationForm.css'; 

export default class RegistrationForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state={ 
            // stores form errors - null or a string
            error_business_name: null,
            error_business_email: null,
            error_username: null, 
            error_password: null, 
            error_type: null, 
            error_terms: null, 
            error_policy: null,
            // stores form values - null or a string
            email: null,
            business_name: null, 
            username: null, 
            password: null, 
            website: null, 
            terms: false, 
            policy: false, 
            type: null
        }
    }
    
    handleSubmit(e) {
        e.preventDefault(); 
        // validation - module imported from helpers
        validate(this.state.email, this.state.business_name, this.state.username, this.state.type, this.state.terms, this.state.policy, this.state.password, (v) => this.setState(v))
            .then(() => {
                // check if errors exist - block submission if they do
                if(this.state.error_business_email || this.state.error_business_name || this.state.error_username || this.state.error_password || this.state.error_type || this.state.error_terms || this.state.error_policy ) {
                    return; 
                } else {
                    // stand-in for validated submission
                    console.log({ 
                        email: this.state.email, 
                        business_name: this.state.business_name, 
                        username: this.state.username, 
                        password: this.state.password, 
                        type: this.state.type, 
                        website: this.state.website
                     })
                    // stand-in purposes only
                    alert("Your form was submitted");
                }
            });
    }
    
    render() {
        return (
            <section className="RegistrationForm">
                <img alt="Simplr Logo" src={require("../../images/logo.png")} />
                <form onSubmit={e => this.handleSubmit(e)}>
                    <h1>LET'S GET STARTED</h1>
                    <FormInput 
                        value="business_name" 
                        label="Business Name" 
                        onChange={event => this.setState({ business_name: event.target.value })}
                        error={this.state.error_business_name}
                    />
                    <FormInput 
                        value="business_email" 
                        label="Business Email" 
                        onChange={event => this.setState({ email: event.target.value })}
                        error={this.state.error_business_email}
                    />
                    <FormInput 
                        value="username" 
                        label="Create a Username" 
                        onChange={event => this.setState({ username: event.target.value })}
                        error={this.state.error_username}
                    />
                    <FormInput 
                        value="password" 
                        label="Password" 
                        onChange={event => this.setState({ password: event.target.value })}
                        error={this.state.error_password}
                        subLabel="6 characters | 1 uppercase | 1 lowercase | 1 digit"
                        type="password"
                    />
                    <FormInput 
                        value="website" 
                        label="Website" 
                        onChange={event => this.setState({ website: event.target.value })}
                        subLabel="(Optional)"
                    />
                    <FormDropdown 
                        error={this.state.error_type}
                        onChange={value => this.setState({ type: value.type })}
                        type={this.state.type}
                    />
                    <FormCheckbox 
                        title="Terms of Service" 
                        topic="terms of service"
                        link="#"
                        onChange={event => this.setState({ terms: event.target.checked })}
                        error={this.state.error_terms}
                    />
                    <FormCheckbox 
                        title="Privacy Policy" 
                        topic="privacy policy"
                        link="#"
                        onChange={event => this.setState({ policy: event.target.checked })}
                        error={this.state.error_policy}
                    />
                    <button>REGISTER</button>
                </form>
            </section>
        );
    }
}