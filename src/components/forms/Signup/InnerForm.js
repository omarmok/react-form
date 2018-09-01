import { Field } from 'formik';
import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const DefaultInput = ({ label, children }) =>(
<div className="form-group row">
   <label className="col-sm-2 col-form-label"> { label } </label>
    <div className="col-sm-10">
    { children }
    </div>
</div>

)

// Our inner form component which receives our form's state and updater methods as props
 const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  dirty,
  setFeldValue
}) => (
  <form onSubmit={handleSubmit}>

    <DefaultInput label="الاسم">
                <Field type="text" name="name" className="form-control" />
                {touched.name && errors.name && <p className="form-text text-danger"> {errors.name} </p>}
            </DefaultInput>

      <DefaultInput label="Email">
                <Field type="email" name="email" className="form-control" />
                {touched.email && errors.email && <p className="form-text text-danger"> {errors.email} </p>}
            </DefaultInput>


   <DefaultInput label="Password">
                <Field type="password" name="password" className="form-control" />
                {touched.password && errors.password && <div>{errors.password}</div>}
            </DefaultInput>

     <DefaultInput label="Confirm Password">
                <Field type="password" name="passwordConfirm" className="form-control" />
                {touched.passwordConfirm && errors.passwordConfirm && <div>{errors.passwordConfirm}</div>}

            </DefaultInput>

 <ReCAPTCHA className=" mb-5 " name="recaptcha" sitekey="6Legp2EUAAAAAKZhVvBOIj-d6mbHGwrWBfPEoiMX" onChange={(response)=> setFeldValue('recaptcha',response)}/>


    <button  className="btn-block mt-4 btn-defualt" type="Submit"  disabled={!dirty || isSubmitting || Object.keys(errors).length}>
    تسجيل الدخول
    </button>
  </form>
);
export default InnerForm;
