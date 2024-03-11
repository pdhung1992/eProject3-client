import {Badge, Card, Col, Flex, Layout, Menu, Rate, Row, Space, Tag} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import Sider from "antd/es/layout/Sider";
import {useEffect, useState} from "react";


const OrderComp = () => {

    const jumpToItem = (id) => {
        const item = document.getElementById(id);
        const offset = 96;
        const position = item.offsetTop - offset;

        window.scrollTo({
            top: position,
            behavior: 'smooth'
        })
    }

    const menuTypes = [
        {
            key: '1',
            label: (
                <span onClick={() => jumpToItem('appetizers')}>Appetizers</span>
            ),
        },
        {
            key: '2',
            label: (
                <a href={'#mainCourses'}>Main Courses</a>
            ),
        },
        {
            key: '3',
            label: (
                <a href={'#desserts'}>Desserts</a>
            ),
        },
        {
            key: '4',
            label: (
                <a href={'#beverages'}>Beverages</a>
            ),
        },
    ]

    const [isFixedMenu, setIsFixedMenu] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const menu = document.getElementById('menu');
            if (menu) {
                const rect = menu.getBoundingClientRect();
                const offsetTop = rect.top;
                const isScrollingUp = currentScrollPos < prevScrollPos;
                if (offsetTop <= 6 * 16 && !isScrollingUp) {
                    setIsFixedMenu(true);
                } else {
                    setIsFixedMenu(false);
                }
                setPrevScrollPos(currentScrollPos);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div>
            <div className={'order-content text-start'}>
                <Layout>
                    <Content>
                        <div className={'restaurant-detail'}>
                            <div className={'restaurant-banner'}>
                                <img src="/img/res-banner.png" alt="" className={'img-fluid'}/>
                            </div>
                            <h2 className={'py-2'}>Bailey & Sage</h2>
                            <Space>
                                <span><Rate disabled value={5}/> (105 ratings)</span>
                                <span><FontAwesomeIcon icon={faClock}/> 100% On time</span>
                                <Tag color={'red'} className={'btn btn-sm'}>Vietnamese</Tag>
                                <span><FontAwesomeIcon icon={faLocationDot}/> Ha Dong Dist.</span>
                            </Space>
                            <hr/>
                            <h4>Instant Combo</h4>
                            <Flex gap={'small'} wrap={'wrap'}>
                                <Card hoverable className={'restaurant-card'}>
                                    <Row>
                                        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                            <div className={'restaurant-thumb'}>
                                                <Badge.Ribbon text={'Favorite'} placement={'start'}
                                                              color={'#1da1f2'}>
                                                    <img src="/img/res1.png" alt=""
                                                         className={'img-fluid'}/>
                                                </Badge.Ribbon>
                                            </div>
                                        </Col>
                                        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}
                                             className={'text-start restaurant-desc'}>
                                            <Space direction={"vertical"} size={'middle'}>
                                                <h5>Bailey & Sage</h5>
                                                <span><Rate disabled value={5}/> (105 ratings)</span>
                                                <Tag color={'red'}
                                                     className={'btn btn-sm'}>Vietnamese</Tag>
                                                <span><FontAwesomeIcon icon={faLocationDot}/> Ha Dong Dist.</span>
                                            </Space>
                                        </Col>
                                    </Row>
                                </Card>
                            </Flex>
                            <hr/>
                            <h4>Catering menu</h4>
                            {/*<Tabs size={'large'} defaultActiveKey="1" items={tabItems}/>*/}
                            <Layout>
                                <Header id={'menu'}
                                        className={isFixedMenu ? 'restaurant-tab fixed-menu' : 'restaurant-tab'}>
                                    <Menu
                                        className={'restaurant-tab-item'}
                                        mode={'horizontal'}
                                        defaultSelectedKeys={['1']}
                                        items={menuTypes}
                                    >
                                    </Menu>
                                </Header>
                                <Content className={'py-2'}>
                                    <div className={'menu-by-cat'}>
                                        <h5 id={'appetizers'}>Appetizers</h5>
                                        <Flex gap={'small'} wrap={'wrap'}>
                                            <Card hoverable className={'restaurant-card'}>
                                                <Row>
                                                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                                        <div className={'restaurant-thumb'}>
                                                            <Badge.Ribbon text={'Favorite'} placement={'start'}
                                                                          color={'#1da1f2'}>
                                                                <img src="/img/res1.png" alt=""
                                                                     className={'img-fluid'}/>
                                                            </Badge.Ribbon>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}
                                                         className={'text-start restaurant-desc'}>
                                                        <Space direction={"vertical"} size={'middle'}>
                                                            <h5>Bailey & Sage</h5>
                                                            <span><Rate disabled value={5}/> (105 ratings)</span>
                                                            <Tag color={'red'}
                                                                 className={'btn btn-sm'}>Vietnamese</Tag>
                                                            <span><FontAwesomeIcon icon={faLocationDot}/> Ha Dong Dist.</span>
                                                        </Space>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </Flex>
                                    </div>
                                    <div className={'menu-by-cat'}>
                                        <h5 id={'mainCourses'}>Main Courses</h5>
                                        <Flex gap={'small'} wrap={'wrap'}>
                                            <Card hoverable className={'restaurant-card'}>
                                                <Row>
                                                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                                        <div className={'restaurant-thumb'}>
                                                            <Badge.Ribbon text={'Favorite'} placement={'start'}
                                                                          color={'#1da1f2'}>
                                                                <img src="/img/res1.png" alt=""
                                                                     className={'img-fluid'}/>
                                                            </Badge.Ribbon>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}
                                                         className={'text-start restaurant-desc'}>
                                                        <Space direction={"vertical"} size={'middle'}>
                                                            <h5>Bailey & Sage</h5>
                                                            <span><Rate disabled value={5}/> (105 ratings)</span>
                                                            <Tag color={'red'}
                                                                 className={'btn btn-sm'}>Vietnamese</Tag>
                                                            <span><FontAwesomeIcon icon={faLocationDot}/> Ha Dong Dist.</span>
                                                        </Space>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </Flex>
                                    </div>
                                    <div className={'menu-by-cat'}>
                                        <h5 id={'desserts'}>Desserts</h5>
                                        <Flex gap={'small'} wrap={'wrap'}>
                                            <Card hoverable className={'restaurant-card'}>
                                                <Row>
                                                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                                        <div className={'restaurant-thumb'}>
                                                            <Badge.Ribbon text={'Favorite'} placement={'start'}
                                                                          color={'#1da1f2'}>
                                                                <img src="/img/res1.png" alt=""
                                                                     className={'img-fluid'}/>
                                                            </Badge.Ribbon>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}
                                                         className={'text-start restaurant-desc'}>
                                                        <Space direction={"vertical"} size={'middle'}>
                                                            <h5>Bailey & Sage</h5>
                                                            <span><Rate disabled value={5}/> (105 ratings)</span>
                                                            <Tag color={'red'}
                                                                 className={'btn btn-sm'}>Vietnamese</Tag>
                                                            <span><FontAwesomeIcon icon={faLocationDot}/> Ha Dong Dist.</span>
                                                        </Space>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </Flex>
                                    </div>
                                    <div className={'menu-by-cat'}>
                                        <h5 id={'beverages'}>Beverages</h5>
                                        <Flex gap={'small'} wrap={'wrap'}>
                                            <Card hoverable className={'restaurant-card'}>
                                                <Row>
                                                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                                        <div className={'restaurant-thumb'}>
                                                            <Badge.Ribbon text={'Favorite'} placement={'start'}
                                                                          color={'#1da1f2'}>
                                                                <img src="/img/res1.png" alt=""
                                                                     className={'img-fluid'}/>
                                                            </Badge.Ribbon>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}
                                                         className={'text-start restaurant-desc'}>
                                                        <Space direction={"vertical"} size={'middle'}>
                                                            <h5>Bailey & Sage</h5>
                                                            <span><Rate disabled value={5}/> (105 ratings)</span>
                                                            <Tag color={'red'}
                                                                 className={'btn btn-sm'}>Vietnamese</Tag>
                                                            <span><FontAwesomeIcon icon={faLocationDot}/> Ha Dong Dist.</span>
                                                        </Space>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </Flex>
                                    </div>
                                </Content>
                            </Layout>
                            <hr/>
                            <h5>About Bailey & Sage Catering</h5>
                            <p>On ezCater.com since July 26th, 2013.</p>
                            <p>We serve healthy foods for a delicious and innovative lunchtime experience. We use
                                fresh and all-natural meats, cheeses, and produce for our sandwiches and salads.
                                Choose from our wide variety of convenient catering packages, designed to take the
                                stress out of planning your event.</p>
                            <h6>Address</h6>
                            <p>123 Le Trong Tan Str., Ha Dong Dist., Ha Noi</p>
                            <h6>Delivery Hours</h6>
                            <p>7am - 21pm</p>
                            <h6>Takeout Hours</h6>
                            <p>7am - 21pm</p>
                            <h6>Delivery Minimum</h6>
                            <p>From 5 tables (50 persons)</p>
                        </div>
                    </Content>
                    <Sider width={'25%'}>
                        <div className="order-cart">
                            <h4>Cart</h4>
                            <hr/>
                        </div>
                    </Sider>
                </Layout>
            </div>
        </div>
    )
}

export default OrderComp;