import React, { Component } from 'react';

import EnhancedLoginForm from '../forms/Signup/EnhancedLoginForm';

class SignUp extends Component {
    render() {
        return (
            <div className="container mt-5">
            <div className="row">
                <div className="col">
                {/* <p>
                    signUp routes
                </p> */}
                <EnhancedLoginForm />

                </div>


            </div>
            </div>
        );
    }
}

export default SignUp;


