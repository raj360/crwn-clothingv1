import React from 'react'
import './signInAndSignOutStyles.scss'

import SignIn from '../../components/signIn/signInComponent'
import SignUp from '../../components/signUp/signUpComponent'


const SignInSignOutPage = () => (
    <div className = 'sign-in-and-sign-out'>
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInSignOutPage;