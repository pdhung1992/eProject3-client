
import '../assets/css/homePage.css'
import {
    Badge,
    Button,
    Card,
    Col, DatePicker,
    Flex,
    Input, InputNumber,
    Layout, Menu,
    Pagination,
    Rate,
    Row,
    Space,
    Steps,
    Tag
} from "antd";
import React, {useEffect, useState} from "react";
import Meta from "antd/es/card/Meta";
import Sider from "antd/es/layout/Sider";
import {Content, Header} from "antd/es/layout/layout";
import { faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import TextArea from "antd/es/input/TextArea";


const Order = () => {

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
                if (offsetTop <= 96 && !isScrollingUp) {
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
    });


    const onChangeDate = (date, dateString) => {
        console.log(date, dateString);
    };

    const steps = [
        {
            title: 'Select your city',
            content: (
                <div className={'order-content'}>
                    <Row>
                        <Space size={'middle'}>
                            <Card
                                hoverable
                                style={{
                                    width: 240,
                                }}
                                cover={<img alt="example" src="/img/hanoi.png" />}
                            >
                                <Meta title="Ha Noi"/>
                            </Card>
                            <Card
                                hoverable
                                style={{
                                    width: 240,
                                }}
                                cover={<img alt="example" src="/img/danang.png" />}
                            >
                                <Meta title="Da Nang"/>
                            </Card>
                            <Card
                                hoverable
                                style={{
                                    width: 240,
                                }}
                                cover={<img alt="example" src="/img/hochiminh.png" />}
                            >
                                <Meta title="Ho Chi Minh City" />
                            </Card>
                        </Space>
                    </Row>
                </div>
            ),
        },
        {
            title: 'Choose restaurant',
            content: (
                <div className={'order-content'}>
                    <Layout>
                        <Sider width={"18%"}>
                            <h5 className={'text-start'}>Search</h5>
                            <Input placeholder="Caterer, Cuisine, etc." />
                            <hr/>
                            <h5 className={'text-start'}>Cuisines</h5>
                            <Flex gap={'small'} wrap={'wrap'}>
                                <Tag color={'red'} className={'btn btn-sm'}>Vietnamese</Tag>
                                <Tag color={'green'} className={'btn btn-sm'}>Chinese</Tag>
                                <Tag color={'geekblue'} className={'btn btn-sm'}>Thai</Tag>
                                <Tag color={'gold'} className={'btn btn-sm'}>Korean</Tag>
                                <Tag color={'purple'} className={'btn btn-sm'}>Indian</Tag>
                            </Flex>
                            <hr/>
                            <h5 className={'text-start'}>Ratings</h5>
                            <Space direction={'vertical'} className={'py-2'}>
                                <Rate disabled value={5}/>
                                <Rate disabled value={4}/>
                                <Rate disabled value={3}/>
                                <Rate disabled value={2}/>
                                <Rate disabled value={1}/>
                            </Space>
                        </Sider>
                        <Content>
                            <div className={'order-detail text-start'}>
                                <h5>03 Ha Noi Caterers</h5>
                                <hr/>
                                <div className={'text-center'}>
                                    <Flex gap={'small'} wrap={'wrap'}>
                                        <Card hoverable className={'restaurant-card'}>
                                            <Row>
                                                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                                    <div className={'restaurant-thumb'}>
                                                        <Badge.Ribbon text={'Favorite'} placement={'start'} color={'#1da1f2'}>
                                                            <img src="/img/res1.png" alt="" className={'img-fluid'}/>
                                                        </Badge.Ribbon>
                                                    </div>
                                                </Col>
                                                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className={'text-start restaurant-desc'}>
                                                    <Space direction={"vertical"} size={'middle'}>
                                                        <h5>Bailey & Sage</h5>
                                                        <span><Rate disabled value={5}/> (105 ratings)</span>
                                                        <Tag color={'red'} className={'btn btn-sm'}>Vietnamese</Tag>
                                                        <span><FontAwesomeIcon icon={faLocationDot}/> Ha Dong Dist.</span>
                                                    </Space>
                                                </Col>
                                            </Row>
                                        </Card>
                                        <Card hoverable className={'restaurant-card'}></Card>
                                        <Card hoverable className={'restaurant-card'}></Card>
                                        <Card hoverable className={'restaurant-card'}></Card>
                                        <Card hoverable className={'restaurant-card'}></Card>
                                        <Card hoverable className={'restaurant-card'}></Card>
                                        <Card hoverable className={'restaurant-card'}></Card>
                                        <Card hoverable className={'restaurant-card'}></Card>
                                    </Flex>
                                </div>
                                <div className={'text-center py-2'}>
                                    <Pagination defaultCurrent={1} total={50} />
                                </div>
                            </div>
                        </Content>
                    </Layout>
                </div>
            ),
        },
        {
            title: 'Order',
            content: (
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
            ),
        },
        {
            title: 'Delivery info',
            content: (
                <div className={'order-content text-start'}>
                    <Row>
                        <Col span={12}>
                            <Space direction={'vertical'} style={{width: '100%', padding: '0 5%'}}>
                                <h4>Event name: </h4>
                                <Input type="text" size={'large'} placeholder={'Event name...'}/>
                                <Row>
                                    <Col span={12}>
                                        <h4>Delivery date: </h4>
                                        <DatePicker onChange={onChangeDate} size={'large'}/>
                                    </Col>
                                    <Col span={12}>
                                        <h4>Number of Tables</h4>
                                        <InputNumber size={'large'} min={5} defaultValue={5}/>
                                    </Col>
                                </Row>
                                <h4>Delivery address: </h4>
                                <Input type={'text'} size={'large'} placeholder={'Delivery address...'}/>
                                <h4>Contact person: </h4>
                                <Row>
                                    <Col span={12}>
                                        <div className="form-floating" style={{paddingRight: '1%'}}>
                                            <input className="form-control" placeholder="" id="contactName"></input>
                                            <label htmlFor="contactName">Name</label>
                                        </div>
                                    </Col>
                                    <Col span={12} style={{paddingLeft: '1%'}}>
                                        <div className="form-floating">
                                            <input className="form-control" placeholder="" id="contactPhone"></input>
                                            <label htmlFor="contactPhone">Phone number</label>
                                        </div>
                                    </Col>
                                </Row>
                                <h4>Additional requirement: </h4>
                                <TextArea rows={5}/>
                            </Space>
                        </Col>
                        <Col span={12}></Col>
                    </Row>
                </div>
            ),
        },
        {
            title: 'Check out',
            content: (
                <div className={'order-content'}>

                </div>
            ),
        },
    ];

    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
        window.scroll({top: 0, behavior: 'smooth'})
    };
    const prev = () => {
        setCurrent(current - 1);
        window.scroll({top: 0, behavior: 'smooth'})
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));


    return (
        <div>
            <div className={'page-header'}></div>
            <div className="p-0">
                <div className="position-relative p-0">
                    <div className="order-page">
                        <Steps current={current} items={items} type="navigation" className="site-navigation-steps"/>
                        <div>{steps[current].content}</div>
                        <div style={{marginTop: 24,}}>
                            {current < steps.length - 1 && (
                                <Button className={'btn-primary'} onClick={() => next()}>
                                    Continue
                                </Button>
                            )}
                            {current === steps.length - 1 && (
                                <Button className={'btn-primary'}>
                                    Done
                                </Button>
                            )}
                            {current > 0 && (
                                <Button
                                    style={{
                                        margin: '0 8px',
                                    }}
                                    onClick={() => prev()}
                                >
                                    Previous
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order;