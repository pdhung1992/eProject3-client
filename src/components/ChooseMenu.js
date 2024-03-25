import {
    Badge,
    Card,
    Checkbox,
    Col,
    Collapse,
    Flex,
    InputNumber,
    Layout,
    Modal,
    Rate,
    Row,
    Space,
    Tag
} from "antd";
import {Content} from "antd/es/layout/layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot, faUserGroup, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import Sider from "antd/es/layout/Sider";
import React, {useEffect, useState} from "react";
import restaurantServices from "../services/restaurant-service";
import foodServices from "../services/food-service";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import tableTypeServices from "../services/tabletype-service";
import comboServices from "../services/combo-service";


const ChooseMenu = ({current, setCurrent, selectedRestaurant}) => {

    const imgUrl = 'http://localhost:8888/api/images/';

    const panelStyle = {
        margin: 0,
        background: '#f5f5f5',
        border: 'none',
    };

    const tagColors = {
        New: 'green',
        Favorite: 'blue',
        Signature: 'purple',
    }

    const [restaurant, setRestaurant] = useState({});
    const [tableTypes, setTableTypes] = useState([]);

    const fetchRestaurant = async (id) => {
        const res = await restaurantServices.getRestaurantDetails(id);
        setRestaurant(res);
    }

    const fetchTableTypes = async (id) => {
        const res = await tableTypeServices.getTableTypesOfRestaurant(id);
        setTableTypes(res);
    }

    useEffect(() => {
        fetchRestaurant(selectedRestaurant);
        fetchTableTypes(selectedRestaurant);
    }, [])


    const [selectedTableType, setSelectedTableType] = useState({});

    const handleSelectFilter = async (id) => {
        const type = await tableTypeServices.getTableTypeDetails(id);
        setSelectedTableType(type);
        setSelectedFoods([]);
    }

    const [combos, setCombos] = useState([]);
    const [selectedCombo, setSelectedCombo] = useState('');
    const [comboDetails, setComboDetails] = useState([]);

    const fetchCombos = async (resId, typeId) => {
        const res = await comboServices.getComboByTableType(resId, typeId);
        setCombos(res);
    }

    useEffect(() => {
        fetchCombos(selectedRestaurant, selectedTableType.id)
    }, [selectedTableType]);
    const fetchComboDetails = async (id) => {
        const res = await comboServices.getComboDetails(id);
        setComboDetails(res);
    }


    const [openStarter, setOpenStarter] = useState(false);
    const [openMain, setOpenMain] = useState(false);
    const [openDessert, setOpenDessert] = useState(false);
    const [openBeverage, setOpenBeverage] = useState(false);

    const [starters, setStarters] = useState([]);
    const [mains, setMains] = useState([]);
    const [desserts, setDesserts] = useState([]);
    const [beverages, setBeverages] = useState([]);

    const [selectedFoods, setSelectedFoods] = useState([]);
    const [selectedStarters, setSelectedStarters] = useState([]);
    const [selectedMains, setSelectedMains] = useState([]);
    const [selectedDesserts, setSelectedDesserts] = useState([]);
    const [selectedBeverages, setSelectedBeverages] = useState([]);

    useEffect(() => {
        fetchComboDetails(selectedCombo)
    }, [selectedCombo])
    const handleComboSelect = (id) => {
        setSelectedCombo(id);
        if (comboDetails.foods && comboDetails.foods.length > 0) {
            setSelectedFoods(comboDetails.foods);
        }
    }
    useEffect(() => {
        if (comboDetails.foods && comboDetails.foods.length > 0) {
            setSelectedFoods(comboDetails.foods);
        }
    }, [comboDetails])

    const showStarterModal = async () => {
        const starters = await foodServices.getFoodByTypeAndServe(selectedRestaurant, 1, selectedTableType.id);
        setStarters(starters);
        setOpenStarter(true);
    };

    const handleSelectStarter = () => {
        const selectedStarters = [];
        starters.forEach(starter => {
            const checkbox = document.getElementById(`starterCheckbox_${starter.id}`);
            if (checkbox && checkbox.checked) {
                selectedStarters.push(starter);
            }
        });
        setSelectedStarters(selectedStarters);
        setSelectedFoods(prevFoods => [
            ...prevFoods, ...selectedStarters
        ]);

        setOpenStarter(false);
    };

    const handleStarterCancel = () => {
        setOpenStarter(false);
    };

    const showMainModal = async () => {
        const mains = await foodServices.getFoodByTypeAndServe(selectedRestaurant, 2, selectedTableType.id);
        setMains(mains)
        setOpenMain(true);
    };

    const handleSelectMain = () => {
        const selectedMains = [];
        mains.forEach(main => {
            const checkbox = document.getElementById(`mainCheckbox_${main.id}`);
            if (checkbox && checkbox.checked) {
                selectedMains.push(main);
            }
        });
        setSelectedMains(selectedMains);
        setSelectedFoods(prevFoods => [
            ...prevFoods, ...selectedMains
        ]);

        setOpenMain(false);
    };

    const handleMainCancel = () => {
        setOpenMain(false);
    };

    const showDessertModal = async () => {
        const desserts = await foodServices.getFoodByTypeAndServe(selectedRestaurant, 3, selectedTableType.id);
        setDesserts(desserts);
        setOpenDessert(true);
    };

    const handleSelectDessert = () => {
        const selectedDesserts = [];
        desserts.forEach(dessert => {
            const checkbox = document.getElementById(`dessertCheckbox_${dessert.id}`);
            if (checkbox && checkbox.checked) {
                selectedDesserts.push(dessert);
            }
        });
        setSelectedDesserts(selectedDesserts);
        setSelectedFoods(prevFoods => [
            ...prevFoods, ...selectedDesserts
        ]);

        setOpenDessert(false);
    };

    const handleDessertCancel = () => {
        setOpenDessert(false);
    };

    const showBeverageModal = async () => {
        const beverages = await foodServices.getFoodByTypeAndServe(selectedRestaurant, 4, selectedTableType.id);
        setBeverages(beverages);
        setOpenBeverage(true);
    };

    const handleSelectBeverage = () => {
        const selectedBeverages = [];
        beverages.forEach(beverage => {
            const checkbox = document.getElementById(`beverageCheckbox_${beverage.id}`);
            if (checkbox && checkbox.checked) {
                selectedBeverages.push(beverage);
            }
        });
        setSelectedBeverages(selectedBeverages);
        setSelectedFoods(prevFoods => [
            ...prevFoods, ...selectedBeverages
        ]);

        setOpenBeverage(false);
    };

    const handleFoodRemove = (rId) => {
        const updateFoods = selectedFoods.filter(food => food.id !== rId);
        setSelectedFoods(updateFoods);
    }

    useEffect(() => {
        const foodIds = selectedFoods.map(food => food.id);

        const updatedStarters = selectedStarters.filter(starter => foodIds.includes(starter.id));
        setSelectedStarters(updatedStarters);
        const updatedMains = selectedMains.filter(main => foodIds.includes(main.id));
        setSelectedMains(updatedMains);
        const updatedDesserts = selectedDesserts.filter(dessert => foodIds.includes(dessert.id));
        setSelectedDesserts(updatedDesserts);
        const updatedBeverages = selectedBeverages.filter(beverage => foodIds.includes(beverage.id));
        setSelectedBeverages(updatedBeverages);
    }, [selectedFoods]);

    const handleBeverageCancel = () => {
        setOpenBeverage(false);
    };

    const starterCount = selectedStarters.length;
    const mainCount = selectedMains.length;
    const dessertCount = selectedDesserts.length;
    const beverageCount = selectedBeverages.length;

    const [subTotal, setSubTotal] = useState(0);

    const calcSubTotal = () => {
        let sub = 0;
        selectedFoods.forEach(food => {
            sub += food.price
        });
        if (Object.keys(comboDetails).length !== 0 && comboDetails.foods.length > 0){
            setSubTotal(Math.ceil(sub * (100 - comboDetails.discountRate) / 100))
        }else {
            setSubTotal(sub);
        }
    }

    useEffect(() => {
        calcSubTotal();
    }, [selectedFoods])

    const [minimumTable, setMinimumTable] = useState(0);
    const [totalTable, setTotalTable] = useState(minimumTable);

    const calcMinimumTable = () => {
        if (Object.keys(selectedTableType).length !== 0 && selectedTableType.value !== 0) {
            const min = Math.ceil(restaurant.minimumDelivery / selectedTableType.value);
            setMinimumTable(min);
            setTotalTable(min);
        } else {
            setMinimumTable(0);
            setTotalTable(0);
        }
    };

    useEffect(() => {
        calcMinimumTable();
    }, [selectedTableType]);


    const onChangeTable = (value) => {
        setTotalTable(value);
    }

    const totalAmount = totalTable * subTotal;

    const handleOptionClick = (panelKey) => {
        console.log('Label of panel', panelKey, 'clicked!');
        setSelectedFoods([]);
        setSubTotal(0);
        setComboDetails({});
    };

    const chooseOptions = [
        {
            key: 'combo',
            label: 'Choose An Instant Combo',
            style: panelStyle,
            children:
                <div>
                    {Object.keys(selectedTableType).length !== 0 && selectedTableType.value !== 0 ? (
                        <Flex gap={'small'} wrap={'wrap'}>
                            {Array.isArray(combos) && combos.length > 0 ? (
                                combos.map(combo => (
                                    <Card hoverable className={'restaurant-card'}>
                                        <Row>
                                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                                <div className={'restaurant-thumb'}>
                                                    {combo.tag !== 'None' ? (
                                                        <Badge.Ribbon text={combo.tag} placement={'start'}
                                                                      color={'#1da1f2'}>
                                                            <img src={`${imgUrl}${combo.thumbnail}`}
                                                                 alt="starter" className={'img-fluid'}/>
                                                        </Badge.Ribbon>
                                                    ) : (
                                                        <img src={`${imgUrl}${combo.thumbnail}`}
                                                             alt="starter" className={'img-fluid'}/>
                                                    )}
                                                </div>
                                            </Col>
                                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}
                                                 className={'text-start restaurant-desc d-flex align-items-center justify-content-start'}>
                                                <Space direction={"vertical"} size={'middle'}>
                                                    <h5>{combo.name}</h5>
                                                    <h6><FontAwesomeIcon icon={faUserGroup}/> {combo.serve}</h6>
                                                    <h6>$ 100</h6>
                                                    <button className={'btn btn-primary'} onClick={() => handleComboSelect(combo.id)}>Select</button>
                                                </Space>
                                            </Col>
                                        </Row>
                                    </Card>
                                ))
                            ) : (
                                <div>
                                    <h4 className={'text-danger px-lg-5'} style={{fontStyle: "italic"}}>No available combo.</h4>
                                </div>
                            )}
                        </Flex>
                    ) : (
                        <div>
                            <h4 className={'text-danger px-lg-5'} style={{fontStyle: "italic"}}>Please select a Table type to display Combos</h4>
                        </div>
                    )}
                </div>
        },
        {
            key: 'manual',
            label: 'Create Your Menu',
            style: panelStyle,
            children:
                <div>
                    {Object.keys(selectedTableType).length !== 0 && selectedTableType.value !== 0 ? (
                        <div>
                            <div className={'d-flex justify-content-center'}>
                                <Space direction={'vertical'}>
                                    <h4 className={'text-center'}>Starter</h4>
                                    <Flex gap={'small'} wrap={'wrap'}>
                                        {Array.isArray(selectedStarters) && selectedStarters.length > 0 ? (
                                            selectedStarters.map(starter => (
                                                <Card hoverable className={'restaurant-card'}>
                                                    <Row>
                                                        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                                            <div className={'restaurant-thumb'}>
                                                                {starter.tag !== 'None' ? (
                                                                    <Badge.Ribbon text={starter.tag} placement={'start'}
                                                                                  color={'#1da1f2'}>
                                                                        <img src={`${imgUrl}${starter.thumbnail}`}
                                                                             alt="starter" className={'img-fluid'}/>
                                                                    </Badge.Ribbon>
                                                                ) : (
                                                                    <img src={`${imgUrl}${starter.thumbnail}`}
                                                                         alt="starter" className={'img-fluid'}/>
                                                                )}
                                                            </div>
                                                        </Col>
                                                        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}
                                                             className={'text-start restaurant-desc d-flex justify-content-start align-items-center'}>
                                                            <Space direction={"vertical"} size={'small'}>
                                                                <h5>{starter.name}</h5>
                                                                <h6>$ {starter.price} ({starter.serve} pax)</h6>
                                                                {/*<InputNumber min={1}*/}
                                                                {/*             max={10}*/}
                                                                {/*             defaultValue={1}*/}
                                                                {/*             formatter={(value) => `${value} dish(es)`}*/}
                                                                {/*             parser={(value) => value.replace('dishes', '')} />*/}
                                                                <button className={'btn btn-danger'}
                                                                        onClick={() => handleFoodRemove(starter.id)}>
                                                                    <FontAwesomeIcon icon={faTrashCan}/> Remove
                                                                </button>
                                                            </Space>
                                                        </Col>
                                                    </Row>
                                                </Card>
                                            ))
                                        ) : (
                                            <h5 className={'text-danger'} style={{fontStyle: 'italic'}}>No selected
                                                starters.</h5>
                                        )}
                                    </Flex>
                                    <div className={'d-flex justify-content-center'}>
                                        <button className={'btn btn-primary'} onClick={showStarterModal}>Select
                                            Starters
                                        </button>
                                    </div>
                                </Space>
                            </div>
                            <hr/>
                            <div className={'d-flex justify-content-center'}>
                                <Space direction={'vertical'}>
                                    <h4 className={'text-center'}>Mains</h4>
                                    <Flex gap={'small'} wrap={'wrap'}>
                                        {Array.isArray(selectedMains) && selectedMains.length > 0 ? (
                                            selectedMains.map(main => (
                                                <Card hoverable className={'restaurant-card'}>
                                                    <Row>
                                                        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                                            <div className={'restaurant-thumb'}>
                                                                {main.tag !== 'None' ? (
                                                                    <Badge.Ribbon text={main.tag} placement={'start'}
                                                                                  color={'#1da1f2'}>
                                                                        <img src={`${imgUrl}${main.thumbnail}`}
                                                                             alt="starter" className={'img-fluid'}/>
                                                                    </Badge.Ribbon>
                                                                ) : (
                                                                    <img src={`${imgUrl}${main.thumbnail}`}
                                                                         alt="starter" className={'img-fluid'}/>
                                                                )}
                                                            </div>
                                                        </Col>
                                                        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}
                                                             className={'text-start restaurant-desc d-flex justify-content-start align-items-center'}>
                                                            <Space direction={"vertical"} size={'small'}>
                                                                <h5>{main.name}</h5>
                                                                <h6>$ {main.price} ({main.serve} pax)</h6>
                                                                {/*<InputNumber min={1}*/}
                                                                {/*             max={10}*/}
                                                                {/*             defaultValue={1}*/}
                                                                {/*             formatter={(value) => `${value} dish(es)`}*/}
                                                                {/*             parser={(value) => value.replace('dishes', '')} />*/}
                                                                <button className={'btn btn-danger'}
                                                                        onClick={() => handleFoodRemove(main.id)}>
                                                                    <FontAwesomeIcon icon={faTrashCan}/> Remove
                                                                </button>
                                                            </Space>
                                                        </Col>
                                                    </Row>
                                                </Card>
                                            ))
                                        ) : (
                                            <h5 className={'text-danger'} style={{fontStyle: 'italic'}}>No selected
                                                mains.</h5>
                                        )}
                                    </Flex>
                                    <div className={'d-flex justify-content-center'}>
                                        <button className={'btn btn-primary'} onClick={showMainModal}>Select Mains
                                        </button>
                                    </div>
                                </Space>
                            </div>
                            <hr/>
                            <div className={'d-flex justify-content-center'}>
                                <Space direction={'vertical'}>
                                    <h4 className={'text-center'}>Desserts</h4>
                                    <Flex gap={'small'} wrap={'wrap'}>
                                        {Array.isArray(selectedDesserts) && selectedDesserts.length > 0 ? (
                                            selectedDesserts.map(dessert => (
                                                <Card hoverable className={'restaurant-card'}>
                                                    <Row>
                                                        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                                            <div className={'restaurant-thumb'}>
                                                                {dessert.tag !== 'None' ? (
                                                                    <Badge.Ribbon text={dessert.tag} placement={'start'}
                                                                                  color={'#1da1f2'}>
                                                                        <img src={`${imgUrl}${dessert.thumbnail}`}
                                                                             alt="starter" className={'img-fluid'}/>
                                                                    </Badge.Ribbon>
                                                                ) : (
                                                                    <img src={`${imgUrl}${dessert.thumbnail}`}
                                                                         alt="starter" className={'img-fluid'}/>
                                                                )}
                                                            </div>
                                                        </Col>
                                                        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}
                                                             className={'text-start restaurant-desc d-flex justify-content-start align-items-center'}>
                                                            <Space direction={"vertical"} size={'small'}>
                                                                <h5>{dessert.name}</h5>
                                                                <h6>$ {dessert.price} ({dessert.serve} pax)</h6>
                                                                {/*<InputNumber min={1}*/}
                                                                {/*             max={10}*/}
                                                                {/*             defaultValue={1}*/}
                                                                {/*             formatter={(value) => `${value} dish(es)`}*/}
                                                                {/*             parser={(value) => value.replace('dishes', '')} />*/}
                                                                <button className={'btn btn-danger'}
                                                                        onClick={() => handleFoodRemove(dessert.id)}>
                                                                    <FontAwesomeIcon icon={faTrashCan}/> Remove
                                                                </button>
                                                            </Space>
                                                        </Col>
                                                    </Row>
                                                </Card>
                                            ))
                                        ) : (
                                            <h5 className={'text-danger'} style={{fontStyle: 'italic'}}>No selected
                                                desserts.</h5>
                                        )}
                                    </Flex>
                                    <div className={'d-flex justify-content-center'}>
                                        <button className={'btn btn-primary'} onClick={showDessertModal}>Select
                                            Desserts
                                        </button>
                                    </div>
                                </Space>
                            </div>
                            <hr/>
                            <div className={'d-flex justify-content-center'}>
                                <Space direction={'vertical'}>
                                    <h4 className={'text-center'}>Beverages</h4>
                                    <Flex gap={'small'} wrap={'wrap'}>
                                        {Array.isArray(selectedBeverages) && selectedBeverages.length > 0 ? (
                                            selectedBeverages.map(beverage => (
                                                <Card hoverable className={'restaurant-card'}>
                                                    <Row>
                                                        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                                            <div className={'restaurant-thumb'}>
                                                                {beverage.tag !== 'None' ? (
                                                                    <Badge.Ribbon text={beverage.tag}
                                                                                  placement={'start'} color={'#1da1f2'}>
                                                                        <img src={`${imgUrl}${beverage.thumbnail}`}
                                                                             alt="starter" className={'img-fluid'}/>
                                                                    </Badge.Ribbon>
                                                                ) : (
                                                                    <img src={`${imgUrl}${beverage.thumbnail}`}
                                                                         alt="starter" className={'img-fluid'}/>
                                                                )}
                                                            </div>
                                                        </Col>
                                                        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}
                                                             className={'text-start restaurant-desc d-flex justify-content-start align-items-center'}>
                                                            <Space direction={"vertical"} size={'small'}>
                                                                <h5>{beverage.name}</h5>
                                                                <h6>$ {beverage.price} ({beverage.serve} pax)</h6>
                                                                {/*<InputNumber min={1}*/}
                                                                {/*             max={10}*/}
                                                                {/*             defaultValue={1}*/}
                                                                {/*             formatter={(value) => `${value} dish(es)`}*/}
                                                                {/*             parser={(value) => value.replace('dishes', '')} />*/}
                                                                <button className={'btn btn-danger'}
                                                                        onClick={() => handleFoodRemove(beverage.id)}>
                                                                    <FontAwesomeIcon icon={faTrashCan}/> Remove
                                                                </button>
                                                            </Space>
                                                        </Col>
                                                    </Row>
                                                </Card>
                                            ))
                                        ) : (
                                            <h5 className={'text-danger'} style={{fontStyle: 'italic'}}>No selected
                                                beverages.</h5>
                                        )}
                                    </Flex>
                                    <div className={'d-flex justify-content-center'}>
                                        <button className={'btn btn-primary'} onClick={showBeverageModal}>Select
                                            Beverages
                                        </button>
                                    </div>
                                </Space>
                            </div>
                        </div>
                    ) : (
                        <h4 className={'text-danger px-lg-5'} style={{fontStyle: "italic"}}>Please select a Table type to display menu.</h4>
                    )}
                    <Modal title="Select Starters"
                           open={openStarter}
                           onCancel={handleStarterCancel}
                           footer={[
                               <Space>
                                   <button key="back" className={'btn btn-light'} onClick={handleStarterCancel}>
                                       Cancel
                                   </button>
                                   ,
                                   <button className={'btn btn-primary'} type={"submit"} onClick={handleSelectStarter}>
                                       Done
                                   </button>,
                               </Space>
                           ]}
                    >
                        <Space direction={'vertical'} style={{overflow: "auto", maxHeight: '60vh'}}>
                            {Array.isArray(starters) && starters.length > 0 ? (
                                starters.map(starter => (
                                    <Checkbox key={starter.id} id={`starterCheckbox_${starter.id}`}>
                                        <Row>
                                            <Col span={5}>
                                                <img src={`${imgUrl}${starter.thumbnail}`} alt=""
                                                     className={'img-fluid'}/>
                                            </Col>
                                            <Col span={19}
                                                 className={'d-flex justify-content-start align-items-center px-3'}>
                                                <div>
                                                    <h5>{starter.name}</h5>
                                                    <h6>
                                                        {starter.tag !== 'None' ? (<Tag
                                                            color={tagColors[starter.tag]}>{starter.tag}</Tag>) : (<></>)}
                                                        $ {starter.price} ({starter.serve} pax)
                                                    </h6>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Checkbox>
                                ))
                            ) : (<h5>No starter.</h5>)}
                        </Space>
                    </Modal>
                    <Modal title="Select Mains"
                           open={openMain}
                           onCancel={handleMainCancel}
                           footer={[
                               <Space>
                                   <button key="back" className={'btn btn-light'} onClick={handleMainCancel}>
                                       Cancel
                                   </button>
                                   ,
                                   <button className={'btn btn-primary'} type={"submit"} onClick={handleSelectMain}>
                                       Done
                                   </button>,
                               </Space>
                           ]}
                    >
                        <Space direction={'vertical'} style={{overflow: "auto", maxHeight: '60vh'}}>
                            {Array.isArray(mains) && mains.length > 0 ? (
                                mains.map(main => (
                                    <Checkbox key={main.id} id={`mainCheckbox_${main.id}`}>
                                        <Row>
                                            <Col span={5}>
                                                <img src={`${imgUrl}${main.thumbnail}`} alt="" className={'img-fluid'}/>
                                            </Col>
                                            <Col span={19}
                                                 className={'d-flex justify-content-start align-items-center px-3'}>
                                                <div>
                                                    <h5>{main.name}</h5>
                                                    <h6>
                                                        {main.tag !== 'None' ? (<Tag
                                                            color={tagColors[main.tag]}>{main.tag}</Tag>) : (<></>)}
                                                        $ {main.price} ({main.serve} pax)
                                                    </h6>

                                                </div>
                                            </Col>
                                        </Row>
                                    </Checkbox>
                                ))
                            ) : (<h5>No main.</h5>)}
                        </Space>
                    </Modal>
                    <Modal title="Select Desserts"
                           open={openDessert}
                           onCancel={handleDessertCancel}
                           footer={[
                               <Space>
                                   <button key="back" className={'btn btn-light'} onClick={handleDessertCancel}>
                                       Cancel
                                   </button>
                                   ,
                                   <button className={'btn btn-primary'} type={"submit"} onClick={handleSelectDessert}>
                                       Done
                                   </button>,
                               </Space>
                           ]}
                    >
                        <Space direction={'vertical'} style={{overflow: "auto", maxHeight: '60vh'}}>
                            {Array.isArray(desserts) && desserts.length > 0 ? (
                                desserts.map(dessert => (
                                    <Checkbox key={dessert.id} id={`dessertCheckbox_${dessert.id}`}>
                                        <Row>
                                            <Col span={5}>
                                                <img src={`${imgUrl}${dessert.thumbnail}`} alt=""
                                                     className={'img-fluid'}/>
                                            </Col>
                                            <Col span={19}
                                                 className={'d-flex justify-content-start align-items-center px-3'}>
                                                <div>
                                                    <h5>{dessert.name}</h5>
                                                    <h6>
                                                        {dessert.tag !== 'None' ? (<Tag
                                                            color={tagColors[dessert.tag]}>{dessert.tag}</Tag>) : (<></>)}
                                                        $ {dessert.price} ({dessert.serve} pax)
                                                    </h6>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Checkbox>
                                ))
                            ) : (<h5>No dessert.</h5>)}
                        </Space>
                    </Modal>
                    <Modal title="Select Beverages"
                           open={openBeverage}
                           onCancel={handleBeverageCancel}
                           footer={[
                               <Space>
                                   <button key="back" className={'btn btn-light'} onClick={handleBeverageCancel}>
                                       Cancel
                                   </button>
                                   ,
                                   <button className={'btn btn-primary'} type={"submit"} onClick={handleSelectBeverage}>
                                       Done
                                   </button>,
                               </Space>
                           ]}
                    >
                        <Space direction={'vertical'} style={{overflow: "auto", maxHeight: '60vh'}}>
                            {Array.isArray(beverages) && beverages.length > 0 ? (
                                beverages.map(beverage => (
                                    <Checkbox key={beverage.id} id={`beverageCheckbox_${beverage.id}`}>
                                        <Row>
                                            <Col span={5}>
                                                <img src={`${imgUrl}${beverage.thumbnail}`} alt=""
                                                     className={'img-fluid'}/>
                                            </Col>
                                            <Col span={19}
                                                 className={'d-flex justify-content-start align-items-center px-3'}>
                                                <div>
                                                    <h5>{beverage.name}</h5>
                                                    <h6>
                                                        {beverage.tag !== 'None' ? (<Tag
                                                            color={tagColors[beverage.tag]}>{beverage.tag}</Tag>) : (<></>)}
                                                        $ {beverage.price} ({beverage.serve} pax)
                                                    </h6>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Checkbox>
                                ))
                            ) : (<h5>No beverage.</h5>)}
                        </Space>
                    </Modal>
                </div>
        },

    ];


    return (
        <div className={'order-content text-start'}>
            <Layout>
                <Content>
                    <div className={'restaurant-detail'}>
                        <div className={'restaurant-banner'}>
                            <img src={`${imgUrl}${restaurant.banner}`} alt="" className={'img-fluid'}/>
                        </div>
                        <h2 className={'py-2'}>{restaurant.name}</h2>
                        <Space>
                            <span><Rate disabled value={5}/> (105 ratings)</span>
                            <Tag color={'red'} className={'btn btn-sm'}>{restaurant.category}</Tag>
                            <span><FontAwesomeIcon icon={faLocationDot}/> {restaurant.district} Dist.</span>
                        </Space>
                        <hr/>
                        <h4>A table will serve for: </h4>
                        <div>
                            <Flex gap={'small'} wrap={'wrap'}>
                                {Array.isArray(tableTypes) && tableTypes.length > 0 ? (
                                    tableTypes.map(type => (
                                        <Card hoverable
                                              className={selectedTableType.id === type.id ? 'restaurant-filter restaurant-filter-selected' : 'restaurant-filter'}
                                              onClick={() => handleSelectFilter(type.id)}>
                                            <Row>
                                                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                                    <div className={'restaurant-thumb'}>
                                                        <img src="/img/people-group.png" alt=""
                                                             className={'img-fluid'}/>
                                                    </div>
                                                </Col>
                                                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}
                                                     className={'text-start restaurant-desc'}>
                                                    <h5 className={'d-flex align-items-center justify-content-center h-100'}>{type.name}</h5>
                                                </Col>
                                            </Row>
                                        </Card>
                                    ))
                                ) : (
                                    <Card hoverable className={'restaurant-filter'}>
                                        <Row>
                                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                                <div className={'restaurant-thumb'}>
                                                    <img src="/img/people-group.png" alt=""
                                                         className={'img-fluid'}/>
                                                </div>
                                            </Col>
                                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}
                                                 className={'text-start restaurant-desc'}>
                                                <h5 className={'d-flex align-items-center justify-content-center h-100'}>No Table type available</h5>
                                            </Col>
                                        </Row>
                                    </Card>
                                )}
                            </Flex>,
                        </div>
                        <Collapse
                            accordion
                            bordered={false}
                            className={'menu-collapse'}
                            defaultActiveKey={['combo']}
                        >
                            {chooseOptions.map(option => (
                                <CollapsePanel
                                    key={option.key}
                                    header={
                                        <span onClick={() => handleOptionClick(option.key)}>
                                            {option.label}
                                         </span>
                                    }
                                    style={option.style}
                                >
                                    {option.children}
                                </CollapsePanel>
                            ))}
                        </Collapse>
                        <hr/>
                        <h5>About {restaurant.name}</h5>
                        <p>On OnlineCaterer.vn since {restaurant.joinDate}</p>
                        <p>Descriptions: {restaurant.description}</p>
                        <h6>Address</h6>
                        <p>{restaurant.address}, {restaurant.district} Dist., {restaurant.city}</p>
                        <h6>Delivery Hours</h6>
                        <p>{restaurant.deliveryHours}</p>
                        <h6>Delivery Minimum</h6>
                        <p>From {restaurant.minimumDelivery} persons</p>
                    </div>
                </Content>
                <Sider width={'25%'} style={{border: 'none'}}>
                    <div className="order-cart">
                        <div className="cart-header">
                            <h4>Menu details</h4>
                            <hr/>
                        </div>
                        <div className="cart-content">
                        <Space direction={"vertical"} style={{width: '100%'}}>
                                {Array.isArray(selectedFoods) && selectedFoods.length > 0 ? (
                                    <div>
                                        {starterCount !== 0 || mainCount !== 0 || dessertCount !== 0 || beverageCount !== 0 ? (
                                            <div>
                                                <h5 className={'text-center'}>{starterCount} Starters
                                                    + {mainCount} Mains + {dessertCount} Desserts
                                                    + {beverageCount} Beverages</h5>
                                                <hr width={'50%'} style={{marginLeft: '25%'}}/>
                                            </div>
                                        ) : null}

                                        {selectedFoods.map(food => (
                                            <Row>
                                            {/*<Col span={4} className={'d-flex align-items-center justify-content-center'}>1 X</Col>*/}
                                                <Col span={20}>
                                                    <h6>{food.name}</h6>
                                                    <p>$ {food.price} ({food.serve})</p>
                                                </Col>
                                                <Col span={4} className={'d-flex align-items-center justify-content-center'}>
                                                    <button className={'btn btn-cart-del'} onClick={() => handleFoodRemove(food.id)}><FontAwesomeIcon icon={faTrashCan}/></button>
                                                </Col>
                                            </Row>
                                        ))}
                                    </div>
                                ) : (
                                    <h6>No food.</h6>
                                )}
                            </Space>
                        </div>
                        <div className={'cart-footer'}>
                            <h5 className={'text-end'}>Sub Total: $ {subTotal}</h5>
                            <hr/>
                            <Row className={'d-flex align-items-center'}>
                                <Col span={16}>
                                    <h5>Number of tables: </h5>
                                </Col>
                                <Col span={8}>
                                    <InputNumber min={minimumTable} value={totalTable} onChange={onChangeTable} size={'large'} />
                                </Col>
                            </Row>
                            <h4>Total: $ {totalAmount}</h4>
                            <button className={'btn btn-primary'}>Check Out</button>
                        </div>
                    </div>
                </Sider>
            </Layout>
        </div>
    )
}

export default ChooseMenu;