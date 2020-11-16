import React from 'react';
import '../../media/css/RegisterComponent.css'
import { Link } from 'react-router-dom';
import {useState} from 'react';

function RegisterComponent () {

    const [SignIn, setSignIn] = useState(false);
    const [SignUp, setSignUp] = useState(true);

    const [Username, SetUsername] = useState('');
    const [EmailId, SetEmailId] = useState('');
    const [Password, SetPassword] = useState('');
    const [Password2, SetPassword2] = useState('');
    const [SignUpText, SetSignUpText] = useState('');
    const [SignInText, SetSignInText] = useState('');
    const [LoggedIn, SetLoggedIn] = useState(false);

    const [SignInInfo, SetSignInInfo] = useState(localStorage.setItem('SignInInfo', ''));
    const [SignUpInfo, SetSignUpInfo] = useState(localStorage.setItem('SignUpInfo', ''));

    function SignInClicked (e) {
        e.preventDefault();
        setSignIn(true);
        setSignUp(false);
    }
    function SignUpClicked (e) {
        e.preventDefault();
        setSignIn(false);
        setSignUp(true);
    }

    function OnUsernameChange (e) {
        SetUsername(e.target.value);
    }
    function OnEmailIdChange (e) {
        SetEmailId(e.target.value);
    }
    function OnPasswordChange (e) {
        SetPassword(e.target.value);
    }
    function OnPasswordChange2 (e) {
        SetPassword2(e.target.value);
    }

    function SignInProcess (e) {
        e.preventDefault();
        if (Password === Password2) {
            SetLoggedIn(true);
            localStorage.setItem('LoggedIn', (LoggedIn));
            localStorage.setItem('Username', (Username));
        }
        else {
            SetSignInText("Email id or password is incorrect");
        }
    }
    function SignUpProcess (e) {
        e.preventDefault();
        var SignUpData = [];
        if (Password === Password2) {
            SignUpData.push(Username, EmailId, Password);
            localStorage.setItem('SignUpInfo', (SignUpData));
        }
        else {
            SetSignUpText("Passswords don't match");
        }
        
    }

    return (
        <div>
            <div className="container form-container">
                <div className="row">
                    <div className="col-lg-10 col-xl-9 mx-auto">
                        <div className="card card-signin flex-row my-5">
                            <div className="card-img-left d-none d-md-flex">
                            </div>
                            <div className="card-body">
                                <h2 className="card-title text-center">Register</h2>
                                <form className="form-signin">
                                    
                                    <div className="form-label-group">
                                        <input type="text" id="inputUserame" className="form-control" onChange={OnUsernameChange} placeholder="Username" autoComplete="false" required autofocus />
                                        <label for="inputUserame">Username</label>
                                    </div>

                                    <div className="form-label-group">
                                        <input type="email" id="inputEmail" className="form-control" onChange={OnEmailIdChange} placeholder="Email address" autoComplete="false" required />
                                        <label for="inputEmail">Email address</label>
                                    </div>
                                    
                                    {!SignIn && <hr/>}

                                    <div className="form-label-group">
                                        <input type="password" id="inputPassword" className="form-control" onChange={OnPasswordChange} placeholder="Password" autoComplete="false" required />
                                        <label for="inputPassword">Password</label>
                                    </div>
                                    
                                    <div className="form-label-group">
                                        <input type="password" id="inputConfirmPassword" className="form-control" onChange={OnPasswordChange2} placeholder="Password" autoComplete="false" required />
                                        <label for="inputConfirmPassword">Confirm password</label>
                                    </div>

                                    {/* { (SignUp) && (Password != Password2) &&
                                    <div>
                                        <center><h4>{SignUpText}</h4></center>
                                    </div>
                                    } */}

                                    { (SignIn) && (Password != Password2) &&
                                    <div>
                                        <center><h4>{SignInText}</h4></center>
                                    </div>
                                    }
                                   
                                    <div>
                                        <button className="btn btn-lg btn-primary btn-block text-uppercase" onClick={SignUpProcess} type="submit">Sign Up</button>
                                        <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign up with Google</button>
                                        <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign up with Facebook</button>
                                    </div>
                                    <div>
                                        <Link to = "/Payment"><button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign In</button></Link>
                                        <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
                                        <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
                                    </div>
                                    
                                    <hr className="my-4"></hr>
                                    
                                    <button className="btn btn-lg btn-signin btn-block text-uppercase" onClick = {SignInClicked} type="submit">Sign In</button>
                                    
                                    <button className="btn btn-lg btn-signin btn-block text-uppercase" onClick = {SignUpClicked} type="submit">Sign Up</button>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RegisterComponent;