const validate = (email, business_name, username, type, terms, policy, password, passFunc) => {
    return new Promise((resolve, reject) => {
        email ? passFunc({ error_business_email: null }) : passFunc({ error_business_email: "Please enter a valid business email" }); 
        business_name ? passFunc({ error_business_name: null }) : passFunc({ error_business_name: "Please enter a valid business address" });
        username ? passFunc({ error_username: null }) : passFunc({ error_username: "Please enter a valid username" });
        type ? passFunc({ error_type: null }) : passFunc({ error_type: true });
        terms ? passFunc({ error_terms: null }) : passFunc({ error_terms: "Please agree to the terms of service" });
        policy ? passFunc({ error_policy: null }) : passFunc({ error_policy: "Please agree to our privacy policy" });
        if(password) {
            // checking password length
            if(password.length >= 6) {
                // checking password for numbers
                if(/\d/.test(password)) {
                    // checking password for uppercase letter 
                    if(/[A-Z]/.test(password)) {
                        // checking password for lowercase letter
                        if(/[a-z]/.test(password)) {
                            passFunc({ error_password: false }) 
                        }
                        else {
                            passFunc({ error_password: "Password should contain a lowercase letter" });  
                        }
                    }
                    else {
                        passFunc({ error_password: "Password should contain an uppercase letter" });  
                    }
                }
                else {
                    passFunc({ error_password: "Password should contain a number" });
                }
            } 
            else {
                passFunc({ error_password: "Password should have six characters" });
            } 
        } 
        else {
            passFunc({ error_password: "Please enter a valid password" });
        }
        resolve(); 
    }); 
}

export default validate; 