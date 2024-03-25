import {Badge, Card, Col, Flex, Input, Layout, Pagination, Rate, Row, Space, Tag} from "antd";
import Sider from "antd/es/layout/Sider";
import {Content} from "antd/es/layout/layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";
import restaurantServices from "../services/restaurant-service";


const ChooseRestaurant = ({cityId, city, districts, colors, categories, setSelectedRestaurant, current, setCurrent}) => {

    const imgUrl = 'http://localhost:8888/api/images/';

    const [restaurants, setRestaurants] = useState([]);


    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const fetchRestaurantsByCity = async (id) => {
        const res = await restaurantServices.getRestaurantByCity(id);
        setRestaurants(res)
    }

    const fetchRestaurantsByDistrict = async (id) => {
        const res = await restaurantServices.getRestaurantByDistrict(id);
        setRestaurants(res);
    }

    const fetchRestaurantsByCategory = async (id) => {
        const res = await restaurantServices.getRestaurantByCategory(id);
        setRestaurants(res);
    }

    useEffect(() => {
        fetchRestaurantsByCity(cityId);
    }, [])

    useEffect(() => {
        fetchRestaurantsByDistrict(selectedDistrict);
    }, [selectedDistrict])

    useEffect(() => {
        fetchRestaurantsByCategory(selectedCategory);
    }, [selectedCategory])

    const selectRestaurant = (id) => {
        setSelectedRestaurant(id);
        setCurrent(current+1);
    }


    return (
        <div className={'order-content'}>
            <Layout>
                <Sider width={"18%"}>
                    <h5 className={'text-start'}>Search</h5>
                    <Input placeholder="Caterer, Cuisine, etc."/>
                    <hr/>
                    <h5 className={'text-start'}>By Cuisines</h5>
                    <Flex gap={'small'} wrap={'wrap'}>
                        {Array.isArray(categories) && categories.length > 0 ? (
                            categories.map((cat, index) => (
                                <Tag color={colors[index % colors.length]} className={'btn btn-sm'} onClick={() => setSelectedCategory(cat.id)}>{cat.name}</Tag>
                            ))
                        ) : (
                            <></>
                        )}
                    </Flex>
                    <hr/>
                    <h5  className={'text-start'}>By District</h5>
                    <Flex gap={'small'} wrap={'wrap'}>
                        {Array.isArray(districts) && districts.length > 0 ? (
                            districts.map((dist, index) => (
                                <Tag color={colors[index % colors.length]} className={'btn btn-sm'} onClick={() => setSelectedDistrict(dist.id)}>{dist.name}</Tag>
                            ))
                        ) : (
                            <></>
                        )}
                    </Flex>
                    <hr/>
                    <h5 className={'text-start'}>By Ratings</h5>
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
                        <h5>03 {city.name} Caterers</h5>
                        <hr/>
                        <div className={'text-center'}>
                            <Flex gap={'small'} wrap={'wrap'}>
                                {Array.isArray(restaurants) && restaurants.length > 0 ? (
                                    restaurants.map(restaurant => (
                                        <Card hoverable className={'restaurant-card'} onClick={() => selectRestaurant(restaurant.id)}>
                                            <Row>
                                                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                                    <div className={'restaurant-thumb'}>
                                                        <img src={`${imgUrl}${restaurant.thumbnail}`} alt="" className={'img-fluid'}/>
                                                    </div>
                                                </Col>
                                                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}
                                                     className={'text-start restaurant-desc'}>
                                                    <Space direction={"vertical"} size={'middle'}>
                                                        <h5>{restaurant.name}</h5>
                                                        <span><Rate disabled value={5}/> (105 ratings)</span>
                                                        <Tag color={'red'} className={'btn btn-sm'}>{restaurant.category}</Tag>
                                                        <span><FontAwesomeIcon icon={faLocationDot}/> {restaurant.district}</span>
                                                    </Space>
                                                </Col>
                                            </Row>
                                        </Card>
                                    ))
                                ) : (
                                    <Card hoverable className={'restaurant-card'}>
                                        <Row>
                                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                                <div className={'restaurant-thumb'}>
                                                    <img src={`${imgUrl}blank-restaurant.png`} alt="" className={'img-fluid'}/>
                                                </div>
                                            </Col>
                                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}
                                                 className={'text-start restaurant-desc'}>
                                                <Space direction={"vertical"} size={'middle'}>
                                                    <h5>No Restaurants</h5>
                                                </Space>
                                            </Col>
                                        </Row>
                                    </Card>
                                )}
                            </Flex>
                        </div>
                        <div className={'text-center py-2'}>
                            <Pagination defaultCurrent={1} total={50}/>
                        </div>
                    </div>
                </Content>
            </Layout>
        </div>
    )
}

export default ChooseRestaurant;