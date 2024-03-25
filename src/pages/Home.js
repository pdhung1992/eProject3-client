
import '../assets/css/homePage.css';
import '../assets/animate/animate.css';
import '../assets/js/main';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faClockRotateLeft, faUtensils, faCircleInfo, faCircleRight, faPeopleGroup, faTruckFast, faCreditCard, faLocationArrow, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

const HomePage = () => {
    return(
        <div className=" p-0">
            <div className=" position-relative p-0">
                <div className=" bg-hero hero-header">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 text-center text-lg-start">
                                <h1 className="text-white mb-4 animated slideInDown">Need food for a party? Go with the pros.</h1>
                                <p className="text-white pb-3 animated slideInDown"><FontAwesomeIcon icon={faUtensils}/> Over 1000 restaurants</p>
                                <p className="text-white pb-3 animated slideInDown"><FontAwesomeIcon icon={faClockRotateLeft}/> Delivered on time, as ordered</p>
                                <p className="text-white pb-3 animated slideInDown"><FontAwesomeIcon icon={faPeopleGroup}/> Any group size, dietary need, or budget</p>
                                <p className="text-white pb-3 animated slideInDown"><FontAwesomeIcon icon={faTruckFast}/> Reach a human in seconds, 24/7</p>
                                <div className="position-relative w-100 mt-3">
                                    <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Enter your address" style={{height: '58px'}}/>
                                        <button type="button" className="btn btn-primary rounded-pill py-2 px-3 shadow-none position-absolute top-0 end-0 m-2">Go!</button>
                                </div>
                            </div>
                            <div className="col-lg-6 text-center text-lg-start">
                                <img className="img-fluid rounded animated zoomIn" src="/img/hero.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-xxl py-2">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="feature-item bg-light rounded text-center p-5">
                                <FontAwesomeIcon className="fa fa-4x text-primary mb-4" icon={faClockRotateLeft}/>
                                <h5 className="mb-3">On time, as ordered</h5>
                                <p className="m-0">Get food you can rely on for your meetings and events — professionally prepared and delivered.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="feature-item bg-light rounded text-center p-5">
                                <FontAwesomeIcon className="fa fa-4x text-primary mb-4" icon={faUtensils}/>
                                <h5 className="mb-3">Lots (and lots) of variety</h5>
                                <p className="m-0">Find food for any taste, dietary need, or budget — with over 1000 restaurants nationwide, you’ll never run out of options.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="feature-item bg-light rounded text-center p-5">
                                <FontAwesomeIcon className="fa fa-4x text-primary mb-4" icon={faCircleInfo}/>
                                <h5 className="mb-3">24/7 support — and beyond</h5>
                                <p className="m-0">Reach a human in seconds by phone, text, or email. Behind the scenes, we’re with your order all the way.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-xxl py-6" id="about">
                <div className="container">
                    <div className="row g-5 flex-column-reverse flex-lg-row">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h1 className="mb-4">Make party catering easily</h1>
                            <div className="d-flex mb-4">
                                <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                                    <i className="fa fa-check"></i>
                                </div>
                                <div className="ms-4">
                                    <h5>Customizable party program</h5>
                                    <p className="mb-0">You set the food and the itinerary. We complete everything involved</p>
                                </div>
                            </div>
                            <div className="d-flex mb-4">
                                <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                                    <i className="fa fa-check"></i>
                                </div>
                                <div className="ms-4">
                                    <h5>Flexible and scalable</h5>
                                    <p className="mb-0">You can easily scale up or down to accommodate fluctuating attendee numbers and budgets across locations. Don't waste food - or money.</p>
                                </div>
                            </div>
                            <div className="d-flex mb-4">
                                <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                                    <i className="fa fa-check"></i>
                                </div>
                                <div className="ms-4">
                                    <h5>Easy. Really easy.</h5>
                                    <p className="mb-0">Once you are set up, OnlineCater takes care of all the logistics, from curating the restaurants to ordering support and delivery.</p>
                                </div>
                            </div>
                            <a href="" className="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3">Show Me More <FontAwesomeIcon icon={faCircleRight}/></a>
                        </div>
                        <div className="col-lg-6">
                            <img className="img-fluid rounded wow zoomIn" data-wow-delay="0.5s" src="/img/about-1.png"/>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-xxl bg-light my-6 py-1" id="overview">
                <div className="container">
                    <div className="row g-5 py-5 align-items-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <img className="img-fluid rounded" src="/img/control-order.png"/>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="d-flex align-items-center mb-4">
                                <h1 className="mb-0">01</h1>
                                <span className="bg-primary mx-2" style={{width: '30px', height: '2px'}}></span>
                                <h5 className="mb-0">See and control your food spend.</h5>
                            </div>
                            <p className="mb-4">See and control your ordering and spend with the OnlineCaterer Dashboard.</p>
                            <p><i className="fa fa-check-circle text-primary me-3"></i>Easy budget management: Set limits on price per head, delivery fees, and more.</p>
                            <p><i className="fa fa-check-circle text-primary me-3"></i>Simplified expense reporting: Attach custom billing codes. Keep digital receipts in one place. </p>
                            <p className="mb-0"><i className="fa fa-check-circle text-primary me-3"></i>Convenient monthly invoicing: Get one monthly bill for all the OnlineCaterer orders across your orders. </p>
                        </div>
                    </div>
                    <div className="row g-5 py-5 align-items-center flex-column-reverse flex-lg-row">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="d-flex align-items-center mb-4">
                                <h1 className="mb-0">02</h1>
                                <span className="bg-primary mx-2" style={{width: '30px', height: '2px'}}></span>
                                <h5 className="mb-0">We build your orders. You save time</h5>
                            </div>
                            <p className="mb-4">Save time with Concierge Ordering. We build your orders. You review and approve.</p>
                            <p><i className="fa fa-check-circle text-primary me-3"></i>Meet your catering concierge: Your corporate catering concierge will collect key details like delivery time, dietary needs, and budget.</p>
                            <p><i className="fa fa-check-circle text-primary me-3"></i>Receive draft orders: Based on your specifications, your catering concierge will build draft orders for your approval and email you when they’re ready to review.</p>
                            <p className="mb-0"><i className="fa fa-check-circle text-primary me-3"></i>Review and approve: You’ll review your catering orders and can make changes as needed, or have us do it. When everything looks good, check out and you’re done.</p>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <img className="img-fluid rounded" src="/img/concierge.png"/>
                        </div>
                    </div>
                    <div className="row g-5 py-5 align-items-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <img className="img-fluid rounded" src="/img/tax-exempt.png"/>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="d-flex align-items-center mb-4">
                                <h1 className="mb-0">03</h1>
                                <span className="bg-primary mx-2" style={{width: '30px', height: '2px'}}></span>
                                <h5 className="mb-0">Tax-exempt? One and done</h5>
                            </div>
                            <p className="mb-4">With Tax-Exempt Ordering, one upload of your tax certificate covers all your orders.</p>
                            <p><i className="fa fa-check-circle text-primary me-3"></i>Submit your certificates. Use at a huge variety of restaurants.</p>
                            <p><i className="fa fa-check-circle text-primary me-3"></i>No user management: When you upload your tax exempt status to your ezCater corporate account, it applies to all other team members on the account.</p>
                            <p className="mb-0"><i className="fa fa-check-circle text-primary me-3"></i>Available everywhere: Over 1000 restaurants nationwide. We’ll apply the correct state tax certificate based on your order location.</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className=" bg-primary my-6 py-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                            <i className="fa fa-cogs fa-3x text-white mb-3"></i>
                            <h1 className="mb-2 text-white" data-toggle="counter-up">1000+</h1>
                            <p className="text-white mb-0">Restaurants Vietnam</p>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                            <i className="fa fa-users fa-3x text-white mb-3"></i>
                            <h1 className="mb-2 text-white" data-toggle="counter-up">100.000+</h1>
                            <p className="text-white mb-0">Satisfied Clients</p>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                            <i className="fa fa-certificate fa-3x text-white mb-3"></i>
                            <h1 className="mb-2 text-white" data-toggle="counter-up">11</h1>
                            <p className="text-white mb-0">Award Wins</p>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                            <i className="fa fa-quote-left fa-3x text-white mb-3"></i>
                            <h1 className="mb-2 text-white" data-toggle="counter-up">12.345+</h1>
                            <p className="text-white mb-0">Clients Reviews</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-xxl py-6">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <img className="img-fluid rounded" src="/img/table1.png"/>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <h1 className="mb-4">Three Simple Steps To Order</h1>
                            <p className="mb-4">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet</p>
                            <ul className="process mb-0">
                                <li>
                                    <span><FontAwesomeIcon icon={faPizzaSlice}/></span>
                                    <div>
                                        <h5>Choose Restaurant and dishes</h5>
                                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
                                            diam et eos erat ipsum et lorem et sit</p>
                                    </div>
                                </li>
                                <li>
                                <span><FontAwesomeIcon icon={faLocationArrow}/></span>
                                    <div>
                                        <h5>Fill in delivery information</h5>
                                        <p>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                                            lorem et sit, sed stet lorem sit clita duo</p>
                                    </div>
                                </li>
                                <li>
                                <span><FontAwesomeIcon icon={faCreditCard}/></span>
                                    <div>
                                        <h5>Deposit or Pre-pay</h5>
                                        <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container-xxl py-2" id="testimonial">
                <div className="container">
                    <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                        <h1 className="mb-3">What Our Clients Say</h1>
                        <h5 className="mb-5">See why customers love us...</h5>
                    </div>
                    <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                        <div className="testimonial-item bg-light rounded my-4">
                            <p className="fs-5"><i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>OnlineCater has thought of everything so that I can focus on my business and not the lunch plan. It's amazing</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded-circle" src="/img/avatar/man1.png" style={{width: '65px', height: '65px'}}/>
                                    <div className="ps-4">
                                        <h5 className="mb-1">Nguyen Duc Lam</h5>
                                        <span>Profession</span>
                                    </div>
                            </div>
                        </div>
                        <div className="testimonial-item bg-light rounded my-4">
                            <p className="fs-5"><i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>Outstanding service, incredibly easy to search and order, and flawless communication at all stages. 10/10 recommend!</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded-circle" src="/img/avatar/man2.png" style={{width: '65px', height: '65px'}}/>
                                    <div className="ps-4">
                                        <h5 className="mb-1">Nguyen Van Truong</h5>
                                        <span>Profession</span>
                                    </div>
                            </div>
                        </div>
                        <div className="testimonial-item bg-light rounded my-4">
                            <p className="fs-5"><i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>Communication was excellent. I would receive text message to let me know the status of my order. I really liked that I received a message the day of delivery and food was delivered on time! I really like that there are many restaurants to choose from and it was easy to set up for a nonprofit with tax exemption. Easy to use ordering system.</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded-circle" src="/img/avatar/man3.png" style={{width: '65px', height: '65px'}}/>
                                    <div className="ps-4">
                                        <h5 className="mb-1">Nguyen Van Toan</h5>
                                        <span>Profession</span>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-xxl py-4" id="contact">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h1 className="mb-3">Get In Touch</h1>
                            <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                            <div className="d-flex mb-4">
                                <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                                    <i className="fa fa-phone-alt"></i>
                                </div>
                                <div className="ms-3">
                                    <p className="mb-2">Call Us</p>
                                    <h5 className="mb-0">+84 988 888 888</h5>
                                </div>
                            </div>
                            <div className="d-flex mb-4">
                                <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                                    <i className="fa fa-envelope"></i>
                                </div>
                                <div className="ms-3">
                                    <p className="mb-2">Mail Us</p>
                                    <h5 className="mb-0">info@onlinecaterer.vn</h5>
                                </div>
                            </div>
                            <div className="d-flex mb-0">
                                <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                                    <i className="fa fa-map-marker-alt"></i>
                                </div>
                                <div className="ms-3">
                                    <p className="mb-2">Our Office</p>
                                    <h5 className="mb-0">01 Dinh Tien Hoang Str., Hoan Kiem Dist., Ha Noi</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                                <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                                <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                                <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: '150px'}}></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid bg-primary text-body footer wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5 px-lg-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-4">
                            <p className="section-title text-white h5 mb-4">Address<span></span></p>
                            <p className={'text-white'}><i className="bi bi-map me-3 text-white"></i>01 Dinh Tien Hoang Str., Ha Noi</p>
                            <p className={'text-white'}><i className="bi bi-phone me-3 text-white"></i>+84 988 888 888</p>
                            <p className={'text-white'}><i className="bi bi-envelope me-3 text-white"></i>info@onlinecaterer.vn</p>
                            <div className="d-flex pt-2">
                                <Link className="btn btn-outline-light btn-social" to={''}><i className="bi bi-twitter"></i></Link>
                                <Link className="btn btn-outline-light btn-social" to={''}><i className="bi bi-facebook"></i></Link>
                                <Link className="btn btn-outline-light btn-social" to={''}><i className="bi bi-instagram"></i></Link>
                                <Link className="btn btn-outline-light btn-social" to={''}><i className="bi bi-linkedin"></i></Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <p className="section-title text-white h5 mb-4">Quick Links<span></span></p>
                            <Link className="btn btn-link text-white" to={''}>Order</Link>
                            <Link className="btn btn-link text-white" to={''}>Corporate catering solutions</Link>
                            <Link className="btn btn-link text-white" to={''}>Contact</Link>
                            <Link className="btn btn-link text-white" to={''}>About</Link>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <p className="section-title text-white h5 mb-4">Newsletter<span></span></p>
                            <p className={'text-white'}>Subscribe now for delicious updates straight to your inbox!</p>
                            <div className="position-relative w-100 mt-3">
                                <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style={{height: '48px'}}/>
                                    <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary fs-4"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="text-center">
                                <p className="mb-0 text-white fs--1 fw-medium">©OnlineCaterer 2024. All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;