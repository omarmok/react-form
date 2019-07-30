import axios from 'axios';
axios.default.baseURL = 'https://bikes-rental.herokuapp.com/api'

  export const ApiService ={
    login(){
    },
    signup(item){
       return  axios.post('users', item)
    }
}