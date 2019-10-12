import React, {Component} from 'react'
import FormInput from '../formInput/formInputComponent'

import CustomButton from '../customButton/customButtomComponent'

import  {auth, signInWithGoogle } from '../../firebase/firebase.utils'
import './signInStyles.scss'


class SignIn extends Component{
    constructor(){
        super()

        this.state = {
            email:'',
            password:''
        }
    }
    handleSubmit = async (event) =>{
        event.preventDefault();
 
        const { email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''});
            
        } catch (error) {
            console.error(error)
        }

        
    }
    handleChange = (event) =>{
        const { value, name } = event.target;

        this.setState({[name]:value})

    }

    render(){
        return (
            <div className = 'sign-in'>
                <h1>I ALREADY HAVE AN ACCOUNT</h1>
                <span>sign in with email and password</span>

                <form onSubmit = {this.handleSubmit}>

                    <FormInput name = 'email'
                    type ='email'
                    label = 'Email'
                    handleChange = {this.handleChange}
                    value = {this.state.email}
                    required />
                    
                    <FormInput name = 'password'
                    type ='password'
                    label = 'Password'
                    value = {this.state.password}
                    handleChange = {this.handleChange}
                    required />
                    <div className = 'button'>
                        <CustomButton type = 'submit' >SIGN IN</CustomButton>
                        <CustomButton onClick = {signInWithGoogle} isGoogleSignIn >Sign with google </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}


export default SignIn;