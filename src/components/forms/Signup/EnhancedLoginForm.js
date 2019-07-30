import InnerForm from './InnerForm';
import {
  withFormik
} from 'formik';
import * as Yup from 'yup';
import { ApiService } from '../../services/data.service';
import { toast} from 'react-toastify';
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{6,}$/
// Wrap our form with the using withFormik HoC
const EnhancedLoginForm = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({ name: '',email: '',password:'',passwordConfirm:''}),
  // Add a custom validation function (this can be async too!)
  validationSchema:Yup.object().shape({

    name:Yup.string().max(20,'الاسم لايزيد عن ٢٠ حرف').min(3,'لايقل الاسم عن ٣ احرف').required('حقل مطلوب'),

    email:Yup.string().email('بريد غير صحيح').required('حقل مطلوب'),

    password:Yup.string().matches(passwordPattern,'كلمة مرور ضعفة').required('حقل مطلوب'),

    passwordConfirm:Yup.string().oneOf([ Yup.ref('password')],'كلمة مرور غير متطابقة').required('حقل مطلوب كلمة المرور غير متطابقة'),
    recaptcha:Yup.string().required()

  }),

  handleSubmit: (
    values, {
      props,
      setSubmitting,
      setErrors /* setValues, setStatus, and other goodies */ ,
    }
  ) => {
    ApiService.signup({name: values.name, email: values.email, password: values.password, 'g-recaptcha-response': values.recaptcha}).then(payload=>{
      setSubmitting(false)
      toast.success('signed up succ').catch(err=>{
        // setErrors({recaptcha:true})
        setSubmitting(false)
        toast.error(err.data && err.data.msg ? err.data.msg : 'error')
      })
    })
  },
})(InnerForm);

export default EnhancedLoginForm;
