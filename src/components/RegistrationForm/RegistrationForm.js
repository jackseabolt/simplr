import React from 'react';
import './RegistrationForm.css'
import Dropdown from 'react-dropdown'
import FormInput from '../FormInput/FormInput'; 
import FormCheckbox from '../FormCheckbox/FormCheckbox'; 
import 'react-dropdown/style.css'

export default class RegistrationForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state={
            error_type: null, 
            error_business_name: false,
            error_business_email: false,
            error_username: false, 
            error_password: false, 
            error_type: false, 
            error_terms: false, 
            error_policy: false, 
            email: null,
            business_name: null, 
            username: null, 
            password: null, 
            website: null, 
            terms: false 
        }
    }
    
    handleSubmit(e) {
        e.preventDefault(); 
        // validation
        this.state.email ? this.setState({ error_business_email: false }) : this.setState({ error_business_email: true }); 
        this.state.business_name ? this.setState({ error_business_name: false }) : this.setState({ error_business_name: true });
        this.state.username ? this.setState({ error_username: false }) : this.setState({ error_username: true });
        this.state.password ? this.setState({ error_password: false }) : this.setState({ error_password: true });
        this.state.type ? this.setState({ error_type: false }) : this.setState({ error_type: true });
        this.state.terms ? this.setState({ error_terms: false }) : this.setState({ error_terms: true });
        this.state.policy ? this.setState({ error_policy: false }) : this.setState({ error_policy: true });
    }

    handleSelectType(value) {
        this.setState({ type: value.value });  
    }

    handleEmail(event) {
        this.setState({ email: event.target.value });
    } 

    handleBusinessName(event) {
        this.setState({ business_name: event.target.value });
    } 

    handleUsername(event) { 
        this.setState({ username: event.target.value }); 
    } 

    handlePassword(event) {
        this.setState({ password: event.target.value }); 
    }

    handleWebsite(event) {
        this.setState({ website: event.target.value }); 
    }

    handleTerms(event) {
        this.setState({ terms: event.target.checked })
    }

    handlePolicy(event) {
        this.setState({ policy: event.target.checked })
    }
    
    render() {

        return (
            <main role="main" className="RegistrationForm">
                <img alt="Simplr Logo" src={require("../../images/logo.png")} />
                <form role="form" onSubmit={e => this.handleSubmit(e)}>
                    <h1>LET'S GET STARTED</h1>
                    <FormInput 
                        value="business_name" 
                        label="Business Name" 
                        onChange={event => this.handleBusinessName(event)}
                        error={this.state.error_business_name}
                        errorMessage="Please enter a valid business address"
                    />
                    <FormInput 
                        value="business_email" 
                        label="Business Email" 
                        onChange={event => this.handleEmail(event)}
                        error={this.state.error_business_email}
                        errorMessage="Please enter a valid business name"
                    />
                    <FormInput 
                        value="username" 
                        label="Create a Username" 
                        onChange={event => this.handleUsername(event)}
                        error={this.state.error_username}
                        errorMessage="Please enter a valid username"
                    />
                    <FormInput 
                        value="password" 
                        label="Password" 
                        onChange={event => this.handlePassword(event)}
                        error={this.state.error_password}
                        errorMessage="Please enter a valid password"
                        subLabel="6 characters | 1 uppercase | 1 lowercase | 1 digit"
                        type="password"
                    />
                     <FormInput 
                        value="website" 
                        label="Website" 
                        onChange={event => this.handleWebsite(event)}
                        subLabel="(Optional)"
                    />
                    <section role="region" className={this.state.error_type ? "error" : ""}>
                        <label htmlFor="type">Type of Business</label> 
                        <Dropdown className={this.state.error_type ? "dropdown error-dropdown" : "dropdown"} options={["Law Office", "Accounting Firm", "Construction"]} onChange={v => this.handleSelectType(v)} 
                            placeholder="Select your Business" id="type"
                        />
                        <p className="error-message">Please select a valid business type</p>
                    </section>
                    <FormCheckbox 
                        title="Terms of Service" 
                        topic="terms of service"
                        onChange={event => this.handleTerms(event)}
                        error={this.state.error_terms}
                        errorMessage="Please agree to the terms of service"
                    />
                    <FormCheckbox 
                        title="Privacy Policy" 
                        topic="privacy policy"
                        onChange={event => this.handlePolicy(event)}
                        error={this.state.error_policy}
                        errorMessage="Please agree to our privacy policy"
                    />
                    <button>REGISTER</button>
                </form>
            </main>
        )
    }
}