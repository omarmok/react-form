import React, { Component } from 'react';

import EnhancedLoginForm from '../forms/Signup/EnhancedLoginForm';

class SignUp extends Component {
    render() {
        return (
            <div className="container mt-5">
            <div className="row">
            <div className="col-md-3"></div>
            <div className="col text-center pt-3 title mb-5" >

            <p>
            <i className="fa fa-lock    ml-2"></i>
             تسجيل الدخول
            </p>
            </div>
            <div className="col-md-3"></div>
            </div>
            <div className="row">
            <div className="col-md-3"></div>
                <div className="col-md-6  text-right">
                {/* <p>
                    signUp routes
                </p> */}
                <EnhancedLoginForm />

                </div>
                <div className="col-md-3"></div>

            </div>
            </div>
        );
    }
}

export default SignUp;


