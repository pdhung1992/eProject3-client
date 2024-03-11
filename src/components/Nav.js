
import '../assets/css/homePage.css';
import '../assets/animate/animate.css';
import '../assets/js/main';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import authService from "../services/auth-service";
import {logOut} from "../actions/authActions";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {Badge} from "antd";

const Nav = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.auth);

    const [message, setMessage] = useState("");

    const handleSignOut = async () => {
        try {
            await authService.logOut();
            dispatch(logOut());
            navigate('/login')
        }catch (error){
            const resMessage =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            setMessage(resMessage);
        }
    }

    return(
        <div className="container-xxl bg-white p-0">
            <div className="container-xxl position-relative p-0" id="home">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <Link to={'/'} className="navbar-brand p-0">
                        <h1 className="m-0">OnlineCaterer</h1>
                    </Link>
                    <button className="navbar-toggler rounded-pill" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto py-0">
                            <Link to={'/'} className="nav-item nav-link">Home</Link>
                            <Link to={'/order'} className="nav-item nav-link">Order now!</Link>
                            <Link to={''} className="nav-item nav-link">Online Catering solutions</Link>
                            {/*<Link to={''} className="nav-item nav-link">Contact</Link>*/}
                            <Link to={''} className="nav-item nav-link">About Us</Link>
                        </div>
                        {user.isLoggedIn ? (
                            <div>
                                <div className="d-flex align-items-center">
                                    <Link to={''} className="nav-user-sticky" style={{paddingRight: '5px'}}>Hello, {user.userData.fullName}</Link>
                                    <Badge count={5}>
                                        <Link to={''} className="nav-user-sticky nav-cart" ><FontAwesomeIcon icon={faCartShopping}/></Link>
                                    </Badge>
                                    <Link to={''} onClick={handleSignOut} className="btn btn-light rounded-pill py-2 px-2 ms-3 d-none d-lg-block">Sign Out</Link>
                                </div>
                            </div>
                        ) : (
                            <Link to={'/login'} className="btn btn-light rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Log In</Link>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav;