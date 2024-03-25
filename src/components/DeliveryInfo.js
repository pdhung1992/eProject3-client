import {Col, DatePicker, Input, InputNumber, Row, Space} from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";


const DeliveryInfo = () => {


    const onChangeDate = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <div className={'order-content text-start'}>
            <Row>
                <Col span={12}>
                    <Space direction={'vertical'} style={{width: '100%', padding: '0 5%'}}>
                        <Row>
                            <Col span={12} style={{paddingRight: '1rem'}}>
                                <h4>Event name: </h4>
                                <Input type="text" size={'large'} placeholder={'Event name...'}/>
                            </Col>
                            <Col span={12} style={{paddingLeft: '1rem'}}>
                                <h4>Delivery date: </h4>
                                <DatePicker onChange={onChangeDate} size={'large'}/>
                            </Col>
                        </Row>
                        <h4>Delivery address: </h4>
                        <Input type={'text'} size={'large'} placeholder={'Delivery address...'}/>
                        <h4>Contact person: </h4>
                        <Row>
                            <Col span={12} style={{paddingRight: '1rem'}}>
                                <Input type={'text'} size={"large"} placeholder={'Name...'}/>
                            </Col>
                            <Col span={12} style={{paddingLeft: '1rem'}}>
                                <Input type={'text'} size={"large"} placeholder={'Phone number...'}/>
                            </Col>
                        </Row>
                        <h4>Additional requirement: </h4>
                        <TextArea rows={5}/>
                    </Space>
                </Col>
                <Col span={12}>
                    <div className={'d-flex justify-content-center align-items-center'}>
                        <img src="/img/delivery-form.png" alt="" className={'img-fluid'} width={'80%'}/>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default DeliveryInfo;