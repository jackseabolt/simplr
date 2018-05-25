import React from 'react';
import Dropdown from 'react-dropdown'
import FormInput from '../FormInput/FormInput'; 
import FormCheckbox from '../FormCheckbox/FormCheckbox'; 
import './RegistrationForm.css'
import 'react-dropdown/style.css'

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
            policy: false
        }
    }
    
    handleSubmit(e) {
        e.preventDefault(); 
        // validation - promise needed to ensure errors are set before they are checked
        const validate = new Promise((resolve, reject) => {
            this.state.email ? this.setState({ error_business_email: null }) : this.setState({ error_business_email: "Please enter a valid business email" }); 
            this.state.business_name ? this.setState({ error_business_name: null }) : this.setState({ error_business_name: "Please enter a valid business address" });
            this.state.username ? this.setState({ error_username: null }) : this.setState({ error_username: "Please enter a valid username" });
            this.state.type ? this.setState({ error_type: null }) : this.setState({ error_type: true });
            this.state.terms ? this.setState({ error_terms: null }) : this.setState({ error_terms: "Please agree to the terms of service" });
            this.state.policy ? this.setState({ error_policy: null }) : this.setState({ error_policy: "Please agree to our privacy policy" });
            if(this.state.password) {
                // checking password length
                if(this.state.password.length >= 6) {
                    // checking password for numbers
                    if(/\d/.test(this.state.password)) {
                        // checking password for uppercase letter 
                        if(/[A-Z]/.test(this.state.password)) {
                            // checking password for lowercase letter
                            if(/[a-z]/.test(this.state.password)) {
                                this.setState({ error_password: false }) 
                            }
                            else {
                                this.setState({ error_password: "Password should contain a lowercase letter" });  
                            }
                        }
                        else {
                            this.setState({ error_password: "Password should contain an uppercase letter" });  
                        }
                    }
                    else {
                        this.setState({ error_password: "Password should contain a number" });
                    }
                } 
                else {
                    this.setState({ error_password: "Password should have six characters" });
                } 
            } 
            else {
                this.setState({ error_password: "Please enter a valid password" });
            }
            resolve(); 
        }); 
        validate
            .then(() => {
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
            <main role="main" className="RegistrationForm">
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
                    <section className={this.state.error_type ? "error" : ""}>
                        <label htmlFor="type">Type of Business</label> 
                        <Dropdown 
                            className={this.state.error_type ? "dropdown error-dropdown" : "dropdown"} 
                            options={["Accounting Firm", "Law Office", "Marketing Agency", "Other"]} 
                            onChange={e => this.setState({ type: e.value })} 
                            value={this.state.type}
                            placeholder="Select your Business" id="type"
                        />
                        <p className="error-message">Please select a valid business type</p>
                    </section>
                    <FormCheckbox 
                        title="Terms of Service" 
                        topic="terms of service"
                        onChange={event => this.setState({ terms: event.target.checked })}
                        error={this.state.error_terms}
                    />
                    <FormCheckbox 
                        title="Privacy Policy" 
                        topic="privacy policy"
                        onChange={event => this.setState({ policy: event.target.checked })}
                        error={this.state.error_policy}
                    />
                    <button>REGISTER</button>
                </form>
            </main>
        );
    }
}