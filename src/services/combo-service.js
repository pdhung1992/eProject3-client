import apiServices from "./api";

const getComboByTableType = async (rId, sId) => {
    try {
        const url = `/combos/restaurant/${rId}/serve/${sId}`;
        const res = await apiServices.get(url);
        return res.data;
    }catch (error){
        if (error.response) {
            return error.response.data;
        } else if (error.request) {
            return 'No response from server';
        } else {
            return 'An error occurred';
        }
    }
}

const getComboDetails = async (id) => {
    try {
        const url = `/combos/details/${id}`;
        const res = await apiServices.get(url);
        return res.data;
    }catch (error){
        if (error.response) {
            return error.response.data;
        } else if (error.request) {
            return 'No response from server';
        } else {
            return 'An error occurred';
        }
    }
}

const comboServices = {
    getComboByTableType,
    getComboDetails
}

export default comboServices;