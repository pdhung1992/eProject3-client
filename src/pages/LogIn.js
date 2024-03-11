
import '../assets/css/auth.css';
import {Col, Row, Space} from "antd";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import authService from "../services/auth-service";
import {loginFail, loginSuccess} from "../actions/authActions";

const LogIn = ({ setShowNav }) => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.auth);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailRef = useRef(null);
    const [message, setMessage] = useState("");
    const [isLogin, setIsLogin] = useState(false);

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const formData = {
                email, password
            }
            const data = await authService.logIn(formData);
            if (data && data.token){
                dispatch(loginSuccess(data))
                navigate('/');
                setShowNav(true)
            }
            else {
                dispatch(loginFail('Log In Failed,'))
                setMessage('Login failed.')
            }
        }catch (error){
            const resMessage =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            setMessage(resMessage);
        }
    }

    const checkLogin = () => {
        if(user && user.userData){
            setIsLogin(true);
        }
    }
    if(isLogin){
        navigate('/');
        setShowNav(true);
    }

    useEffect(() => {
        setShowNav(false);
        emailRef.current.focus();
        checkLogin()
    }, [])


    return(
        <div className={'auth-page'}>
            <div className="container">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row auth-img" span={14}>
                        <img src="/img/auth.png" alt="" className={'img-fluid'}/>
                    </Col>
                    <Col className="gutter-row auth-form" span={10}>
                        <div className={'auth-form-content'}>
                            <form onSubmit={handleLogin}>
                                <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                                    <h4 className={'hero-title'}>Welcome back!</h4>
                                    <div className="form-floating mb-1">
                                        <input type="email"
                                               className="form-control form-input"
                                               id="floatingInput"
                                               placeholder=""
                                               name="email"
                                               value={email}
                                               onChange={handleChangeEmail}
                                               required
                                               ref={emailRef}
                                        />
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating mb-1">
                                        <input type="password"
                                               className="form-control form-input"
                                               id="floatingPassword"
                                               placeholder=""
                                               name="password"
                                               value={password}
                                               onChange={handleChangePassword}
                                               required
                                        />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <div className="text-center">
                                        <button className={'btn btn-primary'}>Log In</button>
                                    </div>
                                    <div>
                                        <h6>Don't have an account? <Link to={'/signup'}>Sign Up here</Link></h6>
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

export default LogIn;