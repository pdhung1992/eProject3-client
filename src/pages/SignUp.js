import {Checkbox, Col, Row, Space} from "antd";
import {Link} from "react-router-dom";
import {useState} from "react";


const SignUp = () => {


    const [agreeTerm, setAgreeTerm] = useState(false);
    const handleAgreeTerm = (e) => {
        setAgreeTerm(e.target.checked);
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
                            <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                                <h4 className={'hero-title'}>New Account?</h4>
                                <div className="form-floating mb-1">
                                    <input type="text" className="form-control" id="fullname"
                                           placeholder=""/>
                                    <label htmlFor="fullname">Your Full name</label>
                                </div>
                                <div className="form-floating mb-1">
                                    <input type="email" className="form-control" id="email"
                                           placeholder=""/>
                                    <label htmlFor="email">Your Email</label>
                                </div>
                                <div className="form-floating mb-1">
                                    <input type="text" className="form-control" id="telephone"
                                           placeholder=""/>
                                    <label htmlFor="telephone">Your Telephone Number</label>
                                </div>
                                <div className="form-floating mb-1">
                                    <input type="password" className="form-control" id="password"
                                           placeholder=""/>
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="form-floating mb-1">
                                    <input type="password" className="form-control" id="re-password"
                                           placeholder=""/>
                                    <label htmlFor="re-password">Repeat Password</label>
                                </div>
                                <div className="mb-1">
                                    <Checkbox onChange={handleAgreeTerm}>I have read and agree with <Link to={'#'}>terms and conditions</Link> </Checkbox>
                                </div>
                                <div>
                                    <button className={'btn btn-primary'}>Sign Up</button>
                                </div>
                                <div>
                                    <h6>Already have an account? <Link to={'/login'}>Log In here</Link></h6>
                                </div>
                            </Space>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default SignUp;