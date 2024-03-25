
import '../assets/css/homePage.css'
import {
    Button,
    Steps,
} from "antd";
import React, {useEffect, useState} from "react";
import SelectCity from "../components/SelectCity";
import ChooseRestaurant from "../components/ChooseRestaurant";
import ChooseMenu from "../components/ChooseMenu";
import DeliveryInfo from "../components/DeliveryInfo";
import districtServices from "../services/district-service";
import cityServices from "../services/city-service";
import categoryServices from "../services/category-service";


const Order = () => {

    const [selectedCity, setSelectCity] = useState(null);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [current, setCurrent] = useState(0);
    const colors = ['red', 'volcano', 'orange', 'gold', 'yellow', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple', 'magenta'];

    const [city, setCity] = useState({})
    const [districts, setDistricts] = useState([]);
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const fetchDistricts = async (selectedCity) => {
            const res = await districtServices.getDistrictByCity(selectedCity);
            setDistricts(res);
        };
        const fetchCity = async (selectedCity) => {
            const res = await cityServices.getCityDetails(selectedCity);
            setCity(res);
        };
        const fetchCategories = async () => {
            const res = await categoryServices.getAllCategories();
            setCategories(res);
        }

        fetchDistricts(selectedCity);
        fetchCity(selectedCity);
        fetchCategories();
    }, [selectedCity])



    const steps = [
        {
            title: 'Select Your City',
            content: (
                <SelectCity
                    setSelectedCity={setSelectCity}
                    current={current}
                    setCurrent={setCurrent}
                />
            ),
        },
        {
            title: 'Choose Restaurant',
            content: (
                <ChooseRestaurant
                    cityId={selectedCity}
                    city={city}
                    districts={districts}
                    categories={categories}
                    colors={colors}
                    setSelectedRestaurant={setSelectedRestaurant}
                    current={current}
                    setCurrent={setCurrent}
                />
            ),
        },
        {
            title: 'Choose Menu',
            content: (
                <ChooseMenu
                    current={current}
                    setCurrent={setCurrent}
                    selectedRestaurant={selectedRestaurant}
                />
            ),
        },
        {
            title: 'Delivery info',
            content: (
                <DeliveryInfo/>
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