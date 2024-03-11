import {Checkbox, Col, Row, Space} from "antd";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import Swal from "sweetalert2";
import authService from "../services/auth-service";


const SignUp = ({ setShowNav }) => {

    const user = useSelector(state => state.auth);
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkIsLoggedIn = () => {
        if (user && user.userData){
            setIsLoggedIn(true)
        }
    }

    if (isLoggedIn){
        navigate('/')
    }

    useEffect(() => {
        setShowNav(false);
        checkIsLoggedIn();
        fullNameRef.current.focus();
    }, []);

    const [fullName, setFullName] = useState('');
    const [isValidName, setIsValidName] = useState(true);
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [telephone, setTelephone] = useState("");
    const [isValidTelephone, setIsValidTelephone] = useState(true);
    const [password, setPassword] = useState("");
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [isValidPasswordCfm, setIsVaidPasswordCfm] = useState(true);
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [message, setMessage] = useState("");
    const fullNameRef = useRef(null);

    const onChangeFullname = (e) => {
        const inputName = e.target.value;
        setFullName(inputName);
        const isValid = inputName.length >= 6;
        setIsValidName(isValid);
    }
    const onChangeEmail = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(inputEmail);
        setIsValidEmail(isValid);
    }
    const onChangeTelephone = (e) => {
        const inputTelephone = e.target.value;
        setTelephone(inputTelephone);
        const isValid = /^\d{10}$/.test(inputTelephone);
        setIsValidTelephone(isValid)
    }
    const onChangePassword = (e) => {
        const inputPassword = e.target.value;
        setPassword(inputPassword);
        checkPasswordMatch(inputPassword, passwordConfirm);
        const isValid = inputPassword.length >= 6;
        setIsValidPassword(isValid);
    }
    const onChangePasswordConfirm = (e) => {
        const inputPasswordCfm = e.target.value;
        setPasswordConfirm(inputPasswordCfm);
        checkPasswordMatch(password, inputPasswordCfm);
        const isValid = inputPasswordCfm.length >= 6;
        setIsVaidPasswordCfm(isValid);
    }

    const checkPasswordMatch = (password, confirm) => {
        setPasswordsMatch(password === confirm);
    }

    const [agreeTerm, setAgreeTerm] = useState(false);
    const handleAgreeTerm = (e) => {
        setAgreeTerm(e.target.checked);
    }

    const handleRegister = async (e) => {
        e.preventDefault();

        if (agreeTerm){
            const formData = {fullName, email, telephone, password};

            console.log(formData)

            if(passwordsMatch){
                try {
                    const response = await authService.register(formData);
                    if(response === 201){
                        setMessage("Register successfully!");
                        Swal.fire({
                            title: 'Register Successfully!',
                            text: 'Now you can Login with new Account!',
                            icon: 'success',
                            confirmButtonText: 'Login now!',
                            confirmButtonColor: '#5ba515'
                        });
                        navigate("/login");
                    } else {setMessage(response)}
                } catch (error) {
                    return error.message;
                }
            }
            else {
                setMessage("Password do not match!")
            }
        }
        else {
            Swal.fire({
                title: 'Oops!',
                icon: 'error',
                text: 'Please read and agree with the terms and conditions',
                confirmButtonText: 'OK',
                confirmButtonColor: '#f27474'
            }) ;
        }


    }

    return (
        <div className={'auth-page'}>
            <div className="container">
                <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                    <Col className="gutter-row auth-img" span={14}>
                        <img src="/img/auth.png" alt="" className={'img-fluid'}/>
                    </Col>
                    <Col className="gutter-row auth-form" span={10}>
                        <div className={'auth-form-content'}>
                            <form onSubmit={handleRegister}>
                                <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                                    <h4 className={'hero-title'}>New Account?</h4>
                                    <div className="form-floating mb-1">
                                        <input type="text"
                                               className="form-control form-input"
                                               id="fullname"
                                               placeholder=""
                                               name='fullName'
                                               value={fullName}
                                               onChange={onChangeFullname}
                                               ref={fullNameRef}
                                        />
                                        <label htmlFor="fullname">Your Full name</label>

                                    </div>
                                    <div className={'form-floating mb-0'}>
                                        {!isValidName &&
                                            <p style={{color: 'red'}}>Full name must be at least 6 characters!</p>}
                                    </div>
                                    <div className="form-floating mb-1">
                                        <input type="email"
                                               className="form-control form-input"
                                               id="email"
                                               placeholder=""
                                               name="email"
                                               value={email}
                                               onChange={onChangeEmail}
                                        />
                                        <label htmlFor="email">Your Email</label>
                                    </div>
                                    <div className={'form-floating mb-0'}>
                                        {!isValidEmail && <p style={{ color: 'red' }}>Email is not valid!</p>}
                                    </div>
                                    <div className="form-floating mb-1">
                                        <input type="text"
                                               className="form-control form-input"
                                               id="telephone"
                                               placeholder=""
                                               name="telephone"
                                               value={telephone}
                                               onChange={onChangeTelephone}
                                        />
                                        <label htmlFor="telephone">Your Telephone Number</label>
                                    </div>
                                    <div className={'form-floating mb-0'}>
                                        {!isValidTelephone && <p style={{color: 'red'}}>Telephone number must be 10 digits!</p>}
                                    </div>
                                    <div className="form-floating mb-1">
                                        <input type="password"
                                               className="form-control form-input"
                                               id="password"
                                               placeholder=""
                                               name="password"
                                               value={password}
                                               onChange={onChangePassword}
                                        />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                    <div className={'form-floating mb-0'}>
                                        {!isValidPassword && <p style={{color: 'red'}}>Password must be at least 6 characters!</p>}
                                    </div>
                                    <div className="form-floating mb-1">
                                        <input type="password"
                                               className="form-control form-input"
                                               id="re-password"
                                               placeholder=""
                                               onChange={onChangePasswordConfirm}
                                        />
                                        <label htmlFor="re-password">Repeat Password</label>
                                    </div>
                                    <div>
                                        {!isValidPasswordCfm && <p style={{color: 'red'}}>Password must be at least 6 characters!</p>}
                                    </div>
                                    {message && (
                                        <div className="form-group">
                                            <div className="alert alert-danger" role="alert">
                                                {message}
                                            </div>
                                        </div>
                                    )}
                                    <div className="mb-1">
                                        <Checkbox onChange={handleAgreeTerm} className={'form-checkbox'}>I have read and
                                            agree with <Link to={'#'}>terms and conditions</Link> </Checkbox>
                                    </div>
                                    <div>
                                        <button className={'btn btn-primary'} type={'submit'}>Sign Up</button>
                                    </div>
                                    <div>
                                        <h6>Already have an account? <Link to={'/login'}>Log In here</Link></h6>
                                    </div>
                                </Space>
                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default SignUp;