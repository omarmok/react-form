import InnerForm from './InnerForm';
import {
  withFormik
} from 'formik';
// Wrap our form with the using withFormik HoC
const EnhancedLoginForm = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({
    email: '',
    password: ''
  }),
  // Add a custom validation function (this can be async too!)
  validate: (values, props) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    return errors;
  },
  // Submission handler
  handleSubmit: (
    values, {
      props,
      setSubmitting,
      setErrors /* setValues, setStatus, and other goodies */ ,
    }
  ) => {
    console.log(values)
  },
})(InnerForm);

export default EnhancedLoginForm;
