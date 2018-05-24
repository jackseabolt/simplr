import React from 'react'; 

export default class FormCheckbox extends React.Component {
    render() {
        return (
            <section role="region" className={this.props.error ? "error" : ""}>
                <h4>{this.props.title}</h4>
                <label className="container">I have read and do accept <a href={this.props.link}>{this.props.topic}</a>
                    <input type="checkbox" onChange={event => this.props.onChange(event)}/>
                    <span className="checkmark"></span>
                </label>
                <p className="error-message">{this.props.errorMessage}</p>
            </section>
        )
    }
}