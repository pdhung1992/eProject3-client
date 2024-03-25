import apiServices from "./api";

const getFoodByTypeAndServe = async (rId, tId, sId) => {
    try {
        const url = `/foods/restaurant/${rId}/type/${tId}/serve/${sId}`;
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

const foodServices = {
    getFoodByTypeAndServe
}

export default foodServices;