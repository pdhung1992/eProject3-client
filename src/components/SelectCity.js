import {Card, Col, Flex, Input, Row, Space} from "antd";
import Meta from "antd/es/card/Meta";
import React, {useEffect, useState} from "react";
import cityServices from "../services/city-service";


const SelectCity = ({setSelectedCity, current, setCurrent}) => {

    const imgUrl = 'http://localhost:8888/api/images/';

    const [cities, setCities] = useState([]);

    useEffect(() => {
        const fetchCities = async () => {
            const res = await cityServices.getCities();
            setCities(res);
        }
        fetchCities();
    }, [])

    const selectCity = (id) => {
        setSelectedCity(id);
        setCurrent(current + 1);
    }

    return (
        <div className={'order-content'}>
            <Row align="middle" className={'text-start'}>
                <Col flex="auto" span={3}>
                    <h6 style={{ margin: 0 }}>Search your City</h6>
                </Col>
                <Col flex="auto" span={6}>
                    <Input placeholder="Enter your city to find..." />
                </Col>
            </Row>
            <hr/>
            <Flex gap={'small'} wrap={'wrap'}>
                {Array.isArray(cities) && cities.length > 0 ? (
                        cities.map(city => (
                            <Card
                                hoverable
                                style={{
                                    width: '15%',
                                    margin: '0.5rem'
                                }}
                                cover={<img alt="example" src={imgUrl+city.thumbnail}/>}
                                onClick={() => selectCity(city.id)}
                            >
                                <Meta title={city.name}/>
                            </Card>
                        ))
                ) : (
                    <Card
                        hoverable
                        style={{
                            width: '15%',
                            margin: '0.5rem'
                        }}
                    >
                        <Meta title='No City'/>
                    </Card>
                )}
            </Flex>
        </div>
    )
}

export default SelectCity;